import React from 'react'

const TaskListNumbers = () => {
  return (
    <div className='flex justify-between gap-5 mt-10 screen'> 
      <div className='h-40 w-[45%] bg-red-500 px-8 py-10 rounded-xl'>
        <h2 className='text-3xl font-bold text-white'>0</h2>
        <h3 className='text-xl font-medium text-white'>New Task</h3>
      </div>
      <div className='h-40 w-[45%] bg-blue-500 px-8 py-10 rounded-xl'>
        <h2 className='text-3xl font-bold text-white'>0</h2>
        <h3 className='text-xl font-medium text-white'>New Task</h3>
      </div>
      <div className='h-40 w-[45%] bg-green-500 px-8 py-10 rounded-xl'>
        <h2 className='text-3xl font-bold text-white'>0</h2>
        <h3 className='text-xl font-medium text-white'>New Task</h3>
      </div>
      <div className='h-40 w-[45%] bg-yellow-500 px-8 py-10 rounded-xl'>
        <h2 className='text-3xl font-bold text-white'>0</h2>
        <h3 className='text-xl font-medium text-white'>New Task</h3>
      </div>

    </div>
  )
}

export default TaskListNumbers
