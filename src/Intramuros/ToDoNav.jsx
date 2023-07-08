import React from 'react'
import { Link } from 'react-router-dom'

export const ToDoNav = () => {
  return (
    <nav className='shadow-lg w-full  z-50 bg-white mt-0 flex justify-between items-center p-5 mb-20'>
        <div className="flex text-4xl items-center  gap-2">
          <ion-icon name="logo-amplify" className=""></ion-icon>
          <h1 className="sm:text-2xl md:text-4xl font-bold">Trippy</h1>
        </div>
        <ul className='flex gap-5 sm:text-sm md:text-[1rem]'>
            <a className='flex sm:hidden md:block items-center justify-center bg-emerald-400 font-semibold sm:p-[.5rem] md:p-2 rounded-lg cursor-pointer' href="#">Destination</a>
            <Link to = '/' className='bg-emerald-400 flex items-center justify-center sm:p-[.5rem] md:p-2 font-semibold cursor-pointer rounded-lg text-center  '>Back to Home page</Link>
        </ul>
    </nav>
  )
}
