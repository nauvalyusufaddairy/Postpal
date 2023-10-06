"use client";
// // import BlogCard from "@/components/BlogCard";
import { AiOutlineSearch } from "react-icons/ai";
// // import { User, category } from "@/data";
// // import gj from "../../public/gj.png";

import { useState } from "react";

export default function Homesick() {
  const [focus, setFocus] = useState(false);
  return (
    <div className="w-screen h-screen">
      {/* Navbar */}
      <div className="w-full h-[77px] z-10 fixed top-0 border-[1px] border-b-gray-500/50 flex flex-row items-center justify-between px-[56px] ">
        <div className="w-[10%] h-full text-teal-950 flex justify-center items-center text-3xl font-burton font-[800]">
          Postpal
        </div>
        <div className="w-[55%] h-full flex flex-row items-center  ">
          <div
            className={`w-full h-[2rem] flex flex-row rounded-md border-[1px]  ${
              focus ? "border-teal-500" : "border-gray-300"
            } bg-gray-200/20  items-center`}>
            <input
              onBlur={() => setFocus(false)}
              onFocus={() => setFocus(true)}
              className="w-[90%] h-full pl-[16px] bg-transparent outline-none border-none rounded-md"
            />
            <div className="flex w-[10%]  h-[32px] items-center  justify-end pr-[14px] ">
              <div
                className={`flex flex-row items-center rounded-full justify-center ${
                  focus ? "bg-teal-500/20" : "bg-white"
                }  h-[24px] w-[24px]`}>
                <AiOutlineSearch />
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-[20%] h-full flex flex-row items-center justify-end gap-6 text-[16px] font-[500]  md:pr-12">
          <div className="hidden md:block">Compose</div>
          <div className="hidden md:block ">Account</div>
        </div>
      </div>
    </div>
  );
}
