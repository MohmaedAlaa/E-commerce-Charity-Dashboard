import { Doughnut } from "react-chartjs-2";
import { doughnutOptions, doughnutData } from "./chartsData";
import { Chart, ArcElement } from "chart.js";
import Image from "next/image";

export default function ChartCircle({empty}) {

  return (
    <div className=" relative   p-4 rounded-[14px]  w-full min-h-full	 bg-[#fff]  border shadow-md flex-row flex-wrap ">
      <div className="text-xl w-auto  font-[600] font-Urbanist">Donation</div>
      {empty ?(
        <div className="m-auto flex  flex-col justify-center items-center h-full pb-2 ">
          <div className="m-auto text-center flex  flex-col justify-center items-center ">
            <Image
              className=" "
              src={"/images/Donation.svg"}
              width={122}
              height={180}
              alt="empty Donation"
            />
          </div>
          <div className="m-auto text-center flex  flex-col justify-center items-center font-[600]">
          Don't have any donation yet!
          </div>
        </div>
      ):(
        <div className="flex flex-wrap justify-between    ">
          <div className="flex  flex-col  mt-3  md:w-[54%] w-full divide-y divide-[#EEEEEE] pr-5">
            <div className="flex flex-wrap justify-between py-3 ">
              <div className="flex text-[#686868]	">Total Donation</div>
              <div className="flex text-black font-medium		 ">€ 2.4 K</div>
            </div>
            <div className="flex flex-wrap justify-between py-3 ">
              <div className="flex text-[#686868]	">Pending Donation</div>
              <div className="flex text-black font-medium	"> € 100</div>
            </div>
            <div className="flex flex-wrap justify-between py-3 ">
              <div className="flex text-[#686868]	">Total Donation</div>
              <div className="flex text-black font-medium		 ">€ 2.5 K</div>
            </div>
           
          </div>

          <div className="flex flex-col lg:  md:w-[45%] w-full   content-between pl-5 border-l	">
            <div className="flex items-center w-auto m-auto relative">
              <Doughnut
                data={doughnutData}
                options={doughnutOptions}
                className="chart"
                width={115}
                height={115}
              />
              {Chart.register(ArcElement)}

              <div className="flex justify-center items-center origin-center	left-[13%] top-[17%] absolute w-[75%] h-[75%] 	 text-[#3D897A] bg-emerald-100 rounded-full  opacity-80   border-4	border-[#fff] text-2xl ">
                60%
              </div>
            </div>
            <div className="flex flex-wrap columns-2 justify-between mt-auto text-[12px] ">
              <div className="flex flex-wrap justify-between  ">
                <span className="text-[#3D897A] pr-3 text-[40px] h-auto leading-4	">
                  &#8226;
                </span>
                <span className="text-black">Donated</span>
              </div>
              <div className="flex flex-wrap justify-between  ">
                <span className="text-[#F3D030] pr-3 text-[40px] h-auto leading-4	">
                  &#8226;
                </span>
                <span className="text-black">Pending</span>
              </div>
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
