import { poppins } from "@/utils/Fonts";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import "tailwindcss/tailwind.css";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
type props = {
  name: string;
  designation: string;
  position: string;
  year: any;
  branch: string;
  imgUrl: string;
  socials: string[];
};

function DeveloperCard({
  name,
  designation,
  position,
  year,
  branch,
  imgUrl,
  socials,
}: props) {
  return (
    <>
      <div  className="group [prespective:1000px]">
        <div className="[transform-style:preserve-3d]  transition-all duration-1000  group-hover:[transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className={" bg-[inherit]  w-full" + poppins.className}>
            <div className="relative shadow-md top-1 h-60 bg-[#d7f5dc] dark:bg-dgreen rounded z-10 ">
              <div className="py-5">
                <Image className="rounded-full flex mx-auto " width={60} height={60} src={imgUrl} alt="pic" />
              </div>
              <p className="text-center mb-3 font-semibold ">{name}</p>
              <div className="list-none text-[#606161]">
                <ul className="w-10/12 flex mx-auto my-2">
                  <li className="bg-[#c7b3b9] rounded px-6">ROLE</li>
                  <li className="mx-3">{position}</li>
                </ul>
                <ul className="  w-10/12 flex mx-auto">
                  <li className="bg-[#c7b3b9] rounded px-6">TEAM</li>
                  <li className="mx-3">{year}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className=" shadow-lg absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <p className="text-center  h-50% my-auto font-semibold">Contact {name}</p>
            <ul className=" list-none flex h-full  bottom-0 justify-evenly items-center mx-auto my-auto">
              <GitHubIcon className="cursor-pointer" />
              <TwitterIcon color="primary" className="cursor-pointer" />
              <InstagramIcon color="error" className="cursor-pointer" />
              <LinkedInIcon color="primary" className="cursor-pointer" />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeveloperCard;
