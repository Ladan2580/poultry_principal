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
import cac from '../../asset/pic21.jpg'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Main_dashbord() {

  // first Bank

  return (
<section className='flex-1  font-mono ' >
<div className=' italic font-mono animate-pulse text-sm h-70 md:h-60 text-justify flex justify-center items-start shadow-2xl bg-slate-50 m-4 p-4'>
Nusad Global Ventures is a leading logistics company specializing in the safe and reliable shipping of poultry, livestock, and farm products. Our mission is to ensure that your agricultural products reach their destination fresh and on time, whether you're a small farmer or a large agricultural enterprise. We understand the importance of quality and efficiency in the agricultural supply chain, and we are committed to delivering excellence from farm to table.

Our company is proudly registered with the Corporate Affairs Commission (CAC), underscoring our commitment to operating with transparency and integrity. At Nusad Global Ventures, we tailor our logistics solutions to meet the unique needs of each client, offering a seamless experience that supports your business growth.

Trust us to be your partner in achieving success by providing top-tier logistics services that prioritize your products' safety, quality, and timely delivery.


  </div>

  <div className=' flex justify-center items-center mb-64'>
      <img src={cac} className='h-5/6' />
  </div>
  
    </section>

  )
}
