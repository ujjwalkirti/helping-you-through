import DeveloperCard from "@/components/Developers/DeveloperCard";
import { poppins } from "@/utils/Fonts";
import { developers } from "@/utils/dummy-data";
import Head from "next/head";
import React from "react";
const Developers = () => {
  return (
    <>
      <div className="">
        <Head>
          <title>Developers and Designers</title>
        </Head>

        <section className={"m-0 p-0 " + poppins.className}>
          <div className="flex justify-center m-4">
            <p className=" text-sm md:text-2xl lg:text-3xl font-bold my-auto px-auto">
              Welcome to our Developers&apos; Playground
            </p>
          </div>
          <div className="hidden w-10/12  mx-auto lg:block">
            <div className={`flex-wrap  flex justify-evenly `}>
              {developers.map((developer, index) => {
                return (
                  <div
                    className={`my-6 rounded-xl ${
                      !(index == 0 || index == developers.length - 1)
                        ? Math.floor(index % 2)
                          ? " bg-dgreen dark:bg-[white] "
                          : "bg-[orange]"
                        : null
                    }  ${
                      !(index % (developers.length - 1))
                        ? "w-full mx-[34.3%] bg-[#a3a3ea]"
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
                    className={`m-3 rounded-xl ${
                      Math.floor(index % 2)
                        ? " bg-dgreen dark:bg-[white] "
                        : "bg-[orange]"
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
    </>
  );
};

export default Developers;
