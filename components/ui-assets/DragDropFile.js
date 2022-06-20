import { UploadIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF"];

function DragDropFile() {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
    console.log(file);
  };

  return (
    <FileUploader
      handleChange={handleChange}
      name="file"
      types={fileTypes}
      multiple={true}
    >
      <div className="bg-[#F9F9F9] border-dashed border-2  border-[#CDCFDC] p-4 w-full rounded-2xl flex flex-col justify-center items-center">
        <svg
          width="18"
          height="18"
          fill="currentColor"
          className="bi bi-upload text-[#707082] fill-[#707082] text-semibold "
          viewBox="0 0 16 16"
        >
          <path d="M.5 9.9a.5.5 0 01.5.5v2.5a1 1 0 001 1h12a1 1 0 001-1v-2.5a.5.5 0 011 0v2.5a2 2 0 01-2 2H2a2 2 0 01-2-2v-2.5a.5.5 0 01.5-.5z"></path>
          <path d="M7.646 1.146a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L8.5 2.707V11.5a.5.5 0 01-1 0V2.707L5.354 4.854a.5.5 0 11-.708-.708l3-3z"></path>
        </svg>

        <button className=" max-w-max my-2 text-xs font-bold rounded-lg border px-4 py-2 border-[#CDCFDC] text-[#707082]">
          Add files
        </button>
        <p className="text-[#707082]">or drag your files here</p>
      </div>
    </FileUploader>
  );
}

export default DragDropFile;
