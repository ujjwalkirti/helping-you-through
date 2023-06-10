import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Avatar from "@mui/material/Avatar";
import "react-multi-carousel/lib/styles.css";

const Testimonials = () => {
  const TestimonialData = [
    {
      id: 1,
      name: "Sweety",
      AdmissionNo: "U21CS000",
      review: "Thank You for your service. I am very pleased with the result. ",
      imageurl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      name: "Sweety",
      AdmissionNo: "U21CS000",
      review:
        "Thank You for your service. I am very pleased with the result. I have seen exponencial growth in my business and its all thank to your amazing serviceThank You for your service. I am very pleased with the result. I have seen exponencial growth in my business and its all thank to your amazing service",
      imageurl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      name: "Sweety",
      AdmissionNo: "U21CS000",
      review:
        "Thank You for your service. I am very pleased with the result. I have seen exponencial growth in my business and its all thank to your amazing service",
      imageurl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 4,
      name: "Sweety",
      AdmissionNo: "U21CS000",
      review:
        "Thank You for your service. I am very pleased with the result. I have seen exponencial growth in my business and its all thank to your amazing service",
      imageurl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 5,
      name: "Sweety",
      AdmissionNo: "U21CS000",
      review:
        "Thank You for your service. I am very pleased with the result. I have seen exponencial growth in my business and its all thank to your amazing service",
      imageurl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 6,
      name: "Sweety",
      AdmissionNo: "U21CS000",
      review:
        "Thank You for your service. I am very pleased with the result. I have seen exponencial growth in my business and its all thank to your amazing service",
      imageurl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 7,
      name: "Sweety",
      AdmissionNo: "U21CS000",
      review:
        "Thank You for your service. I am very pleased with the result. I have seen exponencial growth in my business and its all thank to your amazing service",
      imageurl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 8,
      name: "Sweety",
      AdmissionNo: "U21CS000",
      review:
        "Thank You for your service. I am very pleased with the result. I have seen exponencial growth in my business and its all thank to your amazing service",
      imageurl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 9,
      name: "Sweety",
      AdmissionNo: "U21CS000",
      review:
        "Thank You for your service. I am very pleased with the result. I have seen exponencial growth in my business and its all thank to your amazing service",
      imageurl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 10,
      name: "Sweety",
      AdmissionNo: "U21CS000",
      review:
        "Thank You for your service. I am very pleased with the result. I have seen exponencial growth in my business and its all thank to your amazing service",
      imageurl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 11,
      name: "Sweety",
      AdmissionNo: "U21CS000",
      review:
        "Thank You for your service. I am very pleased with the result. I have seen exponencial growth in my business and its all thank to your amazing service",
      imageurl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

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
    <div className="bg-white dark:bg-[#000000] pl-12 pt-10  ">
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
