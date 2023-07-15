import React from "react";
import Image from "next/image";
import { poppins } from "@/utils/Fonts";

function ReadReviewOptions() {
  return (<div>
    <div className=" w-10/12 md:w-full  m-auto mb-5 flex max-w-2xl max-h-96 bg-lgreen dark:bg-dgreen text-black dark:text-white rounded-xl shadow shadow-[#00000040] ">
      <div className=" m-4 w-3 h-80 flex-shrink-0 border-2 border-solid border-black bg-[ #D9D9D9] dark:bg-[#979798]">
        <div className=" mt-16 w-2.5 h-14 flex-shrink-0 bg-black dark:bg-white"></div>
      </div>
      <div>
        <div className={" w-10/12 md:w-full  mx-16 justify-center flex max-w-32 h-14 flex-col flex-shrink-0   font-semibold "+poppins.className}>Name</div>
        <div >
          <div className=" text-center mx-2 mb-2 max-w-xl h-10 flex-shrink-0 bg-[#D9D9D9] dark:bg-[#979798]">Akriti</div>
          <div className=" text-center mx-2 mb-2 max-w-xl h-10 flex-shrink-0 bg-[#D9D9D9] dark:bg-[#979798]">ACM</div>
          <div className=" text-center mx-2 mb-2 max-w-xl h-10 flex-shrink-0 bg-[#D9D9D9] dark:bg-[#979798]">CHRD</div>
          <div className=" text-center mx-2 mb-2 max-w-xl h-10 flex-shrink-0 bg-[#D9D9D9] dark:bg-[#979798]">CES</div>
          <div className=" text-center mx-2 mb-2 max-w-xl h-10 flex-shrink-0 bg-[#D9D9D9] dark:bg-[#979798]">GDSC</div>
          <div className=" text-center mx-2 mb-2 max-w-xl h-10 flex-shrink-0 bg-[#D9D9D9] dark:bg-[#979798]">Drishti</div>
        </div>
      </div>
      <div className=" max-w-0 md:max-w-full flex w-96 h-14 flex-shrink-0 flex-col ">
        <div className={" hidden md:block  mx-16 mt-4 justify-center text-center font-semibold "+poppins.className}>Student Chapters/clubs</div>
        <div className=" mx-10 mt-4 justify-end" >
          <Image className=" flex-shrink-0 border-2 border-solid" src="/assests/student_chapter.png" width={300} height={296} alt="Student Chapters" />
        </div>
      </div>
      
    </div>
    <div className=" w-10/12 md:w-full m-auto mb-5 flex max-w-2xl max-h-96 bg-lgreen dark:bg-dgreen text-black dark:text-white rounded-xl shadow shadow-[#00000040] ">
    <div className=" hidden md:block  w-96 h-14 flex-shrink-0 flex-col ">
    <div className={" hidden md:block mx-16 mt-4 justify-center text-center font-semibold "+poppins.className}>About Hostels</div>
        <div className=" mx-10 mt-4 justify-end" >
        <Image className="  flex-shrink-0 border-2 border-solid" src="/assests/hostels.png" width={300} height={296} alt="Hostels" /> 
        </div>
        </div>
      <div>
      <div className={" w-10/12 md:w-full  mx-16 justify-center flex max-w-32 h-14 flex-col flex-shrink-0   font-semibold "+poppins.className}>Name</div>
        <div >
          <div className=" text-center mx-2 mb-2 max-w-xl h-10 flex-shrink-0 bg-[#D9D9D9] dark:bg-[#979798]">Gajjar Bhavan</div>
          <div className=" text-center mx-2 mb-2 max-w-xl h-10 flex-shrink-0 bg-[#D9D9D9] dark:bg-[#979798]">Mother Terasa Bhavan</div>
          <div className=" text-center mx-2 mb-2 max-w-xl h-10 flex-shrink-0 bg-[#D9D9D9] dark:bg-[#979798]">Nehru Bhavan</div>
          <div className=" text-center mx-2 mb-2 max-w-xl h-10 flex-shrink-0 bg-[#D9D9D9] dark:bg-[#979798]">Tagore Bhavan</div>
          <div className=" text-center mx-2 mb-2 max-w-xl h-10 flex-shrink-0 bg-[#D9D9D9] dark:bg-[#979798]">Sarabhai Bhavan</div>
          <div className=" text-center mx-2 mb-2 max-w-xl h-10 flex-shrink-0 bg-[#D9D9D9] dark:bg-[#979798]">Swami Vivekanand Bhavan</div>
        </div>
      </div>
      <div className=" m-4 w-3 h-80 flex-shrink-0 border-2 border-solid border-black bg-[ #D9D9D9] dark:bg-[#979798]">
        <div className=" mt-16 w-2.5 h-14 flex-shrink-0 bg-black dark:bg-white"></div>
      </div>  
    </div>
    
    

        
    
    </div>

);
}

export default ReadReviewOptions;
// Bhabha Bhavan</div>
//           <div className=" max-w-xl h-10 flex-shrink-0 bg-[#D9D9D9] dark:bg-[#979798]">Gajjar Bhavan</div>
//           <div className=" max-w-xl h-10 flex-shrink-0 bg-[#D9D9D9] dark:bg-[#979798]">Mother Terasa Bhavan</div>
//           <div className=" max-w-xl h-10 flex-shrink-0 bg-[#D9D9D9] dark:bg-[#979798]">Swami Vivekanand Bhavan</div>
//           <div className=" max-w-xl h-10 flex-shrink-0 bg-[#D9D9D9] dark:bg-[#979798]">Nehru Bhavan</div>
//           <div className=" max-w-xl h-10 flex-shrink-0 bg-[#D9D9D9] dark:bg-[#979798]">Tagore Bhavan</div>
