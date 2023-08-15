import AddProductForm from "@/components/Marketplace/AddProductForm";
import StationaryItemsCarousel from "@/components/Marketplace/StationaryItemsCarousel";
import VehicleItemsCarousel from "@/components/Marketplace/VehicleItemsCarousel";
import axios from "axios";
import Head from "next/head";
import React, { useEffect, useState } from "react";


const MarketPlace = () => {
  const [choice, setChoice] = React.useState("details");
  const [items, setItems] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`/api/marketplace`);
      console.log("Response from server:", response.data);
      setItems(response.data);
    }
    fetchData();

  }, [])
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
