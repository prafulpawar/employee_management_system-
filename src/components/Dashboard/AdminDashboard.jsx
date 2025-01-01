import React from 'react'
import Header from '../Other/Header'

function AdminDashboard() {
  return (
    <div className='h-screen w-full p-10'>
         <Header/>

         <div>
            <form className='flex items-center justify-between ' >

                 <div>
                        <h3>Task Title</h3>
                        <input type="text" placeholder='Make A UI Design' />
                        
                 </div>

                 <div>
                         <h3>Description</h3>
                         <textarea name="" cols="30" rows="10" ></textarea>
                 </div>

                 <div>
                         <h3>Date</h3>
                         <input type="date" />
                 </div>

                 <div>
                          <h3>Asign To</h3>
                          <input type="text" placeholder='Employee Name' />
                 </div>
                 
                 <div>
                             <h3>Category</h3>
                             <input type="text" placeholder='design,dev,etc' />
                 </div>

                 <button>
                       Create Task
                 </button>
                
            </form>
         </div>

    </div>
  )
}

export default AdminDashboard