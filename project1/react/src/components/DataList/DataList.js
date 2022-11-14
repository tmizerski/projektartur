import React from "react";
import { ArrowRight } from 'react-bootstrap-icons';
import { ArrowLeft } from 'react-bootstrap-icons';
import DataListItem from "../DataListItem/DataListItem";

import "./DataList.css";

const DataList = (props) => {



    return(
        <section className="listSection">
        <table className={"dataList"}>
            <tr className="heads">
                <th className="number">NUMER</th>
                <th className="symbol">SYMBOL</th>
                <th className="date">DATA</th>
                <th className="net">Netto</th>
                <th className="items">ILOŚĆ</th></tr>
            {
                (props.dbData?.map((dataItem, index) => {
                        return (
                            <DataListItem number={dataItem.number}
                                          symbol={dataItem.symbol}
                                          date={dataItem.date}
                                          netValue={dataItem.netValue}
                                          numberOfItems={dataItem.numberOfItems}
                                          key={index}
                                          classIndex={index}
                            />
                        )}))
                       }

        </table>
            <nav className="pageNav">
                <button onClick={() => props.handleOffsetChangeLeft()} value={props.itemsOnPage}><ArrowLeft className="buttonIcons" /></button>
                {/*{props.currentPage}*/}
                <button onClick={() => props.handleOffsetChangeRight()} value={props.itemsOnPage}><ArrowRight className="buttonIcons" /></button>
            </nav>
        </section>
    )
}

export default DataList;