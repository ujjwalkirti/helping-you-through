import React, { ReactElement, useEffect, useRef, useState } from "react";
import { poppins } from "@/utils/Fonts";
import Image from "next/image";
import { Button } from "@mui/material";
import RateReviewIcon from "@mui/icons-material/RateReview";
import axios from "axios";

function GiveReviewBox() {

  const hostelNames = [
    "Tagore Bhavan",
    "Bhahbha Bhavan",
    "Swami Bhavan",
    "Gajjar Bhavan",
  ];
  const chapterNames = ["GDSC", "CHRD", "LAC", "Malang", "ACM"];
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    reviewAbout: "hostel",
    selected: hostelNames[0],
    message: "",
  });
  const [display, setDisplay] = useState(hostelNames);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === "reviewAbout") {
      setDisplay(value === "hostel" ? hostelNames : chapterNames);
      setFormData((prevData) => ({
        ...prevData,
        reviewAbout: value,
        selected: value === "hostel" ? hostelNames[0] : chapterNames[0],
      }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/review", formData);
      console.log("Response from server:", response.data);
      setFormData({
        name: "",
        phone: "",
        email: "",
        reviewAbout: "hostel",
        selected: hostelNames[0],
        message: "",
      });
    } catch (error) {
      console.error("Error submitting review:", error);
    }
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
              <form className="ml-2" onSubmit={handleSubmit}>
                <ul className="flex mb-4 ">
                  <ul className="flex w-7/12 items-center">
                    <li className="">Name:</li>
                    <li className="w-full mx-2">
                      <input name="name"
                        onChange={handleChange}
                        value={formData.name}
                        type="text"
                        className="w-full border rounded-lg p-2"
                        placeholder="Enter Your Name"
                      />
                    </li>
                  </ul>
                  <ul className="flex w-5/12 items-center">
                    <li className="">Phone:</li>
                    <li>
                      <input name="phone"
                        onChange={handleChange}
                        value={formData.phone}
                        type="text"
                        className=" mx-2 w-10/12 border rounded-lg p-2"
                        placeholder="Phone No"
                      />
                    </li>
                  </ul>
                </ul>
                <ul className="flex mb-4 items-center">
                  <li className="">Email:</li>
                  <li className="w-full mx-2">
                    <input name="email"
                      onChange={handleChange}
                      value={formData.email}
                      type="text"
                      className="w-[80%] border overflow-hidden rounded-lg p-2"
                      placeholder="Enter Your Email"
                    />
                  </li>
                </ul>
                <ul className="flex mb-4 items-center">
                  <li className="">Review About:</li>
                  <select name="reviewAbout"
                    onChange={handleChange}
                    value={formData.reviewAbout}
                    className="mx-2 border p-2 rounded-lg"
                  >
                    <option className="" value="hostel">
                      Hostel&apos;s
                    </option>
                    <option className="" value="chapter">
                      Student&apos;s Chapter
                    </option>
                  </select>
                  <li className="option">Select:</li>
                  <select name="selected" value={formData.selected} onChange={handleChange} className="border mx-2 p-2 rounded-lg">
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
                  <textarea name="message" value={formData.message} onChange={handleChange}
                    placeholder="Write Message"
                    rows={10}
                    className="p-2 w-full border rounded-lg"
                  />
                </ul>
                <Button
                  className="float-right bg-[#FF8345]"
                  variant="contained"
                  color="warning"
                  type="submit"
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
            <form className="" onSubmit={handleSubmit}>
              <ul className="space-y-2 my-3">
                <li>Name:</li>
                <input
                  name="name"
                  onChange={handleChange}
                  value={formData.name}
                  className="border p-2 rounded-lg w-10/12"
                  type="text"
                  placeholder="Enter your name"
                />
                <li>phone:</li>
                <input
                  name="phone"
                  onChange={handleChange}
                  value={formData.phone}
                  className="border p-2 rounded-lg w-10/12"
                  type="text"
                  placeholder="Enter your Phone"
                />
                <li>Email:</li>
                <input
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                  className="border p-2 rounded-lg w-10/12"
                  type="Email"
                  placeholder="Enter your Email"
                />
              </ul>
              <div className="flex-cols space-y-2">
                <p>Review About:</p>
                <div className="flex items-center justify-center space-x-1 w-fit">
                  <select
                    name="reviewAbout"
                    onChange={handleChange}
                    value={formData.reviewAbout}
                    className="border p-0.5 rounded-lg "
                  >
                    <option value="hostel" className="">
                      Hostel&apos;s
                    </option>
                    <option value="chapter" className="">
                      Student&apos;s chapter
                    </option>
                  </select>
                  <select name="selected"
                    onChange={handleChange}
                    value={formData.selected}
                    className="border p-0.5 rounded-lg">
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
                  name="message"
                  onChange={handleChange}
                  value={formData.message}
                  rows={10}
                  className="border rounded p-2 w-full"
                  placeholder="Write Message"
                />
              </div>
              <Button
                color="warning"
                variant="contained"
                className="bg-[#FF8345]"
                type="submit"
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
