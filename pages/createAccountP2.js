import React, { useState } from "react";
import LanguageIcon from "@mui/icons-material/Language";
import Image from "next/image";
import { useForm } from "react-hook-form";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import Steps from "../components/Login/StepsP2";
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="min-h-screen flex w-full">
        <div className="hidden lg:block relative flex-1 w-1/2">
          {/* <Image
            className="h-full w-full object-cover"
            src="/Layer 2.svg"
            layout="fill"
          /> */}
          <div className='bg-[#3D897A] text-[normal normal 600 32px/38px] px-[8%] py-[15%] h-full'>
            <h1 className='text-[white] py-10' style={{font: 'normal normal 600 32px/38px Urbanist'}}>Here's What To Expect,</h1>
            <div className='flex row text-white'>
                <div>
                    <div className='bg-[#4FA090] opacity-1 py-3 px-5 rounded-[100%] mb-24'>1</div>
                    <div className='bg-[#4FA090] opacity-1 py-3 px-5 rounded-[100%] mb-24'>2</div>
                    <div className='bg-[#4FA090] opacity-1 py-3 px-5 rounded-[100%]'>3</div>
                </div>
                <div>
                  <div className='ml-4 mt-2.5'>
                    <h3 className='mb-2.5' style={{font: 'normal normal 600 20px/24px Urbanist'}}>Provide your information & documents</h3>
                    <p style={{font: 'normal normal medium 16px/19px Urbanist'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis arcu finibus felis ultricies, vel sollicitudin arcu venenatis. Pellentesque id leo maximus, luctus urna congue.</p>
                  </div>
                  <div className='ml-4 mt-10'>
                    <h3 className='mb-2.5' style={{font: 'normal normal 600 20px/24px Urbanist'}}>We'll verify your submission</h3>
                    <p style={{font: 'normal normal medium 16px/19px Urbanist'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis arcu finibus felis ultricies, vel sollicitudin arcu venenatis. Pellentesque id leo maximus, luctus urna congue.</p>
                  </div>
                  <div className='ml-4 mt-10'>
                    <h3 className='mb-2.5' style={{font: 'normal normal 600 20px/24px Urbanist'}}>Get verified & share your charity!</h3>
                    <p style={{font: 'normal normal medium 16px/19px Urbanist'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis arcu finibus felis ultricies.</p>
                  </div>
                </div>
            </div>
          </div>
          <svg width="133.805" height="33.463" viewBox="0 0 133.805 33.463" className='absolute top-16 left-16'>
            <g id="Brandmark_white_" data-name="Brandmark(white)" transform="translate(0 0)">
                <path id="Union_19" data-name="Union 19" d="M127.409,33.462h-.139a8.535,8.535,0,0,1-2.379-.341,8.627,8.627,0,0,1-2.3-1.04l.985-2.628a6.316,6.316,0,0,0,1.522.765,6.487,6.487,0,0,0,2.244.351,3.8,3.8,0,0,0,1.718-.339,2.691,2.691,0,0,0,1.063-.952l0,0a3.2,3.2,0,0,0,.5-1.489c.045-.54.065-1.072.065-1.6a3.413,3.413,0,0,1-1.554,1.139,5.879,5.879,0,0,1-1.993.329,5.674,5.674,0,0,1-2.156-.371,3.13,3.13,0,0,1-1.434-1.139,4.118,4.118,0,0,1-.723-1.654,10.168,10.168,0,0,1-.2-2.069V15.948h3.087v6.11a6.463,6.463,0,0,0,.1,1.15,1.852,1.852,0,0,0,.427.93,2.118,2.118,0,0,0,1.9.788,2.8,2.8,0,0,0,1.227-.274,2.018,2.018,0,0,0,.9-.866,2.794,2.794,0,0,0,.35-1.062,10.23,10.23,0,0,0,.065-1.215V15.946H133.8v9.481q0,.789-.01,1.609a11.618,11.618,0,0,1-.132,1.609,6.734,6.734,0,0,1-.427,1.533,5.049,5.049,0,0,1-.855,1.379,5.45,5.45,0,0,1-2,1.4,7.221,7.221,0,0,1-2.839.5Zm-65.516,0h-.139a8.54,8.54,0,0,1-2.379-.341,8.634,8.634,0,0,1-2.3-1.04l.985-2.628a6.308,6.308,0,0,0,1.521.765,6.5,6.5,0,0,0,2.245.351,3.8,3.8,0,0,0,1.718-.339,2.689,2.689,0,0,0,1.063-.952l0,0a3.191,3.191,0,0,0,.5-1.489c.044-.54.065-1.072.065-1.6a3.405,3.405,0,0,1-1.554,1.139,5.881,5.881,0,0,1-1.992.329,5.669,5.669,0,0,1-2.157-.371,3.125,3.125,0,0,1-1.434-1.139,4.12,4.12,0,0,1-.724-1.654,10.17,10.17,0,0,1-.2-2.069V15.948h3.087v6.11a6.463,6.463,0,0,0,.1,1.15,1.857,1.857,0,0,0,.426.93,2.119,2.119,0,0,0,1.906.788,2.8,2.8,0,0,0,1.227-.274,2.014,2.014,0,0,0,.9-.866,2.8,2.8,0,0,0,.35-1.062,10.336,10.336,0,0,0,.065-1.215V15.946h3.11v9.481q0,.789-.011,1.609a11.617,11.617,0,0,1-.131,1.609,6.782,6.782,0,0,1-.427,1.533,5.029,5.029,0,0,1-.855,1.379,5.436,5.436,0,0,1-2,1.4,7.217,7.217,0,0,1-2.838.5Zm-43.288-.354V17.439l2.933-2.286a.44.44,0,0,0,.077-.617l-.438-.562a.439.439,0,0,0-.617-.077l-1.954,1.521L18.471.221A.221.221,0,0,1,18.718,0a16.947,16.947,0,0,1,14.6,15.944h0q-.9.841-1.743,1.761c-.154-.483-.3-.936-.445-1.391A2.5,2.5,0,0,0,29.615,14.7a3.94,3.94,0,0,0-1.81-.205,4.049,4.049,0,0,1-1.324-.157c-.508-.152-.973-.44-1.473-.627a.891.891,0,0,0-.24-.051c-.034.023-.069.043-.105.063s-.069.039-.106.059l-.091.045a1.839,1.839,0,0,0,.3.317c.526.391,1.081.745,1.611,1.131a2.408,2.408,0,0,1,1,2.356,8.25,8.25,0,0,0-.069,1.04,7.808,7.808,0,0,0,2,4.708,7.37,7.37,0,0,0,1.835,1.554,16.839,16.839,0,0,1-12.274,8.4l-.029,0A.234.234,0,0,1,18.605,33.108ZM3.476,26.857a.22.22,0,0,1,.29-.322l.008.007a4.924,4.924,0,0,0,2.608.794,4.52,4.52,0,0,0,2.592-.673,5.784,5.784,0,0,1,2.383-1.093.544.544,0,0,0,.432-.668.587.587,0,0,0-.65-.471c-.157.012-.315.047-.472.075a5.418,5.418,0,0,0-2.006.971,3.478,3.478,0,0,1-2.938.585,6.782,6.782,0,0,1-1.806-.868,5.2,5.2,0,0,0-1.7-.713.7.7,0,0,1-.471-.371,16.224,16.224,0,0,1-.682-1.562.383.383,0,0,1,.41-.511,3.34,3.34,0,0,1,.453.089,6.99,6.99,0,0,1,1.84.879,4.9,4.9,0,0,0,3.951.638,4.333,4.333,0,0,0,1.462-.656,4.013,4.013,0,0,1,5.195,0,4.28,4.28,0,0,0,.441.266,4.236,4.236,0,0,0,1.422.487l0,0c.139.022.277.036.419.047V33.1a.235.235,0,0,1-.236.234A16.642,16.642,0,0,1,3.476,26.857Zm10.031-2.1a.57.57,0,0,0-.545.609.9.9,0,0,0,.86.7.587.587,0,0,0,.564-.6.864.864,0,0,0-.844-.709Zm88.036,1.328a6.334,6.334,0,0,1-1.434-4.424,7.159,7.159,0,0,1,.384-2.386,5.721,5.721,0,0,1,1.085-1.895,4.715,4.715,0,0,1,1.74-1.237,6.066,6.066,0,0,1,2.376-.438,6.149,6.149,0,0,1,2.694.548,4.565,4.565,0,0,1,1.805,1.5,5.537,5.537,0,0,1,.9,2.222,7.9,7.9,0,0,1-.01,2.715H103.2a2.9,2.9,0,0,0,.723,1.741,2.418,2.418,0,0,0,1.905.711l-.006,0a2.781,2.781,0,0,0,1.128-.207,1.762,1.762,0,0,0,.778-.69h3.242a4.481,4.481,0,0,1-.733,1.553,4.165,4.165,0,0,1-1.183,1.073,5.029,5.029,0,0,1-1.521.6,8.05,8.05,0,0,1-1.751.186A5.442,5.442,0,0,1,101.543,26.085Zm2.428-7.1a2.461,2.461,0,0,0-.756,1.589h4.992a2.289,2.289,0,0,0-.2-.975,1.983,1.983,0,0,0-.525-.7,2.128,2.128,0,0,0-.778-.4,3.306,3.306,0,0,0-.93-.132A2.621,2.621,0,0,0,103.971,18.98Zm-15.062,7.1a6.333,6.333,0,0,1-1.434-4.424,7.177,7.177,0,0,1,.384-2.386,5.722,5.722,0,0,1,1.085-1.895,4.706,4.706,0,0,1,1.74-1.237A6.068,6.068,0,0,1,93.06,15.7a6.145,6.145,0,0,1,2.693.548,4.565,4.565,0,0,1,1.806,1.5,5.541,5.541,0,0,1,.9,2.222,7.928,7.928,0,0,1-.01,2.715H90.564a2.9,2.9,0,0,0,.723,1.741,2.418,2.418,0,0,0,1.9.711l-.006,0a2.779,2.779,0,0,0,1.128-.207,1.76,1.76,0,0,0,.778-.69h3.241A4.474,4.474,0,0,1,97.6,25.8a4.158,4.158,0,0,1-1.182,1.073,5.03,5.03,0,0,1-1.521.6,8.054,8.054,0,0,1-1.751.186A5.439,5.439,0,0,1,88.908,26.085Zm2.427-7.1a2.457,2.457,0,0,0-.755,1.589h4.992a2.289,2.289,0,0,0-.2-.975,1.977,1.977,0,0,0-.526-.7,2.13,2.13,0,0,0-.778-.4,3.312,3.312,0,0,0-.93-.132A2.621,2.621,0,0,0,91.335,18.98Zm25.027,8.376a3.207,3.207,0,0,1-1.324-.855,2.9,2.9,0,0,1-.711-1.249,6.05,6.05,0,0,1-.229-1.731V18.639h-1.751V15.946H114.1V12.791h3.087v3.154h3.393v2.693h-3.393V22.8a5,5,0,0,0,.055.755,1.76,1.76,0,0,0,.241.668,1.368,1.368,0,0,0,.526.494,1.791,1.791,0,0,0,.865.186,2.769,2.769,0,0,0,.788-.132,3.259,3.259,0,0,0,.766-.329l.875,2.344a4.718,4.718,0,0,1-.69.362,6.383,6.383,0,0,1-1.675.448,6.694,6.694,0,0,1-.723.045A5.519,5.519,0,0,1,116.362,27.356Zm-43.749-.745a3.879,3.879,0,0,1-1-2.913V18.641H69.865V15.948h1.751V12.816H74.7v3.132h2.759v2.693H74.7V23.3a1.325,1.325,0,0,0,1.511,1.489h1.14v2.693H75.909c-.128,0-.253.007-.376.007A4.093,4.093,0,0,1,72.613,26.611Zm-20.969.879v-6.5a7.135,7.135,0,0,0-.065-.942A2.315,2.315,0,0,0,51.3,19.2a1.451,1.451,0,0,0-.6-.568,1.866,1.866,0,0,0-1.008-.164,1.893,1.893,0,0,0-.962.338,1.607,1.607,0,0,0-.592.756,3.9,3.9,0,0,0-.229.985,9.784,9.784,0,0,0-.055,1.03v5.913H44.771v-6.5a7.215,7.215,0,0,0-.065-.942,2.195,2.195,0,0,0-.285-.843,1.572,1.572,0,0,0-.591-.568,1.759,1.759,0,0,0-.985-.164,1.787,1.787,0,0,0-1.007.338,1.831,1.831,0,0,0-.559.746,3.508,3.508,0,0,0-.242.985,10.415,10.415,0,0,0-.054,1.04v5.913H37.9V15.95h2.955L41,17.438v0a5.051,5.051,0,0,1,1.411-1.27,3.928,3.928,0,0,1,3.733.023,3.483,3.483,0,0,1,1.2,1.379A5.377,5.377,0,0,1,49,16.167a4.226,4.226,0,0,1,1.993-.458,4.092,4.092,0,0,1,1.489.241,3.492,3.492,0,0,1,1.072.656,3.3,3.3,0,0,1,.908,1.5,7.075,7.075,0,0,1,.274,2.048v7.336Zm27.485,0V15.946h2.847l.174,1.444a5.016,5.016,0,0,1,1.5-1.247,4.114,4.114,0,0,1,1.915-.416c.189,0,.372.008.548.022a4.386,4.386,0,0,1,.481.065v2.848c-.334,0-.676,0-1.017.01a5.9,5.9,0,0,0-.975.1,4.223,4.223,0,0,0-.887.274,2.289,2.289,0,0,0-.756.536,2.528,2.528,0,0,0-.623,1.227,8.243,8.243,0,0,0-.12,1.489v5.189ZM5.714,22.524a7.287,7.287,0,0,1-1.838-.887,4.924,4.924,0,0,0-2.8-.776A.674.674,0,0,1,.4,20.333,16.763,16.763,0,0,1,1.3,10.2a1.6,1.6,0,0,1,2.5-.591c.292.246.585.491.878.739.075.063.148.126.252.211-.075.09-.142.167-.207.248-.62.759-1.29,1.483-1.847,2.287a5.1,5.1,0,0,0,.642,6.323A.426.426,0,0,0,4.2,19.4c.979-1.158,2-2.286,2.915-3.487A4.935,4.935,0,0,0,7.9,11.325c-.024-.084-.052-.167-.085-.278.085.005.152.008.22.016a5.047,5.047,0,0,0,4.649-1.739c.93-1.056,1.822-2.149,2.727-3.225a.456.456,0,0,0-.118-.778,5.14,5.14,0,0,0-6.732.936c-.472.548-.933,1.1-1.4,1.653-.094.111-1-.828-1.076-.936A2.634,2.634,0,0,1,5.6,5.831a2.934,2.934,0,0,1,1.117-2.6,12.236,12.236,0,0,1,2.9-1.757A15.671,15.671,0,0,1,12.052.606,17.754,17.754,0,0,1,16.435.012h0a.224.224,0,0,1,.224.222v22.36l-.1-.008a2.691,2.691,0,0,1-.325-.055,5.149,5.149,0,0,1-1.706-.847,4.645,4.645,0,0,0-4.01-.654,8.492,8.492,0,0,0-1.96.981,3.953,3.953,0,0,1-2.025.629A3.037,3.037,0,0,1,5.714,22.524Z" transform="translate(0 0)" fill="#fff"/>
            </g>
          </svg>
        </div>

        <div className="relative flex-1 flex flex-col justify-center py-6 sm:px-6 lg:flex-none lg:px-12 xl:px-12 w-1/2">
          <div className="mx-auto w-full ">
          <div style={{font:'normal normal medium 14px/17px Urbanist'}}>
              <a href="/createAccountP1" className="text-[#707082]"><ArrowBackIosNewOutlinedIcon className="w-3.5 h-3.5 mb-0.5"/> Back</a>
            </div>

            <div className='w-full flex justify-center'>
              <div>
                <div className=' mt-5'>
                  <Steps/>
                </div>  

                <div className='row flex text-[#CDCFDC] gap-6' style={{font:'normal normal medium 14px/17px Urbanist'}}>
                  <p className='text-[#232323]'>General Info</p>
                  <p className='text-[#3D897A]'>Charity Details</p>
                  <p>Logo</p>
                </div>
              </div>
            </div>
            
            <div className="mt-16">
              <div className="mt-6">
                <form
                  action="#"
                  method="POST"
                  className="space-y-6"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div>
                    <label
                      htmlFor="text"
                      className="block text-sm text-[#707082]"
                    >
                      Legal Name of Charity (As per Legal Registration)
                    </label>
                    <div className="mt-1">
                      <input
                        {...register("text")}
                        id="text"
                        name="text"
                        type="text"
                        autoComplete="text"
                        required
                        className="appearance-none block w-full text-[#232323]border border-[#D4D4D4] rounded-[10px] py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-[#D4D4D4] focus:ring-[#3D897A]"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="text"
                      className="block text-sm text-[#707082]"
                    >
                      Charity Name (shown to customer)
                    </label>
                    <div className="mt-1">
                      <input
                        {...register("text")}
                        id="text"
                        name="text"
                        type="text"
                        autoComplete="text"
                        required
                        className="appearance-none block w-full text-[#232323]border border-[#D4D4D4] rounded-[10px] py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-[#D4D4D4] focus:ring-[#3D897A]"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm text-[#707082]"
                    >
                      Charity Email Address
                    </label>
                    <div className="mt-1">
                      <input
                        {...register("email")}
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="appearance-none block w-full text-[#232323]border border-[#D4D4D4] rounded-[10px] py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-[#D4D4D4] focus:ring-[#3D897A]"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label
                      htmlFor="text"
                      className="block text-sm text-[#707082]"
                    >
                      Charity Website/e-store
                    </label>
                    <div className="mt-1">
                      <input
                        {...register("text")}
                        id="text"
                        name="text"
                        type="text"
                        autoComplete="text"
                        required
                        className="appearance-none block w-full text-[#232323]border border-[#D4D4D4] rounded-[10px] py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-[#D4D4D4] focus:ring-[#3D897A]"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="text"
                      className="block text-sm text-[#707082]"
                    >
                      Contact details of person in Charge (Email and Phone number)
                    </label>
                    <div className="mt-1">
                      <input
                        {...register("text")}
                        id="text"
                        name="text"
                        type="text"
                        autoComplete="text"
                        required
                        className="appearance-none block w-full text-[#232323]border border-[#D4D4D4] rounded-[10px] py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-[#D4D4D4] focus:ring-[#3D897A]"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="text"
                      className="block text-sm text-[#707082]"
                    >
                      Charity Registration number
                    </label>
                    <div className="mt-1">
                      <input
                        {...register("text")}
                        id="text"
                        name="text"
                        type="text"
                        autoComplete="text"
                        required
                        className="appearance-none block w-full text-[#232323]border border-[#D4D4D4] rounded-[10px] py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-[#D4D4D4] focus:ring-[#3D897A]"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="text"
                      className="block text-sm text-[#707082]"
                    >
                      Tax number (If Applicable)
                    </label>
                    <div className="mt-1">
                      <input
                        {...register("text")}
                        id="text"
                        name="text"
                        type="text"
                        autoComplete="text"
                        required
                        className="appearance-none block w-full text-[#232323]border border-[#D4D4D4] rounded-[10px] py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-[#D4D4D4] focus:ring-[#3D897A]"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="text"
                      className="block text-sm text-[#707082]"
                    >
                      German/EU VAT ID or OSS Number
                    </label>
                    <div className="mt-1">
                      <input
                        {...register("text")}
                        id="text"
                        name="text"
                        type="text"
                        autoComplete="text"
                        required
                        className="appearance-none block w-full text-[#232323]border border-[#D4D4D4] rounded-[10px] py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-[#D4D4D4] focus:ring-[#3D897A]"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="text"
                      className="block text-sm text-[#707082]"
                    >
                      Chairty Description (shown to customer)
                    </label>
                    <div className="mt-1">
                      <input
                        {...register("text")}
                        id="text"
                        name="text"
                        type="text"
                        autoComplete="text"
                        required
                        className="appearance-none block w-full text-[#232323]border border-[#D4D4D4] rounded-[10px] py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-[#D4D4D4] focus:ring-[#3D897A]"
                      />
                    </div>
                  </div>

                  <div>
                    <button 
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-[10px] shadow-sm text-sm font-medium text-white bg-[#3D897A] hover:bg-[#3D897A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3D897A]"
                    >
                      Continue
                    </button>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}   