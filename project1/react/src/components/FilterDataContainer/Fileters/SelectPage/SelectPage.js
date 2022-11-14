

const SelectPage = (props) => {



    return (

        <select id={props.id} className="selectFilter" onChange={(e) => props.handleSelect(e)}>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
        </select>

    );
}

export default SelectPage;