import Link from "next/link";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Image from "next/image";

const options = [
  { title: "Previous Year Questions", url: "/pyq" },
  {
    title: "Books And Stationaries",
    url: "/marketplace",
  },
  {
    title: "Academic Calender",
    url: "/",
  },
  {
    title: "Vehicle For Sale",
    url: "/marketplace",
  },
  {
    title: "Students Chapter and Hostel",
    url: "/reviews",
  },
  {
    title: "FAQ's",
    url: "/doubts-and-queries",
  },
];

const Footer = () => {
  return (
    <div className=" mx-auto bg-[#20B15A] pt-5">
      <Image
        src="/assests/helping.png"
        alt="Helping Hand "
        height={150}
        width={80}
        className="mx-auto py-3"
      />
      <h1
        className="font-bold text-3xl text-center text-[#D8E9A8] dark:text-white leading-[1.3]   "
        style={{ fontFamily: "IM FELL DW Pica SC" }}
      >
        Helping you Through
      </h1>
      <div className="mx-auto hidden sm:flex justify-center items-baseline">
        <p className="  text-center py-5 ">
          &quot;Elevating College Excellence: Your Trusted Online Resource for
          Student Support and Success!&quot;
        </p>
      </div>
      <div className="w-5/6 flex flex-col sm:flex-row items-center justify-end py-5 mx-auto">
        <div className=" mx-auto flex flex-col">
          <p className="text-center pb-3 font-bold text-lg text-white sm:dark:text-black">
            Links
          </p>
          <div className="flex flex-row sm:flex-col w-full text-xs sm:text-lg divide-x divide-zinc-950 sm:divide-x-0">
            {options.map((option, index) => (
              <div key={index} className="flex flex-col ">
                <Link href={option.url} className="ml-1 hover:underline">
                  ☞ {option.title}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className=" flex flex-col justify-around  mx-auto">
          <p className="text-center py-3 font-bold text-lg text-white sm:dark:text-black">
            Contact Us
          </p>
          <div className="flex flex-row sm:flex-col">
            <Link href="" className="pt-1 text-lg items-center mx-1">
              <LinkedInIcon className="mr-1 text-white text-4xl" />
              <span className="hidden sm:inline-block">LinkedIn</span>
            </Link>
            <Link href="" className="pt-1 text-lg items-center mx-1">
              <InstagramIcon className="text-white mr-1 text-4xl" />
              <span className="hidden sm:inline-block">Instagram</span>
            </Link>
            <Link href="" className="pt-1 text-lg items-center mx-1">
              {" "}
              <GitHubIcon className="mr-2 text-4xl text-white" />
              <span className="hidden sm:inline-block">Github</span>
            </Link>
            <Link href="" className="pt-1 text-lg items-center mx-1">
              <GoogleIcon className="mr-2 text-4xl" />
              <span className="hidden sm:inline-block">Gmail</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col pb-4">
        <Link
          href="/developers"
          className="dark:text-white text-black text-center font-bold text-xl hover:underline"
        >
          Developers and Designers
        </Link>
        <p className="text-[#484d4b] text-center text-xs font-semibold">
          &copy;Copyright 2023. All RIghts Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
