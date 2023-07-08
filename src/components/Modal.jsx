import React, { Component } from "react";
import { Ads } from "./Ads";



export default class Modal extends Component {
  
  
  render() {
    return (
      <div   className="inset-0 fixed bg-slate-900 bg-opacity-80 flex items-center justify-center z-50">
        <div className="  xl:w-[700px] sm:h-[500px] xl:h-full flex flex-col bg-slate-900  p-5 relative overflow-auto ">
          <div
            onClick={this.props.hide}
            className={` flex justify-center items-center px-5 py-2 bg-slate-900 text-emerald-400 w-[5%] absolute right-0 top-0 cursor-pointer rounded-bl-[1rem] font-semibold text-xl`}
          >
            <i className="fa-solid fa-xmark"></i>
          </div>
          <div className="grid grid-cols-2 xl:grid-flow-row-dense gap-2 mb-5">
            <img
              className="w-full h-full object-cover col-span-2 "
              src={this.props.imgCity}
              alt={this.props.city}
            />

            <img
              className="w-full h-full object-cover sm:hidden xl:block "
              src={this.props.subImg}
              alt={this.props.city}
            />
            <img
              className="w-full h-full object-cover sm:hidden xl:block "
              src={this.props.subImg1}
              alt={this.props.city}
            />
          </div>

          <div className="border-t-2 border-emerald-900 pt-5 ">
            <h1 className="text-2xl font-semibold italic text-emerald-400 ">
              {this.props.city}
            </h1>

            <div className="flex items-center justify-between">
              <div className="text-emerald-400">
                <span>{this.props.price}</span>
                <p className="text-emerald-900 opacity-1000">
                  Instant Confirmation
                </p>
              </div>

              <div>
                <button className="sm:px-4 sm:py-2 sm:text-base md:px-5 md:py-2 border-2 border-emerald-400 text-emerald-400 focus:bg-emerald-400 focus:text-slate-900 font-semibold rounded-xl  bottom-2 right-10">
                  Book Now
                </button>
              </div>

             
            </div>

            <Ads />

            
          </div>
        </div>
      </div>
    );
  }
}
