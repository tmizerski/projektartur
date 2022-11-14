import React from "react";
import CheckboxFilter from "../CheckboxFilter/CheckboxFilter";
import './InputFilter.css';

const InputFilter = (props) => {


    const renderName = () => {
        let componentName = "";

        if(props.id === "number")  componentName = "Podaj numer: ";
        if(props.id === "symbol")  componentName = "Podaj symbol: ";
        if(props.id === "symbolSecond")  componentName = "";
        if(props.id === "net")  componentName = "Podaj wartość netto: ";
        if(props.id === "netSecond") componentName = "";
        if(props.id === "numberOfItems") componentName = "Ilość: ";
        if(props.id === "numberOfItemsSecond") componentName = "";

        return componentName;
    }

    const setType = () => {
        if(props.id === "numberOfItems" || props.id === "numberOfItemsSecond") {
            return "number"
        } else {
            return "text"
        }
    }

    const setCheckboxOrSelect = () => {

        if(props.id === "symbol" && !props.checked) {
          return   <CheckboxFilter handleOnCheck={props.handleOnCheck}/>
        }
    }

    return (
        <div className={props.checked ? `${props.className} inputFilter` : 'inputFilter'} >
            <label htmlFor={props.id}>{renderName()}</label>
            <input type={setType()} id={props.id} onChange={(e)=>props.handleInput(e)}/>
            {setCheckboxOrSelect()}
            </div>
    );
}

export default InputFilter;