import { poppins } from "@/utils/Fonts";
import { Button } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import React, { useState, ChangeEvent, useEffect } from "react";
import Quer from "@/components/DoubtsandQueries/Quer"
interface FeedbackFormData {
  name: string;
  AdmissionNo: string;
  suggestion: string;
  Email: string;
}

const SubscriptionAndFeedback = () => {
  const [feedbackForm, setFeedbackForm] = useState<FeedbackFormData>({
    name: "",
    AdmissionNo: "",
    suggestion: "",
    Email: "",
  });

  const handleFormChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFeedbackForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      axios.post(`/api/query`, feedbackForm).then((res) => {
        console.log(res);
        setFeedbackForm({
          name: "",
          AdmissionNo: "",
          Email: "",
          suggestion: "",
        });
      });
    } catch (err) {
      console.log("Error in axios", err);
    }

    console.log(feedbackForm);
  };

  return (
    <>
      <div className="hidden md:block bg-green-100">
        {/* subscribe section */};{/* feedback */}
        {/* <p className="text-[#20B15A] text-center pb-16">FEEDBACK</p> */}
        <div
          className={
            "w-full text-[#044A42] dark:bg-black dark:text-[#20B15A] " +
            poppins.className
          }
        >
          <div className="w-10/12 mx-auto flex ">
            <div className="w-6/12 flex-col">
              <Image
                // className=" sm:block object-cover hidden rounded mr-3"
                width={800}
                height={800}
                src="/assests/group.png"
                alt="feed.pic"
              />
              <div className=" flex w-fit mx-auto px-3 text-center mt-4 font ">
                <p className=" leading-[1.5] text-xl">
                  If you have any query <br /> ask here
                </p>
              </div>
            </div>

            <div className="w-6/12 list-none items-center pb-5">
              <div className="w-8/12 flex-col float-right">
                <form onSubmit={handleSubmit}>
                  <li className="py-2">
                    <p>Name</p>
                    <input
                      name="name"
                      className="w-full p-1 h-8 border"
                      type="text"
                      placeholder="Enter Name"
                      value={feedbackForm.name}
                      onChange={handleFormChange}
                    />
                  </li>
                  <li className="py-2">
                    <p>Admission No</p>
                    <input
                      name="AdmissionNo"
                      className="w-full p-1  h-8 border"
                      type="text"
                      placeholder="Enter Admission No"
                      value={feedbackForm.AdmissionNo}
                      onChange={handleFormChange}
                    />
                  </li>
                  <li className="py-2">
                    <p>Email </p>
                    <input
                      name="Email"
                      className="w-full p-1 h-8 border"
                      type="text"
                      placeholder="Enter Email"
                      value={feedbackForm.Email}
                      onChange={handleFormChange}
                    />
                  </li>
                  <li className="py-2">
                    <p>Query </p>
                    <textarea
                      name="suggestion"
                      rows={5}
                      className="w-full p-1  border"
                      placeholder="Please  provide Suggestion"
                      value={feedbackForm.suggestion}
                      onChange={handleFormChange}
                    />
                  </li>
                  <Button
                    type="submit"
                    variant="contained"
                    color="warning"
                    className="text-white bg-[#FF8345] mt-10 mx-1"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
<Quer/>
      {/* "responsive Implemnation" */}
      <div className="md:hidden">
        <p className="text-[#20B15A] text-center my-8">FEEDBACK</p>
        <div
          className={
            " w-full flex justify-center items-center text-[#044A42] dark:bg-black dark:text-[#20B15A] " +
            poppins.className
          }
        >
          <div className="flex-col justify-center">
            <div className="">
              <Image
                width={300}
                height={300}
                src="/assests/feedback.png"
                alt="feed.pic"
              />
            </div>
            <div className="list-none flex-col text-center justify-center mt-2 pb-5">
              <li className="py-2">
                <p>Name</p>
                <input
                  className="w-full p-1 h-8 border rounded-xl mt-2 "
                  type="text"
                  placeholder="Enter Name"
                  value={feedbackForm.name}
                  onChange={handleFormChange}
                />
              </li>
              <li className="py-2">
                <p>Admission No</p>
                <input
                  className="w-full p-1  h-8 border rounded-xl mt-2 "
                  type="text"
                  placeholder="Enter Admission No"
                  value={feedbackForm.AdmissionNo}
                  onChange={handleFormChange}
                />
              </li>
              <li className="py-2">
                <p>Email </p>
                <input
                  className="w-full p-1 h-8 border rounded-xl mt-2 "
                  type="text"
                  placeholder="Enter Email"
                  value={feedbackForm.Email}
                  onChange={handleFormChange}
                />
              </li>
              <li className="py-2">
                <p>Query </p>
                <textarea
                  rows={5}
                  className="w-full p-1  border rounded-xl mt-2 "
                  placeholder="Please  provide Suggestion"
                  value={feedbackForm.suggestion}
                  onChange={handleFormChange}
                />
              </li>
            </div>
            <Button
              variant="contained"
              color="warning"
              className="text-white bg-[#FF8345] mt-5 mx-0.5"
              // onSubmit={handleSubmit}
            >
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubscriptionAndFeedback;
