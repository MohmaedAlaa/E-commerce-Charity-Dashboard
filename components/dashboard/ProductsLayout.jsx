import React, { useState } from "react";
import Image from "next/image";
import { ProductsData } from "../../public/Data/ProductData";
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
export default function ProductsLayout({empty}) {
  const [products, setProducts] = useState(ProductsData);

  return (<div className="px-2">
    <div className=" relative  p-4   rounded-[14px] my-2  min-h-[517px]	 bg-[#fff]  border shadow-md md:flex-row  ">
      <div className="flax flax-col">
        <div className="flex flex-row justify-between">
          <h1 className="text-xl font-semibold text-gray-900">
          Recent Invoice
          </h1>
        
        </div>
        {!empty ? (
          <div className="   sm:rounded-lg mt-5  relative max-h-[450px] overflow-x-auto overflow-y-scroll scroll-bar">
            <table className="w-full text-sm text-left table-auto	 ">
              <thead className="sticky top-0 bg-white border-b ">
                <tr className="text-xs     w-full ">
                  <th scope="col" className="pl-6 py-3">
                  Invoice ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                  Date Sent
                  </th>
                  <th scope="col" className="px-6 py-3">
                  Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                  Description
                  </th>
                  <th scope="col" className="px-6 py-3">
                  Actions                  
                  </th>
                </tr>
              </thead>

              <tbody className="">
                {products.map((product) => (
                  <tr className="" key={product.id}>
                    <th
                      scope="row"
                      className="pr-6 py-4 font-medium text-gray-500 dark:text-white whitespace-nowrap"
                    >
                      <div className="flex items-center">
                      
                        <div className="ml-4">
                          <div className="font-medium text-gray-500">
                            {product.InvoiceID}
                          </div>
                        </div>
                      </div>
                    </th>
                    
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                    {product.date}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                    <span
                        className={`${
                          product.Status === "Donated"
                            ? "text-[#3D897A]  bg-[#3D897A] bg-opacity-25"
                            : "text-[#EE6363] bg-[#EE6363] bg-opacity-25"
                        } inline-flex rounded-full px-2 text-xs font-semibold leading-5 `}
                      >
                        {String(product.Status)}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                      {product.Description}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                   
                          <a href={product.Actions}><FileDownloadOutlinedIcon className="w-5" /> Download</a>
                        </td>
                    

                 
                    
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="mt-6 w-full rounded-lg flex flex-col justify-center text-center py-20">
            <Image
              src={"/images/ResentInvoice.svg"}
              width={200}
              height={150}
              alt="empty product"
            />
            <h3 className="font-semibold text-lg mt-4">
             You Don't have any Invoice yet!
            </h3>
            <p className="my-2 text-[#707082]">
            Start uploading your invoice now!
            </p>
            <div className="mt-4">
              <button
                type="button"
                className="inline-flex max-w-xs items-center justify-center rounded-md border border-transparent bg-[#3d897a] px-8 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#3d897a] focus:outline-none focus:ring-2 focus:ring-[#3d897a] focus:ring-offset-2"
              >
               + Upload Invoice
              </button>
            </div>
          </div>
        )}
      </div>
    </div></div>
  );
}
