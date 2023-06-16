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
        <p>Developers and Desingers</p>
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
