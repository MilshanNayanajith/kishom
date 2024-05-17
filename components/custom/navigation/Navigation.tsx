import React from 'react'
import Image from "next/image";
import logo from "@/public/logo.svg";
type Props = {}

const Navigation = (props: Props) => {
  return (
    <div className="flex justify-between z-50 bg-white h-nav">
     <div className='my-auto mx-10'>
     <Image src={logo} alt="Logo" />
     </div>
     <div className=' hidden lg:flex justify-center align-middle px-10'>
      <ul className=' flex float-left gap-10  m-auto cursor-pointer'>
        <li className=' text-snd hover:text-snd'>Home</li>
        <li className=' hover:text-snd'>About Us</li>
        <li className=' hover:text-snd'>Services</li>
        <li className=' hover:text-snd'>Resources</li>
        <li className=' hover:text-snd'>Gallery</li>
        <li className=' hover:text-snd'>FAQs</li>
        <li className=' hover:text-snd'>Contact Us</li>
        <li className=' hover:text-snd'>Policies</li>
      </ul>
     </div>
    </div>
  )
}

export default Navigation