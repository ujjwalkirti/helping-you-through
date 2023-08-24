import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { poppins } from "@/utils/Fonts";
import {
  Avatar,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Switch,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "next-themes";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import { Button } from "./ui/button";
import Link from "next/link";

const Navbar = () => {
  const { data: session } = useSession();

  const { theme, setTheme } = useTheme();
  const [icon, setIcon] = useState(true);
  const [checked, setChecked] = useState(true);
  const handleClickIcon = () => {
    setIcon(!icon);
  };
  const handleToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
    setChecked(!checked);
  };


  return (
    <>
      <div
        className={
          "w-full hidden lg:block dark:bg-[#20B15A] dark:text-white  bg-[#d7f5dc] text-black " +
          poppins.className
        }
      >
        <div className="mx-auto flex justify-between items-center px-3 h-18 py-3">
          <div className="w-10 h-10 relative flex pl-3 items-center ml-4">
            <Image
              className=" rounded-full"
              fill
              src="/logo.jpg"
              alt="Website's logo"
            />
          </div>
          <div className="rounded-3xl bg-white h-10  w-3/12 lg:w-4/12 mx-auto items-center cursor-pointer flex pl-3">
            <SearchIcon className="text-lg text-black" />
            <input
              placeholder="Search for PYQ's, Review's, Old Book's"
              className=" w-full bg-white  focus:outline-none px-1 overflow-hidden rounded-3xl bg-inherit dark:text-black"
            />
          </div>
          <div className=" w-4/12 flex  list-none justify-evenly items-center cursor-pointer">
            <li className="w-[33%]">
              <FormControl fullWidth>
                <InputLabel>
                  <p className="dark:text-white text-black">Services</p>
                </InputLabel>
                <Select>
                  <MenuItem>One</MenuItem>
                  <MenuItem>Two</MenuItem>
                  <MenuItem>Three</MenuItem>
                </Select>
              </FormControl>
            </li>
            <li className="">About Us</li>
            <li className="">Contact</li>
          </div>
          <div className="w-2/12 list-none flex items-center justify-evenly cursor-pointer">
            {!session?.user ? (
              <Button onClick={() => signIn("google")}>Sign-in</Button>
            ) : (
              <li className="flex items-center gap-2">
                <Avatar />
                <p>{session?.user.name}</p>
              </li>
            )}
            <li className="">
              <Switch checked={!checked} onChange={handleToggle} />
            </li>
          </div>
        </div>
      </div>

      {/* Responsiveness implementation */}
      <div className={"w-full  lg:hidden " + poppins.className}>
        <div className="mx-auto flex justify-between items-center dark:bg-[#20B15A]  dark:text-white bg-[#d7f5dc] text-black py-2 px-4">
          <Link href={`/`} className="w-2/12 relative flex items-center">
            <Image
              className=" object-cover rounded-full"
              width={40}
              height={40}
              src="/logo.jpg"
              alt="Website's logo"
            />
          </Link>
          {/* <div className="w-full  rounded-3xl bg-white items-center cursor-pointer flex px-3 mx-auto mt-[5px] ">
            <SearchIcon className="text-lg text-black" />
            <input
              placeholder="Search for PYQ's,Review's ,Old Book's"
              className=" w-full bg-white h-full px-4 py-2 bg-inherit focus:outline-none overflow-hidden rounded-3xl "
            />
          </div> */}
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
          <div className="absolute right-1 top-14 p-2 dark:bg-white bg-black text-white dark:text-black w-1/2">
            <ul className="flex flex-col justify-evenly items-start gap-4 cursor-pointer">
              <li className="pb-2 border-b-2 w-full">Services</li>
              <li className="pb-2 border-b-2 w-full">About</li>
              <li className="pb-2 border-b-2 w-full">Contact</li>
              <li className="pb-2 border-b-2 w-full">
                {!session?.user ? (
                  <span onClick={() => signIn("google")}>Sign-in</span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Avatar /> {session?.user?.name}
                  </span>
                )}
              </li>
              <li className="pb-2">
                <Switch checked={!checked} onChange={handleToggle} />{" "}
                {theme + " Theme"}
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
