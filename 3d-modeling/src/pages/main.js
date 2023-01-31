import React from "react";

import Header from "../components/header"
import Burger from "../components/burger-menu"
import Carousel from "../components/carousel";
import Footer from "../components/footer"

export default function Main() {

  return (
  <div>
    <Header />
    <Burger name="Главная" /> 
    <h1>Основные направления наших услуг:</h1>
    <Carousel />
    <Footer />
  </div>
  );
}
