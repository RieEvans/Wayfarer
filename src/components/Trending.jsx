import React from "react";
import { trends } from "./DataImages";

export const TrendingDest = () => {
  return (
    <div className={`mx-auto `}>
      <h1 className="text-slate-900 sm:text-2xl md:text-3xl font-semibold">
        Trending Destination
      </h1>
      <p className="text-slate-900 opacity-75 mt-2">
        Most Popular choices for travellers from the Philippines
      </p>
      <section className="relative shadow-xl mt-5 sm:flex sm:flex-col gap-1  mmd:grid content-center justify-content-center mmd:grid-cols-1 xl:grid-cols-3 xxl:grid-cols-4  gap-3 [&>*:nth-child(even)]:col-span-2 cursor-pointer overflow-hidden ">
        {trends.map((trending, index) => {
          return (
            <div className="h-full w-full overflow-hidden relative " key={index}>
              <div className="object-cover overflow-hidden h-80  ">
                <img
                  className="w-full h-full object-cover hover:rotate-3 hover:scale-125 transition-transform duration-300"
                  src={trending.img}
                  alt={trending.title}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900"></div>

              <span className="text-white absolute top-5 left-5 font-bold text-3xl">
                {trending.title}
              </span>
              <p className="absolute bottom-5 font-semibold text-sm px-5 text-white hover:underline">{trending.sides}</p>
              <div className="absolute inset-0 flex flex-col items-center justify-center px-9 translate-y-64 hover:translate-y-0 transition-all duration-300 | bg-gradient-to-b hover:from-black/70 hover:via-black/60 hover:to-black/70 rounded-xl">
                <p className="text-white font-semibold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                  iusto nulla mollitia?
                </p>
                <button className="bg-slate-900 px-2 py-1 text-emerald-400 font-semibold border-2 mt-10 border-emerald-400 ">See more</button>
              </div>   
            </div>
          );
        })}
      </section>
    </div>
  );
};
