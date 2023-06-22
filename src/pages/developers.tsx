import DeveloperCard from "@/components/Developers/DeveloperCard";
import { developers } from "@/utils/dummy-data";
import Head from "next/head";
import React from "react";

const Developers = () => {
  return (
    <div>
      <Head>
        <title>Developers and Designers</title>
      </Head>
      <section>
        {/* heading */}
        <p className="text-3xl md:text-5xl lg:text-7xl font-bold text-center my-5">
          Developers and Designers
        </p>
        {/* looping over dummy data and passing each object to DeveloperCard.tsx component */}
        <div>
          {developers.map((developer, index) => {
            return <DeveloperCard {...developer} key={index} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Developers;
