import React, {useEffect, useState} from "react";
import InputFilter from "./Fileters/InputFilter/InputFilter";
import DateFilter from "./Fileters/DateFilter/DateFilter";
import SelectFilter from "./Fileters/SelectFilter/SelectFilter";
import SelectPage from "./Fileters/SelectPage/SelectPage";
import './FilterDataContainer.css';


const FilterDataContainer = (props) => {
    // const [ inputNumberValue, setInputNumberValue ] = useState("");
    // const [ inputNumberFlag, setInputNumberFlag ] = useState(false);
    // const [ checkedSymbol, setCheckedSymbol ] = useState(false);
    // const [ dateFrom, setDateFrom ] = useState("");
    // const [ dateFromFlag, setDateFromFlag] = useState(false);
    // const [ dateTo, setDateTo ] = useState("");
    // const [ dateToFlag, setDateToFlag] = useState(false);
    // const [ symbol, setSymbol ] = useState("");
    // const [ symbolFlag, setSymbolFlag] = useState(false);
    // const [ symbolSecond, setSymbolSecond ] = useState("");
    // const [ symbolSecondFlag, setSymbolSecondFlag] = useState(false);
    // const [ net, setNet ] = useState(0);
    // const [ netFlag, setNetFlag] = useState(false);
    // const [ netSecond, setNetSecond ] = useState(0);
    // const [ netSecondFlag, setNetSecondFlag] = useState(false);
    // const [ numberOfItems, setNumberOfItems ] = useState(0);
    // const [ numberOfItemsFlag, setNumberOfItemsFlag] = useState(false);
    // const [ numberOfItemsSecond, setNumberOfItemsSecond ] = useState(0);
    // const [ numberOfItemsSecondFlag, setNumberOfItemsSecondFlag] = useState(false);
    // const [ selectedOption, setSelectedOption ] = useState("equal");
    // const [ itemSelectedOption, setItemSelectedOption ] = useState("equal");
    // const [ itemsOnPage, setItemOnPage ] = useState(25);
    // const [ offset, setOffset ] = useState(0);
    // const [ filter, setFilter ] = useState({});
    //
    //
    //
    // const handleInputNumber = (e) => {
    //     setInputNumberValue(e.target.value.toUpperCase().trim());
    //     if(e.target.value !== "") {
    //         setInputNumberFlag(true);
    //
    //     } else {
    //         setInputNumberFlag(false);
    //
    //     }
    // }
    //
    // const handleOnCheckSymbol = (check) => {
    //     setCheckedSymbol(check);
    //
    // }
    //
    //
    // const handleDateFrom = (date) => {
    //     setDateFrom(date);
    //     date !== "" ? setDateFromFlag(true) : setDateFromFlag(false);
    //
    // }
    //
    // const handleDateTo = (date) => {
    //     setDateTo(date);
    //     date !== "" ? setDateToFlag(true) : setDateToFlag(false);
    // }
    //
    // const handleSymbol = (e) => {
    //     setSymbol(e.target.value.toUpperCase().trim());
    //     if(e.target.value !== "") {
    //         setSymbolFlag(true);
    //     } else {
    //         setSymbolFlag(false);
    //     }
    // }
    //
    // const handleSymbolSecond= (e) => {
    //     setSymbolSecond(e.target.value.toUpperCase().trim());
    //     if(e.target.value !== "") {
    //         setSymbolSecondFlag(true);
    //     } else {
    //         setSymbolSecondFlag(false);
    //     }
    // }
    //
    // const handleNet = (e) => {
    //     setNet(e.target.value);
    //     e.target.value !== "" ? setNetFlag(true) : setNetFlag(false);
    // }
    //
    // const handleNetSecond = (e) => {
    //     setNetSecond(e.target.value);
    //     e.target.value !== "" ? setNetSecondFlag(true) : setNetSecondFlag(false);
    // }
    //
    // const handleNumberOfItems = (e) => {
    //     setNumberOfItems(e.target.value);
    //     e.target.value !== "" ? setNumberOfItemsFlag(true) : setNumberOfItemsFlag(false);
    // }
    //
    // const handleNumberOfItemsSecond = (e) => {
    //     setNumberOfItemsSecond(e.target.value);
    //     e.target.value !== "" ? setNumberOfItemsSecondFlag(true) : setNumberOfItemsSecondFlag(false);
    // }
    //
    // const handleSelect = (e) => {
    //     setSelectedOption(e.target.value);
    //     if(e.target.value === "equal") setNetSecond(0);
    // }
    //
    // const handleItemSelect = (e) => {
    //     setItemSelectedOption(e.target.value);
    //     if(e.target.value === "equal") setNumberOfItemsSecond(0);
    // }
    //
    // const handleSelectPage = (e) => {
    //     setItemOnPage(e.target.value);
    // }
    //
    // const handleOffsetChangeRight = () => {
    //     if(itemsOnPage === 25) {
    //         setOffset(offset + 25);
    //     }
    //     if(itemsOnPage === 50) {
    //         setOffset(offset + 50);
    //     }
    //     if(itemsOnPage === 100) {
    //         setOffset(offset + 100);
    //     }
    // }
    //
    // const handleOffsetChangeLeft = () => {
    //     if(itemsOnPage === 25) {
    //         setOffset(offset - 25);
    //     }
    //     if(itemsOnPage === 50) {
    //         setOffset(offset - 50);
    //     }
    //     if(itemsOnPage === 100) {
    //         setOffset(offset - 100);
    //     }
    // }
    //
    //
    // useEffect(()=>{
    //      setFilter( {
    //          inputNumberFlag: inputNumberFlag,
    //          inputNumber: inputNumberValue,
    //          checkedSymbol: checkedSymbol,
    //          dateFrom: dateFrom,
    //          dateFromFlag: dateFromFlag,
    //          dateTo: dateTo,
    //          dateToFlag: dateToFlag,
    //          symbol: symbol,
    //          symbolFlag: symbolFlag,
    //          symbolSecond: symbolSecond,
    //          symbolSecondFlag: symbolSecondFlag,
    //          net: net,
    //          netFlag: netFlag,
    //          netSecond: netSecond,
    //          netSecondFlag: netSecondFlag,
    //          numberOfItems: numberOfItems,
    //          numberOfItemsFlag: numberOfItemsFlag,
    //          numberOfItemsSecond: numberOfItemsSecond,
    //          numberOfItemsSecondFlag: numberOfItemsSecondFlag,
    //          selectedOption: selectedOption,
    //          itemSelectedOption: itemSelectedOption,
    //          itemsOnPage: itemsOnPage,
    //     })
    // },[inputNumberValue,symbolFlag,itemsOnPage, netSecondFlag,numberOfItemsSecondFlag,symbolSecondFlag,netFlag, numberOfItemsFlag,inputNumberFlag,checkedSymbol,dateFromFlag,dateToFlag,itemSelectedOption,dateFrom,dateTo,symbol,symbolSecond,net,netSecond,numberOfItems,numberOfItemsSecond,selectedOption]);





    return(
        <div className="filterArea">
        <h2 className="filterTitle">Wybierz filtry:</h2>
        <hr/>
        <form className="filterDataContainer" onSubmit={(e)=>props.handleOnSubmit(e, props.filter)}>
            <InputFilter id="number" handleInput={props.handleInputNumber}/>
            <div>
            <DateFilter id="dateFrom" handleDate={props.handleDateFrom}/>
            <DateFilter id="dateTo" handleDate={props.handleDateTo}/>
            </div>
            <div className="inactive">
                <InputFilter id="symbol"  handleOnCheck={props.handleOnCheckSymbol} handleInput={props.handleSymbol}/>
                { props.checkedSymbol ? <InputFilter id="symbolSecond" className="secondSymbol" checked={props.checkedSymbol} handleInput={props.handleSymbolSecond}/> : ""}
            </div>
            <div>
                <InputFilter id="numberOfItems"  handleInput={props.handleNumberOfItems}/>
                <SelectFilter id="numberOfItemsSelect" handleSelect={props.handleItemSelect} />
                {props.itemSelectedOption === "range" ?  <InputFilter id="numberOfItemsSecond" handleInput={props.handleNumberOfItemsSecond}/> : "" }
            </div>
            <div>
                <InputFilter id="net" handleInput={props.handleNet}/>
                <SelectFilter id="netSelect" handleSelect={props.handleSelect} />
                {props.selectedOption === "range" ?  <InputFilter id="netSecond" handleInput={props.handleNetSecond}/> : ""  }
            </div>

            <label className="pageRange" htmlFor="pageRange">
                Ile wyników na stronie:
                <SelectPage id="pageRangeSelect" handleSelect={props.handleSelectPage} />
            </label>

            <div className="buttonContainer">
            <button className="filterButton">Filtruj</button>
            <button className="filterButton">Resetuj filtry</button>
            </div>
        </form>
        </div>
    )
}

export default FilterDataContainer;