import React from "react";
import {useNavigate} from "react-router-dom";

const TableStructure = function (props) {
    const navigate = useNavigate();

    return (
        <div className="table_structure">
            <div style={{display: "flex", width: "100"}}>
                <h2 style={{marginBottom: "5px"}}>Database structure</h2>
                <button onClick={() => navigate("/main")} className="main_page_button">Main page</button>
            </div>
            <div style={{overflowY: "auto", height: "80%"}}>
                {props.description}
            </div>
        </div>
    )
}

export default TableStructure;