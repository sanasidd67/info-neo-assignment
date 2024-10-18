import React from "react";
import Header from "../../components/header/index";
import HeroCrausel from "../../components/carousel/index";
import Cards from "../../components/cards/index";
import Swiper from "../../components/swiper/index";
import Footer from "../../components/footer/index";
import Graph from "../../components/graph/index";
import CardSlider from "../../components/cardSlider/index";



function UncontrolledExample() {
  return (
    <>
 <Header/>
  <HeroCrausel/>
  <Cards/>
  <Graph/>
  <CardSlider/>
  <Swiper/>
  <Footer/>

    </>
  );
}

export default UncontrolledExample;


