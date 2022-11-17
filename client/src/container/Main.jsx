import React, { useState, useEffect } from 'react'
import Test from '../components/Test'
import axios from 'axios'
import Input from '../components/Input'

const Main = () => {

    const[tasks, setTasks] = useState([])

    const [columns, setColumns] = useState({
        "to-do":{
            name:"To Do",
            tasks:[]
        },
        "in-progress":{
            name:"In-Progress",
            tasks:[]
        },
        "completed":{
            name:"Completed",
            tasks:[]
        }
    })


    useEffect(()=> {
        axios.get("http://localhost:8000/api/task")
        .then(res => {
            console.log(res.data)
            setTasks(res.data)
            setColumns({
                "to-do":{
                    name:"To Do",
                    tasks: res.data
                },
                "in-progress":{
                    name:"In-Progress",
                    tasks: []
                },
                "completed":{
                    name:"Completed",
                    tasks: []
                }
            })
        })
        .catch(err => {
            console.log(err)
        })
    }, [])


    return (
        <>
            <Test tasks={tasks} setTasks={setTasks} columns={columns} setColumns={setColumns}/>
            <Input tasks={tasks} setTasks={setTasks} columns={columns} setColumns={setColumns}/>
        </>
            
    )
}

export default Main