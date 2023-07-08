import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MenuItems } from "./MenuItems";


function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [openLogOut, setOpenLogout] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));
  let userName = "";
  if (user) {
    userName = user.firstName;
  } 

  
  return (
    <nav className="w-full  md:px-10 shadow-xl py-5 px-5 flex md:justify-between items-center h-20 fixed z-50 w-full bg-white top-0 ">
      <div className="flex text-4xl items-center w-full gap-2">
        <ion-icon name="logo-amplify" className=""></ion-icon>
        <h1 className="sm:text-2xl md:text-4xl font-bold">Wayfarer</h1>
      </div>

      <div
        onClick={() => setOpen(!open)}
        className="md:hidden text-lg cursor-pointer absolute right-10 top-7 z-50"
      >
        <i
          className={
            open ? "fa-regular fa-circle-xmark" : "fa-solid fa-bars-staggered"
          }
        ></i>
      </div>

      <ul
        className={` ${
          open ? "top-[84px] left-0 " : "top-[-1460px] left-0"
        } z-0 md:items-center md:h-20 absolute md:hidden sm:bg-slate-800 h-screen justify-end sm:pr-12 p-5 w-full z-50 gap-5  transition-all duration-500 ease-in-out`}
      >
        <div className=" text-end">
          <h1>
            <span className="bg-white font-bold p-2 rounded-xl">
              {userName}
            </span>
          </h1>
        </div>
        {MenuItems.map((item, index) => {
          return (
            <li
              key={index}
              className="md:flex sm:text-white md:text-black gap-2 cursor-pointer w-full p-3 hover:bg-emerald-400 duration-200 rounded-lg"
            >
              <a className="flex gap-2" href={item.url}>
                <i className={item.icon}></i>
                {item.title}
              </a>
            </li>
          );
        })}
        <button
          
          className="bg-emerald-400 px-4 py rounded-md text-slate-900 font-bold mt-5"
        >
          Logout
        </button>
      </ul>

      <ul className=" md:flex md:bg-white sm:my-5 md:items-center sm:hidden md:block  md:h-20 w-full justify-center">
        {MenuItems.map((item, index) => {
          return (
            <li
              key={index}
              className="flex text-base md:text-slate-900 md:text-xs gap-2 cursor-pointer items-center p-3 hover:bg-emerald-400 duration-200 rounded-lg "
            >
              <Link to={item.url}>
                <div className=" md:hidden xl:block icon md:text-xl">
                  <span className={item.icon}></span>
                </div>
              </Link>

              <Link to={item.url} className=" xl:block text-base">
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
        
      <div className="w-full flex items-center sm:hidden ssm:block ">
          
      </div>
    </nav>
  );
}

export default Navbar;
