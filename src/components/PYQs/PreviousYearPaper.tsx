"use client";
import React from "react";
import { poppins } from "@/utils/Fonts";
import supabase from "@/utils/supaBase";
import PlagiarismIcon from "@mui/icons-material/Plagiarism";
import { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Departments } from "@/utils/dummy-data";
function PreviousYearPaper() {
  type paperType = {
    id: number;
    sem: string;
    branch: string;
    data: string;
    subject: string;
  };
  // type formData={
  //   department:string;
  //   semester:string;
  //   subject:string;
  // }
  // const [formData, setFormData]=useState<formData>({department:"", semester:"",subject:""});
  const [paper, setPaper] = useState<paperType[]>([]);
  const [depId, setDepId] = useState(1);
  const [sub, setSub] = useState<string>("");
  const [sem, setSem] = useState(1);

  const handleClick = async () => {
    const department = Departments[depId - 1].branch;
    const { data, error } = await supabase
      .from("pyqs")
      .select()
      .eq("branch", department)
      .eq("sem", sem)
      .eq("subject", sub);
    if (data) {
      setPaper(data);
    }
    // console.log(error);
    if (error) {
      console.log(error);
    }
  };
  // useEffect(() => {
  //   const fetchPaper = async () => {
  //     const { data, error } = await supabase.from("pyqs").select();
  //     console.log(data);
  //     if (data) {
  //       setPaper(data);
  //     }
  //     // console.log(error);
  //     if(error)
  //     {
  //       console.log(error);
  //     }
  //   };

  //   fetchPaper();
  // }, []);
  return (
    <>
      <h2 className={"text-black sm:text-3xl text-xl font-semibold  dark:text-white"}>
        <PlagiarismIcon
          fontSize="inherit"
          className="text-black dark:text-white"
        />
        Find Previous Year Papers
      </h2>

      <div
        className={
          "flex  flex-col sm:flex-row gap-0 bg-black h-[600px] sm:h-[300px] w-5/6 mx-auto  " +
          poppins.className
        }
      >
        <div className="sm:w-1/2  flex flex-col pt-5 h-1/2 sm:h-full relative bg-[#D7F5DC] dark:bg-[#67CE67]  border-2 pl-5 ">
          <div className="flex flex-col">
            <form>
              <div className="flex  flex-wrap gap-y-5 flex-col changeformtag">
                <select
                  name="department"
                  defaultValue="defaultselected"
                  onChange={(e) => setDepId(parseInt(e.target.value))}
                  className="w-4/5  p-3  border-[2px] border-black rounded-md  bg-[#D9D9D9] text-black cursor-pointer"
                >
                  <option value="defaultselected" disabled hidden>
                    Branch
                  </option>
                  {Departments.map((department) => (
                    <option value={department.id} key={department.id}>
                      {department.name}
                    </option>
                  ))}
                </select>

                <select
                  name="semester"
                  defaultValue="defaultselected"
                  className=" w-1/2 sm:w-1/3 p-3   border-black   border-[2px] rounded-md bg-[#D9D9D9] text-black cursor-pointer"
                  onChange={(e) => setSem(parseInt(e.target.value))}
                >
                  <option value="defaultselected" disabled hidden>
                    Semester
                  </option>
                  {Departments[depId - 1].sem.map((semester) => (
                    <option key={semester.id}>{semester.id}</option>
                  ))}
                </select>

                <select
                  name="subject"
                  defaultValue="defaultselected"
                  className=" w-2/5 sm:w-1/3 p-3   border-black   border-[2px] rounded-md  bg-[#D9D9D9] text-black cursor-pointer"
                  onChange={(e) => setSub(e.target.value)}
                >
                  <option value="defaultselected" disabled hidden>
                    Subject
                  </option>
                  {Departments[depId - 1].sem[sem - 1].sub.map((subjects) => (
                    <option
                      key={Departments[depId - 1].sem[sem - 1].sub.indexOf(
                        subjects
                      )}
                    >
                      {subjects}
                    </option>
                  ))}
                </select>
              </div>
            </form>
          </div>
          <div className="mt-20">
            <button
              className="w-fit p-1 font-bold  bg-dgreen absolute right-5 bottom-5 border-2 rounded-md hover:dark:bg-dgreen hover:drop-shadow-xl
               hover:shadow-black border-black dark:border-white fontugFi  text-black text-lg dark:text-[#D7F5DC] dark:bg-[#656565] "
              onClick={handleClick}
            >
              SEARCH <SearchIcon />
            </button>
          </div>
        </div>

        <div className="sm:w-1/2 flex flex-col bg-white dark:bg-[#6D766D] h-1/2 sm:h-full dark:border-2">
          <div className="pb-2.5 flex  flex-row justify-between h-[50px]">
            <div className="bg-[#D8FBD8] dark:bg-[#67CE67] w-1/3 text-center mt-2 text-black font-semibold ml-10  text-lg border-black border-2 rounded-lg">
              Title
            </div>
            <div className="bg-[#D8FBD8] dark:bg-[#67CE67] w-1/3 text-center  mt-2 text-black font-semibold mr-10 text-lg border-black border-2 rounded-lg">
              Link
            </div>
          </div>
          <div className=" h-full overflow-y-auto scrollbar-hide ">
            {paper.map((exam) => (
              <div
                key={exam.id}
                className="flex flex-row justify-between px-10  "
              >
                <div className="bg-[#D8FBD8] dark:bg-[#67CE67] w-2/5 h-8  overflow-hidden text-center my-1 text-sm text-black font-semibold p-1.5 border-black border-2 rounded-lg">
                  {exam.subject}
                </div>
                <div className="bg-[#D8FBD8] dark:bg-[#67CE67]  w-2/5 overflow-hidden text-center my-1 text-sm  text-black font-semibold p-1.5 border-black border-2 rounded-lg">
                  {exam.data}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default PreviousYearPaper;
