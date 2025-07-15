import React from 'react'

const CreateTask = () => {
  return (
      <div className='mt-10'>
        <form className='text-black flex flex-col gap-4 bg-purple-200 p-6 rounded shadow-md'>
          {/* Task Title and Suggestion Side by Side */}
          <div className='flex flex-row w-full gap-6'>
            {/* Task Title */}
            <div className='flex flex-col flex-1'>
              <label className='text-sm font-semibold mb-1'>Task Title</label>
              <input
                type='text'
                name='task'
                placeholder='Make a UI Design'
                className='p-2 rounded text-black'
              />
            </div>
            {/* Suggestion */}
            <div className='flex flex-col flex-1'>
              <label className='text-sm font-semibold mb-1'>Suggestion</label>
              <textarea
                placeholder='design, dev etc..'
                className='p-2 rounded text-black resize-none h-full'
              />
            </div>
          </div>
          {/* Other Fields Below Task Title */}
          <div className='flex flex-col gap-4 mt-4 w-1/2'>
            <div className='flex flex-col'>
              <label className='text-sm font-semibold mb-1'>Date</label>
              <input type='date' className='p-2 rounded text-black' />
            </div>
            <div className='flex flex-col'>
              <label className='text-sm font-semibold mb-1'>Assign to</label>
              <input
                type='text'
                placeholder='Employee name'
                className='p-2 rounded text-black'
              />
            </div>
            <div className='flex flex-col'>
              <label className='text-sm font-semibold mb-1'>Category</label>
              <input
                type='text'
                placeholder='design, dev etc..'
                className='p-2 rounded text-black'
              />
            </div>
          </div>
        </form>
      </div>
  )
}

export default CreateTask
