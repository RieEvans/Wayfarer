import React from "react";
import  Hero from "../components/Hero";
import { Intramuros } from "../Intramuros/Intramuros";


const Home = () => {
  return (
    <>
      
      <Hero  url = "/" key={Intramuros.id}/>
   
    </>
  );
};

export default Home;
