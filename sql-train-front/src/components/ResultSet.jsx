import React from "react";

const ResultSet = function (props){

    return(
        <div className="result_set" style={{borderColor: props.borderColor}}>
            <div style={{marginLeft: "10px", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                <h4 style={{marginBottom: "10px"}}>{props.message}</h4>
                {props.answer}
            </div>
        </div>
    )
}

export default ResultSet;