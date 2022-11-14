import React, { useEffect, useState, useRef } from "react";
import FilterDataContainer from "../FilterDataContainer/FilterDataContainer";
import DataList from "../DataList/DataList";
import './ListContainer.css';


const ListContainer = () => {
    const [ data, setData ] = useState([]);
    const [ inputNumberValue, setInputNumberValue ] = useState("");
    const [ inputNumberFlag, setInputNumberFlag ] = useState(false);
    const [ checkedSymbol, setCheckedSymbol ] = useState(false);
    const [ dateFrom, setDateFrom ] = useState("");
    const [ dateFromFlag, setDateFromFlag] = useState(false);
    const [ dateTo, setDateTo ] = useState("");
    const [ dateToFlag, setDateToFlag] = useState(false);
    const [ symbol, setSymbol ] = useState("");
    const [ symbolFlag, setSymbolFlag] = useState(false);
    const [ symbolSecond, setSymbolSecond ] = useState("");
    const [ symbolSecondFlag, setSymbolSecondFlag] = useState(false);
    const [ net, setNet ] = useState(0);
    const [ netFlag, setNetFlag] = useState(false);
    const [ netSecond, setNetSecond ] = useState(0);
    const [ netSecondFlag, setNetSecondFlag] = useState(false);
    const [ numberOfItems, setNumberOfItems ] = useState(0);
    const [ numberOfItemsFlag, setNumberOfItemsFlag] = useState(false);
    const [ numberOfItemsSecond, setNumberOfItemsSecond ] = useState(0);
    const [ numberOfItemsSecondFlag, setNumberOfItemsSecondFlag] = useState(false);
    const [ selectedOption, setSelectedOption ] = useState("equal");
    const [ itemSelectedOption, setItemSelectedOption ] = useState("equal");
    const [ itemsOnPage, setItemOnPage ] = useState(25);
    const [ offset, setOffset ] = useState(0);
    const [ filter, setFilter ] = useState({});




    const handleInputNumber = (e) => {
        setInputNumberValue(e.target.value.toUpperCase().trim());
        if(e.target.value !== "") {
            setInputNumberFlag(true);

        } else {
            setInputNumberFlag(false);

        }
    }

    const handleOnCheckSymbol = (check) => {
        setCheckedSymbol(check);

    }


    const handleDateFrom = (date) => {
        setDateFrom(date);
        date !== "" ? setDateFromFlag(true) : setDateFromFlag(false);

    }

    const handleDateTo = (date) => {
        setDateTo(date);
        date !== "" ? setDateToFlag(true) : setDateToFlag(false);
    }

    const handleSymbol = (e) => {
        setSymbol(e.target.value.toUpperCase().trim());
        if(e.target.value !== "") {
            setSymbolFlag(true);
        } else {
            setSymbolFlag(false);
        }
    }

    const handleSymbolSecond = (e) => {
        setSymbolSecond(e.target.value.toUpperCase().trim());
        if(e.target.value !== "") {
            setSymbolSecondFlag(true);
        } else {
            setSymbolSecondFlag(false);
        }
    }

    const handleNet = (e) => {
        setNet(e.target.value);
        e.target.value !== "" ? setNetFlag(true) : setNetFlag(false);
    }

    const handleNetSecond = (e) => {
        setNetSecond(e.target.value);
        e.target.value !== "" ? setNetSecondFlag(true) : setNetSecondFlag(false);
    }

    const handleNumberOfItems = (e) => {
        setNumberOfItems(e.target.value);
        e.target.value !== "" ? setNumberOfItemsFlag(true) : setNumberOfItemsFlag(false);
    }

    const handleNumberOfItemsSecond = (e) => {
        setNumberOfItemsSecond(e.target.value);
        e.target.value !== "" ? setNumberOfItemsSecondFlag(true) : setNumberOfItemsSecondFlag(false);
    }

    const handleSelect = (e) => {
        setSelectedOption(e.target.value);
        if(e.target.value === "equal") setNetSecond(0);
    }

    const handleItemSelect = (e) => {
        setItemSelectedOption(e.target.value);
        if(e.target.value === "equal") setNumberOfItemsSecond(0);
    }

    const handleSelectPage = (e) => {
        setItemOnPage(e.target.value);
    }

    const fetchFilter = (filter) => {
        console.log("strzał do api")
        fetch('http://localhost:4000/searchFilter?'+new URLSearchParams(filter))
            .then(res => res.json())
            .then(json => {
                console.log("mapuję dane")
                setData(json.map(jsonData => {
                        return {
                            number: jsonData[0],
                            symbol: jsonData[1],
                            date: jsonData[2].slice(0,10).split("-").reverse().join("-"),
                            netValue: Math.round(jsonData[3]*100)/100,
                            numberOfItems: jsonData[4],
                        }
                    })

                )}
            )
    }



    useEffect(()=>{
        setFilter( {
            inputNumberFlag: inputNumberFlag,
            inputNumber: inputNumberValue,
            checkedSymbol: checkedSymbol,
            dateFrom: dateFrom,
            dateFromFlag: dateFromFlag,
            dateTo: dateTo,
            dateToFlag: dateToFlag,
            symbol: symbol,
            symbolFlag: symbolFlag,
            symbolSecond: symbolSecond,
            symbolSecondFlag: symbolSecondFlag,
            net: net,
            netFlag: netFlag,
            netSecond: netSecond,
            netSecondFlag: netSecondFlag,
            numberOfItems: numberOfItems,
            numberOfItemsFlag: numberOfItemsFlag,
            numberOfItemsSecond: numberOfItemsSecond,
            numberOfItemsSecondFlag: numberOfItemsSecondFlag,
            selectedOption: selectedOption,
            itemSelectedOption: itemSelectedOption,
            itemsOnPage: itemsOnPage,
            offset: offset,
        })
    },[inputNumberValue,symbolFlag,itemsOnPage, offset, netSecondFlag,numberOfItemsSecondFlag,symbolSecondFlag,netFlag, numberOfItemsFlag,inputNumberFlag,checkedSymbol,dateFromFlag,dateToFlag,itemSelectedOption,dateFrom,dateTo,symbol,symbolSecond,net,netSecond,numberOfItems,numberOfItemsSecond,selectedOption]);

    const handleOffsetChangeRight = () => {
        let count = Number(offset);
        const items = Number(itemsOnPage);
        if(items) {
            count += items;
            setOffset(count)
        }
        fetchFilter(filter)
    }

    const handleOffsetChangeLeft = (offset) => {
        let count = Number(offset);
        const items = Number(itemsOnPage);
        if(count > 0 && items) {
            count -= items;
            setOffset(count)
        }
        fetchFilter(filter)
    }


    useEffect( () => {
        fetch('http://localhost:4000/')
            .then(res => res.json())
            .then((json) => {
                console.log(json)
                setData( json.map(jsonData => {
                            return {
                                number: jsonData[0],
                                symbol: jsonData[1],
                                date: jsonData[2].slice(0,10).split("-").reverse().join("-"),
                                netValue: Math.round(jsonData[3]*100)/100,
                                numberOfItems: jsonData[4],
                            }
                        }
                    )
                )}
            )

    },[])

    const handleOnSubmit = (e, filter) => {
        e.preventDefault();
        fetch('http://localhost:4000/searchFilter?'+new URLSearchParams(filter))
            .then(res => res.json())
            .then(json => setData(json.map(jsonData => {
                        return {
                            number: jsonData[0],
                            symbol: jsonData[1],
                            date: jsonData[2].slice(0,10).split("-").reverse().join("-"),
                            netValue: Math.round(jsonData[3]*100)/100,
                            numberOfItems: jsonData[4],
                        }
                    })

                )
            )

    }




    return(
        <div className='listContainer'>
            <FilterDataContainer
                handleOnSubmit={handleOnSubmit}
                handleInputNumber={handleInputNumber}
                handleOnCheckSymbol={handleOnCheckSymbol}
                handleDateFrom={handleDateFrom}
                handleDateTo={handleDateTo}
                handleSymbol={handleSymbol}
                handleSymbolSecond={handleSymbolSecond}
                handleNet={handleNet}
                handleNetSecond={handleNetSecond}
                handleNumberOfItems={handleNumberOfItems}
                handleNumberOfItemsSecond={handleNumberOfItemsSecond}
                handleSelect={handleSelect}
                handleItemSelect={handleItemSelect}
                handleSelectPage={handleSelectPage}
                filter={filter}
            />
            <DataList
                dbData={data}
                handleOffsetChangeRight={handleOffsetChangeRight}
                handleOffsetChangeLeft={handleOffsetChangeLeft}
                buttonValue={itemsOnPage}
            />
        </div>
    )
}

export default ListContainer;