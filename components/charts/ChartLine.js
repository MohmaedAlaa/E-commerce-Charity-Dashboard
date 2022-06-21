import { Line } from "react-chartjs-2";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ChartLine({ empty }) {
  if (!empty) {
    const canvasEl = useRef(null);

    const colors = {
      purple: {
        default: "#3D897A",
        half: "#3D897A55",
        quarter: "#3D897A25",
        zero: "#3D897A00",
      },
      indigo: {
        default: "#fff",
        quarter: "#fff",
      },
    };

    useEffect(() => {
      const ctx = canvasEl.current.getContext("2d");
      // const ctx = document.getElementById("myChart");

      const gradient = ctx.createLinearGradient(0, 16, 0, 600);
      gradient.addColorStop(0, colors.purple.half);
      gradient.addColorStop(0.65, colors.purple.quarter);
      gradient.addColorStop(1, colors.purple.zero);

      const weight = [30, 50, 60, 70, 30, 60, 50, 80, 60, 70, 50, 40];

      const labels = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      const data = {
        labels: labels,
        elements: {
          line: {
            tension: 0.5,
            borderWidth: 2,
            borderColor: "#3D897A",
          },
          point: {
            borderColor: "#3D897A",
            backgroundColor: "#FFFFFF",
            radius: 4,
            hitRadius: 2,
          },
        },
        datasets: [
          {
            backgroundColor: gradient,

            data: weight,
            fill: true,
            borderWidth: 2,
            borderColor: colors.purple.default,
            lineTension: 0.2,
            pointBackgroundColor: "#fff",
            pointRadius: 3,
          },
        ],
      };

      const options = {
        plugins: {
          legend: { display: false },
        },

        scales: {
          fill: "#3D897A",
          xAxis: {
            display: true,
            grid: {
              display: false,
            },
          },
          yAxis: {
            display: true,

            beginAtZero: true,
            grid: {
              display: true,
            },
          },
        },
      };

      const config = {
        type: "line",
        data: data,
        options: options,
      };
      const myLineChart = new Chart(ctx, config);

      return function cleanup() {
        myLineChart.destroy();
      };
    });

    return (
      <div className=" relative   p-4 rounded-[14px]  w-full min-h-full	 bg-[#fff]  border shadow-md flex-row flex-wrap ">
        <div className="text-xl w-auto font-[600] ">Users Donated</div>

        <div className="flex flex-wrap justify-between    ">
          <div className="flex  flex-col  mt-10 md:w-[100%] w-full ">
            <div className="flex w-full h-full  ">
              <canvas id="myChart" ref={canvasEl} height="100" />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className=" relative   p-4 rounded-[14px]  w-full min-h-full	 bg-[#fff]  border shadow-md flex-row flex-wrap ">
        <div className="text-xl w-auto font-[600] ">Users Donated</div>

        <div className="m-auto flex  flex-col justify-center items-center h-full pb-2 ">
          <div className="m-auto text-center flex  flex-col justify-center items-center h-[188px]">
            <Image
              className=" "
              src={"/images/UsersDonated.png"}
              width={150}
              height={127}
              alt="empty Users Donated"
            />
          </div>
          <div className="m-auto text-center flex  flex-col justify-center items-center font-[600]">
            Don't have any users donated yet!
          </div>
        </div>
      </div>
    );
  }
}
