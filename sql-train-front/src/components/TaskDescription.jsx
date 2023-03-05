import React from "react";

const TaskDescription = function (props) {
    return (
        <div className="task_description">
            <div className="task_description_text">
                <h2 style={{margin: "2px"}}>Task description</h2>
                <p style={{margin: "4px"}}>{props.text}</p>
                {props.solution && <h3 style={{marginLeft: "5px"}}>Solution</h3>}
                {props.solution && <pre style={{marginLeft: "5px"}}>{props.solution}</pre>}
            </div>
            <div className="button_block">
                <button onClick={props.getSolution} className="solution_button">Solution</button>
                <button className="next_task_button" onClick={props.nextTask}>Next task</button>
                <button className="prev_task_button" onClick={props.prevTask}>Previous task</button>
            </div>
        </div>
    )
}

export default TaskDescription;