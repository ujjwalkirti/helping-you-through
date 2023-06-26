import DeveloperCard from "@/components/Developers/DeveloperCard";
import { poppins } from "@/utils/Fonts";
import { developers } from "@/utils/dummy-data";
import Head from "next/head";
import Image from "next/image";
import React from "react";

const Developers = () => {
  return (
    <div className="">
      <Head>
        <title>Developers and Designers</title>
      </Head>
      <section className={"m-0 p-0 " + poppins.className}>
        <div className="flex justify-center m-4">
          <Image
            className="hidden sm:block object-cover rounded mr-3"
            width={100}
            height={100}
            src="/assests/team.jpg"
            alt="team pic"
          />
          <p className="text-3xl md:text-5xl lg:text-7xl font-bold my-auto px-auto">
            Meet Our Team
          </p>
          <Image
            className="object-cover rounded ml-3"
            width={50}
            height={50}
            src="/assests/down.png"
            alt="team pic"
          />
        </div>
        <div className="hidden w-10/12  mx-auto lg:block">
          <div className={`flex-wrap  flex justify-evenly `}>
            {developers.map((developer, index) => {
              return (
                <div
                  className={`my-3 ${
                    !(index == 0 || index == developers.length - 1)
                      ? Math.floor(index / 4) % 2
                        ? "bg-[#a7d13c]"
                        : "bg-[orange]"
                      : null
                  }  ${
                    !(index % (developers.length - 1))
                      ? "w-full mx-[34.3%] bg-[#3a606a]"
                      : "w-[30%] mx-3"
                  }`}
                  key={index}
                >
                  <DeveloperCard {...developer} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="lg:hidden w-10/12 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
            {developers.map((developer, index) => {
              return (
                <div
                  className={`m-3 ${
                    Math.floor(index / 2) % 2 ? "bg-[#a7d13c]" : "bg-[orange]"
                  }`}
                  key={index}
                >
                  <DeveloperCard {...developer} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Developers;
