
export const doughnutOptions = {
  elements:{
    arc:{
      weight:.5,
      borderWidth:0,
    }
  },
  cutout:40,  responsive: true,
  
};
export const doughnutData ={
  

  datasets: [
  {
  data: [90, 10],
  backgroundColor:['#3D897A', '#F3D030'],
  
  hover0ffset : 4
  ,
   
  },], };



 



  // {data: {
  //   datasets: [
  //     { borderWidth: 0,
        
  //       data: [35, 30, 15, 20],
  //       /**
  //        * These colors come from Tailwind CSS palette
  //        * https://tailwindcss.com/docs/customizing-colors/#default-color-palette
  //        */
  //       backgroundColor: ['#10B981', '#3B82F6', '#F97316', '#0EA5E9'],
  //       label: 'Dataset 1',
  //     },
  //   ],
  //   labels: ['Fresh Vegetable', 'Cooking Essentials', 'Drinks', 'Organic Food'],
  // }}


  // options: {
  //   responsive: true,
  //   cutoutPercentage:5,
  // },
  // legend: {
  //   display: false,
  // },