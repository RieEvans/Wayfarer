import React from "react";
import { LocateCafe } from "./CafeData";

export const Locate = () => {
  return (
    <>
      <div className="border-[1px] border-slate-900"></div>
      <h1 className="p-5 text-xl md:text-3xl italic text-center font-semibold text-slate-900 ">
        Location
      </h1>
      <div className="">
        <div className="md:flex gap-2  items-center justify-around">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2295.842798202485!2d120.97369405072672!3d14.591555685902023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397cb4388d9a055%3A0x142863562afc151c!2sLa%20Cathedral%20Cafe!5e0!3m2!1sen!2sph!4v1686813475070!5m2!1sen!2sph"
            className="border-2 sm:w-full md:w-[calc(100px*6)]  border-slate-900"
            height="300"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="bg-slate-900 text-emerald-400 px-5 py-3 rounded-lg leading-8 sm:mt-5 md:mt-0">
            {LocateCafe.map((location) => {
              return (
                <div>
                  <p><i class="fa-solid fa-location-dot"></i> {location.Address}</p>
                  <p><i class="fa-solid fa-envelope"></i> {location.email}</p>
                  <p><i class="fa-solid fa-phone"></i> {location.Tel}</p>

                  <div className="mt-20">
                    <p><i class="fa-solid fa-bell"></i> {location.reminder}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
