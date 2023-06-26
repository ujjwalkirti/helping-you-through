import React, { useState } from "react";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { DepartmentName } from "@/utils/dummy-data";

function UploadPaper() {
  const [departmentindex, setdepartmentIndex] = useState(1);

  return (
    <div className="my-5 px-2">
      <form className="w-full">
        <fieldset className="border border-b-0 border-dgreen p-2">
          <legend className=" text-[#484d4b] dark:text-white text-3xl font-bold ">
            <span>
              <UploadFileIcon fontSize="large" />
            </span>
            UPLOAD PAPER{" "}
          </legend>
        </fieldset>

        <div className="flex flex-col lg:flex-row lg:flex-wrap justify-center gap-y-10 text-dgreen dark:text-white p-2 border border-t-0 border-dgreen">
          <div className="flex flex-col lg:flex-row  justify-center gap-10">
            <select
              onChange={(e) => setdepartmentIndex(parseInt(e.target.value))}
              className="  p-3  border-[2px] border-dgreen dark:border-white"
            >
              {DepartmentName.map((el, x) => (
                <option value={el.id.toString(10)} key={el.id}>
                  {el.name}
                </option>
              ))}
            </select>
            <select className="  p-3  border-dgreen   dark:border-white border-[2px] ">
              {DepartmentName[departmentindex - 1].branches.map((el) => (
                <option key={el.id}>{el.name}</option>
              ))}
            </select>
            <input
              className=" border-[2px]  border-dgreen   dark:border-white p-3 placeholder-dgreen dark:placeholder-white"
              placeholder="Admission No"
              type="text"
            />
          </div>
          <div className="flex flex-col lg:flex-row justify-center  gap-10">
            <input
              className="  border-[2px]  border-dgreen  dark:border-white p-3 placeholder-dgreen dark:placeholder-white"
              placeholder="year"
              type="text"
            />
            <input
              className="  border-[2px]  border-dgreen  dark:border-white p-3 placeholder-dgreen dark:placeholder-white"
              placeholder="Email Id"
              type="email"
            />
            <input
              className="  border-[2px]  border-dgreen  dark:border-white p-3 placeholder-dgreen  dark:placeholder-white"
              placeholder="Choose File"
              type="file"
            />
          </div>
          <button
            type="submit"
            className=" bg-dgreen px-2 dark:border-white rounded-md drop-shadow-md font-bold shadow-dgreen text-white dark:text-dgreen dark:bg-white hover:animate-pulse"
          >
            <CloudUploadIcon className="m-2" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default UploadPaper;
