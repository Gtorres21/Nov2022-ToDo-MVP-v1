import React, { useState } from 'react'
import axios from 'axios';




const Input = ({tasks, setTasks, columns, setColumns }) => {


    const [item, setItem] = useState("");
    
    const createTask = (e) => {
        e.preventDefault();
        console.log(item)
        
        axios.post("http://localhost:8000/api/task", {item: item})
        .then(res => {
            console.log( '✅ Created Task ✅ ')
            console.log('TASKS', tasks)
            console.log('RES:', res.data)

            setTasks([...tasks, res.data])
            setColumns({
                "to-do":{
                    name:"To Do",
                    tasks: [...tasks, res.data]
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
            setItem("");
        })
        .catch(err => {
            console.log(err)
        })
    }


    return (
        <div>
            <input type="text" onChange={e => setItem(e.target.value)} value={item}/>
            <button onClick={createTask}>Add Task</button>
        </div>
    )
}

export default Input