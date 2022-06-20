import Image from "next/image";
import React,{useState} from "react";
import MyDialog from './ModelImage'

export default function Guide() {
  var [isOpen, setIsOpen] = useState(false)

  return (<>
    <div className=" w-full rounded-2xl bg-white p-2 mt-8 px-4 shadow-sm relative">
      <div className="flex flex-col items-center bg-white rounded-lg   md:flex-row w-full  ">
        <div className=" w-auto h-[253px]  md:h-auto md:w-[40%] ">
        <img
          className="object-coverrounded-t-lg md:rounded-none md:rounded-l-lg"
          src={"/MaskGroup33.png"}
          alt=""
        /></div>
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-[18px] font-bold tracking-tight text-gray-900 dark:text-white">
          1- Add Sustainability Icons
          </h5>
          <p className="mb-3 text-[16px] font-normal text-gray-700 dark:text-gray-400">
          1- Select all sustainability icons that apply to all of your products.
          </p>
          <p className="mb-3 text-[16px] font-normal text-gray-700 dark:text-gray-400">
          2- Upload your proof document.
          </p>
          <p className="mb-3 text-[16px] font-normal text-gray-700 dark:text-gray-400">
          3- Now you can add the icons to your products!  
          </p>
          <p className="mb-3 text-[16px] font-normal text-gray-700 dark:text-gray-400">
          4- You can always edit sustainability icons & upload their proof document.
          </p>
         
        

        </div>
      </div>
        <button className="absolute top-4 right-4 " onClick={()=>setIsOpen(true)}>
          <img width={18} height={18} src={"/screen.svg"} alt="screen" />
        </button>
      </div>
      <MyDialog  isOpen={isOpen}  setIsOpen={setIsOpen}  />

</>
  );
}