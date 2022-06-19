import { useLayoutEffect, useRef, useState } from "react";
import InvoiceSelect from "../components/InvoiceSelect";
import InvoiceUploadInvoice from "../components/InvoiceUploadInvoice";
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

// const product = [
//     {
//       code: "#015545df",
//       mytreetyCommission: "$ 30",
//       paymentDate: "23/5/2022",
//       PaymentState: "paid",
//     },
//     {
//       code: "#015545df",
//       mytreetyCommission: "$ 30",
//       paymentDate: "23/5/2022",
//       PaymentState: "pending",
//     },
//     // More product...
// ];

function isEmpty(object) {
    for (const property in object) {
        return false;
    }
    return true;
    }

    export default function Example() {
        const checkbox = useRef();
        const [checked, setChecked] = useState(false);
        const [indeterminate, setIndeterminate] = useState(false);
        const [selectedproduct, setSelectedproduct] = useState([]);

        function toggleAll() {
            setSelectedproduct(checked || indeterminate ? [] : invoices);
            setChecked(!checked && !indeterminate);
            setIndeterminate(false);
    }

    const arrow = useRef();
    const onArrowClickDown = () => {

        if(arrow.current.classList.value == 'flex gap-2 items-center text-[#686868] cursor-pointer transition-[all-0.3s-0.1s-ease-in-out]'){
        arrow.current.classList.add('rotate-180')
        }
        else{
        arrow.current.classList.value == 'flex gap-2 items-center text-[#686868] cursor-pointer rotate-180 transition-[all-0.3s-0.1s-ease-in-out]'
        arrow.current.classList.remove('rotate-180')
        }

    };

    const [invoices, setInvoices] = useState([
        {
        invoiceId: "#015545df",
        dateSent: "23/5/2022",
        status: "Pending",
        description:"Lorem ipsum dolor sit amen",
        },
        {
        invoiceId: "#0153453",
        dateSent: "23/5/2022",
        status: "Donated",
        description:"Lorem ipsum dolor sit amen",
        },
        {
        invoiceId: "#0153453",
        dateSent: "23/5/2022",
        status: "Donated",
        description:"Lorem ipsum dolor sit amen",
        },
        
        // More product...
    ]
    );

    return (
        <div className="px-4 sm:px-6 lg:px-8">

        <div className="relative flex row gap-x-14">

            <div className="mt-4 sm:mt-8  flex justify-between">
                <div className="flex gap-4 items-center">
                    <input
                        type="checkbox"
                        className="mt-1 ml-16 h-4 w-4 rounded border-[#3D897A] text-[#3D897A] focus:ring-[#3D897A] sm:left-6"
                        ref={checkbox}
                        checked={checked}
                        onChange={toggleAll}
                    />
                    <p className="text-sm font-medium text-[#686868]">4 select</p>
                </div>
            </div>

            <di v className="mt-4 sm:mt-8  flex justify-between">
                <div className="flex gap-2 items-center">
                    <InvoiceSelect />
                </div>
            </di>

            <div className="absolute mt-4 sm:mt-8  flex justify-between right-0">
                <div className="flex gap-2 items-center">
                    <InvoiceUploadInvoice />
                </div>
            </div>

        </div>

        <div className="mt-8 flex flex-col" style={{'box-shadow':'0px 10px 60px #DCDCDC8C'}}>
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg  px-10 py-4 bg-white">
                {
                    !isEmpty(invoices)?
                    <table className="min-w-full" cellspacing="0" cellpadding="0">
                    <thead>
                    <tr>
                        <th 
                        scope="col"
                        className="relative w-12 px-6 sm:w-16 sm:px-8"
                        >
                        
                        </th>
                        <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-500 sm:pl-6"
                        >
                        Invoice ID
                        </th>
                        <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-500"
                        >
                        Date Sent
                        </th>
                        <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-500"
                        >
                        Status
                        </th>
                        <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-500"
                        >
                        Description
                        </th>
                        <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-500"
                        >
                        Action
                        </th>
                    </tr>
                    </thead>
                    <tbody className="bg-white">
                    {invoices.map((invoice) => (
                        <tr key={invoice.invoiceId} className='hover:bg-gray'>
                        <td className="relative w-12 px-6 sm:w-16 sm:px-8">
                            {selectedproduct.includes(invoice) && (
                            <div className="absolute inset-y-0 left-0 w-0.5 bg-[#3D897A]" />
                            )}
                            <input
                            type="checkbox"
                            className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-[#3D897A] focus:ring-[#3D897A] sm:left-6"
                            value={invoice.invoiceId}
                            checked={selectedproduct.includes(invoice)}
                            onChange={(e) =>
                                setSelectedproduct(
                                e.target.checked
                                    ? [...selectedproduct, invoice]
                                    : selectedproduct.filter((p) => p !== invoice)
                                )
                            }
                            />
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm">
                            <div className="ml-4 text-gray-500">
                                {invoice.invoiceId}
                            </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <div className="text-gray-500">{invoice.dateSent}</div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <span className={invoice.status === 'Donated'?"inline-flex rounded-full bg-[#3D897A] bg-opacity-25 px-2 text-xs font-semibold leading-5 text-[#3D897A]"
                            :"inline-flex rounded-full bg-[#F88700] bg-opacity-25 px-2 text-xs font-semibold leading-5 text-[#F88700]"}>
                            {invoice.status}
                            </span>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <div className="text-gray-500">{invoice.description}</div>
                        </td>
                        
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <button><FileDownloadOutlinedIcon  className="w-5" /> Download</button>
                        </td>
                        </tr>
                    ))}
                    </tbody>
                    </table>
                    :
                    <div className="lg:block relative flex-1 w-full bg-white px-[400px] py-12 w-full">
                    <img
                    className="object-cover"
                    src="/Layer_1-2.svg"
                    alt=""
                    />
                    <div>
                        <p className='mt-5 text-[18px] text-[#232323] w-full'>You Don't have any invoice yet!</p>
                        <p className='ml-2 text-[16px] text-[#707082] w-full'>Start uploading your invoice now!</p>
                    </div>
                    <div className="mt-5 ml-10">
                        <InvoiceUploadInvoice />
                    </div>
                </div>
                }
                </div>
            </div>
            </div>
        </div>
        <div className="flex row gap-5">
        
        <button onClick={() => setProduct([])}>empty</button>
        <button onClick={() => setProduct( [
        {
            code: "#015545df",
            mytreetyCommission: "$ 30",
            paymentDate: "23/5/2022",
            PaymentState: "paid",
        },
        {
            code: "#015545df",
            mytreetyCommission: "$ 30",
            paymentDate: "23/5/2022",
            PaymentState: "pending",
        },
        ]
        )}>fill</button>

    </div>
        </div>
    );
}
