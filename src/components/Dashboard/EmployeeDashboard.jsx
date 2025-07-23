import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (elem) => {

  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        
        <Header changeUser={elem.changeUser} firstName={elem.data?.firstName}/>
        <TaskListNumbers data={elem.data} />
        <TaskList data={elem.data} />
    </div>
  )
}

export default EmployeeDashboard