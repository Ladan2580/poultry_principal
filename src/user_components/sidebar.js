import React, { useState } from 'react'
import { FaHome,FaWifi,FaGraduationCap,FaSms,FaSatelliteDish,FaGreaterThan } from 'react-icons/fa'
import { TbPhoneCall } from 'react-icons/tb'
import { IoBulb,IoAnalyticsOutline } from 'react-icons/io5'
import { FaCode } from 'react-icons/fa'
import {MdExpandMore, MdExpandLess} from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

export default function Sidebar() {

  const navigate=useNavigate();

  const handleNavigate=(arg)=>{
    navigate(arg);
  }


  const[expand,setExpand]=useState(true)
  const handleExpand=()=> setExpand(!expand);
  const tran_data=[
                //  {label:"Funding History",link:"/user/funding_history"},
                 {label:"walletHistory",link:"/user/wallet_history"},
                 {label:"dataHistory",link:"/user/data_history"},
                 {label:"airtimeHistory",link:"/user/airtime_history"},
                 {label:"cableHistory",link:"/user/cable_history"},
                 {label:"billHistory",link:"/user/bill_history"},
                 {label:"smsHistory",link:"/user/sms_history"},
                 {label:"examPinHistory",link:"/user/education_history"}
                
                 ]

  const Transactions= ()=>{
    return (
      <div className='grid grid-cols-1 px-4'>
    {tran_data.map((item)=>{
      return (
        <li className='ml-2 mt-2 mb-1 italic'onClick={()=>handleNavigate(item.link)}>{item.label}</li>
      )
    })}
      </div>

    )
  }
  return (
    <aside className='h-screen w-2/6 md:w-1/6  col-span-1 rounded-lg text-white cursor-pointer overflow-y-auto bg-slate-900 px-4'>
        <section className='p-2'>
          <div className='flex justify-start'onClick={()=>handleNavigate('/')}>
            <div className='mt-2 '>Home</div>
          </div>

          <div className='flex justify-start'onClick={()=>handleNavigate('/about')}>
            <div className='mt-2 '>About Us</div>
          </div>

         
          <div className='flex justify-start'onClick={()=>handleNavigate('/contact')}>
          <div className='mt-2 '>Contact Us</div>
          </div>
          <div className='flex justify-start'onClick={()=>handleNavigate('/login')}>
          <div className='mt-2 '>Sign In</div>
          </div>

          <div className='flex justify-start'onClick={()=>handleNavigate('/register')}>
          <div className='mt-2 '>Sign Up</div>
          </div>
        </section>
    </aside>
  )
}
