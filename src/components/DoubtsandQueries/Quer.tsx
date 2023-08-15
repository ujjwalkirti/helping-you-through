import { poppins } from "@/utils/Fonts";
import { Button } from "@mui/material";
import { responsive } from "@/utils/dummy-data";
import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface TestimonialData {
  _id: string;
  name: string;
  AdmissionNo: string;
  suggestion: string;
}

const Quer: React.FC = () => {
  const { theme } = useTheme();
  const [testimonialdata, setTestimonials] = useState<TestimonialData[]>([]);
  const [replySectionsOpen, setReplySectionsOpen] = useState<boolean[]>(
    new Array(testimonialdata.length).fill(false)
  );
  const [updateUI, setUpdateUI] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/query"); // Replace with the actual endpoint
        const data = await response.json();
        setTestimonials(data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchData();
    setUpdateUI(true);
  }, []);

  useEffect(() => {
    setReplySectionsOpen(new Array(testimonialdata.length).fill(false));
  }, [testimonialdata]);

  const openReplyDialog = (index: number) => {
    const updatedReplySections = [...replySectionsOpen];
    updatedReplySections[index] = true;
    setReplySectionsOpen(updatedReplySections);
  };

  const closeReplyDialog = (index: number) => {
    const updatedReplySections = [...replySectionsOpen];
    updatedReplySections[index] = false;
    setReplySectionsOpen(updatedReplySections);
  };

  const testimonials = testimonialdata.map((el, index) => (
    <div
      key={el._id}
      className={`bg-white dark:bg-[#20B15A] p-3 rounded-2xl shadow-md drop-shadow-lg flex flex-col justify-between text-black dark:text-white ${
        replySectionsOpen[index] ? "relative" : ""
      }`}
    >
      <div className="flex pl-7 mt-2 justify-start ">
        <Image
          width={47}
          height={47}
          alt="Remy Sharp"
          src="/assests/lady.png"
          className="mr-2 rounded-full object-cover"
        />
        <div className="text-xs">
          <p>{el.name}</p>
          <p className="text-xs">{el.AdmissionNo}</p>
        </div>
      </div>
      <div>
        <p className="px-7 text-md font-medium">{el.suggestion}</p>
      </div>

      <button
        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => openReplyDialog(index)}
      >
        Reply
      </button>
      {replySectionsOpen[index] && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-xl font-semibold mb-2">Reply</h2>
            <textarea
              name="suggestion"
              rows={3}
              className="w-full p-1 border"
              placeholder="Please provide your suggestion"
            />
            <Button
              type="submit"
              variant="contained"
              color="warning"
              className="text-white bg-[#FF8345] mt-4 mx-1"
            >
              Send
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="warning"
              className="text-white bg-[#FF8345] mt-4 mx-1"
              onClick={() => closeReplyDialog(index)}
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  ));

  return (
    <div className="bg-white dark:bg-[black]">
      <div className="w-5/6 mx-auto pt-10">
        <div className="two">
          <div>
            <p
              className={
                "text-xl font-semibold text-[#20B15A] one " + poppins.className
              }
            >
              TESTIMONIALS
            </p>
            <p className="font-bold one text-black dark:text-white">
              See what our Alumni say about college
            </p>
          </div>
        </div>
        <div className="gd-carousel-wrapper">
          <Carousel
            itemClass="react-multi-carousel-item"
            partialVisible={false}
            responsive={responsive}
            swipeable={true}
            draggable={true}
            arrows={true}
            keyBoardControl={true}
            className="gd-carousel"
          >
            {testimonials}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Quer;
