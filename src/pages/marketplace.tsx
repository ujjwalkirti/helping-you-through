import AddProductForm from "@/components/Marketplace/AddProductForm";
import StationaryItemsCarousel from "@/components/Marketplace/StationaryItemsCarousel";
import VehicleItemsCarousel from "@/components/Marketplace/VehicleItemsCarousel";
import axios from "axios";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { IMarketPlace } from '@/utils/Models'
import { Button, ButtonGroup } from "@mui/material";

const MarketPlace = () => {
  const [choice, setChoice] = React.useState("details");
  const [items, setItems] = useState<IMarketPlace[]>([]);
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
      <div className="flex flex-row justify-center text-center ">
        <img
          src="assests\cart.png"
          alt="Placeholder"
          className="w-10" />
        <p className=" mx-3 text-center text-2xl font-bold"> MarketPlace </p>
      </div>

      <p className="justify-centre mt-4 text-center text-xl font-semibold">Product</p>
      {/* <div className="justify-items-center"> */}
      <div >
        <ButtonGroup
          disableElevation
          variant="contained"
          aria-label="Disabled elevation buttons"
          className="justify-center text-center flex "
        >
          <Button className={` p-2 ${choice === "details" ? "bg-[#b4f5ce] dark:bg-[#20B15A]" : "bg-[#706b6a]"
            } hover:bg-[#74da9d] focus:bg-[#b4f5ce] rounded-lg`}
            onClick={() => setChoice("details")}
          >
            Details</Button>
          <Button className={` p-2 ${choice === "details" ? "bg-[#706b6a]" : "bg-[#b4f5ce] dark:bg-[#20B15A]"
            } hover:bg-[#74da9d] focus:bg-[#b4f5ce] rounded-lg`}
            onClick={() => setChoice("add-products")}
          >
            Add</Button>
        </ButtonGroup>
      </div>
      <div>
        {choice === "details" ? (
          <div>
            <VehicleItemsCarousel data={items} />
            <StationaryItemsCarousel data={items} />
          </div>
        ) : (
          <AddProductForm />
        )}
      </div>
    </div>
  );
};

export default MarketPlace;
