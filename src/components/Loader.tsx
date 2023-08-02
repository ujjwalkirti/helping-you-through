import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";
import { Ripples } from "@uiball/loaders";

const Loader = () => {
  const { theme } = useTheme();
  return (
    <div
      className={
        "fixed z-50 h-screen w-screen flex justify-center items-center " +
        `${theme === "dark" ? "bg-[#2C1810]" : "bg-white"}`
      }
    >
      <div className="absolute">
        <Ripples
          size={285}
          speed={2}
          color={`${theme === "dark" ? "#fffbf7" : "#2c1810"}`}
        />
      </div>
      <div
        className={
          `${theme === "dark" ? "bg-[#2c1810]" : "bg-[#fffbf7]"}` +
          " z-40 rounded-full flex items-center justify-center"
        }
      >
        {theme === "dark" ? (
          <Image
            src="/logo.jpg"
            height={120}
            width={120}
            alt="LAC logo"
            className="rounded-full border-4 border-gray-300 "
          />
        ) : (
          <Image
            src="/logo.jpg"
            height={120}
            width={120}
            alt="LAC logo"
            className="border-4 border-[#2C1810] rounded-full"
          />
        )}
      </div>
    </div>
  );
};

export default Loader;