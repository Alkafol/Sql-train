import React from "react";

const TableStructure = function (){

    return(
        <div className="table_structure">
            <h2 style={{marginBottom: "5px"}}>Table structure</h2>
            <div style={{overflowY: "auto", height: "80%"}}>
            <p style={{marginLeft: "2px"}}>Table "customers" contains 8 columns: <br/> - customer_id <br/> - first_name <br/> - last_name
                <br/> - gender <br/> - age <br/> - annual_income <br/> - spending_score <br/> - profession
                <br/> - family_size </p>
            </div>
        </div>
    )
}

export default TableStructure;