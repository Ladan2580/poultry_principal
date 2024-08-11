import React from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Link} from 'react-router-dom';
import { IoMail } from 'react-icons/io5';
import { FaWallet, FaWhatsapp } from 'react-icons/fa';
import pic1 from '../../asset/pic1.jpg'
import pic2 from '../../asset/pic2.jpg'
import pic3 from '../../asset/pic3.jpg'
import pic4 from '../../asset/pic4.jpg'
import pic5 from '../../asset/pic5.jpg'
import pic6 from '../../asset/pic6.jpg'
import pic7 from '../../asset/pic7.jpg'
import pic8 from '../../asset/pic8.jpg'
import pic9 from '../../asset/pic9.jpg'
import pic10 from '../../asset/pic10.jpg'
import pic11 from '../../asset/pic11.jpg'
import pic12 from '../../asset/pic12.jpg'
import pic13 from '../../asset/pic13.jpg'
import pic14 from '../../asset/pic14.jpeg'
import pic16 from '../../asset/pic16.jpg'
import pic21 from '../../asset/pic21.webp'
import pic22 from '../../asset/nut.webp'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Main_dashbord() {

  // first Bank

  return (
    <section className='flex-1  font-mono ' >

<div className=' italic font-mono animate-pulse text-sm h-70 md:h-40 text-justify flex justify-center items-start shadow-2xl bg-slate-50 m-2 p-2'>
Welcome to Nusad global Ventures, we specialize in the safe and reliable shipping of poultry, livestock, and farm products. Our commitment to quality ensures that your products arrive fresh and on time, every time. Whether you're a small farmer or a large agricultural enterprise, we are dedicated to supporting your business with top-tier logistics solutions tailored to your needs. Trust us to be your partner in delivering excellence from farm to table.


  </div>

<div className='grid grid-cols-2 gap-10'>

  <div className=' col-span-2 md:col-span-1 p-5 m-2 flex justify-between items-center bg-slate-200 '>
    <div className='flex flex-col'>
      <p className=''>We sells chikens at affordable price</p>
      <button className='hover:bg-green-300 bg-green-500 text-white w-3/5 mt-2 h-16 p-2 rounded-md'>Order now!</button>
      
      </div>
      <img src={pic2} className='h-5/6' />
  </div>
  
  <div className=' col-span-2 md:col-span-1 p-5 m-2 flex justify-between items-center bg-slate-200 '>
    <div className='flex flex-col'>
      <p className=''>We sells eggs in bulk to both whole sellers and retailers</p>
      <button className='hover:bg-green-300 bg-green-500 text-white mt-2 w-4/5 h-16 p-2 rounded-md'>Order now!</button>
      
      </div>
      <img src={pic3} className='h-5/6' />
  </div>
  <div className=' col-span-2 md:col-span-1 p-5 m-2 flex justify-between items-center bg-slate-200 '>
    <div className='flex flex-col'>
      <p className=''>Egg of all variety are also available</p>
      <button className='hover:bg-green-300 bg-green-500 text-white w-3/5 mt-2 h-16 p-2 rounded-md'>Order now!</button>
      
      </div>
      <img src={pic16} className='w-4/5' />
  </div>


  <div className=' col-span-2 md:col-span-1 p-5 m-2 flex justify-between items-center bg-slate-200 '>
    <div className='flex flex-col'>
      <p className=''>We sells all variety of local chikens</p>
      <button className='hover:bg-green-300 bg-green-500 text-white w-3/5 mt-2 h-16 p-2 rounded-md'>Order now!</button>
      
      </div>
      <img src={pic4} className='w-4/5' />
  </div>

  <div className=' col-span-2 md:col-span-1 p-5 m-2 flex justify-between items-center bg-slate-200 '>
    <div className='flex flex-col'>
      <p className=''>We sells all variety of cows </p>
      <button className='hover:bg-green-300 bg-green-500 text-white w-3/5 mt-2 h-16 p-2 rounded-md'>Order now!</button>
      
      </div>
      <img src={pic5} className='w-4/6' />
  </div>

  <div className=' col-span-2 md:col-span-1 p-5 m-2 flex justify-between items-center bg-slate-200 '>
    <div className='flex flex-col'>
      <p className=''>We sells all variety of goats</p>
      <button className='hover:bg-green-300 bg-green-500 text-white w-3/5 mt-2 h-16 p-2 rounded-md'>Order now!</button>
      
      </div>
      <img src={pic7} className='w-4/5' />
  </div>
  <div className=' col-span-2 md:col-span-1 p-5 m-2 flex justify-between items-center bg-slate-200 '>
    <div className='flex flex-col'>
      <p className=''>All sells forms of spicies ingredients</p>
      <button className='hover:bg-green-300 bg-green-500 text-white w-3/5 mt-2 h-16 p-2 rounded-md'>Order now!</button>
      
      </div>
      <img src={pic8} className='w-4/5 h-4/5' />
  </div>
  <div className=' col-span-2 md:col-span-1 p-5 m-2 flex justify-between items-center bg-slate-200 '>
    <div className='flex flex-col'>
      <p className=''> We sells all forms of fresh and dry gingers</p>
      <button className='hover:bg-green-300 bg-green-500 text-white w-3/5 mt-2 h-16 p-2 rounded-md'>Order now!</button>
      
      </div>
      <img src={pic6} className='w-4/5 h-3/6' />
  </div>
  <div className=' col-span-2 md:col-span-1 p-5 m-2 flex justify-between items-center bg-slate-200 '>
    <div className='flex flex-col'>
      <p className=''>We also sells Cloves</p>
      <button className='hover:bg-green-300 bg-green-500 text-white w-3/5 mt-2 h-16 p-2 rounded-md'>Order now!</button>
      
      </div>
      <img src={pic9} className='w-4/5' />
  </div> 
  <div className=' col-span-2 md:col-span-1 p-5 m-2 flex justify-between items-center bg-slate-200 '>
    <div className='flex flex-col'>
      <p className=''>we sells fresh and dry Galic</p>
      <button className='hover:bg-green-300 bg-green-500 text-white w-3/5 mt-2 h-16 p-2 rounded-md'>Order now!</button>
      
      </div>
      <img src={pic10} className='w-4/5 h-4/6' />
  </div> 
  <div className=' col-span-2 md:col-span-1 p-5 m-2 flex justify-between items-center bg-slate-200 '>
    <div className='flex flex-col'>
      <p className=''>we sells red pepper</p>
      <button className='hover:bg-green-300 bg-green-500 text-white w-3/5 mt-2 h-16 p-2 rounded-md'>Order now!</button>
      
      </div>
      <img src={pic11} className='w-4/5 h-4/6' />
  </div> 
  <div className=' col-span-2 md:col-span-1 p-5 m-2 flex justify-between items-center bg-slate-50 '>
    <div className='flex flex-col'>
      <p className=''>We sells fresh and dry Tomatoes</p>
      <button className='hover:bg-green-300 bg-green-500 text-white w-3/5 mt-2 h-16 p-2 rounded-md'>Order now!</button>
      
      </div>
      <img src={pic12} className='w-4/5 h-4/6' />
  </div> 
  <div className=' col-span-2 md:col-span-1 p-5 m-2 flex justify-between items-center bg-slate-200 '>
    <div className='flex flex-col'>
      <p className=''>We sells fresh Onions</p>
      <button className='hover:bg-green-300 bg-green-500 text-white w-3/5 mt-2 h-16 p-2 rounded-md'>Order now!</button>
      
      </div>
      <img src={pic13} className='w-4/5 h-4/6' />
  </div> 
  <div className=' col-span-2 md:col-span-1 p-5 m-2 flex justify-between items-center bg-slate-200 '>
    <div className='flex flex-col'>
      <p className=''>We sells Yam</p>
      <button className='hover:bg-green-300 bg-green-500 text-white w-3/5 mt-2 h-16 p-2 rounded-md'>Order now!</button>
      
      </div>
      <img src={pic14} className='w-4/5 h-4/6' />
  </div>
  <div className=' col-span-2 md:col-span-1 p-5 m-2 flex justify-between items-center bg-slate-200 '>
    <div className='flex flex-col'>
      <p className=''>We sells Rice</p>
      <button className='hover:bg-green-300 bg-green-500 text-white w-3/5 mt-2 h-16 p-2 rounded-md'>Order now!</button>
      
      </div>
      <img src={pic21} className='w-4/5 h-4/6' />
  </div>

  <div className=' col-span-2 md:col-span-1 p-5 m-2 flex justify-between items-center bg-slate-200 '>
    <div className='flex flex-col'>
      <p className=''>We sells Groundnut</p>
      <button className='hover:bg-green-300 bg-green-500 text-white w-3/5 mt-2 h-16 p-2 rounded-md'>Order now!</button>
      
      </div>
      <img src={pic22} className='w-4/5 h-4/6' />
  </div>

</div>
    </section>

  )
}
