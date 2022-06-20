import { Line } from "react-chartjs-2";

import Image from "next/image";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

// export const options = {
//   plugins: {
//     legend: { display: true },
//   },
//   elements: {
//     line: {
//       tension: .5,
//       borderWidth: 2,

//       fill: "start",
//       borderColor: "#3D897A",
//     },
//     point: { borderColor: "#3D897A",backgroundColor: "#FFFFFF" , radius: 4, hitRadius: 2 },
//   },
//   scales: {fill: "#3D897A",
//     xAxis: {
//       display: true,
//       grid: {
//         display: false,
//       },
//     },
//     yAxis: {
//       display: true,
     
//       beginAtZero: true,
//       grid: {
//         display: true,
//       },
//     },
//   },
// };

export const options = {
  title: {
    display: true,
    text: "Number of downloads of our app"
  },
  scales: {
    yAxes: [
      {
        ticks: {
          min: 0,
          max: 20,
          stepSize: 3
        }
      }
    ]
  }
};

var OrginData = [30, 50, 60, 70, 30, 60, 50, 80, 60, 70, 50, 40];



export const data = {
  labels: ["2016", "2017", "2018", "2019", "2020"],
  datasets: [
    {
      label: "No. of downloads (K)",
      data: [2, 6, 9, 7, 11],
      borderColor: "#C8ECCC",
      fill: true,
      backgroundColor: "#F0FAF1",
      pointBorderColor: "#AAA",
      pointBackgroundColor: "#FEF1F1"
    }
  ]
};


// export const data = {
//   labels: [
//     "Jan",
//     "Feb",
//     "Mar",
//     "Apr",
//     "May",
//     "Jun",
//     "Jul",
//     "Aug",
//     "Sep",
//     "Oct",
//     "Nov",
//     "Dec",
//   ],
//   datasets: [
//     { 
//       data: OrginData,
//       backgroundColor: "rgba(75,192,192,0.2)",
//       borderColor: "rgba(75,192,192,1)",
//       fill: "#3D897A"
//     },
//   ],
// };

export default function ChartLine({empty}) {
  return (
    <div className=" relative   p-4 rounded-[14px]  w-full min-h-full	 bg-[#fff]  border shadow-md flex-row flex-wrap ">
    <div className="text-xl w-auto  ">Users Donated</div>
    

      {empty ? (
 <div className="m-auto flex  flex-col justify-center items-center h-full pb-2 ">
 <div className="m-auto text-center flex  flex-col justify-center items-center mb-6">
            <Image
              className=" "
              src={"/images/UsersDonated.png"}
              width={150}
              height={127}
              alt="empty Users Donated"
            />
          </div>
          <div className="m-auto text-center flex  flex-col justify-center items-center">
          Don't have any users donated yet!
          </div>
        </div>
      ) : (
      
      
      <div className="flex flex-wrap justify-between    ">
        <div className="flex  flex-col  mt-10 md:w-[100%] w-full ">
          <div className="flex w-full h-full  ">
            {ChartJS.register(
              CategoryScale,
              LinearScale,
              PointElement,
              LineElement
            )}
            <Line data={data} options={options} />
          </div>
        </div>

       
      </div>)}
    </div>
  );
}
