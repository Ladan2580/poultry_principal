import React from 'react'

export default function Main_data() {

  

  return (

    <section className='flex-1 flex justify-center flex-col shadow-2xl  mb-8 items-center rounded-2xl '>
      <div className=' text-justify text-sm m-2 p-2'>Dear valued customer, we are always dedicated in serving you better, our physical address is located at suite E17Melita plaza, off  Gimbiya street, Area 11, Garki, Abua, FCT, or contact us on mobile phone number on 08136378454 or make an inquiry to the email address <span className=' text-blue-600'>support@nusadglobalventure@gmail.com</span></div>
      <div className='bg-white shadow-xl w-10/12 md:w-2/6 flex justify-center rounded-xl text-black mt-10 '>

        <form className=' flex justify-center w-full flex-col'>
          <div className='text-center bg-slate-700 h-10 rounded-lg text-white font-mono text-lg'>Drop us a message</div>
          
          <div className='mt-5 w-full flex justify-center '>
            <input  placeholder='Enter your email address' className='text-center shadow-2xl  border border-gray-800 w-3/4 h-16 rounded-2xl placeholder:text-center appearance-none outline-none font-mono text-sm font-semibold ' type='text' />
          </div>
          <div className='mt-5 w-full flex justify-center '>
            <textarea  placeholder='Drop us a message' className='text-center shadow-2xl  border border-gray-800 w-3/4 h-56 rounded-2xl placeholder:text-center appearance-none outline-none font-mono text-sm font-semibold ' type='text' />
          </div>
          <div className='mt-5 w-full flex justify-center  mb-8'>
            <button type='button' className=' italic text-center bg-slate-800 rounded-2xl h-14 w-3/5  text-white'>Submit</button>
          </div>

        </form>

      </div>
    </section>
  )
}
