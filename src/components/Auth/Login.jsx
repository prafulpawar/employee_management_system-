import React, { useState } from 'react'

function Login() {

    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')

   const submitHandler = (e)=>{
      e.preventDefault();
      setEmail("")
      setPassword("")
      console.log("email is",email)
      console.log("password is",password)
   }

    return (
        <div className='flex h-screen w-screen justify-center items-center'  >

            <div className='border-2 rounded-xl border-emerald-600 p-20'>

                <form onSubmit={(e)=>{
                    submitHandler(e);
                }}

                  className='flex flex-col items-center justify-center' >
                    <input value={email} onChange={(e)=>{setEmail(e.target.value)}}   required className=' outline-none bg-transparent border-2 border-emerald-600 rounded-full text-xl py-3 px-5  placeholder:text-gray-400 ' type="email" placeholder='Enter Your Email' />
                    <input value={password} onChange={(e)=>{setPassword(e.target.value)}}  required className='outline-none bg-transparent border-2 border-emerald-600 rounded-full text-xl py-3 px-5  placeholder:text-gray-400 mt-4 ' type="password" placeholder='Enter Your Password' />
                    <button className='mt-5 text-white border-none outline-none  bg-emerald-600 text-xl py-3 px-5 rounded-full' >  
                    
                      Login</button>
                </form>
            </div>

        </div>
    )
}

export default Login