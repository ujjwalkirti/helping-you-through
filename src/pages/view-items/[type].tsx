import ItemCard from "@/components/Marketplace/ItemCard";
import React from "react";

function MarketPlaceItemsBasedOnType() {
  const items: any[] = [];
  return (
    <div>
      <p>Typeof Entity</p>
      <div>
        {items.map((item, index) => (
          <ItemCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default MarketPlaceItemsBasedOnType;
