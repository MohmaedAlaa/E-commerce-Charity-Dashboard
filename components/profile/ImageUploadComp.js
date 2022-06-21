import { CameraIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useState } from "react";

const ImageUploadComp = ({ width, height, rounded, photo, handleUpload }) => {
  return (
    <>
      <div
        style={{
          width: `${width}px`,
          height: `${height}px`,
          borderRadius: `${rounded}px`,
        }}
        className={`max-w-[${width}px] relative bg-white  shadow-[14px]  mx-auto `}
      >
        <Image
          src={photo ? photo : "/images/800x400.png"}
          width={width}
          height={height}
          style={{ borderRadius: `${rounded}px` }}
          className="object-cover "
          alt={photo}
        />
        <label
          htmlFor="desktop-cover-photo"
          className=" cursor-pointer absolute -bottom-4 right-6"
        >
          <span className="sr-only"> cover photo</span>
          <CameraIcon className="h-10 w-10 text-[#707082] bg-[#CDCFDC] rounded-full p-2" />
          <input
            onChange={handleUpload}
            type="file"
            id="desktop-cover-photo"
            name="cover-photo"
            className=" hidden"
          />
        </label>
      </div>
    </>
  );
};

export default ImageUploadComp;
