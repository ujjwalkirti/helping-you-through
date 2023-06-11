import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import { poppins } from "@/utils/Fonts";
import { Avatar, FormControl, InputLabel, Menu, MenuItem, Select, Switch } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from "next-themes";
const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [icon, setIcon] = useState(false);
  const handleClickIcon = () => {
    setIcon(!icon);
  }
  const handleToggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return <>
    <div className={"hidden md:block "+poppins.className}>
      <div className="flex h-18 py-3 text-black bg-[#D7F5DC]  dark:bg-black dark:text-white " >
        <div className="w-2/12 flex pl-3 items-center ">
          <img className="" src="" alt="logo.png" srcSet="" />
        </div>
        <div className="rounded-3xl bg-white w-3/12 items-center cursor-pointer flex pl-3">
          <SearchIcon className="text-lg" />
          <input
            placeholder="Search for PYQ's,Review's ,Old Book's"
            className=" w-full h-4 focus:outline-none px-1 overflow-hidden rounded-3xl bg-inherit "
          />
        </div>
        <div className=" w-5/12 flex  list-none justify-evenly items-center cursor-pointer">
          <li className="w-[33%]">
            <FormControl fullWidth >
              <InputLabel >Services</InputLabel>
              <Select>
                <MenuItem>One</MenuItem>
                <MenuItem>Two</MenuItem>
                <MenuItem>Three</MenuItem>
              </Select>
            </FormControl>
          </li>
          <li className="">
            About Us
          </li>
          <li className="">
            Contact
          </li>

        </div>
        <div className="w-2/12 list-none flex items-center justify-evenly cursor-pointer">
          <li className="">
            Login
          </li>
          <li><Avatar /></li>
          <li className=""><Switch defaultChecked onClick={handleToggle} /></li>
        </div>
      </div>
    </div>




    {/* Responsiveness implementation */}
    <div className={"md:hidden +"+ poppins.className}>
      <div className="flex w-full float-left justify-center items-center  bg-[#D7F5DC]">
        <div className="w-2/12">
          <img className="" src="" alt="logo.png" srcSet="" />
        </div>
        <div className="w-7/12 rounded-3xl bg-white items-center cursor-pointer flex ml-10">
          <SearchIcon className="text-lg" />
          <input
            placeholder="Search for PYQ's,Review's ,Old Book's"
            className=" w-full h-7 bg-inherit focus:outline-none px-2 overflow-hidden rounded-3xl "
          />
        </div>
        {icon && <div className="w-3/12">
          <MenuIcon onClick={handleClickIcon} className="float-right text-4xl" />
        </div>}

        {!icon && <>
          <div className="w-3/12">
            <CloseIcon onClick={handleClickIcon} className="float-right text-4xl" />
          </div>
        </>
        }
      </div>

      {!icon &&  <div className=" absolute right-1 top-14 p-1">
            <ul className="flex flex-col justify-evenly items-center cursor-pointer">
              <li className="pb-2">Services</li>
              <li className="pb-2">About</li>
              <li className="pb-2">Contact</li>
              <li className="pb-2"><Avatar /></li>
              <li className="pb-2"><Switch onClick={handleToggle} /></li>
            </ul>
          </div>}

    </div>
  </>
    ;

};

export default Navbar;