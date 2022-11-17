import React from 'react';
import _ from 'lodash'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import '../App.css';

const Column = ({cols, setCols}) => {


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

        const replicatedTask = {...cols[result.source.droppableId].tasks[result.source.index]}

        setCols(old => {
            old= {...old}
            // Removing from previous Task Array
            old[result.source.droppableId].tasks.splice(result.source.index, 1)
            // Add to new tasks array column
            old[result.destination.droppableId].tasks.splice(result.destination.index, 0, replicatedTask)

            return old;
        })
    }


    return (
            <div 
            className="all_columns">
                <DragDropContext onDragEnd={handleOnDragEnd}>
                    {
                        _.map(cols, (col, objKey)=> {
                            return (
                                <div key={objKey} className={"column"}> 
                                    
                                    <h3>{col.name} </h3>
                                    
                                <Droppable droppableId={objKey}>
                                    {(provided, snapshot) => {
                                        return(
                                            <div 
                                            {...provided.droppableProps} 
                                            ref={provided.innerRef} 
                                            className={"inner-column"}>                                                
                                                {
                                                    col.tasks.map((element, index)=>{
                                                        return(
                                                            <Draggable key={element.id} index={index} draggableId={element.id} >
                                                                {/* Make this a Component */}
                                                                {(provided)=>{
                                                                    return(
                                                                        <div
                                                                        className="column-content"
                                                                        ref={provided.innerRef} 
                                                                        {...provided.draggableProps}
                                                                        {...provided.dragHandleProps}>

                                                                            {element.task}
                                                        
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
                            
                            
                            )
                            
                        })
                    }
                </DragDropContext>
            </div>
    )
}

export default Column