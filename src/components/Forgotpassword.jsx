import React from 'react'
import loginImg from '../assets/login.png'

export default function Forgotpassword() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
    <div className='flex items-center hidden sm:block bg-gray-800 flex flex-col justify-center'>
    <img className='max-w-[400px] w-full mx-auto mt-36 bg-transparent p-10 px-10 rounded-lg animate-pulse hover:animate-spin' src={loginImg} alt="" />
    <h2 className='flex justify-center text-teal-300 py-2 text-4xl'> <h2 className='flex justify-center  text-pink-500 py-0 text-4xl'>MID</h2>CONNECT</h2>
    </div >
    <div className='bg-gray-800 flex flex-col justify-center'>
      <form className='max-w-[400px] mb-20 w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg'>
          <h2 className='text-4xl dark:text-white font-bold text-center'>Reset Password</h2>
          <div className='flex flex-col text-gray-400 py-2'>
          <span>Enter Username or Email-ID</span>
              <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type ="text,email" required="required" />    
          </div>
          <div className='flex flex-col text-gray-400 py-2'>
          <span>Create New Password</span>
              <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type ="password" required="required" />    
          </div>
          <div className='flex flex-col text-gray-400 py-2'>
          <span>Confirm Password</span>
              <input className=' p-2 rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500  focus:bg-gray-800 focus:outline-none' type ="password" required="required" />
              <i></i>
          
          </div>

          <input className='w-full my-5 py-2 bg-teal-500 shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg' type ="submit" value ="Reset Password" />

      </form>

   </div>
  </div>
  )
}
