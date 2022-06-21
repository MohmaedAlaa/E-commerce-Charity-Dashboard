/* eslint-disable react/no-unescaped-entities */
import { CameraIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import ImageUploadComp from "../../components/profile/ImageUploadComp";
import Link from "next/link";
const Profile = () => {
  const router = useRouter();
  const { uid } = router.query;

  const [cover, setCover] = useState(null);
  const handleUploadcover = (e) => {
    console.log(cover);
    setCover(URL.createObjectURL(e.target.files[0]));
  };
  const [profile, setprofile] = useState(null);
  const handleUploadprofile = (e) => {
    console.log(profile);
    setprofile(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <div className="relative max-w-[800px] mx-auto ">
      <div className=" flex justify-between">
        {/* cover */}
        {/* <div
          className={`max-w-[800px] h-[200px] relative bg-white  shadow-[14px]  mx-auto rounded-2xl`}
        >
          <Image
            src={cover ? cover : "/images/800x400.png"}
            width={800}
            height={200}
            className="object-cover rounded-2xl"
            alt={cover}
          />
          <label
            htmlFor="desktop-cover-photo"
            className=" cursor-pointer absolute -bottom-4 right-6"
          >
            <span className="sr-only"> cover photo</span>
            <CameraIcon className="h-10 w-10 text-[#707082] bg-[#CDCFDC] rounded-full p-2" />
            <input
              onChange={handleUploadcover}
              type="file"
              id="desktop-cover-photo"
              name="cover-photo"
              className=" hidden"
            />
          </label>
        </div> */}
        {/* profile */}
        <div className="flex ">
          <div
            className={`max-w-[94px] w-[94px] h-[94px]  bg-white  shadow-[14px]  mx-auto rounded-full relative`}
          >
            <Image
              src={profile ? profile : "/defaultProfile.png"}
              width={94}
              height={94}
              className="object-cover rounded-full"
              alt={profile}
            />
            <label
              htmlFor="desktop-cover-photo"
              className=" cursor-pointer absolute bottom-0 right-0"
            >
              <span className="sr-only"> profile photo</span>
              <CameraIcon className="h-10 w-10 text-[#707082] bg-[#CDCFDC] rounded-full p-2" />
              <input
                onChange={handleUploadprofile}
                type="file"
                id="desktop-cover-photo"
                name="cover-photo"
                className=" hidden"
              />
            </label>
          </div>
          <div className="flex flex-col  h-full content-center	pl-4">
            <div className="my-auto">
              <p className="font-medium">Seed Madagascar</p>
              <p className="text-[#686868] mr-8">Ahmed.kamal@gmail.com</p>
            </div>
          </div>
        </div>

        {/* profile buttons */}
        <div className="flex mt-8 justify-end">
          <button className="text-sm font-bold text-[#EE6363] px-10 py-3 rounded-[10px] tracking-wider">
            Delete Account
          </button>
          <button className="text-sm max-h-[40px] my-auto font-bold bg-[#3D897A] px-10 py-2 text-white rounded-[10px] tracking-wider">
            Edit
          </button>
        </div>
      </div>
      {/* general info */}
      <div className="bg-white rounded-[14px] shadow-2xl h-[209px] p-8 mt-12">
        <h3 className="text-xl  pb-4 border-b border-[#CDCFDC] font-semibold">
          General Info
        </h3>
        <div className="flex justify-between h-full pt-6 pb-10">
          <div className="text-sm  border-r basis-1/2 pr-5">
            <div className="flex justify-between">
              <p className="text-[#686868] mr-8">Charity Name</p>
              <p className="font-medium">Seed Madagascar</p>
            </div>
            <div className="flex justify-between mt-4">
              <p className="text-[#686868] mr-8 max-w-[110px]">
                Contact details of person in Charge
              </p>
              <p className="font-medium">Seed Madagascar</p>
            </div>
          </div>
          <div className="text-sm flex basis-1/2 ml-6 flex-col">
            {" "}
            <div className="flex justify-between">
              <p className="text-[#686868] mr-8">Account Email</p>
              <p className="font-medium">Ahmed.kamal@gmail.com</p>
            </div>{" "}
            <span className="text-sm mt-4 font-bold  text-black tracking-wider">
              <Link href="/profile/changePassword/id">
                <a>Change Password</a>
              </Link>
            </span>
          </div>
        </div>
      </div>

      {/* Shop Details */}
      <div className="bg-white rounded-[14px] shadow-2xl min-h-[275px] p-8 mt-8">
        <h3 className="text-xl pb-4 border-b border-[#CDCFDC] font-semibold">
        Charity Details
        </h3>
        <div className="flex justify-between h-full pt-6 pb-10">
          <div className="text-sm  border-r basis-1/2 ">
            <div className="flex justify-between pr-5">
              <p className="text-[#686868] mr-8 w-[130px]">
              Legal Name of Charity
              </p>
              <p className="font-medium">Seed Madagascar</p>
            </div>
            <div className="flex justify-between pr-5 mt-8">
              <p className="text-[#686868] mr-8 w-[130px]">Chairty Description (shown to customer)</p>
              <p className="font-medium">Seed Madagascar</p>
            </div>
            <div className="flex justify-between pr-5 mt-8">
              <p className="text-[#686868] mr-8 w-[130px]">
              German/EU VAT ID or OSS Number
              </p>
              <p className="font-medium">#9983000M</p>
            </div>
           
          </div>
          <div className="text-sm  basis-1/2 ml-6">
            <div className="flex justify-between pr-5">
              <p className="text-[#686868] mr-8 ">Tax number (If applicable)</p>
              <p className="font-medium">#7783999d</p>
            </div>
            <div className="flex justify-between pr-5 mt-8">
              <p className="text-[#686868] mr-8 ">Charity Website/e-store (if applicable)</p>
              <p className="font-medium">Seed Madagascar</p>
            </div>
            <div className="flex justify-between pr-5 mt-8">
              <p className="text-[#686868] mr-8 ">
              Charity Registration number (if applicable)
              </p>
              <p className="font-medium">#788920</p>
            </div>
           
          </div>
        </div>
      </div>
      {/* Payment settings */}

     
    </div>
  );
};

export default Profile;
