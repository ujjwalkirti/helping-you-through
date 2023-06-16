import React from "react";

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
  return <div>DeveloperCard</div>;
}

export default DeveloperCard;
