import React from "react";

export const Discount = () => {
  return (
    <section className="mb-10">
      <main className="flex items-center justify-between gap-5 px-5 bg-slate-900 text-white py-4 rounded-xl ">
        <div className="md:flex items-center justify-between text-sm gap-2">
          <div className="w-[50px]">
            <img
              className="w-full h-full object-cover"
              src="images/voucher.svg"
            />
          </div>
          <div>
            <span className="font-semibold">up to 50% off</span>
            <p className="opacity-90 sm:hidden md:block">
              Book a bundle and get up to half price off your hotel or activity
            </p>
          </div>
        </div>
        <div className="md:flex items-center justify-between text-sm gap-2">
          <div className="w-[50px]">
            <img
              className="w-full h-full object-cover"
              src="images/choices.svg"
            />
          </div>
          <div>
            <span className="font-semibold">Lots of Choices</span>
            <p className="opacity-90 sm:hidden md:block">
              Choose from attractions, transport, Wi-Fi/SIM and more to bundle with
            </p>
          </div>
        </div>
        <div className="md:flex items-center justify-between text-sm gap-2">
          <div className="w-[50px]">
            <img
              className="w-full h-full object-cover"
              src="images/essentials.svg"
            />
          </div>
          <div>
            <span className="font-semibold">Get the Essentials</span>
            <p className="opacity-90 sm:hidden md:block">
              Book your ideal room and trip essentials all in one place
            </p>
          </div>
        </div>
      </main>
    </section>
  );
};
