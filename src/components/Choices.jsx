import React from 'react'

export const Choices = () => {
  return (
    <div className='sm:grid sm:grid-cols-1  md:flex items-center justify-around gap-5 content-center justify-items-center mt-10  w-full relative overflow-hidden '>

        <div className='border-2 border-slate-900 w-[250px] rounded-lg shadow-2xl p-5 ssm:ms-24 md:m-0  '>
            <div className='w-[100px]'>
                <img className='w-full h-full object-cover' src="/images/world.jpg" alt="" />
            </div>

            <div className='border-t-2 mt-5'>
                <span>Lots of Choices</span>
                <p>Total 460+ destionations that we work with.</p>
            </div>
        </div>

        <div className='border-2 border-slate-900 w-[250px] rounded-lg shadow-xl p-5 ssm:-ms-24 md:m-0   '>
            <div className='w-[100px]'>
                <img className='w-full h-full object-cover' src="/images/tour.jpg" alt="" />
            </div>

            <div className='border-t-2 mt-5'>
                <span >Best Tour Guide</span>
                <p className='line-clamp-3'>Our Tour Guide with 15+ years of Experience</p>
            </div>
        </div>

        <div className='border-2 border-slate-900 w-[250px] rounded-lg shadow-xl p-5 ssm:ms-24 md:m-0  '>
            <div className='w-[100px]'>
                <img className='w-full h-full object-cover' src="/images/booking.jpg" alt="" />
            </div>

            <div className='border-t-2 mt-5'>
                <span>Easy Booking</span>
                <p>With an easy and fast ticket process</p>
            </div>
        </div>
        
    </div>
  )
}
