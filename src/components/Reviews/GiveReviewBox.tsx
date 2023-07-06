import React, { useState } from "react";
import { poppins } from "@/utils/Fonts";
import Image from "next/image";
import { Button } from "@mui/material";
import RateReviewIcon from "@mui/icons-material/RateReview";
function GiveReviewBox() {
  const hostelNames = [
    "Tagore Bhavan",
    "Bhahbha Bhavan",
    "Swami Bhavan",
    "Gajjar Bhavan",
  ];
  const chapterNames = ["GDSC", "CHRD", "LAC", "Malang", "ACM"];

  const [display, setDisplay] = useState(hostelNames);
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDisplay(e.target.value == "hostel" ? hostelNames : chapterNames);
  };

  return (
    <>
      <div className="w-full m-0 p-0">
        <div
          className={" hidden lg:block w-10/12 mx-auto " + poppins.className}
        >
          <div className="flex items-center my-10">
            <RateReviewIcon style={{ fontSize: "60px" }} />
            <h1 className={"text-2xl mx-1 " + poppins.className}>
              Write Review....
            </h1>
          </div>
          <div className="w-full flex">
            <div className="w-5/12">
              <Image
                className=""
                width={400}
                height={400}
                alt="review pic"
                src={"/assests/giveReview.png"}
              />
            </div>
            <div className="w-7/12 mt-4">
              <form className="ml-2">
                <ul className="flex mb-4 ">
                  <ul className="flex w-7/12 items-center">
                    <li className="">Name:</li>
                    <li className="w-full mx-2">
                      <input
                        type="text"
                        className="w-full border rounded-lg p-2"
                        placeholder="Enter Your Name"
                      />{" "}
                    </li>
                  </ul>
                  <ul className="flex w-5/12 items-center">
                    <li className="">Phone:</li>
                    <li>
                      <input
                        type="text"
                        className=" mx-2 w-10/12 border rounded-lg p-2"
                        placeholder=" Phone No"
                      />
                    </li>
                  </ul>
                </ul>
                <ul className="flex mb-4 items-center">
                  <li className="">Email:</li>
                  <li className="w-full mx-2">
                    <input
                      type="text"
                      className="w-[80%] border overflow-hidden rounded-lg p-2"
                      placeholder="Enter Your Email"
                    />{" "}
                  </li>
                </ul>
                <ul className="flex mb-4 items-center">
                  <li className="">Review About:</li>
                  <select
                    onChange={handleChange}
                    className="mx-2 border p-2 rounded-lg"
                  >
                    <option className="" value="hostel">
                      Hostel&apos;s
                    </option>
                    <option className="" value="chapter">
                      Student&apos;s Chapter
                    </option>
                  </select>
                  <li className="">Select:</li>
                  <select className="border mx-2 p-2 rounded-lg">
                    {display.map((item, index) => {
                      return (
                        <option className="" key={index} value={item}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                </ul>
                <ul className="">
                  <textarea
                    placeholder="Write Message"
                    rows={10}
                    className="p-2 w-full border rounded-lg"
                  />
                </ul>
                <Button
                  className="float-right bg-[#FF8345]"
                  variant="contained"
                  color="warning"
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* responsive implmentaion */}
        <div className=" lg:hidden w-10/12 mx-auto ">
          <div className="flex justify-center my-6">
            <Image
              className=""
              width={400}
              height={400}
              alt="review pic"
              src={"/assests/giveReview.png"}
            />
          </div>
          <div className="flex items-center my-4 ">
            <RateReviewIcon style={{ fontSize: "60px" }} />
            <h1 className={"" + poppins.className}>Write Review....</h1>
          </div>
          <div className="">
            <form className="">
              <ul className="space-y-2 my-3">
                <li>Name:</li>
                <input
                  className="border p-2 rounded-lg w-10/12"
                  type="text"
                  placeholder="Enter your name"
                />
                <li>phone:</li>
                <input
                  className="border p-2 rounded-lg w-10/12"
                  type="text"
                  placeholder="Enter your Phone"
                />
                <li>Email:</li>
                <input
                  className="border p-2 rounded-lg w-10/12"
                  type="Email"
                  placeholder="Enter your Email"
                />
              </ul>
              <div className="flex-cols space-y-2">
                <p>Review About:</p>
                <div className="flex items-center justify-center space-x-1 w-fit">
                  <select
                    onChange={handleChange}
                    className="border p-0.5 rounded-lg "
                  >
                    <option value="hostel" className="">
                      Hostel&apos;s
                    </option>
                    <option value="chapter" className="">
                      Student&apos;s chapter
                    </option>
                  </select>
                  <select className="border p-0.5 rounded-lg">
                    {display.map((item, index) => {
                      return (
                        <option className="" key={index} value={item}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="my-3">
                <textarea
                  rows={10}
                  className="border rounded p-2 w-full"
                  name=""
                  placeholder="Write Message"
                />
              </div>
              <Button
                color="warning"
                variant="contained"
                className="bg-[#FF8345]"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default GiveReviewBox;
