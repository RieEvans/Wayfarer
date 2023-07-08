import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import { ToSeeData } from "../components/MenuItems";
import { HotelsData, HotelsItem } from "../HotelsComponent/HotelsData";
import { Items } from "../HotelsComponent/Items";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file 
import { DateRange } from "react-date-range";
import { format } from "date-fns";


export const Service = () => {
  const [searchItem, setSearchItem] = useState([]); {/* the state variable "searchItem declared props pass to children" */}
 


  
  const [openSearch, setOpenSearch] = useState(false);
  const [openDate, setOpenDate] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  return (
    <>
     
      <div  className="relative ">
        {/* Reusable Component*/}
        <div className="relative flex flex-col items-center justify-center">
          {HotelsData.map((data) => {
            return (
              <div
                key={data.id}
                className="bg-gradient-to-tr from-slate-900 to-slate-500 h-96 w-full relative text-center flex flex-col items-center justify-center  "
              >
                <img
                  src={data.img}
                  className="object-cover w-full h-full absolute mix-blend-overlay"
                />

                <h1 className="sm:text-4xl md:text-7xl text-white font-semibold">
                  {data.title}
                </h1>
                <p className="cursor-pointer text-white opacity-80  ">
                  {data.text}
                </p>
              </div>
            );
          })}

          <div  className="mx-auto sm:w-full xl:w-[90%] xxl:w-[70%] md:absolute  bottom-[-40px] relative   ">
            <div className="xl:flex items-center justify-around gap-5 sm:grid md:grid-cols-2  border-2 border-emerald-400 rounded-bl-2xl rounded-tr-2xl py-7 bg-slate-900 text-emerald-400 w-full h-full px-2 ">
              <div className="flex gap-2 items-center flex-1 relative  ">
                <i className="fa-solid fa-book"></i>
                <input
                  onChange={(e) => setSearchItem(e.target.value)}
                  onClick={() => setOpenSearch(!openSearch)}
                  className="px-4 py-1 focus:outline-emerald-400 focus:text-slate-900 font-semibold rounded-[.2rem] w-full"
                  type="text"
                  placeholder="Where to ? "
                />
                {openSearch && (
                  <div className="absolute border-2 border-emerald-400 bg-slate-900 text-emerald-400 left-0 top-10 z-50 rounded-b-xl w-full py-2 px-2 z-50 ">
                    <h1>Popular Destinations</h1>
                    <div className="sm:grid sm:grid-cols-2    gap-2 p-1 ">
                      <button className="text-slate-900 font-semibold bg-white active:opacity-50 active:text-emerald-400  rounded-sm ">
                        Tagaytay
                      </button>
                      <button className="text-slate-900 font-semibold bg-white active:opacity-25 active:text-emerald-400 rounded-sm">
                        Cebu
                      </button>
                      <button className="text-slate-900 font-semibold bg-white active:opacity-25 active:text-emerald-400 rounded-sm">
                        Boracay
                      </button>
                      <button className="text-slate-900 font-semibold bg-white active:opacity-25 active:text-emerald-400 rounded-sm">
                        Siargao
                      </button>
                      <button className="text-slate-900 font-semibold bg-white active:opacity-25 active:text-emerald-400 rounded-sm">
                        Puerto Princesa
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-2 items-center relative flex-1 ">
                <span
                  className="border-2 border-emerald-400 py-2 w-full flex items-center gap-2 justify-center cursor-pointer"
                  onClick={() => setOpenDate(!openDate)}
                >
                  <i className="fa-solid fa-calendar-days  "></i>
                  {`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                    dates[0].endDate,
                    "MM/dd/yyyy"
                  )}`}
                </span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDates([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={dates}
                    placeholder ='Select a Range'
                    className="absolute  top-20 z-50 cursor-pointer rounded-xl "
                  />
                )}
              </div>

              <div className="flex gap-2 items-center relative z-40 ">
                <i className="fa-solid fa-users"></i>
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="cursor-pointer "
                >{`${options.adult} Adult ${options.children} Children ${options.room} Room `}</span>
                {openOptions && (
                  <div className="option absolute top-10 w-full rounded-b-xl p-5 bg-slate-900 flex flex-col gap-5 transition ease-in-out ">
                    <div className="optionItem flex items-center justify-between border-b-2 border-emerald-400">
                      <span className="">Adult</span>
                      <div className="flex-1 items-center justify-end gap-2 flex">
                        <button
                          disabled={options.adult <= 1}
                          onClick={() => handleOption("adult", "d")}
                          className=" flex items-center justify-center text-2xl text-emerald-400 font-bold "
                        >
                          -
                        </button>
                        <span>{options.adult}</span>
                        <button
                          onClick={() => handleOption("adult", "i")}
                          className=" flex items-center justify-center text-xl text-emerald-400 font-bold "
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem flex items-center justify-between border-b-2 border-emerald-400">
                      <span className="">Children</span>
                      <div className="flex-1 items-center justify-end gap-2 flex">
                        <button
                          disabled={options.children <= 0}
                          onClick={() => handleOption("children", "d")}
                          className=" flex items-center justify-center text-2xl text-emerald-400 font-bold "
                        >
                          -
                        </button>
                        <span>{options.children}</span>
                        <button
                          onClick={() => handleOption("children", "i")}
                          className=" flex items-center justify-center text-xl text-emerald-400 font-bold "
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem flex items-center justify-between border-b-2 border-emerald-400">
                      <span className="">Room</span>
                      <div className="flex-1 items-center justify-end gap-2 flex">
                        <button
                          disabled={options.room <= 1}
                          onClick={() => handleOption("room", "d")}
                          className=" flex items-center justify-center text-2xl text-emerald-400 font-bold "
                        >
                          -
                        </button>
                        <span>{options.room}</span>
                        <button
                          onClick={() => handleOption("room", "i")}
                          className=" flex items-center justify-center text-xl text-emerald-400 font-bold "
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <button className="bg-emerald-400 text-slate-900 f" onClick={() => setOpenOptions(!openOptions) } >Done</button>
                  </div>
                )}
              </div>

              <button className="bg-emerald-400 text-slate-900  px-5 py-1 rounded-xl font-semibold active:opacity-50">
                Search
              </button>
            </div>
          </div>
        </div>
      
       
        <div>
                  
        </div>
        {/* HOTELS  */}
        <div className="">
          <Items searchItem={searchItem} /> {/* stateVariable "searchItem" */}
        </div>
      </div>
    </>
  );
};
