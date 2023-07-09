import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className= {`bg-slate-900 w-full mt-5`}>
      <div className={` bg-no-repeat bg-top bg-cover m-auto w-[70%] md:h-[9rem] sm:leading-8 py-10`}>
        <p className="text-emerald-400 text-center ">
          © Riejan Evangelista CpE | July 8, 2023
        </p>
      </div>
    </footer>
  );
};

export default Footer;
