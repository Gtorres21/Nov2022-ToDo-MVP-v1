import React, { useState, useEffect } from 'react'
import Column from '../components/Column'

const Display = () => {

    const {tasks, setTasks} = useState([]);

    const item1={
        id: "1",
        task:"Task 1 "
        
    }
    const item2 = {
        id: "2",
        task:"Task 2 "
        
    }
    const item3 = {
        id: "3",
        task:"Task 3 "
        
    }

    const [cols, setCols] = useState({ 
        "To-Do":{
            name: "To Do",
            tasks:[item1, item2, item3]},
        "In-Progress":{
            name:"In-Progress",
            tasks:[]
        },
        "completed":{
            name:"Completed",
            tasks:[]
        }
    });



    return (
        <>
            <Column cols={cols} setCols={setCols}/>
        </>
            
    )
}

export default Display