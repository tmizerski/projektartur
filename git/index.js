const express = require('express');
// const oracledb = require('oracledb');
//
// const app = express();
// // odpalenie serwera
// const serv =  app.listen(4000, function () {
//     console.log('Server is running');
// })
//
//
// oracledb.initOracleClient({libDir: 'C:\\Users\\admin\\PhpstormProjects\\project_artur\\project1\\instantclient_21_7'});
//
//
//
//     const config = {
//         user: 'reader',
//         password: '12monika12',
//         connectString : "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=192.168.20.111)(PORT=1521))(CONNECT_DATA=(SERVER=DEDICATED)(SERVICE_NAME=smt)))"
//     }
//
//     async function getTable() {
//         let conn;
//         try {
//             conn = await oracledb.getConnection(config);
//             if(conn) {
//                 console.log("ok");
//                 const result = await conn.execute(
//                 'select * from sp_sprzedaz',[]
//             );
//              console.log(result.rows.length = 1);
//             }
//         }
//         catch (err) {
//             console.log(err);
//         }
//         finally {
//             if(conn){
//                await conn.close();
//             }
//         }
//     }
//
//     getTable();

const oracledb = require('oracledb');
const config = require('./config');
const queryBuilder = require('./services/queryBuilder');
const filterModel = require('./store/filterStore');

const app = express();
app.use(express.json());
app.use(express.urlencoded({
    extended: true,
})
);


oracledb.initOracleClient(config.lib);
pool = oracledb.createPool(config.db);


async function query () {
    let result, pool;
    try {
        let connection;
        pool = await oracledb.createPool(config.db);
        try {
            connection = await pool.getConnection();
            connection ? console.log("ok") : console.log("nie polaczono");
            result = await connection.execute(` select numer, m_symbol, data_spz_oper, wart_net_pln, ilosc_jme from sp_sprzedaz  order by data_spz_oper desc  OFFSET 5 ROWS FETCH NEXT 5 ROWS ONLY`);
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

async function queryFilter() {
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
    res.json(resDB.rows);
    })
    .catch(err => {
        res.send(err)
    })
});

app.get('/searchFilter', (req, res) => {
    queryFilter().then(resDB => {
        res.json(resDB.rows)
    })
        .catch(err =>{
            res.send(err);
        })
})




app.listen(4000, function () {
    console.log('Server is running');
})

