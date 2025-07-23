import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
    return (
        <div id='tasklist' className='h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16'>
            {data.tasks.map((Element,idx) =>{
                if(Element.active){
                    return <AcceptTask key = {idx} data = {Element}/>
                }
                if(Element.newTask){
                    return <NewTask key = {idx} data = {Element}/>
                }
                if(Element.completed){
                    return <CompleteTask key = {idx} data = {Element}/>
                }
                if(Element.failed){
                    return <FailedTask key = {idx} data = {Element}/>
                }
            })}
        </div>
    )
}

export default TaskList