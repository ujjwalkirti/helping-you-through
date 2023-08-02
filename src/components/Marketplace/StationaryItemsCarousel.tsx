// import React from "react";
import ItemCard from "@/components/Marketplace/ItemCard";
import Image from "next/image";
import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import SendIcon from "@mui/icons-material/Send";
import { products } from "@/utils/dummy-data";
import Head from "next/head";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Button } from "@mui/material";
import Link from "next/link";
function VehicleItemsCarousel() {
  const items = products.map((item) => (
    <div
      key={item.id}
      className=" bg-lgreen   w-[250px] rounded-md hover:scale-105 shadow-lg transition duration-250 ease-out  dark:bg-[#efefef] "
    >
      <Image
        src={`/assests/vehicals/v${item.id}.jpg`}
        alt=""
        width={400}
        height={150}
        className=" rounded-bl-3xl rounded-br-3xl rounded-tl-md rounded-tr-md object-cover h-[150px] perspective-500	dark:shadow-inner  "
      ></Image>
      <div className=" mt-4">
        <p className="my-3 pl-5 text-black font-semibold inline-block">
          {item.name}
        </p>
        <p className=" my-4 mr-5 px-3 text-white float-right bg-dgreen rounded-xl text-xs">
          {item.negotiable ? "Fixed" : "Negotiable"}{" "}
        </p>
      </div>
      <div className="relative ">
        <span className="  bg-orange  p-2 font-medium text-md rounded-xl absolute left-[28px] bottom-[48px] text-white ">
          ₹ {item.price}/-
        </span>
      </div>
      <div className="flex p-2 px-5 justify-between">
        <p className=" text-black font-semibold text-lg"> contacts :</p>
        <WhatsAppIcon className=" text-dgreen hover:text-[#075e54]" />
        <SendIcon className=" text-dgreen hover:text-[#075e54]" />
        <PhoneIcon className=" text-dgreen hover:text-[#075e54]" />
      </div>
    </div>
  ));
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <>
      <Carousel
        className="w-5/6 mx-auto"
        swipeable={true}
        draggable={false}
        // showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={false}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {items}
      </Carousel>
      <Button />
      <div className="w-5/6 flex justify-end mx-auto ">
        <Link href={`/view-items/stationary`} id="2">
          <Button
            className={` text-black dark:text-white  bg-[#e46b1f]`}
            style={{ backgroundColor: "orange" }}
          >
            View All
          </Button>
        </Link>
      </div>
    </>
  );
}

export default VehicleItemsCarousel;
