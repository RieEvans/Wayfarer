import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { ToSeeData, EventIcons, VisitCities } from "./MenuItems";
import { Ads } from "./Ads";
import { Choices } from "./choices";
import Prepare from "./Prepare";
import Slider from "react-slick";
import Footer from "./HomeFooter";
import Modal from "./Modal";
import { Discount } from "./Discount";

export const ToSee = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  const [modal, setModal] = useState(false);
  const [tempData, setTempData] = useState([]);

  const getData = (img, city, price, subImg, subImg1) => {
    let tempData = [img, city, price, subImg, subImg1];

    setTempData(() => [1, ...tempData]);
    return setModal(true);
  };

  return (
    <>
     
      <section>
        {/* Reusable Component*/}
        <div className="">
          {ToSeeData.map((data) => {
            return (
              <div
                key={data.id}
                className="bg-gradient-to-tr from-slate-900 to-slate-500 h-96 w-full relative text-center flex flex-col items-center justify-center text-emerald-400 font-semibold "
              >
                <img
                  src={data.img}
                  className="object-cover w-full h-full absolute mix-blend-overlay"
                />

                <p className="cursor-pointer underline ">{data.text}</p>
                <h1 className="sm:text-4xl md:text-7xl">{data.title}</h1>
              </div>
            );
          })}
        </div>

        {/* Reusable Component*/}

        <main className="mx-auto w-[80%] mt-10">
          <Link to="/" className="text-slate-900 ">
            Home <i className="fa-solid fa-angle-right"></i>{" "}
            <span className="opacity-50 text-slate-900"> Philippines</span>{" "}
          </Link>

          {/* ICONS SECTION */}

          <div className=" mt-10  ">
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-1 xl:grid-cols-4 xxl:grid-cols-8 content-center justify-items-center [&>*:nth-child(1)]:bg-slate-900 [&>*:nth-child(1)]:text-emerald-400">
              {EventIcons.map((events) => {
                return (
                  <div
                    key={events.id}
                    className="flex flex-col justify-center items-center border-[2px]  sm:w-full  h-[6rem] font-semibold  cursor-pointer hover:bg-slate-900 hover:text-emerald-400"
                  >
                    <i className={events.icons}></i>
                    <span className="text-center">{events.event}</span>
                  </div>
                );
              })}
            </div>
          </div>
          {/* ICONS SECTION ENDS */}

          {/* CITY IMAGES SECTION STARTS  */}

          <section className="mt-10">
            <h1 className="sm:text-xl m md:text-3xl ">
              Philippines's must-visit cities
            </h1>
           
            <Slider {...settings} className="mt-5 ">
              {VisitCities.map((cityImg) => {
                return (
                  <div key={cityImg.id} className="card cursor-pointer ">
                    <div className="h-[20rem] relative  gap-5 relative bg-gradient-to-tr rounded-lg  ">
                      <img
                        onClick={() =>
                          getData(
                            cityImg.img,
                            cityImg.city,
                            cityImg.price,
                            cityImg.subImg,
                            cityImg.subImg1
                          )
                        }
                        src={cityImg.img}
                        className="w-full h-full cursor-pointer  object-cover  md:rounded-lg bg-center"
                        alt=""
                      />

                      <span className="text-white text-3xl absolute bottom-0 left-0 p-2 ">
                        {cityImg.city}
                      </span>
                    </div>
                  </div>
                );
              })}
            </Slider>
            {modal === true ? (
              <Modal
                imgCity={tempData[1]}
                city={tempData[2]}
                price={tempData[3]}
                subImg={tempData[4]}
                subImg1={tempData[5]}
                hide={() => setModal(false)}
              />
            ) : (
              ""
            )}
          </section>

          {/* CITY IMAGES SECTION ENDS  */}
          <div className="md:flex md:flex-col-reverse gap-2 xl:flex-row">
            <Ads />
            <Choices />
          </div>

          <div>
            <Prepare />
          </div>
          <div className="mt-5">
            <Discount />
          </div>
        </main>
        <Footer />
      </section>
    </>
  );
};
