import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Avatar from "@mui/material/Avatar";
import "react-multi-carousel/lib/styles.css";
import { useTheme } from "next-themes";
import { TestimonialData, responsive } from "@/utils/dummy-data";

const Testimonials = () => {
  const { theme } = useTheme();

  const testimonials = TestimonialData.map((el) => (
    <div
      className=" bg-white dark:bg-[#20B15A] dark:text-[white] p-3 rounded-2xl shadow-md drop-shadow-lg "
      key={el.id}
    >
      <p className="px-7 text-sm font-medium ">{el.review}</p>
      <div className="flex pl-7 mt-2  ">
        <div className="mr-2 ">
          <Avatar
            sx={{ width: 47, height: 47 }}
            alt="Remy Sharp"
            src={el.imageurl}
          />
        </div>
        <div className=" font-semibold">
          <p>{el.name}</p>
          <p className=" text-sm ">{el.AdmissionNo}</p>
        </div>
      </div>
    </div>
  ));

  return (
    <div
      className=" pl-12 pt-10  "
      style={{
        backgroundColor: theme == "dark" ? "#20B15A" : "#d7f5dc",
        color: theme === "dark" ? "white" : "black",
      }}
    >
      <div className=" two ">
        <div>
          <p className=" text-xl font-semibold text-[#20B15A] one pr-12">
            {" "}
            TESTIMONIALS
          </p>
          <p className=" font-bold dark:text-[white] one pr-12">
            See what our Almuni say about college
          </p>
        </div>
      </div>
      <div className="gd-carousel-wrapper">
        <Carousel
          itemClass="react-multi-carousel-item "
          partialVisible={false}
          responsive={responsive}
          centerMode={true}
          swipeable={true}
          draggable={true}
          arrows={true}
          keyBoardControl={true}
          removeArrowOnDeviceType={["mobile", "tablet"]}
          className="gd-carousel"
        >
          {testimonials}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
