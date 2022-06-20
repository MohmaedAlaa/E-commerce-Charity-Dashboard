import React, { useState } from 'react'
import AllCharts from '../components/dashboard/AllCharts'
import ProductsLayout from '../components/dashboard/ProductsLayout.jsx'
import TotalCard from '../components/dashboard/TotalCard'

export default function Dashboard() {
  let [empty,setEmpty]=useState(false)
  const EmptyBtn=()=>{
    setEmpty(true)
  }
  const show=()=>{
    setEmpty(false)
  }
  return (
    <div className='md:p-5'>
        <TotalCard empty={empty}/>
        <AllCharts empty={empty}/>
        <ProductsLayout empty={empty}/>
<button className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75" onClick={EmptyBtn}>empty</button>
<button className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75" onClick={show}>show</button>


    </div>
  )
}
