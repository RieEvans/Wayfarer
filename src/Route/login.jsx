import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate()
  const [value, setValue] = useState({
    email:"",
    password:"",
  })
  
  const handleLogin = (e) => {
    e.preventDefault()
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    if (value.email == loggedUser.email && value.password == loggedUser.password){
      localStorage.setItem("loggedIn", true)
      navigate("/")
      alert("Login Success") 
    } else {
      alert("Wrong Email or Password")
    }
  }
  return (
    <>
      <Navbar />
        <div className={`bg-[url("./dotslogs2.svg")] bottom-0 top-20 `}></div>
        <div className={` bg-no-repeat mx-auto mt-40 sm:w-[70%] mmd:w-[40%] xl:w-[50%] xxl:w-[25%] flex items-center justify-center`}>
          <div className="w-full">
            <h1 className="text-slate-900 font-bold py-5 text-3xl">Login</h1>
            <form onSubmit={handleLogin} className="flex flex-col gap-2">
              <h1 className="text-slate-900 font-bold">Email</h1>
              <input
                type="email"
                name="email"
                value={value.email}
                onChange={(e) => setValue({...value,[e.target.name] : e.target.value})}
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
              <button  className="bg-slate-900 text-emerald-400 font-semibold rounded-md py-2">
                Log in
              </button>
            </form>
            
            <p className="mt-2">Dont have an account ?  <Link className="text-emerald-400 bg-slate-900 px-1 rounded-md font-semibold" to = "/signup">Signup</Link></p>

            <div className="border-t-[1px] border-b-[1px] border-gray-300 mt-10 py-5 ">
              <p className="text-sm text-center">
                By signing in or creating an account, you agree with our{" "}
                <span className="text-emerald-400">
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

    </>
  );
};
