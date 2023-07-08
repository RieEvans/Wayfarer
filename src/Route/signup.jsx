import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Home from "./Home";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const navigate = useNavigate()
  const [value, setValue] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem("user", JSON.stringify(value));
    navigate("/login")
  }

  return (
    <>

      <div>
        <div
          className={`bg-[url("/wavelogs.svg")] bg-bottom bg-no-repeat mx-auto mt-40 sm:w-[70%] mmd:w-[40%] xl:w-[50%] xxl:w-[25%] flex items-center justify-center`}
        >
          <div className="w-full">
            <h1 className="text-slate-900 font-bold  py-5 text-3xl">
              Create an Account
            </h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              <h1 className="text-slate-900 font-bold ">First Name</h1>
              <input
                type="text"
                name="firstName"
                value={value.firstName}
                onChange={(e) => setValue({...value, [e.target.name] : e.target.value})}
                placeholder="Enter your First Name"
                className="border-[1px] border-slate-900 outline-emerald-400 py-1 px-2 font-semibold text-slate-900"
                required
              />
              <h1 className="text-slate-900 font-bold">Last Name</h1>
              <input
                type="text"
                name="lastName"
                value={value.lastName}
                onChange={(e) => setValue({...value, [e.target.name] : e.target.value})}
                placeholder="Enter your Last Name"
                className="border-[1px] border-slate-900 outline-emerald-400 py-1 px-2 font-semibold text-slate-900"
                
              />
              <h1 className="text-slate-900 font-bold">Email</h1>
              <input
                type="text"
                name="email"
                value={value.email}
                onChange={(e) => setValue({...value, [e.target.name] : e.target.value})}
                placeholder="Enter your Email"
                className="border-[1px] border-slate-900 outline-emerald-400 py-1 px-2 font-semibold text-slate-900"
                required

              />
              <h1 className="text-slate-900 font-bold">Password</h1>
              <input
                type="password"
                name="password"
                value={value.password}
                onChange={(e) => setValue({...value, [e.target.name] : e.target.value})}
                placeholder="Enter your Password"
                className="border-[1px] border-slate-900 outline-emerald-400 py-1 px-2 font-semibold text-slate-900"
                required
              />
              <button

                className="bg-slate-900 text-emerald-400 font-semibold rounded-md py-2"
              >
                Sign up
              </button>
            </form>
            <p className="mt-2">Already have an account ?  <Link className="text-emerald-400 bg-slate-900 px-1 rounded-md font-semibold" to = "/login">Sign In</Link></p>
            <div className="border-t-[1px] border-b-[1px] border-gray-300 mt-10 py-5 ">
              <p className="text-sm text-center">
                Any information you provided will be stored in Localstorage, please note, dont use any real information this is just a prototype{" "}
                <span className="text-slate-900 underline font-semibold">
                  Terms & conditions & Privacy Statement
                </span>
              </p>
            </div>

            <div className=" border-gray-300 py-5 ">
              <p className="text-center text-sm font-semibold opacity-30 text-slate-900">
                By: Riejan Evangelista
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
