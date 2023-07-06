import GiveReviewBox from "@/components/Reviews/GiveReviewBox";
import ReadReviewOptions from "@/components/Reviews/ReadReviewOptions";
import React, { useState } from "react";
import { Button, ButtonGroup } from "@mui/material";
const Reviews = () => {
  const [choice, setChoice] = useState("read");
  const handleclick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const buttonId = (e.currentTarget as HTMLButtonElement).id;
    setChoice(buttonId === "1" ? "read" : "give");
  };
  return (
    <section>
      <p className="text-center m-2">Reviews</p>
      {/* Option to whether read or give review */}
      <div className="text-center">
        <ButtonGroup size="large" className="bg-dgreen" variant="contained">
          <Button
            id="1"
            className={`${choice === "read" ? "bg-orange" : null}`}
            color="warning"
            onClick={handleclick}
          >
            Read
          </Button>
          <Button
            id="2"
            className={`${choice === "give" ? "bg-orange" : null}`}
            color="warning"
            onClick={handleclick}
          >
            Give
          </Button>
        </ButtonGroup>
      </div>
      {choice === "read" ? <ReadReviewOptions /> : <GiveReviewBox />}
    </section>
  );
};

export default Reviews;
