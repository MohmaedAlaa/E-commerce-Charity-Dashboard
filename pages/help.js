import { useLayoutEffect, useRef, useState } from "react";
import React from "react";
import TabsHelp from "../components/Help/TabsHelp";      

export const product = [
  { id:'1',
    code: "#123234ggd",
    no: "1",
    amount: "$ 30",
    ShippingAddress:'Röpkestraße 35,Düsseldorf,40235,Germany',
    orderDate:"23/5/2022-11:18 PM",
    orderStatus:'pending',
    paymentMethod:'Paypal',
    variation:'XL.Blue',
    SKU:'XLpoloshirt001',
    quantity:'1',
    status:'pending'
  },
  { 
    id:'2',
    code: "#878654gd",
    no: "2",
    amount: "$ 50",
    ShippingAddress:'Röpkestraße 35,Düsseldorf,40235,Germany',
    orderDate:"23/5/2022-11:18 PM",
    orderStatus:'pending',
    paymentMethod:'Paypal',
    variation:'XL.Blue',
    SKU:'XLpoloshirt001',
    quantity:'1',
    status:'pending'
},
  // More product...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function products() {
  const checkbox = useRef();
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selectedproduct, setSelectedproduct] = useState([]);

  // useLayoutEffect(() => {
  //   const isIndeterminate =
  //     selectedproduct.length > 0 && selectedproduct.length < product.length;
  //   setChecked(selectedproduct.length === product.length);
  //   setIndeterminate(isIndeterminate);
  //   checkbox.current.indeterminate = isIndeterminate;
  // }, [selectedproduct]);

  function toggleAll() {
    setSelectedproduct(checked || indeterminate ? [] : product);
    setChecked(!checked && !indeterminate);
    setIndeterminate(false);
  }

  function isEmpty(object) {
    for (const property in object) {
      return false;
    }
    return true;
  }

  return (
    <div className="flex justify-center items-center max-w-7xl px-5 ">
    <div className="w-full">
      <h2 className="text-2xl font-semibold my-2 ">Help</h2>
      <TabsHelp />
    </div>
  </div>
);
}