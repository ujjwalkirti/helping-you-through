import { poppins } from "@/utils/Fonts";
import { TestimonialData, responsive } from "@/utils/dummy-data";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Testimonials = () => {
  const { theme } = useTheme();

  const testimonials = TestimonialData.map((el) => (
    <div
      key={el.id}
      className=" bg-white dark:bg-[#20B15A]  p-3 rounded-2xl shadow-md drop-shadow-lg  flex flex-col justify-between text-black dark:text-[white] "
    >
      <div>
        <p className="px-7 text-sm font-medium">{el.review}</p>
      </div>
      <div className="flex pl-7 mt-2 justify-start ">
        <Image
          width={47}
          height={47}
          alt="Remy Sharp"
          src="/assests/lady.png" //{el.imageurl}
          // edher next.config.js me change karne kah raha
          className="mr-2 rounded-full object-cover"
        />
        <div className=" font-semibold ">
          <p>{el.name}</p>
          <p className=" text-sm ">{el.AdmissionNo}</p>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="bg-white dark:bg-[black]">
      <div className=" w-5/6 mx-auto pt-10  ">
        <div className=" two ">
          <div>
            <p
              className={
                " text-xl font-semibold text-[#20B15A] one " + poppins.className
              }
            >
              {" "}
              TESTIMONIALS
            </p>
            <p className=" font-bold  one text-black dark:text-white ">
              See what our Almuni say about college
            </p>
          </div>
        </div>
        <div className="gd-carousel-wrapper">
          <Carousel
            itemClass="react-multi-carousel-item "
            partialVisible={false}
            responsive={responsive}
            // centerMode={true}
            swipeable={true}
            draggable={true}
            arrows={true}
            keyBoardControl={true}
            // removeArrowOnDeviceType={["mobile","tablet"]}
            className="gd-carousel"
          >
            {testimonials}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
