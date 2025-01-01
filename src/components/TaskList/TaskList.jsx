import React from 'react'

function TaskList() {
    return (

        <div id='tasklist'  className='h-[55%] overflow-x-auto flex gap-5 justify-start items-center flex-nowrap  w-full py-5  mt-10'>
           
            <div className='h-full flex-shrink-0 w-[300px] bg-red-400 rounded-xl p-5 '>
                 <div className='flex  justify-between items-center'>
                     <h3 className='bg-red-600 px-3 text-sm py-1 rounded'>  High </h3>
                     <h4 className='text-sm'>20 feb 2024</h4>
                 </div>
                 <h2 className='mt-5 text-2xl font-semibold'> Make A Youtube Vedio </h2>
                 <p className='text-sm mt-2 '>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quidem natus officiis quisquam eveniet cumque.
                 </p>
            </div>

            <div className='h-full flex-shrink-0 w-[300px] bg-green-400 rounded-xl p-5 '>
                 <div className='flex  justify-between items-center'>
                     <h3 className='bg-red-600 px-3 text-sm py-1 rounded'>  High </h3>
                     <h4 className='text-sm'>20 feb 2024</h4>
                 </div>
                 <h2 className='mt-5 text-2xl font-semibold'> Make A Youtube Vedio </h2>
                 <p className='text-sm mt-2 '>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quidem natus officiis quisquam eveniet cumque.
                 </p>
            </div>

            <div className='h-full flex-shrink-0 w-[300px] bg-blue-400 rounded-xl p-5 '>
                 <div className='flex  justify-between items-center'>
                     <h3 className='bg-red-600 px-3 text-sm py-1 rounded'>  High </h3>
                     <h4 className='text-sm'>20 feb 2024</h4>
                 </div>
                 <h2 className='mt-5 text-2xl font-semibold'> Make A Youtube Vedio </h2>
                 <p className='text-sm mt-2 '>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quidem natus officiis quisquam eveniet cumque.
                 </p>
            </div>

            <div className='h-full flex-shrink-0 w-[300px] bg-yellow-400 rounded-xl p-5 '>
                 <div className='flex  justify-between items-center'>
                     <h3 className='bg-red-600 px-3 text-sm py-1 rounded'>  High </h3>
                     <h4 className='text-sm'>20 feb 2024</h4>
                 </div>
                 <h2 className='mt-5 text-2xl font-semibold'> Make A Youtube Vedio </h2>
                 <p className='text-sm mt-2 '>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quidem natus officiis quisquam eveniet cumque.
                 </p>
            </div>



        </div>
    )
}

export default TaskList