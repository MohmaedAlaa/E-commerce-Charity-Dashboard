import React, { Fragment, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuAlt2Icon, XIcon } from "@heroicons/react/outline";
// question-mark-circle
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import { SearchIcon, UserCircleIcon } from "@heroicons/react/solid";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import Link from "next/link";
import { useRouter } from "next/router";

const checklist = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="15.07"
    viewBox="0 0 20 15.07"
    className="mr-4"
  >
    <path
      fill="#f9f9f9"
      d="M11 7H2v2h9zm0 8H2v2h9zm5.34-4L12.8 7.46l1.41-1.41 2.12 2.12 4.24-4.24L22 5.34zm0 8l-3.54-3.54 1.41-1.41 2.12 2.12 4.24-4.24L22 13.34z"
      data-name="Path 15518"
      transform="translate(-2 -3.93)"
    ></path>
  </svg>
);
const productsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="23"
    height="21"
    viewBox="0 0 23 21"
    className="mr-4"
  >
    <path
      fill="#f9f9f9"
      d="M5.308 21a1.765 1.765 0 01-1.77-1.751V7H1.769A1.765 1.765 0 010 5.25v-3.5A1.765 1.765 0 011.769 0h19.462A1.765 1.765 0 0123 1.75v3.5A1.765 1.765 0 0121.231 7h-1.77v12.25A1.765 1.765 0 0117.692 21zm0-1.751h12.384V7H5.308zm15.923-14V1.75H1.769v3.5h19.462zM7.79 9.625c-.371 0-.675-1.75-.675-1.75h8.769s-.3 1.75-.674 1.75z"
      data-name="Union 4"
    ></path>
  </svg>
);
import RestoreOutlinedIcon from "@mui/icons-material/RestoreOutlined";

