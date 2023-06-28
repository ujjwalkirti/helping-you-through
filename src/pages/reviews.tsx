import GiveReviewBox from "@/components/Reviews/GiveReviewBox";
import ReadReviewOptions from "@/components/Reviews/ReadReviewOptions";
import React, { useState } from "react";

const Reviews = () => {
  const [choice, setChoice] = useState("read");
  return (
    <section>
      <p>Reviews</p>
      {/* Option to whether read or give review */}
      <div>
        <button>Read</button>
        <button>Give</button>
      </div>
      {choice === "read" ? <ReadReviewOptions /> : <GiveReviewBox />}
    </section>
  );
};

export default Reviews;
