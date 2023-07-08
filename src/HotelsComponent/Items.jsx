import React from "react";
import { HotelsItem } from "./HotelsData";
import Footer from "../components/HomeFooter";
import { Discount } from "../components/Discount";
import { Link } from "react-router-dom";


//Loader Function
export const Items = (props) => {

  return (
    <>
      <div className="mx-auto sm:w-[90%] xl:w-[90%] xxl:w-[70%] mt-20 ">
        <div className="">
          <Discount /> {/* ADS  */}
        </div>

        <div className="grid sm:grid-cols-1  mmd:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-5 gap-5 justify-content-center content-center  ">
          {" "}
          {/* LIST OF HOTELS DATA  */}
          {HotelsItem.filter((item) => {
            {
              /* FILTERING ITEMS */
            }
            if (props.searchItem == "") {
              return item;
            } else if (
              item.title.toLowerCase().includes(props.searchItem.toLowerCase())
            ) {
              return item;
            } else if (
              item.city.toLowerCase().includes(props.searchItem.toLowerCase())
            ) {
              return item;
            }
          }).map((item) => {
            {
              /* MAPPING ITEMS */
            }
            return (
              <div
                key={item.id}
                className="relative bg-slate-900  text-emerald-400 object-cover rounded-[1rem] "
              >
                <div className="object-cover overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="cursor-pointer w-full h-full object-cover rounded-t-[1rem]"
                  />
                </div>
                <div className="text-sm font-semibold py-3 px-5 flex flex-col justify-between items-justify ">
                  <div className="grid sm:grid-cols-1 xxl:grid-cols-2 justify-content-between content-center border-b-[1px] border-yellow-400  ">
                    <div className="flex gap-1 items-center text-[12px]">
                      <span className="bg-yellow-400 w-[30px] flex items-center justify-center text-slate-900 rounded-tl-[.5rem] rounded-br-[.5rem] mb-1 ">
                        {item.ratings}
                      </span>
                      <span>{item.reviews}</span>
                    </div>

                    <h1 className="text-end pb-2 italic text-sm">
                      {item.city}
                    </h1>
                  </div>

                  <h1 className="text-sm ">{item.title}</h1>
                  <h1 className="text-[11px] mt-2 ">{item.text}</h1>

                  <div className="">
                    <span className="text-yellow-400 italic ">
                      {item.prices}
                    </span>
                  </div>

                  <Link to = {item.url} className="bg-yellow-400 text-slate-900 rounded-[.2rem] mt-5 text-center">See Availabily</Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </>
  );
};




