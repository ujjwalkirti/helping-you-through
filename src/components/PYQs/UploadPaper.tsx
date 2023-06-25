import React, { useState } from "react";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

function UploadPaper() {
  const DepartmentName = [
    {
      id: 1,
      name: "Civil Engineering",
      branches: [
        { id: 1, name: "Structural Engineering" },
        { id: 2, name: "Geotechnical Engineering" },
        { id: 3, name: "Transportation Engineering" },
        { id: 4, name: "Water Resources Engineering" },
        { id: 5, name: "Environmental Engineering" },
        { id: 6, name: "Construction Technology & Management" },
      ],
    },
    {
      id: 2,
      name: "Mechanical Engineering",
      branches: [
        { id: 1, name: "Thermal Engineering" },
        { id: 2, name: "Design Engineering" },
        { id: 3, name: "Production Engineering" },
        { id: 4, name: "Industrial Engineering" },
        { id: 5, name: "Automobile Engineering" },
      ],
    },
    {
      id: 3,
      name: "Electrical Engineering",
      branches: [
        { id: 1, name: "Power Systems Engineering" },
        { id: 2, name: "Control Systems Engineering" },
        { id: 3, name: "Power Electronics & Drives" },
        { id: 4, name: "Renewable Energy Systems" },
        { id: 5, name: "Electrical Machines & Drives" },
      ],
    },
    {
      id: 4,
      name: "Electronics & Communication Engineering",
      branches: [
        { id: 1, name: "Communication Systems" },
        { id: 2, name: "VLSI Design" },
        { id: 3, name: "Microelectronics & Embedded Systems" },
        { id: 4, name: "Signal Processing" },
        { id: 5, name: "RF & Microwave Engineering" },
      ],
    },
    {
      id: 5,
      name: "Computer Science & Engineering",
      branches: [
        { id: 1, name: "Artificial Intelligence" },
        { id: 2, name: "Data Science" },
        { id: 3, name: "Software Engineering" },
        { id: 4, name: "Information Security" },
        { id: 5, name: "Computer Networks" },
      ],
    },
    {
      id: 6,
      name: "Chemical Engineering",
      branches: [
        { id: 1, name: "Process Design & Development" },
        { id: 2, name: "Energy Systems" },
        { id: 3, name: "Chemical Process Modeling & Simulation" },
        { id: 4, name: "Environmental Engineering & Management" },
        { id: 5, name: "Process Control & Instrumentation" },
      ],
    },
    {
      id: 7,
      name: "Metallurgical & Materials Engineering",
      branches: [
        { id: 1, name: "Extractive Metallurgy" },
        { id: 2, name: "Physical Metallurgy" },
        { id: 3, name: "Materials Science" },
        { id: 4, name: "Welding Technology" },
        { id: 5, name: "Corrosion Science & Engineering" },
      ],
    },
  ];

  const [departmentindex, setdepartmentIndex] = useState(1);

  console.log(departmentindex);

  return (
    <div className=" w-5/6 mx-auto my-5">
      <form>
        <fieldset className=" border border-dgreen p-5">
          <legend className=" text-[#484d4b] dark:text-white text-3xl font-bold ">
            <span>
              <UploadFileIcon fontSize="large" />
            </span>
            UPLOAD PAPER{" "}
          </legend>
          <div className="flex justify-center flex-wrap  gap-10 changeformtag text-dgreen dark:text-white ">
            <div className="flex justify-center flex-wrap  gap-10">
            <select
              onChange={(e) => setdepartmentIndex(parseInt(e.target.value))}
              className=" grow p-3  border-[2px] border-dgreen dark:border-white"
            >
              {DepartmentName.map((el, x) => (
                <option value={el.id.toString(10)} key={el.id}>
                  {el.name}
                </option>
              ))}
            </select>
            <select className=" grow p-3  border-dgreen   dark:border-white border-[2px] ">
              {DepartmentName[departmentindex - 1].branches.map((el) => (
                <option key={el.id}>{el.name}</option>
              ))}
            </select>
            <input
              className="grow border-[2px]  border-dgreen   dark:border-white p-3 placeholder-dgreen dark:placeholder-white"
              placeholder="Admission No"
              type="text"
            />
            </div>
            <div className="flex justify-center flex-wrap  gap-10">
            <input
              className="grow  border-[2px]  border-dgreen  dark:border-white p-3 placeholder-dgreen dark:placeholder-white"
              placeholder="year"
              type="text"
            />
            <input
              className=" grow border-[2px]  border-dgreen  dark:border-white p-3 placeholder-dgreen dark:placeholder-white"
              placeholder="Email Id"
              type="email"
            />
            <input
              className=" grow border-[2px]  border-dgreen  dark:border-white p-3 placeholder-dgreen  dark:placeholder-white"
              placeholder="Choose File"
              type="file"
            />
            <button
              type="submit"
              className=" bg-dgreen px-2 dark:border-white rounded-md drop-shadow-md font-bold shadow-dgreen text-white dark:text-dgreen dark:bg-white hover:animate-pulse"
            >
              <CloudUploadIcon className="m-2" />
            </button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default UploadPaper;
