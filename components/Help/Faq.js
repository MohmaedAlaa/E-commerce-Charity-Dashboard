import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

export default function Faq({openFaq}) {
  return (
    <div className="mx-auto w-full">
      <div className=" w-full rounded-2xl bg-white p-2 mt-8 px-7 shadow-sm">
        <Disclosure >
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full  justify-between rounded-lg  py-2 text-left text-sm font-medium   focus:outline-none">
                <span className="text-lg font-medium ">
                  How To Add Sustainability Icons To The Product?
                </span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-gray-700`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className=" pt-2 pb-2 text-sm text-gray-500 leading-7 text-[14px]">
                <p>
                    1- Select all sustainability icons that apply to all of your
                    products from the sustainability icons page.
                </p>
                <p>
                2- Upload your proof document.
                </p>   <p>
                3- Now you can add the icons to your products!
                </p>   <p>
                4- You can always edit sustainability icons & upload their proof document.
                </p>
               
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}