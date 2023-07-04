import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive, reviews } from "@/utils/dummy-data";
import Image from "next/image";

function ReviewCarousel() {
  const reviewers = reviews.map((el) => (
    <div
      key={el.id}
      className=" min-w-5 bg-white p-6 rounded-lg dark:bg-dgreen shadow-grey dark:shadow-dgreen dark:shadow-md shadow-lg font-medium hover:bg-blend-hue"
    >
      <div className="flex flex-col  justify-center items-center border-t-none border-b-dgreen dark:border-b-white border-b-2 p-2">
        <Image
          src="/assests/me.png"
          alt="mypics"
          height={50}
          width={50}
          className=" object-contain rounded-full ring ring-dgreen dark:ring-orange ring-offset-4 mb-3 hover:hue-rotate-15  hover:scale-125 ease-in duration-500"
        />

        <h2>{el.name}</h2>
        <p className=" text-sm opacity-3 ">{el.admissionNo}</p>
        <hr />
      </div>
      <div className="mt-4 font-light">{el.review}</div>
    </div>
  ));

  return (
    <div>
      <Carousel
        itemClass="react-multi-carousel-item "
        partialVisible={false}
        responsive={responsive}
        swipeable={true}
        draggable={true}
        arrows={true}
        keyBoardControl={true}
        className="gd-carousel text-black dark:text-white "
      >
        {reviewers}
      </Carousel>
    </div>
  );
}

export default ReviewCarousel;
