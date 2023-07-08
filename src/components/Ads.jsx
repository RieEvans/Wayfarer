import React from "react";
import { Stars, adsIcons } from "./MenuItems";

export const Ads = () => {
  return (
    <div className="mt-10 sm:w-full xl:w-[calc(220px*2)] flex items-center  ">
      <div className="bg-amber-400 w-full p-5">
        <h1 className="text-white font-semibold ">
          Philippines Sightseeing Tour With Hiking And Canyoning
        </h1>

        <div className="mt-5 py-2 border-t-2  md:flex items-center gap-2">
          <span className="flex items-center">
            {Stars.map((star) => {
              return (
                <div key={star.id} className="">
                  <i className={star.stars}></i>
                </div>
              );
            })}
          </span>

          <span className="md:flex-1">80% Ratings</span>

          <p className="flex items-center justify-center p-1 text-emerald-400 bg-slate-900 rounded-[.3rem] cursor-pointer">
            3.5
          </p>
        </div>

        <div className=" py-2 border-t-2  flex items-center gap-2">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
            {adsIcons.map((days) => {
              return (
                <div key={days.id} className="flex border-r ">
                  <span className="flex items-center gap-1  pr-1 ">
                    <i className={days.sun}></i>
                    {days.sunText}
                  </span>
                  <span className="flex items-center gap-1 pr-1">
                    <i className={days.moon}></i>
                    {days.moonText}
                  </span>
                  <span className="flex items-center gap-1 pr-1">
                    <i className={days.location}></i>
                    {days.locText}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-2 flex flex-col gap-1">
            <p className="flex items-center gap-2"><span className="bg-slate-900 px-1 rounded-[.2rem] text-emerald-400"><i className="fa-solid fa-check "></i></span>Best Online Price</p>
            <p className="flex items-center gap-2"><span className="bg-slate-900 px-1 rounded-[.2rem] text-emerald-400"><i className="fa-solid fa-check "></i></span>Contactless check-in via WhatsApp/Email</p>
            <p className="flex items-center gap-2"><span className="bg-slate-900 px-1 rounded-[.2rem] text-emerald-400"><i className="fa-solid fa-check "></i></span>Exclusive Thrillophilia Deal</p>
        </div>

        <div className="mt-5">
            <p className="flex items-center gap-2 text-center"> Starting From<span className="px-3 bg-slate-900 text-emerald-400 sm:text-xl md:text-2xl">7% OFF</span></p>
            <div className="mt-2">
                <p className="flex items-center gap-2 text-center">PHP 3500 to <span className="px-3 bg-slate-900 text-emerald-400 sm:text-sm md:text-2xl">PHP 1650 per adult</span></p>
            </div>
        </div>
            

      </div>
    </div>
  );
};
