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
  isReplyOpen: boolean;
  replyMessage: string;
  reply: string;

}

const Quer: React.FC = () => {

  const { theme } = useTheme();
  const [testimonialdata, setTestimonials] = useState<TestimonialData[]>([]);
  const [updateUI, setUpdateUI] = useState(false);
 const [showAllReplies, setShowAllReplies] = useState<number | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/query"); // Replace with the actual endpoint
        const data = await response.json();
        setTestimonials(
          data.map((testimonial: TestimonialData) => ({
            ...testimonial,
            isReplyOpen: false,
            replyMessage: "", // Initialize reply message as empty

          }))
        );
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

  const fetchReplies = async () => {
    const updatedTestimonials = [...testimonialdata];
    for (let i = 0; i < updatedTestimonials.length; i++) {
      if (updatedTestimonials[i].isReplyOpen) {
        try {
          const response = await fetch(
            `/api/reply?id=${updatedTestimonials[i]._id}`
          ); // Fetch replies for the specific testimonial's _id
          const data = await response.json();
          console.log(data);
          updatedTestimonials[i].reply = data.reply;
          updatedTestimonials[i].replyMessage = data.reply;
          ; // Populate replyMessage with the fetched reply
        } catch (error) {
          console.error("Error fetching replies:", error);
        }
      }
    }
    setTestimonials(updatedTestimonials);
  };



    fetchData();
    fetchReplies();
    // postReply();
    setUpdateUI(true);
  }, [testimonialdata]);

  const handleReplySubmit = async (index: number) => {
    const updatedTestimonials = [...testimonialdata];
    try {
      const response = await fetch("/api/reply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          reply: updatedTestimonials[index].replyMessage,
        }),
      });
      const data = await response.json();
      updatedTestimonials[index].reply = data.reply;
      updatedTestimonials[index].replyMessage = ""; // Clear the reply message input
      updatedTestimonials[index].isReplyOpen = false; // Close the reply section
      setTestimonials(updatedTestimonials);
    } catch (error) {
      console.error("Error posting reply:", error);
    }
  };
 const openReplyDialog = (index: number) => {
   const updatedTestimonials = [...testimonialdata];
   updatedTestimonials[index].isReplyOpen = true;
   setTestimonials(updatedTestimonials);
 };

 const closeReplyDialog = (index: number) => {
   const updatedTestimonials = [...testimonialdata];
   updatedTestimonials[index].isReplyOpen = false;
   setTestimonials(updatedTestimonials);
 };

 const handleReplyChange = (index: number, value: string) => {
   const updatedTestimonials = [...testimonialdata];
   updatedTestimonials[index].replyMessage = value;
   setTestimonials(updatedTestimonials);
 };
 const handleShowAllReplies = (index: number | null) => {
   const updatedTestimonials = [...testimonialdata];
   if (index !== null) {
     updatedTestimonials[index].isReplyOpen = true;
   }
   setShowAllReplies(index);
 };

console.log(testimonialdata);
  const testimonials = testimonialdata.map((el, index) => (

    <div
      key={el._id}
      className={`bg-white dark:bg-[#20B15A] p-3 rounded-2xl shadow-md drop-shadow-lg flex flex-col justify-between text-black dark:text-white ${
        el.isReplyOpen ? "relative" : ""
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
      {el.isReplyOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-xl font-semibold mb-2">Reply</h2>
            <textarea
              name="replyMessage"
              rows={3}
              className="w-full p-1 border"
              placeholder="Please provide your reply"
              value={el.replyMessage}
              onChange={(e) => handleReplyChange(index, e.target.value)}
            />
            <Button
              onClick={() => handleReplySubmit(index)}
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

      {!el.isReplyOpen  &&(
        <div className="px-7 mt-3 text-sm text-gray-600">
          <Button
            onClick={() => setShowAllReplies(index)}
            variant="text"
            className="text-orange-500 cursor-pointer"
          >
            Show all replies
          </Button>
          <p>{el.reply} </p>
        </div>
      )}
      {showAllReplies === index && (
        <div className="px-7 mt-3 text-sm text-gray-600">
          <p>{el.reply}</p>
          <Button
            onClick={() => setShowAllReplies(null)}
            variant="text"
            className="text-orange-500 cursor-pointer"
          >
            Hide all replies
          </Button>
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
