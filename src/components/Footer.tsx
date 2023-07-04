import Link from "next/link";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Image from "next/image";

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
            <div className="flex flex-col ">
              <Link href="" className="ml-1">
                ☞ Previous Year Questions
              </Link>
              <Link href="" className="ml-1">
                ☞ Books And Stationaries
              </Link>
            </div>
            <div className="flex flex-col">
              <Link href="">
                <span className="px-1 inline-block">☞ Academic Calender</span>
              </Link>
              <Link href="">
                <span className="px-1 inline-block">☞ Vehicle For Sale</span>
              </Link>
            </div>
            <div className="flex flex-col ">
              <Link href="">
                <span className="px-1 inline-block">
                  ☞ Students Chapter and Hostel
                </span>
              </Link>
              <Link href="">
                <span className="px-1 inline-block">☞ FAQ&apos; s</span>
              </Link>
            </div>
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

      <h1 className="dark:text-white text-black text-center font-bold text-xl">
        Developers and Designers
      </h1>
      <p className="text-[#484d4b] text-center text-xs font-semibold">
        &copy;Copyright 2023. All RIghts Reserved
      </p>
    </div>
  );
};

export default Footer;
