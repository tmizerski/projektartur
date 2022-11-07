const filterModel = {
    setFilter: true,
    numerInclude: true,
    iloscFrom: true,
    iloscTo: false,
    iloscEqual: false,
    nettoFrom: false,
    nettoTo: false,
    nettoEqual: false,
    symbolEqual: false,
    symbolAnd: true,
    symbolOr: false,
    dateEqual: false,
    dateFrom: true,
    dateTo: false,
    dateBetween: false,
    filterValue: {
        numer: "aaaaaa",
        iloscFrom: 5,
        iloscTo: 6,
        iloscEqual: 0,
        nettoFrom: 5,
        nettoTo: 6,
        nettoEqual: 0,
        symbol: 's1',
        symbolSecond: 's2',
        dateFrom: 'dd',
        dateTo: '',
    }

}


const queryBuilder = (filterModel) => {
    let filter = "";
    let multiFilterFlag = false;
    const query = `SELECT * from ( select numer, m_symbol, data_spz_oper, wart_net_pln, ilosc_jme from sp_sprzedaz order by data_spz_oper desc ) OFFSET 5 ROWS FETCH NEXT 5 ROWS ONLY`;


    if(!filterModel.setFilter) {
        console.log("ok")
        return query;
    } else {
        if(filterModel.numerInclude) {
            filter += ` numer like '%${filterModel.filterValue.numer}%' `;
            multiFilterFlag = !multiFilterFlag;
        }
        if(filterModel.iloscFrom && !filterModel.iloscTo && !filterModel.iloscEqual) {
           multiFilterFlag ?  filter += ` and ilosc_jme < ${filterModel.filterValue.iloscFrom} ` : filter += ` ilosc_jme < ${filterModel.filterValue.iloscFrom} `;
           if(!multiFilterFlag) return multiFilterFlag = !multiFilterFlag;
        }
        if(!filterModel.iloscFrom && filterModel.iloscTo && !filterModel.iloscEqual) {
            multiFilterFlag ?  filter += ` and ilosc_jme > ${filterModel.filterValue.iloscFrom} ` : filter += ` ilosc_jme > ${filterModel.filterValue.iloscFrom} `;
            if(!multiFilterFlag) return multiFilterFlag = !multiFilterFlag;
        }
        if(filterModel.iloscEqual && !filterModel.iloscFrom && !filterModel.iloscTo) {
            multiFilterFlag ?  filter += ` and ilosc_jme = ${filterModel.filterValue.iloscEqual} ` : filter += ` ilosc_jme = ${filterModel.filterValue.iloscEqual} `;
            if(!multiFilterFlag) return multiFilterFlag = !multiFilterFlag;
        }
        if(filterModel.iloscFromOrEqual) {
            multiFilterFlag ?  filter += ` and ilosc_jme >= ${filterModel.filterValue.iloscFrom} ` : filter += ` ilosc_jme >= ${filterModel.filterValue.iloscFrom} `;
            if(!multiFilterFlag) return multiFilterFlag = !multiFilterFlag;
        }
        if(filterModel.iloscToOrEqual) {
            multiFilterFlag ?  filter += ` and ilosc_jme <= ${filterModel.filterValue.iloscTo} ` : filter += ` ilosc_jme <= ${filterModel.filterValue.iloscTo} `;
            if(!multiFilterFlag) return multiFilterFlag = !multiFilterFlag;
        }
        if(filterModel.iloscFrom && filterModel.iloscTo) {
            multiFilterFlag ?  filter += ` and ilosc_jme <= ${filterModel.filterValue.iloscTo} and ilosc_jme >= ${filterModel.filterValue.iloscFrom}` : filter += `  ilosc_jme <= ${filterModel.filterValue.iloscTo} and ilosc_jme >= ${filterModel.filterValue.iloscFrom}`;
            if(!multiFilterFlag) return multiFilterFlag = !multiFilterFlag;
        }
        if(filterModel.nettoFrom && !filterModel.nettoTo && !filterModel.nettoEqual) {
            multiFilterFlag ?  filter += ` and wart_net_pln < ${filterModel.filterValue.nettoFrom} ` : filter += ` wart_net_pln < ${filterModel.filterValue.nettoFrom} `;
            if(!multiFilterFlag) return multiFilterFlag = !multiFilterFlag;
        }
        if(!filterModel.nettoFrom && filterModel.nettoTo && !filterModel.nettoEqual) {
            multiFilterFlag ?  filter += ` and wart_net_pln < ${filterModel.filterValue.nettoFrom} ` : filter += ` wart_net_pln < ${filterModel.filterValue.nettoFrom} `;
            if(!multiFilterFlag) return multiFilterFlag = !multiFilterFlag;
        }
        if(!filterModel.nettoFrom && !filterModel.nettoTo && filterModel.nettoEqual) {
            multiFilterFlag ?  filter += ` and wart_net_pln = ${filterModel.filterValue.nettoEqual} ` : filter += ` wart_net_pln = ${filterModel.filterValue.nettoEqual} `;
            if(!multiFilterFlag) return multiFilterFlag = !multiFilterFlag;
        }
        if(filterModel.nettoFrom && !filterModel.nettoTo && filterModel.nettoEqual) {
            multiFilterFlag ?  filter += ` and wart_net_pln >= ${filterModel.filterValue.nettoFrom} ` : filter += ` wart_net_pln >= ${filterModel.filterValue.nettoFrom} `;
            if(!multiFilterFlag) return multiFilterFlag = !multiFilterFlag;
        }
        if(!filterModel.nettoFrom && filterModel.nettoTo && filterModel.nettoEqual) {
            multiFilterFlag ?  filter += ` and wart_net_pln <= ${filterModel.filterValue.nettoTo} ` : filter += ` wart_net_pln <= ${filterModel.filterValue.nettoTo} `;
            if(!multiFilterFlag) return multiFilterFlag = !multiFilterFlag;
        }
        if(filterModel.nettoFrom && filterModel.nettoTo && !filterModel.nettoEqual) {
            multiFilterFlag ?  filter += ` and wart_net_pln >= ${filterModel.filterValue.nettoFrom} and wart_net_pln <= ${filterModel.filterValue.nettoTo} ` : filter += ` wart_net_pln >= ${filterModel.filterValue.nettoTo} and wart_net_pln <= ${filterModel.filterValue.nettoTo} `;
            if(!multiFilterFlag) return multiFilterFlag = !multiFilterFlag;
        }
        if(filterModel.symbolEqual) {
            multiFilterFlag ?  filter += ` and m_symbol = '${filterModel.filterValue.symbol}'  ` : filter += ` m_symbol = '${filterModel.filterValue.nettoTo}' `;
            if(!multiFilterFlag) return multiFilterFlag = !multiFilterFlag;
        }
        if(filterModel.symbolOr) {
            multiFilterFlag ?  filter += ` and m_symbol = '${filterModel.filterValue.symbol}' or symbol = '${filterModel.filterValue.symbolSecond}'  ` : filter += ` m_symbol = '${filterModel.filterValue.nettoTo}' or symbol = '${filterModel.filterValue.symbolSecond}' `;
            if(!multiFilterFlag) return multiFilterFlag = !multiFilterFlag;
        }
        if(filterModel.symbolAnd) {
            multiFilterFlag ?  filter += ` and m_symbol = '${filterModel.filterValue.symbol}' and symbol = '${filterModel.filterValue.symbolSecond}'  ` : filter += ` m_symbol = '${filterModel.filterValue.nettoTo}' and symbol = '${filterModel.filterValue.symbolSecond}' `;
            if(!multiFilterFlag) return multiFilterFlag = !multiFilterFlag;
        }
        if(filterModel.dateFrom && !filterModel.dateTo) {
            multiFilterFlag ?  filter += ` and data_spz_oper > '${filterModel.filterValue.dateFrom}' ` : filter += ` data_spz_oper > '${filterModel.filterValue.dateFrom}' `;
            if(!multiFilterFlag) return multiFilterFlag = !multiFilterFlag;
        }
        if(!filterModel.dateFrom && filterModel.dateTo) {
            multiFilterFlag ?  filter += ` and data_spz_oper = '${filterModel.filterValue.dateTo}' ` : filter += ` data_spz_oper = '${filterModel.filterValue.dateTo}' `;
            if(!multiFilterFlag) return multiFilterFlag = !multiFilterFlag;
        }
        if(filterModel.dateFrom && filterModel.dateTo) {
            multiFilterFlag ?  filter += ` and data_spz_oper between '${filterModel.filterValue.dateFrom}' and '${filterModel.filterValue.dateTo}' ` : filter += ` data_spz_oper between '${filterModel.filterValue.dateFrom}' and '${filterModel.filterValue.dateTo}' `;
            if(!multiFilterFlag) return multiFilterFlag = !multiFilterFlag;
        }
        const queryFilter = `SELECT * from ( select numer, m_symbol, data_spz_oper, wart_net_pln, ilosc_jme from sp_sprzedaz where ${filter} order by data_spz_oper desc ) OFFSET 5 ROWS FETCH NEXT 5 ROWS ONLY`;

        console.log(queryFilter);
        return queryFilter;
    }

}

queryBuilder(filterModel);