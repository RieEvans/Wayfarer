import React from 'react'
import { Link } from 'react-router-dom'

export const PrepareAds = () => {
  return (
    <div className={`bg-[url("dotsbg4.svg")] bg-no-repeat bg-right shadow-xl  mt-10 flex items-center justify-center bg-emerald-300 rounded-[2rem]`}>
        <div className='p-10 flex flex-col items-center'>
            <h1 className='sm:text-justify md:text-center sm:text-2xl md:text-3xl xl:text-5xl text-slate-800 font-semibold'>Prepare Yourself & Let's Explore</h1>
            <h1 className='sm:text-justify md:text-center sm:text-2xl md:text-3xl xl:text-5xl mt-2 text-slate-800 font-semibold'>The Beauty of the world</h1>

            <p className='text-center text-gray-500 mt-5'>We have special offers expecially for you</p>
            
            <button className='flex items-center justify-center mt-5 '>
                    <Link to='/service' className='px-5 py-3 bg-slate-900 text-emerald-400 rounded-[1.5rem] font-semibold'>Get Started</Link>
            </button>
                
        </div>
    </div>
  )
}
