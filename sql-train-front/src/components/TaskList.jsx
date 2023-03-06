import React from "react";
import waitingGif from '../gifs/waiting.gif'

const TaskList = function (props) {
    const state = props.fetchingState

    return (
        <div style={{height: "100%", width: "100%", display: "flex", flexDirection: "column"}}>
            <h2 style={{marginBottom: "10px"}}>Tasks list</h2>
            {state ? <img style={{alignSelf: "center", margin: "auto", width: "30%"}} src={waitingGif} alt={""}/> : null}
            {state ? null : <div style={{overflowY: "auto", height: "90%"}}>
                <ul>
                    {props.data.map((val) => <li
                        style={{borderColor: val.taskColor, borderStyle: "solid", backgroundColor: val.backgroundColor}}
                        className="task" key={val.taskId} onClick={() => props.clickEvent({
                        id: val.taskId,
                        description: val.description
                    })}>{val.description}</li>)}
                </ul>
            </div>
            }
        </div>
    )
}

export default TaskList;