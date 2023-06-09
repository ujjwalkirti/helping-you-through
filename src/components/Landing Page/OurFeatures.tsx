import React from "react";
import Bike from "@/../../public/assests/bike.jpg";
import Books from "@/../../public/assests/books.jpg";
import Pyqs from "@/../../public/assests/pyqs.jpeg";
import Dorm from "@/../../public/assests/dorm.jpg";
import Doubt from "@/../../public/assests/doubt.jpg";
import Feedback from "@/../../public/assests/feedback.jpg";
import { poppins } from "@/utils/Fonts";
import Link from "next/link";

const OurFeatures = () => {


const Image1=Books.src;
const Image2=Bike.src;
const Image3=Dorm.src;
const Image4=Pyqs.src;
const Image5=Doubt.src;
const Image6=Feedback.src;
  
  return (
    <>
    <h1 className=" text-2xl sm:text-4xl lg:text-5xl text-center font-extrabold uppercase text-[#20B15A] bg-[#D7F5DC] dark:bg-[#000]">OUR FEATURES</h1>
    <p className="text-center text-sm font-semibold sm:text-md bg-[#D7F5DC] dark:bg-[#000] text-black dark:text-white">We Provide perfect Solution to your college problem</p>
<div className={"w-full flex  flex-col sm:flex-row justify-evenly items-center h-[1050px] sm:h-[700px] md:h-[400px] bg-[#D7F5DC] dark:bg-[#000] "+poppins.className}>
  <div className="w-[280px] md:w-[340px] flex flex-col  justify-end bg-contain bg-no-repeat   h-[300px] sm:h-[340px]" >
  <div className="h-full w-full bg-cover" style={{backgroundImage:`url(${Image1})`}}>
  </div>
    <h1 className="text-black dark:text-white text-center font-extrabold uppercase text-xl">Books And Stationaries</h1>
    <p className="text-black dark:text-white text-center  pt-1 text-sm">Any student can upload the Books they want to sell or any stationaries and anyone can buy </p>
    <Link href="/" className="no-underline text-center text-black dark:text-white text-lg">Learn More ➡</Link>
  </div>
  <div className="w-[280px] md:w-[340px] flex flex-col  justify-end bg-contain bg-no-repeat   h-[300px] sm:h-[340px]">
  <div className="h-full w-full bg-cover" style={{backgroundImage:`url(${Image2})`}}>
  </div>
  <h1 className={"text-black dark:text-white text-center font-extrabold uppercase text-xl"}>Bikes And Cycles</h1>
  <p className="text-black dark:text-white text-center pt-1 text-sm">Platfrom where any student can sell or buy  old Bikes or Cycles directly from the owner </p>
  <Link href="/" className="no-underline text-center text-black dark:text-white text-lg">Learn More ➡</Link>
  </div>
  <div className="w-[280px] md:w-[340px] flex flex-col  justify-end bg-contain bg-no-repeat   h-[300px] sm:h-[340px] md:hidden lg:flex ">
  <div className="h-full w-full bg-cover" style={{backgroundImage:`url(${Image3})`}}>
  </div>
  <h1 className="text-black dark:text-white text-center font-extrabold uppercase text-xl">Students Chapter</h1>
  <p className="text-black dark:text-white text-center pt-1 text-sm">Students can find here reviews of different societies, clubs and hostels </p>
  <Link href="/" className="no-underline text-center text-black dark:text-white text-lg">Learn More ➡</Link>
  </div>
</div>
<div className={"w-full   flex-col sm:flex-row justify-evenly items-center hidden md:flex lg:hidden h-[1050px] sm:h-[700px] md:h-[400px] bg-[#D7F5DC] dark:bg-[#000] "+poppins.className}>
  <div className="w-[280px] md:w-[340px] flex flex-col  justify-end bg-contain bg-no-repeat   h-[300px] sm:h-[340px]" >
  <div className="h-full w-full bg-cover" style={{backgroundImage:`url(${Image3})`}}>
  </div>
    <h1 className="text-black dark:text-white text-center font-extrabold uppercase text-xl">Students Chapter</h1>
    <p className="text-black dark:text-white text-center  pt-1 text-sm">Students can find here reviews of different societies, clubs and hostels </p>
    <Link href="/" className="no-underline text-center text-black dark:text-white text-lg">Learn More ➡</Link>
  </div>
  <div className="w-[280px] md:w-[340px] flex flex-col  justify-end bg-contain bg-no-repeat   h-[300px] sm:h-[340px]">
  <div className="h-full w-full bg-cover" style={{backgroundImage:`url(${Image4})`}}>
  </div>
  <h1 className={"text-black dark:text-white text-center font-extrabold uppercase text-xl"}>PYQs And Notes</h1>
  <p className="text-black dark:text-white text-center pt-1 text-sm">We here provide you all the Previous Year Question Papers and Notes from all the Departments students</p>
  <Link href="/" className="no-underline text-center text-black dark:text-white text-lg">Learn More ➡</Link>
  </div>
 
</div>
<div className={"w-full flex  flex-col sm:flex-row justify-evenly items-center h-[1050px] sm:h-[700px] md:h-[400px] bg-[#D7F5DC] dark:bg-[#000] "+poppins.className}>
  <div className="w-[280px] md:w-[340px] flex flex-col  justify-end bg-contain bg-no-repeat   h-[300px] sm:h-[340px] md:hidden lg:flex" >
  <div className="h-full w-full bg-cover" style={{backgroundImage:`url(${Image4})`}}>-
  </div>
    <h1 className="text-black dark:text-white text-center font-extrabold uppercase text-xl ">PYQs And Notes </h1>
    <p className="text-black dark:text-white text-center  pt-1 text-sm">We here provide you all the Previous Year Question Papers and Notes from all the Departments students </p>
    <Link href="/" className="no-underline text-center text-black dark:text-white text-lg">Learn More ➡</Link>
  </div>
  <div className="w-[280px] md:w-[340px] flex flex-col  justify-end bg-contain bg-no-repeat   h-[300px] sm:h-[340px]">
  <div className="h-full w-full bg-cover" style={{backgroundImage:`url(${Image5})`}}>
  </div>
  <h1 className={"text-black dark:text-white text-center font-extrabold uppercase text-xl"}>Doubt Section</h1>
  <p className="text-black dark:text-white text-center pt-1 text-sm">Here You can find all the FAQ&pos;s and also can post your any doubts </p>
  <Link href="/" className="no-underline text-center text-black dark:text-white text-lg">Learn More ➡</Link>
  </div>
  <div className="w-[280px] md:w-[340px] flex flex-col  justify-end bg-contain bg-no-repeat   h-[300px] sm:h-[340px]  ">
  <div className="h-full w-full bg-cover" style={{backgroundImage:`url(${Image6})`}}>
  </div>
  <h1 className="text-black dark:text-white text-center font-extrabold uppercase text-xl">Feedback Section</h1>
  <p className="text-black dark:text-white text-center pt-1 text-sm ">Here you can find Feedback of Our Alumuni of all different departments </p>
  <Link href="/" className="no-underline text-center text-black dark:text-white text-lg ">Learn More ➡</Link>
  </div>
</div>


</>
  );
};

export default OurFeatures;

