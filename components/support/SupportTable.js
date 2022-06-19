import { useRef, useState, useEffect } from "react";
import Link from "next/link";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { DotsVerticalIcon } from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SupportTable({ MessagesList }) {
  const checkbox = useRef();
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selectedMessages, setSelectedMessages] = useState([]);

  useEffect(() => {
    const isIndeterminate =
      selectedMessages.length > 0 &&
      selectedMessages.length < MessagesList.length;
    setChecked(selectedMessages.length === MessagesList.length);
    setIndeterminate(isIndeterminate);
    checkbox.current.indeterminate = isIndeterminate;
  }, [selectedMessages]);

  function toggleAll() {
    setSelectedMessages(checked || indeterminate ? [] : MessagesList);
    setChecked(!checked && !indeterminate);
    setIndeterminate(false);
  }

  return (
    <>
     
     
      {
        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="relative overflow-hidden shadow ring-1 px-5 bg-white ring-black ring-opacity-5 md:rounded-lg">
                {selectedMessages.length > 0 && (
                  <div className="absolute top-0 !left-20 flex h-12 items-center space-x-3  sm:left-16 ">
                    <button
                      type="button"
                      className="inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                    >
                      Delete all
                    </button>
                  </div>
                )}
                <table className="min-w-full table-fixed divide-y divide-gray-300">
                  <thead className=" text-[#686868]">
                    <tr>
                      <th
                        scope="col"
                        className="relative w-12 px-6 sm:w-16 sm:px-8"
                      >
                        <input
                          type="checkbox"
                          className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary sm:left-6"
                          ref={checkbox}
                          checked={checked}
                          onChange={toggleAll}
                        />
                      </th>
                      <th
                        scope="col"
                        className="min-w-[5rem] py-3.5 pr-3 text-left text-sm font-semibold "
                      >
                        ID
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold "
                      >
                        Subject
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold "
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold "
                      >
                        Date / Time
                      </th>
                      <th
                        scope="col"
                        className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                      ></th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {MessagesList.map((Message) => (
                      <tr
                        key={Message.id}
                        className={
                          selectedMessages.includes(Message)
                            ? "bg-white"
                            : undefined
                        }
                      >
                        <td className="relative w-12 px-6 sm:w-16 sm:px-8">
                          {selectedMessages.includes(Message) && (
                            <div className="absolute inset-y-0 left-0 w-0.5 bg-primary" />
                          )}
                          <input
                            type="checkbox"
                            className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-primary !focus:ring-primary sm:left-6"
                            value={Message.id}
                            checked={selectedMessages.includes(Message)}
                            onChange={(e) =>
                              setSelectedMessages(
                                e.target.checked
                                  ? [...selectedMessages, Message]
                                  : selectedMessages.filter(
                                      (p) => p !== Message
                                    )
                              )
                            }
                          />
                        </td>
                        <td
                          className={classNames(
                            "whitespace-nowrap py-4 pr-3 text-sm font-medium text-[#686868]",
                            selectedMessages.includes(Message)
                              ? "text-primary"
                              : "text-[#686868]"
                          )}
                        >
                          <Link href={`/message/${Message.id}`}>
                            <a> #{Message.id}</a>
                          </Link>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {Message.Subject}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <span
                    className={`${
                      Message.Status === "Solved"
                        ? "text-[#3D897A]  bg-[#3D897A] bg-opacity-25"
                        : "text-[#F88700] bg-[#EE6363] bg-opacity-25"
                    } inline-flex rounded-full px-2 text-xs font-semibold leading-5 `}
                  >
                    {String(Message.Status)}
                  </span>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {Message.date}
                        </td>
                        <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <Menu
                    as="div"
                    className="relative inline-block text-right ml-auto bg-white  "
                  >
                    <div>
                      <Menu.Button className="inline-flex justify-center w-full ml-auto  ">
                        <DotsVerticalIcon
                          className="-mr-1 ml-auto h-5 w-5 "
                          aria-hidden="false"
                        />
                      </Menu.Button>
                    </div>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute bottom-0 right-0 mt-2 w-56 rounded-md shadow-lg  !z-50   bg-white border-none focus:outline-none">
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-[#686868]"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                View details
                              </a>
                            )}
                          </Menu.Item>

                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-[#686868]"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                Delete
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>

                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
}
