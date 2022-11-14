import React from "react";
import "./SelectFilter.css";

const SelectFilter = (props) => {

    return (

        <select id={props.id} className="selectFilter" onChange={(e) => props.handleSelect(e)}>
            <option value="equal">Wybierz opcję</option>
            <option value="range">zakres</option>
            <option value="equalOrLower">do</option>
            <option value="equalOrHigher">od</option>
        </select>

    );
}

export default SelectFilter;