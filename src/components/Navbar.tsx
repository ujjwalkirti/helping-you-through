import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { poppins } from "@/utils/Fonts";
import {
  Avatar,
  FormControl,
  InputLabel,
  Menu,
  MenuItem,
  Select,
  Switch,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "next-themes";
import Image from "next/image";
const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [icon, setIcon] = useState(true);
  const [checked,setChecked]=useState(true);
  const handleClickIcon = () => {
    setIcon(!icon);
    
  };
  const handleToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
    setChecked(!checked);
  };

  return (
    <>
      <div className={`hidden lg:block ${theme == "dark" ? "bg-[#20B15A] text-white" : "bg-[#d7f5dc] text-black"} ` + poppins.className}>
        <div className="flex justify-between items-center px-3 h-18 py-3">
          <div className="w-10 h-10 relative flex pl-3 items-center ">
            <Image
              className=" rounded-full"
              fill
              src="/logo.jpg"
              alt="Website's logo"
            />
          </div>
          <div className="rounded-3xl bg-white h-8  w-3/12 items-center cursor-pointer flex pl-3">
            <SearchIcon className="text-lg text-black" />
            <input
              placeholder="Search for PYQ's,Review's ,Old Book's"
              className=" w-full bg-white  focus:outline-none px-1 overflow-hidden rounded-3xl bg-inherit "
            />
          </div>
          <div className=" w-5/12 flex  list-none justify-evenly items-center cursor-pointer">
            <li className="w-[33%]">
              <FormControl fullWidth>
                <InputLabel><p className={`${theme == "dark" ? "text-white" :"text-black"}`}>Services</p></InputLabel>
                <Select>
                  <MenuItem >One</MenuItem>
                  <MenuItem >Two</MenuItem>
                  <MenuItem >Three</MenuItem>
                </Select>
              </FormControl>
            </li>
            <li className="">About Us</li>
            <li className="">Contact</li>
          </div>
          <div className="w-2/12 list-none flex items-center justify-evenly cursor-pointer">
            <li className="">Login</li>
            <li>
              <Avatar />
            </li>
            <li className="">
              <Switch checked={checked} onChange={handleToggle} />
            </li>
          </div>
        </div>
      </div>


      

      {/* Responsiveness implementation */}
      <div className={"lg:hidden +" + poppins.className}>
        <div className={`flex w-full float-left justify-evenly items-center ${theme == "dark" ? "bg-[#20B15A] text-white" : "bg-[#d7f5dc] text-black"}`}>
        <div className="w-2/12 relative float-left flex items-center mt-[5px] ">
            <Image
              className=" object-cover rounded-full"
              width={30}
              height={30}
              src="/logo.jpg"
              alt="Website's logo"
            />
          </div>
          <div className="w-8/12 rounded-3xl bg-white items-center cursor-pointer flex mx-auto mt-[5px] ">
            <SearchIcon className="text-lg text-black" />
            <input
              placeholder="Search for PYQ's,Review's ,Old Book's"
              className=" w-full bg-white h-7 bg-inherit focus:outline-none px-2 overflow-hidden rounded-3xl "
            />
          </div>
          {icon && (
            <div className="w-2/12">
              <MenuIcon
                onClick={handleClickIcon}
                className="float-right text-4xl"
              />
            </div>
          )}

          {!icon && (
            <>
              <div className="w-2/12">
                <CloseIcon
                  onClick={handleClickIcon}
                  className="float-right text-4xl"
                />
              </div>
            </>
          )}
        </div>

        {!icon && (
          <div className=" absolute right-1 top-14 p-1">
            <ul className="flex flex-col justify-evenly items-center cursor-pointer">
              <li className="pb-2">Services</li>
              <li className="pb-2">About</li>
              <li className="pb-2">Contact</li>
              <li className="pb-2">
                <Avatar />
              </li>
              <li className="pb-2">
                <Switch checked={checked} onChange={handleToggle} />
              </li>
            </ul>
          </div>
        )}
      </div>
      </>
  );
};

export default Navbar;
