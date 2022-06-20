import Image from "next/image";

export default function TotalCard({ empty }) {
  return (
    <div className="flex flex-wrap md:justify-between justify-center">
 
      <div className="  lg:w-[33%]  w-full h-[122px] px-3  py-3 ">
        <div className="relative flex flex-wrap justify-between  rounded-[14px] bg-[#F3D030]  border shadow-md flex-row  h-full w-full ">
          <div className="flex flex-col justify-between p-4 pl-7 leading-normal">
            <h5 className="mb-1 text-2xl font-bold tracking-tight text-white dark:text-white">
              {empty ? "€ 0" : "€ 100"}
            </h5>
           
            {!empty ? ( <p className="mt-2 font-normal text-white dark:text-white">
            Pending Donation</p>) : (
             <p className="pb-5 font-normal text-white dark:text-white">
             Pending Donation
            
            <span className="block text-xs ">
            You Earned
            </span></p>
            ) }  
          </div>
          <div className="flex flex-col justify-between  top-3 right-0  h-auto absolute ">
            <Image
              className=" "
              src={"/bg-TotalCardImg.svg"}
              width={84}
              height={35}
              alt="empty product"
            />
          </div>
        </div>
      </div>
      <div className="  lg:w-[33%]  w-full h-[122px] px-3  py-3 ">
        <div className="relative   flex flex-wrap justify-between rounded-[14px]  	 bg-[#3D897A]  border shadow-md flex-row h-full w-full ">
          <div className="flex flex-col justify-between p-4 pl-7 leading-normal">
            <h5 className="mb-1 text-2xl font-bold tracking-tight text-white dark:text-white">
              {empty ? "€ 0" : "€ 2.4 K"}
            </h5>
           
            {!empty ? ( <p className="mt-2 font-normal text-white dark:text-white">
            Received Donation</p>) : (
             <p className="pb-5 font-normal text-white dark:text-white">
             Received Donation
            
            <span className="block text-xs ">
            You Earned
            </span></p>
            ) } 
          </div>
          <div className="flex flex-col justify-between  top-3 right-0  h-auto absolute ">
            <Image
              className=" "
              src={"/bg-TotalCardImg.svg"}
              width={84}
              height={35}
              alt="empty product"
            />
          </div>
        </div>
      </div>
      <div className="  lg:w-[33%]  w-full h-[122px] px-3  py-3 ">
        <div className="relative flex flex-wrap justify-between  rounded-[14px]  	 bg-[#EE6363]  border shadow-md  flex-row   h-full w-full">
          <div className="flex flex-col justify-between p-4 pl-7 leading-normal">
            <h5 className="mb-1 text-2xl font-bold tracking-tight text-white dark:text-white">
              {empty ? "€ 0" : "€ 2.5 K"}
            </h5>
          
            {!empty ? ( <p className="mt-2 font-normal text-white dark:text-white">
            Total Dontions</p>) : (
             <p className="pb-5 font-normal text-white dark:text-white">
             Total Dontions
            
            <span className="block text-xs ">
            You Earned
            </span></p>
            ) }  
            
          </div>
          <div className="flex flex-col justify-between  top-3 right-0  h-auto absolute ">
            <Image
              className=" "
              src={"/bg-TotalCardImg.svg"}
              width={84}
              height={35}
              alt="empty product"
            />
          </div>    
        </div>
      </div>
    </div>
  );
}
