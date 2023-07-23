import AddProductForm from "@/components/Marketplace/AddProductForm";
import StationaryItemsCarousel from "@/components/Marketplace/StationaryItemsCarousel";
import VehicleItemsCarousel from "@/components/Marketplace/VehicleItemsCarousel";
import Head from "next/head";
import React from "react";

const MarketPlace = () => {
  const [choice, setChoice] = React.useState("details");
  return (
    <div>
      <Head>
        <title>MarketPlace - Cost Effective solution for all your needs!</title>
      </Head>
      <p>MarketPlace</p>
      <div>
        <p>Product</p>
        <div>
          <button onClick={() => setChoice("details")}>Details</button>
          <button onClick={() => setChoice("add-products")}>Add</button>
        </div>
      </div>
      <div>
        {choice === "details" ? (
          <div>
            <VehicleItemsCarousel />
            <StationaryItemsCarousel />
          </div>
        ) : (
          <AddProductForm />
        )}
      </div>
    </div>
  );
};

export default MarketPlace;
