"use client";
import React from "react";
import EditNoteIcon from "@mui/icons-material/EditNote";
import Image from "next/image";
import { useState } from "react";
import supabase from "@/utils/supaBase";
import { poppins } from "@/utils/Fonts";

function AddProductForm() {
  type formType = {
    name: string;
    phone: string;
    email: string;
    product: string;
    itemName: string;
    price: number | string;
    isNegotiable: string;
    image: File | null;
  };

  const [formData, setFormData] = useState<formType>({
    name: "",
    phone: "",
    email: "",
    product: "",
    itemName: "",
    price: "",
    isNegotiable: "",
    image: null,
  });
  // console.log(formData);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(formData);
    const filename=formData.image?.name;
    const file=formData.image;
    let imageLink;
  if(filename)
  {
    const { data, error } = await supabase.storage
    .from("MarketPlaceImages")
    .upload(filename, file as File, {
      cacheControl: "3600",
      upsert: false,
    });
    if(data)
    {
      console.log(data);
      const filepath = data.path;
      console.log(filepath);
        
      const { data:imageUrl } = supabase
  .storage
  .from('MarketPlaceImages')
  .getPublicUrl(`${filepath}`);
  if(imageUrl)
  {
    imageLink=imageUrl.publicUrl;
    console.log(imageUrl.publicUrl);
  }
    }
    else{
      console.log(error);
    }
  }
  
    

    // const { error } = await supabase
    //   .from("items")
    //   .insert({
    //     name: formData.name,
    //     category: formData.product,
    //     image: formData.image,
    //     forsale: true,
    //     price: formData.price,
    //   });
    // console.log(error);
  };

  return (
    <div className={"w-5/6 my-5 mx-auto " + poppins.className}>
      <div className="flex">
        <EditNoteIcon fontSize="large" />
        <h1 className="text-2xl mx-2 ">ADD PRODUCT</h1>
      </div>
      <div className="flex flex-col md:flex-row  items-center gap-5  h-[800px] md:h-[400px] w-full mt-5">
        <div className="w-full md:w-2/5 h-full relative rounded-3xl mx-5 mb-5 ">
          <Image
            src="/assests/cart.jpg"
            alt="Cart Image"
            fill={true}
            className="object-cover w-full h-full aspect-square rounded-3xl  "
          />
        </div>
        <div className=" w-full md:w-1/2 h-full rounded-md border-2  relative bg-[#fff] dark:bg-[#000] shadow-2xl mb-5">
          <form className="h-full pt-10">
            <div className="flex flex-col sm:space-y-4 space-y-3 ">
                <label htmlFor="name" className="text-lg font-semibold  sm:mx-5 ml-5">
                  Name:
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="sm:mx-5 ml-2 w-3/5 text-sm h-7 font-bold pl-3 border-2 rounded-lg bg-[#D9D9D9] dark:bg-[#979798] "
                  />
                </label>

                <label htmlFor="phone" className="text-lg ml-5  font-semibold">
                  Phone:
                  <input
                    type="text"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        phone: e.target.value,
                      })
                    }
                    className=" ml-5 w-2/5 text-sm h-7 font-bold pl-3 border-2 rounded-lg  bg-[#D9D9D9] dark:bg-[#979798]"
                  />
                </label>


              <label htmlFor="email" className="ml-5 text-lg font-semibold">
                Email:
                <input
                  type="text"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-2/5 ml-5 text-sm h-7 font-bold pl-3 border-2 rounded-lg bg-[#D9D9D9] dark:bg-[#979798]"
                />
              </label>

              <label htmlFor="product"   className="ml-5 font-semibold">
                Product:
                <select
                  name="product"
                  defaultValue="book"
                  onChange={(e) =>
                    setFormData({ ...formData, product: e.target.value })
                  }
                  className="ml-5  border-2 rounded-lg text-sm cursor-pointer font-bold h-7 w-1/3 md:w-2/5 lg:w-1/5  bg-[#D9D9D9] dark:bg-[#979798]"
                >
                  <option value="book" className="cursor-pointer font-bold" >Stationery</option>
                  <option value="vehicle" className="cursor-pointer font-bold" >Vehicle</option>
                </select>
              </label>

                <label htmlFor="itemName"  className="ml-5 font-semibold">
                  Item-Name:
                  <input
                    type="text"
                    value={formData.itemName}
                    onChange={(e) =>
                      setFormData({ ...formData, itemName: e.target.value })
                    }
                    className="ml-5 w-2/5 border-2 text-sm h-7 font-bold pl-3 rounded-lg bg-[#D9D9D9] dark:bg-[#979798]"
                  />
                </label>
                 <div className="flex gap-x-2" >
                <label htmlFor="price" className="w-1/2 ml-5 font-semibold">
                  Price:
                  <input
                    type="number"
                    value={formData.price}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        price: parseInt(e.target.value),
                      })
                    }
                    className="ml-5 w-2/5 border-2 rounded-lg [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none bg-[#D9D9D9] dark:bg-[#979798] text-sm h-7 font-bold pl-3 "
                  />
                </label>

              <select
                name="isNegotiable"
                defaultValue="defaultSelected"
                onChange={(e) =>
                  setFormData({ ...formData, isNegotiable: e.target.value })
                }
                className="w-1/4 ml-5  border-2 font-semibold rounded-lg  cursor-pointer text-xs bg-[#D9D9D9] dark:bg-[#979798]"
              >
                <option value="defaultSelected" disabled hidden>
                  Negotiable
                </option>
                <option value="Yes" className="cursor-pointer font-bold" >Yes</option>
                <option value="No" className="cursor-pointer font-bold" >No</option>
              </select>
              </div>
              <label htmlFor="image" className="ml-5 font-semibold ">
                Image:
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const files = e.target.files;
                    if (files && files.length > 0) {
                      setFormData({ ...formData, image:files[0] });
                    } else {
                      setFormData({ ...formData, image: null });
                    }
                  }}
                  className=" ml-2 sm:ml-5 w-1/3 border-2 font-semibold cursor-pointer hover:shadow-black hover:shadow-2xl rounded-lg text-xs  bg-[#D9D9D9] dark:bg-[#979798]"
                />
              </label>
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="absolute bottom-4 right-2 md:right-10 lg:right-20 md:bottom-5 bg-[#67CE67] text-black hover:drop-shadow-2xl hover:shadow-[#67CE67]  border-2 rounded-md text-sm w-20 h-7 font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProductForm;
