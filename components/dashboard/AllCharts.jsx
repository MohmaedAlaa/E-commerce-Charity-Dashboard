
import ChartCircle from '../charts/ChartCircle'
import ChartLine from '../charts/ChartLine'


export default function  AllCharts({empty}) {
 
  return (
    <div  className="flex flex-row flex-wrap  justify-between pb-5">
             <div className="lg:w-[50%] w-full min-h-[262px] px-3  pt-5 ">
            <ChartCircle empty={empty}/></div>
            <div className="lg:w-[50%]  w-full min-h-[262px] px-3  pt-5 ">
            <ChartLine empty={empty}/>
            </div>
    </div>
  )
}
