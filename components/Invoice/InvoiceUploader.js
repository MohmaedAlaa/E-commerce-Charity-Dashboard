import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';
import { UploadIcon} from '@heroicons/react/outline';

const InvoiceImageUploader = ({ setImageUrl, imageUrl }) => {
  const [files, setFiles] = useState([]);
  const uploadUrl = process.env.REACT_APP_CLOUDINARY_URL;
  const upload_Preset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    multiple: true,
    maxSize: 500000,
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  useEffect(() => {
    const uploadURL = uploadUrl;
    const uploadPreset = upload_Preset;
    if (files) {
      files.forEach((file) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', uploadPreset);
        axios({
          url: uploadURL,
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          data: formData,
        })
          .then((res) => {
            setImageUrl(res.data.secure_url);
          })
          .catch((err) => console.log(err));
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [files]);

  const thumbs = files.map((file) => (
    <div key={file.name}>
      <div>
        <img
          className="inline-flex border-2 border-gray-100 w-24 max-h-24"
          src={file.preview}
          alt={file.name}
        />
      </div>
    </div>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <div className="w-full text-center">
      <div
        className="px-6 pt-5 pb-6 border-2 border-[#CDCFDC] bg-[#F9F9F9] dark:border-[#CDCFDC] border-dashed rounded-md cursor-pointer"
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <span className="mx-auto flex justify-center">
          <UploadIcon className="text-md text-[#707082] w-[20px]" />
        </span>
        <p className="text-sm text-[#707082] mt-2 border py-2 w-[98px] mx-auto rounded-[8px]"> Upload files </p>
        <p className="text-xs text-[#707082] mt-2"> or drag your files here </p>
      </div>
      <aside className="flex flex-row flex-wrap mt-4">
        {imageUrl ? (
          <img
            className="inline-flex border rounded-md border-gray-100 dark:border-[#CDCFDC] w-24 max-h-24 p-2"
            src={imageUrl}
            alt="product"
          />
        ) : (
          thumbs
        )}
      </aside>
    </div>
  );
};

export default InvoiceImageUploader;
