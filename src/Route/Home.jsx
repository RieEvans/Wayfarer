import React from "react";
import Navbar from "../components/Navbar";
import  Hero from "../components/Hero";
import Footer from "../components/HomeFooter";
import { Images } from "../components/DataImages";
import { Intramuros } from "../Intramuros/Intramuros";


const Home = () => {
  return (
    <>
      
      <Hero  url = "/" key={Intramuros.id}/>
   
    </>
  );
};

export default Home;
