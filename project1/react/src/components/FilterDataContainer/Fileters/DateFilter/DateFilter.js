import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { registerLocale } from  "react-datepicker";
import pl from 'date-fns/locale/pl';
import "react-datepicker/dist/react-datepicker.css";
import "./DateFilter.css";
registerLocale('pl', pl)

const DateFilter = (props) => {
    const [startDate, setStartDate] = useState(new Date());

    const makeDateString = (date) => {
        const day = date.getDate() < 10 ? `0${date.getDate()}` : (date.getDate());
        const month = (date.getMonth()+1) < 10 ? `0${(date.getMonth()+1)}` : (date.getMonth()+1);
        const year = date.getFullYear();

        const dateString = `${year}-${month}-${day}`;
        return dateString;



    }

    const handleDate = (date) => {

        props.handleDate(makeDateString(date));
    }

    return (
        <section className="dateFilter">
            <label htmlFor={props.id}>{props.id === "dateFrom" ? "Data od: " : "Data do"}</label>
            <DatePicker id={props.id} locale="pl" dateFormat="yyyy/MM/dd" selected={startDate} onChange={(date) => setStartDate(date)} onSelect={(date)=>handleDate(date)}  />
        </section>
    );
}

export default DateFilter;