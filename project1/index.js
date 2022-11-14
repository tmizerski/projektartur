const express = require('express');
const cors = require('cors');
const oracledb = require('oracledb');
const config = require('./config');
const queryBuilder = require('./services/queryBuilder');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
require('dotenv').config();


const PORT = process.env.PORT || 4000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true,
})
);


oracledb.initOracleClient(config.lib);
pool = oracledb.createPool(config.db);


let filterModel;

const users = [
    {
        username: "admin",
        password: "admin"
    },
    {
        username: "tymek",
        password: "123456"
    },
]

async function query () {
    let result, pool;
    try {
        let connection;
        pool = await oracledb.createPool(config.db);
        try {
            connection = await pool.getConnection();
            connection ? console.log("ok") : console.log("nie polaczono");
            result = await connection.execute(` select numer, m_symbol, to_Char(data_spz_oper, 'MM/DD/YYYY'), wart_net_pln, ilosc_jme from sp_sprzedaz  order by data_spz_oper desc  OFFSET 0 ROWS FETCH NEXT 25 ROWS ONLY`);
            return result;

        }
        catch (err) {
            throw (err);
        } finally {
            if (connection) {
                try {
                    await connection.close();
                } catch (err) {
                    throw (err);
                }
            }
        }
    } catch (err) {
        console.error(err.message);
    } finally {
        await pool.close();
    }
}

async function queryFilter(filterModel) {
    let result, pool;
    try {
        let connection;
        pool = await oracledb.createPool(config.db);
        try {
            connection = await pool.getConnection();
            connection ? console.log("ok") : console.log("nie polaczono");
            result = await connection.execute(queryBuilder(filterModel));
            return result;

        }
        catch (err) {
            throw (err);
        } finally {
            if (connection) {
                try {
                    await connection.close();
                } catch (err) {
                    throw (err);
                }
            }
        }
    } catch (err) {
        console.error(err.message);
    } finally {
        await pool.close();
    }
}


app.get("/", (req, res) => {
query().then(resDB => {
    console.log("robię zapytanie2");
    res.send(resDB.rows);
    })
    .catch(err => {
        res.send(err)
    })
});

app.get('/searchFilter', (req, res) => {

    filterModel = {
        inputNumberFlag: req.query.inputNumberFlag,
        inputNumber: req.query.inputNumber,
        checkedSymbol: req.query.checkedSymbol,
        dateFrom: req.query.dateFrom,
        dateFromFlag: req.query.dateFromFlag,
        dateToFlag: req.query.dateToFlag,
        dateTo: req.query.dateTo,
        symbol: req.query.symbol,
        symbolFlag: req.query.symbolFlag,
        symbolSecond: req.query.symbolSecond,
        symbolSecondFlag: req.query.symbolSecondFlag,
        net: Number(req.query.net),
        netFlag: req.query.netFlag,
        netSecond: Number(req.query.netSecond),
        netSecondFlag: req.query.netSecondFlag,
        numberOfItems: Number(req.query.numberOfItems),
        numberOfItemsFlag: req.query.numberOfItemsFlag,
        numberOfItemsSecond: Number(req.query.numberOfItemsSecond),
        numberOfItemsSecondFlag: req.query.numberOfItemsSecondFlag,
        itemSelectedOption: req.query.itemSelectedOption,
        selectedOption: req.query.selectedOption,
        itemsOnPage: Number(req.query.itemsOnPage),
        offset: Number(req.query.offset),
    }
    console.log(filterModel)
    queryFilter(filterModel).then(resDB => {

        res.send(resDB.rows)
    })
        .catch(err =>{
            res.send(err);
        })
})

app.use('/login', async(req,res) => {
    const user = users.find( user => user.username === req.body.username);
    if(user === null) {
        return res.status(400).send('Cannot find user');
    }
    try {
        if( req.body.password === user.password ){
            const data = {
                username: user.username
            }

            const token = jwt.sign(data , process.env.JWT_SECRET_KEY);

            res.json({token: token});
        } else {

            res.send('Access not allow')
        }
    } catch {
        res.status(500).send();
    }
})



app.listen(PORT, function () {
    console.log('Server is running');
})

