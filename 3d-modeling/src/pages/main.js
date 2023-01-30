import React from "react";

import Header from "../components/header"
import Burger from "../components/burger-menu"
import Carousel from "../components/carousel";

export default function Main() {

  return (
  <div>
    <Header />
    <Burger /> 
    <h1>Основные направления наших услуг:</h1>
    <Carousel />
  </div>
  );
}
