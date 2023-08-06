import PreviousYearPaper from "@/components/PYQs/PreviousYearPaper";
import UploadPaper from "@/components/PYQs/UploadPaper";
import Head from "next/head";
import React from "react";

const PreviousYearQuestions = () => {
  return (
    <div>
      <Head>
        <title>Previous Year Question Papers</title>
      </Head>
      <section className="">
        {/* heading */}
        {/* Find Previous Year Paper */}
        <PreviousYearPaper />
        {/* Upload Previous year Paper */}
        <UploadPaper />
      </section>
    </div>
  );
};

export default PreviousYearQuestions;
