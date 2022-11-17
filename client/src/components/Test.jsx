import React from 'react'
import _ from 'lodash'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import styles from './Test.module.css'


const Test = ({ columns, setColumns}) => {


    
    function handleOnDragEnd(result){
        console.log(result)
        console.log("from", result.source);
        console.log("to", result.destination);

        if (!result.destination){
            console.log("not in droppable area")
            return
        }
        if (result.destination.index === result.source.index && result.destination.droppableId === result.source.droppableId){
            console.log("dropped in same area")
            return
        }

        const replicatedTask = {...columns[result.source.droppableId].tasks[result.source.index]}

        setColumns(old => {
            old= {...old}
            // Removing from previous Task Array
            old[result.source.droppableId].tasks.splice(result.source.index, 1)
            // Add to new tasks array column
            old[result.destination.droppableId].tasks.splice(result.destination.index, 0, replicatedTask)
            return old;
        })
    }



    return (
        <div className={styles.main}>
            <DragDropContext onDragEnd={handleOnDragEnd}>

            {
                _.map(columns,(column, key)=>{
                    return (
                        <div key={key}
                        className={styles.column}>
                            {/* {console.log('COLUMN: ', column, 'KEY: ', key)} */}
                            <h1>{column.name}</h1>

                            <Droppable droppableId={key}>
                                {(provided)=> {
                                    return(
                                        <div
                                        className={styles.innerCol}
                                        {...provided.droppableProps}
                                        ref={provided.innerRef}
                                        >
                                            {
                                                column.tasks.map((element, index)=>{
                                                    return(
                                                        <Draggable key={element._id}
                                                        index={index}
                                                        draggableId={element._id}>
                                                            {(provided)=>{
                                                                return(
                                                                    <div
                                                                    className={styles.content}
                                                                    ref={provided.innerRef}
                                                                    {...provided.dragHandleProps}
                                                                    {...provided.draggableProps}
                                                                    >
                                                                        {element.item}
                                                                    </div>
                                                                )

                                                            }}
                                                        </Draggable>
                                                    )
                                                })
                                            }
                                        
                                        
                                            {provided.placeholder}
                                        </div>
                                    )

                                }}
                            </Droppable>
                        </div>
                    )} 
                    )}
            </DragDropContext>
        </div>
    )
}

export default Test