import ReviewCarousel from "@/components/Reviews/ReviewCarousel";
import Image from "next/image";
import React from "react";

function EntityReviews() {
  return (
    <section>
      <p>Entity Heading</p>
      {/* Image */}
      <Image
        height={400}
        width={400}
        src={`/image.jpg`}
        alt="Reviews for entity for which review is being read."
      />

      <ReviewCarousel />
    </section>
  );
}

export default EntityReviews;
