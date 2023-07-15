import GiveReviewBox from "@/components/Reviews/GiveReviewBox";
import ReadReviewOptions from "@/components/Reviews/ReadReviewOptions";
import React, { useState } from "react";
import { Button, ButtonGroup } from "@mui/material";
import { poppins } from "@/utils/Fonts";
const Reviews = () => {
  const [choice, setChoice] = useState("read");
  const handleclick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const buttonId = (e.currentTarget as HTMLButtonElement).id;
    setChoice(buttonId === "1" ? "read" : "give");
  };
  return (
    <section>
      <div className=" mt-3 mb-2 text-center">
        <svg className="  inline-block w-12 h-16 flex-shrink-0 " width="70" height="80" viewBox="0 0 70 80" fill="none">
<path d="M39.375 67.0029H56.875V72.157H39.375V67.0029Z" fill="black"/>
<path d="M39.375 56.6943H65.625V61.8484H39.375V56.6943Z" fill="black"/>
<path d="M39.375 46.3867H65.625V51.5408H39.375V46.3867Z" fill="black"/>
<path d="M44.9509 28.9067L35 5.1543L25.0491 28.9067L2.79999 32.7156L18.9 51.2058L15.0981 77.311L30.625 67.6961V61.8721L20.9103 67.8894L23.2116 52.0768L23.6009 49.4044L21.9537 47.5155L12.2019 36.3131L25.6791 34.0067L27.9541 33.6176L28.9734 31.1874L35 16.7999L41.0265 31.1874L42.0459 33.6176L44.3209 34.0067L60.6265 36.8028L61.25 31.6977L44.9509 28.9067Z" fill="black"/>
</svg>
      <p className={" inline-block text-center text-2xl font-semibold "+poppins.className}>Reviews</p>
      </div>{/* Option to whether read or give review */}
      <div className="text-center text-black dark:text-white mb-4">
        <ButtonGroup size="small" className="bg-[#00000040]  dark:bg-[#979798]" variant="contained">
          <Button
            id="1"
            className={` rounded-md text-black dark:text-white ${choice === "read" ? "bg-[#D7F5DC] dark:bg-[#67CE67]" : null}`}
            color="warning"
            onClick={handleclick}
          >
            Read
          </Button>
          <Button
            id="2"
            className={` text-black dark:text-white ${choice === "give" ? "bg-[#D7F5DC] dark:bg-[#67CE67]" : null}`}
            color="warning"
            onClick={handleclick}
          >
            Give
          </Button>
        </ButtonGroup>
      </div>
      {choice === "read" ? <ReadReviewOptions /> : <GiveReviewBox />}
    </section>
  );
};

export default Reviews;
