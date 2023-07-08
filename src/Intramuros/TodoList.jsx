import React, { useEffect, useState } from "react";
import { ToDoNav } from "./ToDoNav";
import Footer from "../components/HomeFooter";
import { CafeData } from "./CafeData";
import { Locate } from "./Location";
import { Loading } from "../Route/Loading";

const TodoList = () => {
  const [heart, setHeart] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    },1000)
  },[])

  if (loading) {
    return (
      <div>
          <Loading />  
      </div>
    )
  }

  return (
    <>
      
      <div className=" mx-auto w-[90%]  relative z-0 ">
        <h1 className="text-center font-semibold p-1  text-2xl italic mb-5 ">
          Best La Cathedral Cafe
        </h1>
        <div className=" text-slate-900">
          <h1 className="font-semibold sm:text-[.7rem] md:text-xl px-3 text-start  ">
            These Café's Gives You a Stunning View of the Manila Cathedral
          </h1>
        </div>
      
        <div className="p-2 gap-2 grid sm:grid-cols-2 xl:grid-cols-4 flex items-center justify-center overflow-hidden ">
          {CafeData.map((data, hearted) => {
            const clicked = heart.includes(hearted);
            return (
              <main key={data.id} className="relative overflow-hidden">
                <div className="overflow-hidden rounded-[1rem]">
                  <img
                    className=" sm:w-[calc(100px*3)] md:w-[calc(100px*4)] rounded-[1rem] hover:cursor-pointer hover:scale-110 duration-500 "
                    src={data.img}
                    alt=""
                    onDoubleClick={() => setHeart([...heart, hearted])}
                  />
                </div>
                <span
                  onClick={() => setHeart([...heart, hearted])}
                  className={`bg-slate-900 text-emerald-400 flex items-center justify-center w-10 p-2 rounded-[.5rem] cursor-pointer absolute top-[5px] sm:right-[10px] md:right-[25px] overflow-hidden text-2xl `}
                >
                  <i className={clicked ? data.solidHeart : data.heart}></i>
                </span>
                <section className="  absolute text-3xl backdrop-sepia backdrop-blur-sm bottom-[3%] sm:right-[25%] flex items-center justify-center md:w-[45%] md:left-[35%] rounded-[1rem]  px-2   z-50">
                  <h2 className="text-emerald-400 sm:text-xl md:text-3xl font-semibold">
                    {data.title}
                  </h2>
                </section>
              </main>
            );
          })}
        </div>

        <Locate />
      </div>

      <Footer />
    </>
  );
};

export default TodoList;
