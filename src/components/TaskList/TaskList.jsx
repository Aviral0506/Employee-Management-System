import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='flex h-[85%] w-full mt-10 justify-start items-center gap-5 flex-nowrap overflow-x-auto'>
      <div className='rounded-lg bg-yellow-500 flex-shrink-0 p-5 h-full w-[330px]'>
          <div className='flex justify-between items-center px-3 py-1'>
            <h3 className='text-sm px-3 py-1 bg-red-600 rounded'>High</h3>
            <h4 className='text-sm text-white'>10 July 2025</h4>
          </div>
          <h2 className='mt-5 text-white'>Play a Game</h2>
      </div>
      <div className='rounded-lg bg-red-500 flex-shrink-0 h-full w-[330px] p-5'>
          <div className='flex justify-between items-center px-3 py-1'>
                                                    
          </div>
      </div>
      <div className='rounded-lg bg-green-500 flex-shrink-0 h-full w-[330px]'>
          
      </div>
      <div className='rounded-lg bg-blue-500 flex-shrink-0 h-full w-[330px]'>
          
      </div>
      <div className='rounded-lg bg-yellow-500 flex-shrink-0 h-full w-[330px]'>
          
      </div>  


    </div>
  )
}

export default TaskList
