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
    symbolAnd: false,
    symbolOr: true,
    dateEqual: false,
    dateFrom: false,
    dateTo: false,
    dateBetween: false,
    filterValue: {
        numer: "a",
        iloscFrom: 5,
        iloscTo: 6,
        iloscEqual: 0,
        nettoFrom: 5,
        nettoTo: 6,
        nettoEqual: 0,
        symbol: 'A01',
        symbolSecond: 'K99',
        dateFrom: 'dd',
        dateTo: '',
    }

}

module.exports = filterModel;