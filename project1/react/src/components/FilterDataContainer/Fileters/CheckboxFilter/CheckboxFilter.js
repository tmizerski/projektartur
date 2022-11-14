import React, { useState } from "react";
import './CheckboxFilter.css';

const CheckboxFilter = (props) => {
    const [checked, setChecked] = useState(false);

    const clickHandler = () => {
        setChecked(!checked);
        props.handleOnCheck(!checked);
    }

    return (
        <div className="container">
        <label className="checkboxFilter">Lub
        <input type="checkbox" checked={checked} onChange={()=>clickHandler()}/><span className="checkmark"></span>
        </label>
        </div>
            );
}

export default CheckboxFilter;