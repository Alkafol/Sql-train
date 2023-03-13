import React from 'react';

const DatabaseDescription = (props) => {
    return (
        <div style={{width: "20%", aspectRatio: "1", backgroundColor: "white", borderRadius: "25px", borderStyle: "solid", borderColor: "#97A2B0", marginRight: "30px"}}>
            <div style={{display: "flex", height: "100%", margin: "15px", flexDirection: "column"}}>
                <h3 style={{alignSelf: "center", fontSize: "23px"}}>{props.name}</h3>
                <p style={{marginTop: "10px", fontSize: "19px"}}>{props.description}</p>
                <ul style={{margin: "15px"}}>
                    {props.list.map((val) => <li style={{fontSize: "19px"}}>{val}</li>)}
                </ul>
                <button onClick={props.handleClick} className="try_out_button">Try out!</button>
            </div>
        </div>
    );
};

export default DatabaseDescription;