const navigation = [
  { name: "Dashboard", href: "/", icon: DashboardOutlinedIcon, current: true },
  // { name: "Products", href: "/products", icon: UsersIcon, current: false },
  {
    name: "Products",
    icon: productsIcon,
    current: false,
    children: [
      { name: "●  Products", href: "/products" },
      { name: "●  Product Bulk Upload", href: "/ProductBulkUpload" },
      { name: "●   Sustainability Icons", href: "/SustainabilityIcons" },
    ],
  },
  { name: "Orders", href: "/orders", icon: checklist, current: false },
  {
    name: "Product Reviews",
    href: "/productReviews",
    icon: StarBorderIcon,
    current: false,
  },
  {
    name: "Commission History",
    href: "/commissionHistory",
    icon: RestoreOutlinedIcon,
    current: false,
  },
  {
    name: "Support",
    href: "/support",
    icon: SupportAgentOutlinedIcon,
    current: false,
  },
  {
    name: "Help",
    href: "/help",
    icon: ContactSupportOutlinedIcon,
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();
  return (
    <div>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full">
        <body class="h-full">
        ```
      */}
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 md:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative max-w-xs w-full bg-[#3D897A] pt-5 pb-4 flex-1 flex flex-col">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex-shrink-0 px-4 flex items-center">
                    <img
                      className="h-8 w-auto"
                      src="/logoLight.svg"
                      alt="mytreety"
                    />
                  </div>
                  <div className="mt-5 flex-1 h-0 overflow-y-auto">
                    <nav className="px-2 space-y-1">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.href === router.pathname
                              ? "bg-[#CCE7E6]/30 text-white"
                              : "text-white hover:bg-[CCE7E6] hover:text-white",
                            "group rounded-md py-2 px-2 flex items-center text-base font-medium"
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.href === router.pathname
                                ? "text-white"
                                : "text-white group-hover:text-white",
                              "mr-4 flex-shrink-0 h-6 w-6"
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      ))}
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="flex-shrink-0 w-14">
                {/* Dummy element to force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="border-r border-gray-200 pt-5 flex flex-col flex-grow bg-[#3D897A] overflow-y-auto">
            <div className="flex-shrink-0 px-4 flex items-center fill-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="133.766"
                height="33.46"
                viewBox="0 0 173.766 44.662"
                className="fill-white text-white"
              >
                <g transform="translate(0 10.66)">
                  <g transform="translate(0 -10.66)">
                    <g data-name="Group 10837">
                      <text
                        fill="#fff"
                        fontFamily="Segoe UI"
                        fontSize="33"
                        transform="translate(44.766 36)"
                      >
                        <tspan x="0" y="0">
                          mytreety
                        </tspan>
                      </text>
                      <g
                        fill="#fff"
                        data-name="Group 10835"
                        transform="translate(0 5.571)"
                      >
                        <path
                          d="M19.279 0a.259.259 0 01.261.261v26.225a.78.78 0 01-.11-.01 4.68 4.68 0 01-.382-.063 6.034 6.034 0 01-2-.993 5.454 5.454 0 00-4.7-.768 10.069 10.069 0 00-2.3 1.15 4.2 4.2 0 01-3.345.606 8.527 8.527 0 01-2.153-1.04 5.79 5.79 0 00-3.282-.909.792.792 0 01-.794-.622A19.663 19.663 0 010 19.545a19.451 19.451 0 011.531-7.593 1.874 1.874 0 012.932-.7c.345.287.685.575 1.03.868.089.073.172.146.293.251-.089.1-.167.193-.24.287-.726.888-1.516 1.74-2.164 2.681a5.98 5.98 0 00.753 7.416.5.5 0 00.794-.021c1.15-1.359 2.341-2.681 3.418-4.092a5.8 5.8 0 00.93-5.378c-.026-.1-.063-.2-.1-.324.1.005.178.01.256.021a5.923 5.923 0 005.456-2.038c1.092-1.239 2.137-2.519 3.2-3.784a.536.536 0 00-.141-.915 6.035 6.035 0 00-7.9 1.1c-.554.643-1.092 1.3-1.636 1.939-2.07-1.2-2.383-3.329-1.165-4.85l.141-.178A19.434 19.434 0 0119.279 0z"
                          data-name="Path 15400"
                        ></path>
                        <path
                          d="M20.168 51.423a4.971 4.971 0 01-1.667-.57 4.7 4.7 0 01-.517-.314 4.714 4.714 0 00-6.094 0 5.025 5.025 0 01-1.714.768 5.757 5.757 0 01-4.636-.747 8.109 8.109 0 00-2.158-1.03 3.924 3.924 0 00-.528-.1.449.449 0 00-.481.6 19.075 19.075 0 00.8 1.834.817.817 0 00.554.434 6.187 6.187 0 011.991.836 8.064 8.064 0 002.117 1.019 4.077 4.077 0 003.449-.685 6.31 6.31 0 012.352-1.139 4.892 4.892 0 01.554-.089.69.69 0 01.763.554.639.639 0 01-.507.784 6.8 6.8 0 00-2.8 1.28 5.308 5.308 0 01-3.042.789 5.76 5.76 0 01-3.057-.93H5.54a.255.255 0 00-.34.371 19.529 19.529 0 0015.192 7.6.274.274 0 00.277-.272V51.485c-.167-.01-.329-.031-.491-.052zm-2.838 2.728a1.059 1.059 0 01-1.009-.82.672.672 0 01.638-.716 1.012 1.012 0 011.03.831.688.688 0 01-.664.706z"
                          data-name="Path 15401"
                          transform="translate(-1.119 -23.594)"
                        ></path>
                        <path
                          d="M59.006 18.839a35.858 35.858 0 00-2.043 2.064c-.183-.564-.355-1.1-.523-1.631a2.913 2.913 0 00-1.766-1.887 4.588 4.588 0 00-2.122-.24A4.7 4.7 0 0151 16.963c-.6-.178-1.139-.517-1.725-.737a1.233 1.233 0 00-.282-.063c-.042.026-.084.052-.125.073-.042.021-.084.047-.125.068s-.073.037-.11.052a2 2 0 00.355.371c.617.46 1.265.873 1.892 1.327a2.829 2.829 0 011.17 2.766 8.712 8.712 0 00-.078 1.218 9.177 9.177 0 002.341 5.524 8.664 8.664 0 002.153 1.824 19.564 19.564 0 01-14.4 9.689.273.273 0 01-.308-.272V20.59l3.442-2.681a.517.517 0 00.089-.726l-.512-.658a.517.517 0 00-.726-.089l-2.291 1.786V.574a.257.257 0 01.293-.256 19.54 19.54 0 0116.958 18.526z"
                          data-name="Path 15402"
                          transform="translate(-19.936 -.151)"
                        ></path>
                      </g>
                      <g
                        fill="#fff"
                        data-name="Group 10836"
                        transform="translate(25.609 15.924)"
                      >
                        <path
                          d="M52.654 23.541a1.649 1.649 0 01-.115.152 6.15 6.15 0 01-3.507 1.944h-.021a6.138 6.138 0 011.089-3.878 6.176 6.176 0 013.528-1.949 6.264 6.264 0 01-.967 3.726z"
                          data-name="Path 15403"
                          transform="translate(-49.003 -19.81)"
                        ></path>
                        <path
                          d="M53.952 27.248a4.657 4.657 0 01-1.484 1.625c-.042.026-.084.052-.125.073l-.125.068c-.037.016-.073.037-.11.052a2.011 2.011 0 01-.246.1 4.3 4.3 0 01-2.812-.131 6.136 6.136 0 003.507-1.944c.042-.052.078-.1.115-.152a4.852 4.852 0 011.275.3z"
                          data-name="Path 15404"
                          opacity="0.71"
                          transform="translate(-49.025 -23.214)"
                        ></path>
                        <path
                          d="M52.663 26.931a1.649 1.649 0 01-.115.152 6.15 6.15 0 01-3.507 1.944h-.021a4.328 4.328 0 012.085-1.927 3.557 3.557 0 011.558-.169z"
                          data-name="Path 15405"
                          opacity="0.71"
                          transform="translate(-49.011 -23.199)"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div className="flex-grow mt-16 flex flex-col">
              {/* <nav className="flex-1 px-2 pb-4 space-y-1">
                {navigation.map((item) => (
                  <Link href={item.href} key={item.name}>
                    <a
                      className={classNames(
                        item.href === router.pathname
                          ? "bg-[#CCE7E6]/30 text-white"
                          : "text-white hover:bg-[#CCE7E6]/30 hover:text-white",
                        "group rounded-md py-2 px-2 flex items-center text-sm font-medium"
                      )}
                    >
                      <item.icon
                        className={classNames(
                          item.href === router.pathname
                            ? "text-white"
                            : "text-white group-hover:text-white",
                          "mr-3 flex-shrink-0 h-6 w-6"
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  </Link>
                ))}
              </nav> */}

              <nav className="flex-1 mt-8 px-2 space-y-1" aria-label="Sidebar">
                {navigation.map((item) =>
                  !item.children ? (
                    <div key={item.name}>
                      <Link href={item.href}>
                        <a
                          className={classNames(
                            item.current
                              ? " text-white hover:bg-[#d3eded54]"
                              : " text-white hover:bg-[#d3eded54] ",
                            "group w-full flex items-center pl-2 py-2 text-sm font-medium rounded-md"
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.current ? "text-white" : "text-white ",
                              "mr-3 flex-shrink-0 h-6 w-6"
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      </Link>
                    </div>
                  ) : (
                    <Disclosure as="div" key={item.name} className="space-y-1">
                      {({ open }) => (
                        <>
                          <Disclosure.Button
                            className={classNames(
                              item.current
                                ? "bg-transparent text-white"
                                : "bg-transparent text-white hover:bg-[#d3eded54] bg-opacity-10 hover:text-white",
                              "group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-[#3d897a]"
                            )}
                          >
                            <item.icon
                              className="mr-3 flex-shrink-0 h-6 w-6 text-white "
                              aria-hidden="true"
                            />
                            <span className="flex-1">{item.name}</span>
                            <svg
                              className={classNames(
                                open ? "text-white rotate-90" : "text-gray-100",
                                "ml-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-100 transition-colors ease-in-out duration-150"
                              )}
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                            >
                              <path
                                d="M6 6L14 10L6 14V6Z"
                                fill="currentColor"
                              />
                            </svg>
                          </Disclosure.Button>
                          <Disclosure.Panel className="space-y-1">
                            {item.children.map((subItem) => (
                              <Disclosure.Button
                                key={subItem.name}
                                as="span"
                                className="group w-full rounded-md flex items-center pl-11 pr-2 py-2 text-sm font-medium text-white  hover:text-gray-100 hover:bg-[#d3eded54]"
                              >
                                <Link href={subItem.href} className="w-full">
                                  <a className="w-full"> {subItem.name}</a>
                                </Link>
                              </Disclosure.Button>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  )
                )}
              </nav>
              <div className="ml-4 mb-6 text-white">
                <LogoutIcon className="mr-4" />
                <Link href="/login">
                  <a>Logout</a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="md:pl-64 bg-[#F2F4F7] h-full">
          <div className="max-w-7xl mx-auto flex flex-col md:px-8 xl:px-0 h-full ">
            <div className="sticky top-0 z-10 flex-shrink-0 h-16 bg-[#F2F4F7] border-b border-gray-200 flex">
              <button
                type="button"
                className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                <span className="sr-only">Open sidebar</span>

                <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
              </button>
              <div className="flex-1 flex justify-end px-4 md:px-0">
                <div className="ml-4 flex items-center md:ml-6 ">
                  <button
                    type="button"
                    className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Profile dropdown */}
                  <div className="ml-3 relative">
                    <Link href="/profile/id">
                      <a>
                        <UserCircleIcon className="h-10 w-10 text-primary" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <main className="flex-1 h-full">
              <div className="">
                <div className="px-4 min-h-screen pt-6 sm:px-6 md:px-0 bg-[#F2F4F7] pb-6 h-full">
                  {children}
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
