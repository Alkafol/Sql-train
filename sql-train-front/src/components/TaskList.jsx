import React from "react";

const TaskList = function (props) {

    console.log(props)
    return (
        <div style={{paddingRight: "8px", height: "100%"}}>
            <h2 style={{marginLeft: "10px", marginTop: "5px", marginBottom: "10px"}}>Tasks list</h2>
            <div style={{overflowY: "auto", height: "90%"}}>
                <ul>
                    {props.data.map((val) => <li
                        style={{borderColor: val.taskColor, borderStyle: "solid", backgroundColor: val.backgroundColor}}
                        className="task" key={val.taskId} onClick={() => props.clickEvent({
                        id: val.taskId,
                        description: val.description
                    })}>{val.description}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default TaskList;