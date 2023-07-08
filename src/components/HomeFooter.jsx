import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className= {`bg-slate-900 w-full mt-5`}>
      <div className={` bg-no-repeat bg-top bg-cover m-auto w-[70%] md:h-[9rem] sm:leading-8 py-10`}>
        <p className="text-emerald-400 text-center ">
          All material herein © 2023 RJC Company Pte. Ltd. All Rights
          Reserved.<br/> <br/>  RJC is part of Booking Holdings Inc. ,the world leader in
          online travel & related services.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
