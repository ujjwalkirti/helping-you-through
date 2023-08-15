"use client";
import React, { use, useState, useEffect } from "react";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { DepartmentName } from "@/utils/dummy-data";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { app, storage } from "@/lib/Firebase";
function UploadPaper() {
  type formType = {
    department: string;
    subject: string;
    semester: Number | string;
    emailId: string;
    admissionNo: string;
    paper: File | null;
    paperUrl: string;
  };
  const [formData, setFormData] = useState<formType>({
    department: "",
    subject: "",
    semester: 1,
    emailId: "",
    admissionNo: "",
    paper: null,
    paperUrl: "",
  });

  const [departmentindex, setdepartmentIndex] = useState(1);

  const [sembtech, setsembtech] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  const handleBranchChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedDepartment = DepartmentName[parseInt(e.target.value)].value;
    setFormData((prevData) => ({
      ...prevData,
      department: selectedDepartment,
    }));
    setdepartmentIndex(parseInt(e.target.value));
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // console.log(formData)
    if (!formData.paper) {
      console.log("No file selected for upload.");
      return;
    }

    try {
      const storageRef = ref(storage, "papers/" + formData.paper.name);

      // Upload the paper to Firebase Storage
      await uploadBytes(storageRef, formData.paper);

      // Get the download URL of the uploaded paper
      const downloadURL = await getDownloadURL(storageRef);
      const response = await fetch("/api/pyq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData, downloadURL }),
      });

      if (response.ok) {
        console.log("Data sent to the API successfully.");
      } else {
        console.error("Error sending data to the API.");
      }

      console.log("Paper uploaded successfully. URL:", downloadURL);
    } catch (error) {
      console.error("Error uploading paper:", error);
    }
  };
  useEffect(() => {
    if (departmentindex >= 0 && departmentindex <= 6) {
      setsembtech([1, 2, 3, 4, 5, 6, 7, 8]);
    } else {
      setsembtech([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    }
  }, [departmentindex]);

  const sem = (
    <select
      onChange={(e) => setFormData({ ...formData, semester: e.target.value })}
      className=" p-3  border-[2px] border-black dark:border-white w-[400]"
    >
      {sembtech.map((s, index) => (
        <option value={index + 1} key={index * 3}>
          {s}
        </option>
      ))}
    </select>
  );

  return (
    <div className=" w-5/6 mx-auto my-5 px-2">
      <form className="w-full">
        <fieldset className="border border-b-0 border-black p-2">
          <legend className=" text-[#484d4b] dark:text-white text-3xl font-bold ">
            <span>
              <UploadFileIcon fontSize="large" />
            </span>
            UPLOAD PAPER{" "}
          </legend>
        </fieldset>

        <div className="flex flex-col lg:flex-row lg:flex-wrap justify-center gap-y-10 text-black dark:text-white p-2 border border-t-0 border-black">
          <div className="flex flex-col lg:flex-row  justify-center gap-10">
            <select
              defaultValue="defaultValue"
              name="branch"
              onChange={handleBranchChange}
              className="  p-3  border-[2px] border-black dark:border-white"
            >
              <option value="defaultValue" disabled hidden>
                Branch
              </option>
              {DepartmentName.map((el, x) => (
                <option value={x} key={el.id}>
                  {el.name}
                </option>
              ))}
            </select>
            <select
              name="subject"
              defaultValue="defaultselected"
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
              className="  p-3  border-black   dark:border-white border-[2px] "
            >
              <option value="defaultselected" disabled hidden>
                Subject
              </option>
              {DepartmentName[departmentindex].subjects.map((el) => (
                <option value={el.name} key={el.id}>
                  {el.name}
                </option>
              ))}
            </select>
            <input
              className=" border-[2px]  border-black   dark:border-white p-3 placeholder-black dark:placeholder-white"
              placeholder="Admission No"
              type="text"
              value={formData.admissionNo}
              onChange={(e) =>
                setFormData({ ...formData, admissionNo: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col lg:flex-row justify-center  gap-10">
            {sem}
            <input
              className="  border-[2px]  border-black  dark:border-white p-3 placeholder-black dark:placeholder-white"
              placeholder="Email Id"
              value={formData.emailId}
              onChange={(e) =>
                setFormData({ ...formData, emailId: e.target.value })
              }
              type="email"
            />
            <input
              className="  border-[2px]  border-black  dark:border-white p-3 placeholder-black  dark:placeholder-white"
              placeholder="Choose File"
              type="file"
              onChange={(e) => {
                const files = e.target.files;
                if (files && files.length > 0) {
                  setFormData({ ...formData, paper: files[0] });
                } else {
                  setFormData({ ...formData, paper: null });
                }
              }}
            />
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className=" bg-[#67CE67] px-2 dark:border-white rounded-md drop-shadow-md font-bold shadow-black text-white dark:text-[#67CE67] dark:bg-white hover:animate-pulse ml-5"
          >
            <CloudUploadIcon className="m-2" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default UploadPaper;
