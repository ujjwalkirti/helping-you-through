import { poppins } from "@/utils/Fonts";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import "tailwindcss/tailwind.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { IDeveloper } from "@/utils/Models";
function DeveloperCard({
  name,
  image,
  role,
  social,
  quote,
}: IDeveloper) {

  return (
    <>
      <div className="group [prespective:1000px]">
        <div className="[transform-style:preserve-3d]  transition-all duration-1000  group-hover:[transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className={" bg-[inherit]  w-full" + poppins.className}>
            <div className="relative shadow-md top-1 h-60 bg-[white] dark:bg-black rounded-xl z-10 ">
              <div className="py-5">
                <Image
                  className="rounded-full flex mx-auto "
                  width={60}
                  height={60}
                  src={image}
                  alt="pic"
                />
              </div>
              <p className="text-center mb-3 font-semibold ">{name}</p>
              <div className="list-none text-[#606161]">
                <ul className="w-10/12 flex items-center  mx-auto my-2">
                  <li className="bg-[#cbeeb4]  rounded px-6">ROLE</li>
                  <li className="mx-3 text-dark dark:text-white">{role}</li>
                </ul>
                <ul className="w-10/12 flex items-center mx-auto">
                  <li className="bg-[#cbeeb4] rounded px-6">Quote</li>
                  <li className="mx-1 text-dark dark:text-white">{quote}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className=" shadow-lg absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <p className="text-center  h-50% my-auto font-semibold">
              Contact {name}
            </p>
            <ul className=" list-none flex h-full  bottom-0 justify-evenly items-center mx-auto my-auto">

             <Link href={social.github?social.github:""}> <GitHubIcon className="cursor-pointer text-black" /></Link>
              <Link href={social.twitter?social.twitter:""}> <TwitterIcon color="primary" className="cursor-pointer" /></Link>
              <Link href={social.instagram?social.instagram:""}> <InstagramIcon color="error" className="cursor-pointer" /></Link>
              <Link href={social.linkedin?social.linkedin:""}> <LinkedInIcon color="primary" className="cursor-pointer" /></Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeveloperCard;
