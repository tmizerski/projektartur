import React from "react";
import "./DataListItem.css";

const DataListItem = (props) => {


    return (
            <tr className={props.classIndex%2 === 0 ? "DataListItem even" : "DataListItem odd"}>
                <td className="number">{props.number}</td>
                <td className="symbol">{props.symbol}</td>
                <td className="date">{props.date}</td>
                <td className="net">{props.netValue}</td>
                <td className="items">{props.numberOfItems}</td>
            </tr>
    )
}

export default DataListItem;