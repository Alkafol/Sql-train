import React, {useEffect, useState} from 'react';
import './style/App.css'
import TaskDescription from "./components/TaskDescription";
import TableStructure from "./components/TableStructure";
import ResultSet from "./components/ResultSet";
import TaskList from "./components/TaskList";
import axios from "axios";
import Table from "./components/Table";
import {ReactSVG} from 'react-svg'
import hourglass from './icons/hourglass.svg'


function App() {
    function defaultTableAnswerState() {
        return <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "calc(0.5 * (30vh - 135px))"}}>
            <ReactSVG src={hourglass}/>
            <p style={{color: "grey"}}>Waiting for your query ...</p>
        </div>
    }

    const [currentTableAnswer, setTableAnswer] = useState(defaultTableAnswerState)
    const [tasksData, setTasksData] = useState([])
    const [currentTask, setCurrentTask] = useState({id: -1, description: ''})
    const [answerColor, setAnswerColor] = useState('#97A2B0')
    const [borderResultSetAnswer, setBorderResultSetAnswer] = useState('#97A2B0')
    const [currentQuery, setCurrentQuery] = useState('')
    const [currentTaskSolution, setCurrentTaskSolution] = useState(undefined)
    const [resultMessage, setResultMessage] = useState(undefined)

    // not sure if it's needed
    useEffect(() => {
    }, [answerColor])

    function executeSql(sql) {
        let request = process.env.BACKEND_URL + "/submit/" + currentTask.id + "/" + encodeURIComponent(sql);
        console.log("request", request)
        axios.get(request).then(res => {
            if (res.data.isCorrect) {
                setAnswerColor('#46A356');
                setBorderResultSetAnswer('#46A356')
                setResultMessage('Correct! Go and try next task.')

                const newTasksData = [...tasksData]
                newTasksData.find((task) => task.taskId === currentTask.id).taskColor = '#46A356'
                setTasksData(newTasksData)
            } else {
                setAnswerColor('#A64D46')
                setBorderResultSetAnswer('#A64D46')
                setResultMessage('Incorrect.')

                const newTasksData = [...tasksData]
                newTasksData.find((task) => task.taskId === currentTask.id).taskColor = '#A64D46'
                setTasksData(newTasksData)
            }

            setTableAnswer(<Table heading={res.data.columnNames} body={res.data.userSolutionOutput}/>);
        }).catch(res => {
            if (res.response.status === 400) {
                setAnswerColor('#A64D46')
                setBorderResultSetAnswer('#A64D46')

                const newTasksData = [...tasksData]
                newTasksData.find((task) => task.taskId === currentTask.id).taskColor = '#A64D46'
                setTasksData(newTasksData)

                setTableAnswer(res.response.data)
                setResultMessage(undefined)
            }
        })
    }

    function getAllTasks() {
        axios.get(process.env.BACKEND_URL + "/getAllTasks").then(res => {
            let data = res.data
            console.log(data)

            data.map((taskData) => taskData.taskColor = '#97A2B0')
            data.map((taskData) => taskData.leftedInput = '')
            data[0].backgroundColor = '#BDC9DB'

            setCurrentTask({id: data[0].taskId, description: data[0].description})
            setTasksData(data)
        })
    }

    async function getTaskSolution(taskId) {
        if (!currentTaskSolution) {
            axios.get(process.env.BACKEND_URL + "/getSolution/" + taskId).then(res => {
                setCurrentTaskSolution(res.data)
            })
        } else {
            setCurrentTaskSolution(undefined)
        }
    }

    // what is deps??
    useEffect(() => getAllTasks(), [])

    function changeTask(newTask) {
        if (newTask.id !== currentTask.id) {
            // hide solution
            setCurrentTaskSolution(undefined)
            // default table
            setTableAnswer(defaultTableAnswerState)
            setResultMessage(undefined)
            // default border resultset
            setBorderResultSetAnswer('#97A2B0')

            // change background color
            const newTasksData = [...tasksData]
            newTasksData.find((task) => task.taskId === currentTask.id).backgroundColor = undefined
            newTasksData.find((task) => task.taskId === newTask.id).backgroundColor = '#BDC9DB'
            // save lefted input from textarea
            newTasksData.find((task) => task.taskId === currentTask.id).leftedInput = currentQuery
            // change textarea to previous input
            setCurrentQuery(tasksData.find((task) => task.taskId === newTask.id).leftedInput)
            setTasksData(newTasksData)

            // change current task
            setCurrentTask(newTask);
        }
    }

    function changeTaskById(id) {
        let task = tasksData.find((task) => parseInt(task.taskId) === id)
        if (task !== undefined) {
            changeTask({id: task.taskId, description: task.description})
        }
    }

    return (
        <div className="App">
            <div className="first_column">
                <TableStructure/>
                <div className="tasks_list">
                    <TaskList data={tasksData} clickEvent={changeTask}/>
                </div>
            </div>
            <div className="second_column">
                <TaskDescription prevTask={() => changeTaskById(parseInt(currentTask.id) - 1)}
                                 nextTask={() => changeTaskById(parseInt(currentTask.id) + 1)}
                                 solution={currentTaskSolution} text={currentTask.description}
                                 getSolution={() => getTaskSolution(currentTask.id)}/>
                <div className="sql_input_div">
                    <textarea value={currentQuery} className="sql_input_field"
                              onInput={event => setCurrentQuery(event.target.value)}
                              placeholder={"Write your SQL query here"}>
                    </textarea>
                    <button className="submit_button" onClick={() => executeSql(currentQuery)}>Submit</button>
                </div>
                <ResultSet message={resultMessage} answer={currentTableAnswer} borderColor={borderResultSetAnswer}/>
            </div>
        </div>
    );
}

export default App;
