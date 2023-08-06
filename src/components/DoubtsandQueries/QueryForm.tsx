import { bgcolor, display } from "@mui/system";
// import "tailwindcss/tailwind.css";
// import "./query.css"
import React from "react";
import Image from "next/image";
import { Button, ButtonGroup } from "@mui/material";

const QueryForm = () => {
  return (
    <>
      <div
        className=" dark:bg-[#070707] dark:text-white  bg-[#d7f5dc] text-black"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // border: "1px solid green",
        }}
      >
        <Image
          className=" sm:block object-cover hidden rounded mr-3"
          width={400}
          height={400}
          src="/assests/group.png"
          alt="team pic"
        />
        {/* <iframe src="https://giphy.com/embed/Ibf0oGMt6qqAqfbw2a" width="480" height="480" frameBorder="0" className="giphy-embed" allowFullScreen></iframe> */}
        <div className="w-full dark:bg-[#272626] dark:text-white m-8 bg-[#f7f8f7] text-black max-w-xs ">
          <form className=" my-8 shadow-2xl rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4" style={{ fontWeight: "bold" }}>
              {/* <label className="block text-gray-700 text-sm font-bold mb-2" for="username"> */}
              Name
              {/* </label> */}
              <input
                className=" border-[2px]  p-3 placeholder-dblack"
                placeholder="Admission No"
                type="text"
              />
            </div>
            <div
              className="mb-3 dark:bg-[#272626] dark:text-white  bg-[#fafafa] text-black"
              style={{ fontWeight: "bold" }}
            >
              {/* <label className="block text-gray-700 text-sm font-bold mb-2" for="password"> */}
              E-mail
              {/* </label> */}
              <input
                className="shadow appearance-none  border-red-500 border-[2px]  p-3 placeholder-dblack rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="email"
              />
            </div>
            <div
              className="mb-8 dark:bg-[#272626] dark:text-white  bg-[#fbfdfc] text-black "
              style={{ fontWeight: "bold" }}
            >
              {/* <label className="block text-gray-700 text-sm font-bold mb-2" for="password"> */}
              Write Here
              {/* </label> */}
              <textarea
                style={{ borderRadius: "5px", border: "2px solid black" }}
                id="w3review"
                name="w3review"
                rows={4}
                cols={25}
                placeholder="....."
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <Button
                id="2"
                className={` text-black dark:text-white  bg-[#1fe45a]`}
                style={{ background: "orange" }}
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
      {/* <div className={"w-full lg:hidden"}>
        <div className="mx-auto flex justify-center items-center dark:bg-[#20B15A]  dark:text-white bg-[#d7f5dc] text-black">
          <div className="w-2/12 relative flex items-center mt-[5px] ">
            <Image
              className=" object-cover rounded-full"
              width={30}
              height={30}
              src="/logo.jpg"
              alt="Website's logo"
            />
          </div>
          </div>
          </div> */}
    </>
  );
};

export default QueryForm;
