

const queryBuilder = (filterModel) => {
    let filter = "";
    let multiFilterFlag = false;
    const query = ` select numer, m_symbol, to_Char(data_spz_oper, 'MM/DD/YYYY'), wart_net_pln, ilosc_jme from sp_sprzedaz order by data_spz_oper desc  OFFSET ${filterModel.offset} ROWS FETCH NEXT ${filterModel.itemsOnPage} ROWS ONLY`;

    console.log(typeof filterModel.dateFrom);

    if(filterModel.inputNumberFlag === "true"|| filterModel.symbolFlag  === "true" || filterModel.dateFromFlag === "true" || filterModel.dateToFlag === "true" ||  filterModel.netFlag  === "true"|| filterModel.netSecondFlag  === "true"|| filterModel.numberOfItemsFlag  === "true"|| filterModel.numberOfItemsSecondFlag  === "true") {
            console.log(filterModel.inputNumberFlag)
        if (filterModel.inputNumberFlag === "true") {
            filter += ` numer like '${filterModel.inputNumber}%' `;
            multiFilterFlag = !multiFilterFlag;

        }
        if (filterModel.symbolFlag === "true" && filterModel.checkedSymbol === "false") {
                console.log(filterModel.symbol)
                multiFilterFlag ? filter += ` and m_symbol like '${filterModel.symbol}'  ` : filter += ` m_symbol like '${filterModel.symbol}' `;
                console.log(multiFilterFlag);
                !multiFilterFlag ? multiFilterFlag = !multiFilterFlag : multiFilterFlag;

        }
        if( filterModel.symbolFlag === "true" && filterModel.checkedSymbol === "true" && filterModel.symbolSecondFlag === "true") {
            multiFilterFlag ?  filter += ` and ( m_symbol = '${filterModel.symbol}' or m_symbol = '${filterModel.symbolSecond}' ) ` : filter += ` (m_symbol = '${filterModel.symbol}' or m_symbol = '${filterModel.symbolSecond}') `;
            !multiFilterFlag ? multiFilterFlag = !multiFilterFlag : multiFilterFlag;
        }
        if(filterModel.numberOfItemsFlag === "true"  &&  filterModel.numberOfItemsSecondFlag === "false" && filterModel.itemSelectedOption === "equal") {
            multiFilterFlag ?  filter += ` and ilosc_jme = ${filterModel.numberOfItems} ` : filter += ` ilosc_jme = ${filterModel.numberOfItems} `;
            !multiFilterFlag ? multiFilterFlag = !multiFilterFlag : multiFilterFlag;
        }
        if(filterModel.numberOfItemsFlag === "true" && filterModel.numberOfItemsSecondFlag === "false" && filterModel.itemSelectedOption === "equalOrHigher") {
            multiFilterFlag ?  filter += ` and ilosc_jme >= ${filterModel.numberOfItems} ` : filter += ` ilosc_jme >= ${filterModel.numberOfItems} `;
            !multiFilterFlag ? multiFilterFlag = !multiFilterFlag : multiFilterFlag;

        }
        if(filterModel.numberOfItemsFlag === "true" && filterModel.numberOfItemsSecondFlag === "false" && filterModel.itemSelectedOption === "equalOrLower") {
            multiFilterFlag ?  filter += ` and ilosc_jme <= ${filterModel.numberOfItems} ` : filter += ` ilosc_jme <= ${filterModel.numberOfItems} `;
            !multiFilterFlag ? multiFilterFlag = !multiFilterFlag : multiFilterFlag;
        }
        if(filterModel.numberOfItemsFlag === "true" && filterModel.numberOfItemsSecondFlag === "true" && filterModel.itemSelectedOption === "range") {
            multiFilterFlag ?  filter += ` and ilosc_jme >= ${filterModel.numberOfItems} and ilosc_jme <= ${filterModel.numberOfItemsSecond}` : filter += ` ilosc_jme <= ${filterModel.numberOfItems} and ilosc_jme >= ${filterModel.numberOfItemsSecond}`;
            !multiFilterFlag ? multiFilterFlag = !multiFilterFlag : multiFilterFlag;
        }
        if(filterModel.netFlag === "true" && filterModel.netSecondFlag === "false" && filterModel.selectedOption === "equal") {
            multiFilterFlag ?  filter += ` and wart_net_pln = ${filterModel.net} ` : filter += `  wart_net_pln= ${filterModel.net} `;
            !multiFilterFlag ? multiFilterFlag = !multiFilterFlag : multiFilterFlag;
        }
        if(filterModel.netFlag === "true" && filterModel.netSecondFlag === "false" && filterModel.selectedOption === "equalOrHigher") {
            multiFilterFlag ?  filter += ` and wart_net_pln >= ${filterModel.net} ` : filter += ` wart_net_pln >= ${filterModel.net} `;
            !multiFilterFlag ? multiFilterFlag = !multiFilterFlag : multiFilterFlag;
        }
        if(filterModel.netFlag === "true" && filterModel.netSecondFlag === "false" && filterModel.selectedOption === "equalOrLower") {
            multiFilterFlag ?  filter += ` and wart_net_pln <= ${filterModel.net} ` : filter += ` wart_net_pln <= ${filterModel.net} `;
            !multiFilterFlag ? multiFilterFlag = !multiFilterFlag : multiFilterFlag;
        }
        if(filterModel.netFlag === "true" && filterModel.netSecondFlag === "true" && filterModel.selectedOption === "range") {
            multiFilterFlag ?  filter += ` and wart_net_pln >= ${filterModel.net} and wart_net_pln <= ${filterModel.netSecond}` : filter += `  wart_net_pln >= ${filterModel.net} and wart_net_pln <= ${filterModel.netSecond}`;
            !multiFilterFlag ? multiFilterFlag = !multiFilterFlag : multiFilterFlag;
        }
        if(filterModel.dateFromFlag === "true" && filterModel.dateToFlag === "true") {
            console.log(filterModel.dateFrom);
            console.log(typeof filterModel.dateTo);
            multiFilterFlag ?  filter += ` and data_spz_oper >= '${filterModel.dateFrom}' and  data_spz_oper <= '${filterModel.dateTo} ' ` : filter += `data_spz_oper >='${filterModel.dateFrom}'  and  data_spz_oper <= '${filterModel.dateTo}' `;
        }

        const queryFilter = `select numer, m_symbol, to_Char(data_spz_oper, 'MM/DD/YYYY'), wart_net_pln, ilosc_jme
                              from sp_sprzedaz
                               where ${filter}
                               order by data_spz_oper desc
                               OFFSET ${filterModel.offset} ROWS FETCH NEXT ${filterModel.itemsOnPage} ROWS ONLY`;
        console.log(queryFilter)
        return queryFilter;
    }
    else {
        console.log(query);
        return query;
    }


}

module.exports = queryBuilder;