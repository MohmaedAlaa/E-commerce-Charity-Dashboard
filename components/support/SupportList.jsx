import { Fragment,useState } from "react";
import SortSelect from "./SortSelect";
import SupportTable from "./SupportTable";
import MyDialog from "./ModelCreateMessage.js";
import { MessagesList as MessagesListData}  from "/public/Data/MessagesListData";
import Image from "next/image";
// import MessageImg from "/Messages.svg";
export default function SupportList() {
  let [isOpen, setIsOpen] = useState(false)
const [messagesList,setMessagesList]=useState(MessagesListData)
const Empty=()=>{
  setMessagesList()
}
const FulList=()=>{
  setMessagesList(MessagesListData)
}
// console.log(MessageImg)
  return (
    <div className="supportList  w-full flex flex-col">
      <h1 className="font-medium	text-[24px] w-full">Messages ({messagesList ? messagesList?.length : "0"})</h1>
      {messagesList?.length > 0 ? (<>
      <div className="flex flex-row flex-wrap justify-between mt-5">
        <div className="dropdown flex flex-row  align-middle justify-between w-[248px] ">
          <SortSelect />
        </div>

        <div className="flex m-auto sm:m-0 mt-3">
         
          <button onClick={()=>setIsOpen(true)}
            type="button"
            className="inline-flex max-w-xs items-center justify-center rounded-md border border-transparent bg-[#3d897a] px-8 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#3d897a] focus:outline-none focus:ring-2 focus:ring-[#3d897a] focus:ring-offset-2"
          >
            + Add
          </button>
        </div>
      </div>

  <SupportTable MessagesList={messagesList}/>
</>
):(
  <> <div className="mt-6 w-full bg-white rounded-lg shadow-lg flex flex-col justify-center text-center py-20">
  <Image
        src={"/images/Messages.svg"}
    width={187}
    height={173}
    alt="empty Messages"
  />
  <h3 className="font-semibold text-lg mt-4">
    You haven&apos;t sent any messages yet!
  </h3>
  <p className="my-2 text-[#707082]">We're here to help you. Contact us for any inquiry.</p>
  <div className="mt-4">
  <button
        type="button"  onClick={()=>setIsOpen(true)}
        className="inline-flex max-w-xs items-center justify-center rounded-md border border-transparent bg-[#3d897a] px-8 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#3d897a] focus:outline-none focus:ring-2 focus:ring-[#3d897a] focus:ring-offset-2"
      >
        + Add
      </button>
  </div>
</div></>
)}
<MyDialog  isOpen={isOpen}  setIsOpen={setIsOpen}  />
<button  onClick={Empty}>Empty</button><button  onClick={FulList}>FulList</button>
    </div>
  );
}
