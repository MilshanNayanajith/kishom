'use client'
import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";
import lineArt from "@/public/hero-line-art.svg";
import delivery from "@/public/delivery.svg";
import explore from "@/public/explore.svg";
import text from "@/public/text.svg";
import icon from "@/public/icon.svg";

type Props = {}

const Hero = (props: Props) => {

    const handleGetAQuoteFunc = ()=>{
      //you can add your validation here.
      console.log('GET A QUOTE function is working.')
    }

    const handleViewCusFdBckFunc = ()=>{
        //you can add your validation here.
        console.log('Customer feedback function working...')
    }

    return (
        <div className="relative">
          {/* this is the line art */}
          <div className=" hidden md:block absolute z-20 ">
            <Image className="w-full" src={lineArt} alt="Description" />
          </div>
          {/* The hero devided to two areas */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/*  */}
            <div className="flex justify-center align-middle p-6 md:p-10 md:rounded-es-[50px] bg-pry">
              <div className="m-auto pt-1 md:pt-20 ps-6 md:ps-10 z-30">
                <Image className="mt-10 w-full" src={text} alt="Description" />
                <p className="mt-10 font-semibold text-center md:text-left">
                  Don't just move, KISHOM it!
                </p>
                <p className="mt-2 font-semibold text-center md:text-left">
                  Efficient moves, delivered with care.
                </p>
                <div className="flex justify-center md:justify-start mt-10">
                  <Button onClick={handleGetAQuoteFunc} size="lg">GET A QUOTE</Button>
                </div>
              </div>
            </div>
    
            {/*  */}
            <div className="bg-pry relative flex  align-bottom justify-end">
              <div className="z-30 relative h-fit">
                <Image
                  className=" absolute top-10 h-28 md:h-fit left-[-60px] md:top-[20%] md:left-[5%]"
                  src={icon}
                  alt="Description"
                />
                <Image
                  className=" w-[300px] md:w-full"
                  src={delivery}
                  alt="Description"
                />
              </div>
    
              {/* <div className="relative z-10 hidden md:block bg-black"> */}
    
              <div onClick={handleViewCusFdBckFunc} className=" z-30 absolute bottom-[-10px] md:bottom-5 right-5 bg-white-transparent hover:bg-white hover:scale-[0.9] cursor-pointer  grid grid-cols-3 gap-4 md:gap-8 p-3 md:p-5 rounded-3xl">
                <div className=" bg-black p-1 md:p-2 rounded-md flex justify-center align-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className=" w-8 h-8 md:w-10 md:h-10 text-white m-auto"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                    />
                  </svg>
                </div>
                <div className=" col-span-2">
                  <h1 className=" text-gray-500 font-semibold text-2xl">100+</h1>
                  <p className=" text-gray-500">Customer Feedbacks</p>
                </div>
              </div>
            </div>
          </div>
    
          <div className="p-4 z-20 h-20 md:h-fit bg-pry relative md:absolute md:bottom-[-120px] md:right-[40%] md:rounded-full flex justify-center">
            <Image
              className=" h-36 w-36 md:h-fit md:w-fit bg-pry md:bg-transparent p-5  md:p-0 rounded-full md:rounded-none hover:scale-[0.95] absolute md:relative"
              src={explore}
              alt="Description"
            />
          </div>
        </div>
      );
}

export default Hero