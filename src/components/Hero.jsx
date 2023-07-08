import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Images } from "./DataImages";
import { Intramuros, IntramurosDetails } from "../Intramuros/Intramuros";
import { Experiences } from "./DataImages";
import { Loading } from "../Route/Loading";
import Footer from "./HomeFooter";
import Prepare from "./Prepare";
import { Discount } from "./Discount";
import { TrendingDest } from "./Trending";


function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="flex items-center justify-center sm:text-sm md:text-xl cursor-pointer absolute bottom-20 right-[30px] text-slate-900 text-4xl bg-emerald-400 rounded-[.5rem]"
    >
      <h1 className=" p-2 font-semibold">Swipe to slide</h1>
      <div className=" flex items-center justify-center sm:text-xl md:text-3xl pr-2">
        <ion-icon name="arrow-forward-outline"></ion-icon>
      </div>
    </div>
  );
}

const Hero = ({ url }) => {
  
  
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: true,
    nextArrow: <SampleNextArrow />,
    appendDots: (dots) => (
      <div className="">
        <h1 className="dots mb-8 "> {dots}</h1>
      </div>
    ),
  };

  const set = {
    dots: true,
    fade: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return <Loading />;
  }

  
  
 
  return (
    <>
     
      <div  className="mt-20">
      
        <Slider  {...settings} className=" mt-5 shadow-xl md:mx-auto w-full  ">
          {Images.map((items) => {
            return (
              <section className=" rounded-lg " key={items.id}>
                <img
                  className="h-[40rem]  xl:w-full  object-cover"
                  src={items.img}
                />
                <div  className="flex items-center justify-center">
                  <div className="absolute  md:top-[20%] sm:top-[30%] backdrop-blur-sm  bg-black/30 p-5 rounded-lg   ">
                    <h1 className="sm:text-xl md:text-4xl text-white font-bold">
                      {items.title}
                    </h1>
                    <p className="text-emerald-400 font-bold cursor-pointer md:text-2xl underline mb-5 mt-5">
                      {items.text}
                    </p>
                    <Link
                      to={url}
                      className="text-slate-800 font-bold md:text-2xl md:px-4 md:py-2 sm:px-2 sm:py-1 bg-emerald-400 text-center rounded-lg"
                    >
                      Travel Plan -
                    </Link>
                  </div>
                </div>
              </section>
            );
          })}
        </Slider>

        {/* TOURIST SPOT MANILA SECTION STARTS*/}

        <div className={`bg-[url("dotsbg4.svg")] bg-no-repeat`}>
          <div className={` mt-20 m-auto xl:w-[90%] `}>
            <h1 className="sm:text-center md:text-end mb-5 font-bold text-slate-900 md:text-4xl sm:text-2xl">
              Things to do around Intramuros
            </h1>

            <div className=" xxl:flex justify-between sm:p-3 md:p-7 items-center shadow-xl">
              <Slider {...set} className="xxl:w-[calc(250px*2)]  md:p-5 ">
                {Intramuros.map((tour) => {
                  return (
                    <section
                      className="border-4 border-slate-900 rounded-xl w-full "
                      key={tour.id}
                    >
                      <img 
                        className="object-cover w-full h-full rounded-xl"
                        src={tour.img}
                      />

                      <h1 className="font-bold rounded-[.2rem] text-center bg-slate-900 text-emerald-400 mt-1">
                        {tour.text}
                      </h1>
                    </section>
                  );
                })}
              </Slider>

              <div
                className={` bg-[url("wave-5.svg")] object-cover xl:w-[w-70%] xxl:w-[55%] p-10  sm:mt-16 md:mt-10 xl:mt-0  rounded-lg sm:w-[100%] overflow-hidden relative`}
              >
                <h1 className="font-bold text-4xl text-start text-emerald-400 ">
                  Intramuros
                </h1>

                <div className="flex flex-col justify-between items-center gap-5 ">
                  {IntramurosDetails.map((text) => {
                    return (
                      <div key={text.id}>
                        <p className="font-semibold text-base text-justify text-emerald-100 leading-9">
                          {text.details}
                        </p>
                        <p className="sm:hidden  font-semibold text-base text-justify text-emerald-100 leading-9 mt-5">
                          {text.details2}
                        </p>
                      </div>
                    );
                  })}

                  <div className="credits bg-emerald-400 xxxl:absolute bottom-10 p-1 cursor-pointer xxl:absolute right-[20px] bottom-0 rounded-[.2rem]">
                    <Link
                      to="/todolist"
                      className="flex justify-center items-center gap-2 font-semibold text-slate-900"
                    >
                      See more{" "}
                      <i className=" fa-solid fa-arrow-right-long "></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* TOURIST SPOT MANILA SECTION ENDS */}

            <div className={``}>
              <Prepare />
            </div>

            {/* EXPERIENCES SECTIONS*/}

            <section className="mx-auto w-[90%] mt-5 relative">
              <h1 className="font-semibold md:text-3xl sm:text-2xl text-slate-900">
                Amazing Experiences
              </h1>
              <main className="relative flex sm:flex-col sm:gap-2  md:flex md:flex-row items-center justify-center gap-2 mt-5">
                {Experiences.map((expe) => {
                  return (
                    <div key={expe.id} className="overflow-hidden relative ">
                      <div
                        className={`xl:w-full xl:h-80 sm:w-full sm:h-[350px] rounded-xl  overflow-hidden bg-gradient-to-r from-emerald-800 to-slate-500 to-[30%] relative `}
                      >
                        <img
                          className="w-full  h-full object-cover rounded-xl  mix-blend-overlay overflow-hidden "
                          src={expe.img}
                          alt={expe.id}
                        />
                      </div>

                      <div className="flex flex-col gap-5 items-start font-semibold sm:absolute md:absolute top-0 p-5 w-full h-full ">
                        <h1 className="sm:text-4xl md:text-3xl text-white ">
                          {expe.title}
                        </h1>
                        <p className="flex-1 sm:text-base text-white leading-8">
                          {expe.text}
                        </p>

                        <Link
                          to={expe.url}
                          className="px-5 py-2 bg-slate-900 text-emerald-400 focus:bg-emerald-400 focus:text-slate-900 rounded-xl shadow-xl "
                        >
                          See Activities
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </main>
              <div className="mt-5">
                <Discount />
              </div>

              <div className="mt-5">
                <TrendingDest />
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Hero;
