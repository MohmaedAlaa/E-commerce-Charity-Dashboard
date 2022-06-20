import { useState, Fragment } from "react";
import { Tab } from "@headlessui/react";
import Faqs from "./Faqs";
import Guides from "./Guides";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function TabsHelp() {
  return (
    <div className="px-2 pt-4 sm:px-0 container">
      <Tab.Group>
        <Tab.List className="border-b ">
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={
                  selected
                    ? "bg-[#3D897A] text-white px-4 py-2 rounded-t-lg border-0 focus:outline-none"
                    : " text-gray-800 px-4 py-2"
                }
              >
               Guide
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={
                  selected
                    ? "bg-[#3D897A] text-white px-4 py-2 rounded-t-md  border-0 focus:outline-none  "
                    : " text-gray-800 px-4 py-2"
                }
              >
                FAQ
              </button>
            )}
          </Tab>
         
        </Tab.List>
        <Tab.Panels className="mt-8">
          <Tab.Panel>
          <Guides/>
          </Tab.Panel>
          <Tab.Panel>
          <Faqs/>  
          </Tab.Panel>
         
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}