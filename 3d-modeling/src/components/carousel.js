import React from "react";
import { useState, useEffect } from "react";

import dataForm from "../components/data";

export default function Carousel() {
  const [data, setData] = useState(dataForm);
  const [slide, setSlide] = useState(1);
  const [moveX, setMoveX] = useState(0)



  const handleLeftClick = () => {
    if (slide === 1) setSlide(5);
    else setSlide((prevSlide) => prevSlide - 1);
    setMoveX()
  };

  const handleRightClick = () => {
    if (slide === 5) setSlide(1);
    else setSlide((prevSlide) => prevSlide + 1);
    setMoveX()
  };

  return (
    <div>
      <div className="gallery">
        <figure onClick={handleLeftClick} style={{transform: `translateX(${moveX}px)`}}>
          <img src={data[slide - 1].image} alt="image" />
          <figcaption>{data[slide - 1].figcaption}</figcaption>
        </figure>

        <figure id="main-figure" style={{transform: `translateX(${moveX}px)`}}>
          <img src={data[slide].image} alt="image" />
          <figcaption>{data[slide].figcaption}</figcaption>
        </figure>

        <figure onClick={handleRightClick} style={{transform: `translateX(${moveX}px)`}}>
          <img src={data[slide + 1].image} alt="image" />
          <figcaption>{data[slide + 1].figcaption}</figcaption>
        </figure>
      </div>

      <div className="new-line"></div>

      <hr align="center" color="black" width="90%"></hr>

      {data[slide].content}
      {/* <div class="gallery">
            <figure>
                <img src={} alt="Ремонт принтера" />
                <figcaption>Обслуживание и ремонт 3Д принтеров</figcaption>
            </figure>

            <figure id="main-figure">
                <img src={} alt="Сканирование" />
                <figcaption>3Д сканирование и реверс инженеринг</figcaption>
            </figure>

            <figure>
                <img src={} alt="Примеры моделей" />
                <figcaption>3Д печать по готовым моделям</figcaption>
            </figure>
            <br />
        </div>

        <div className="new-line"></div>

        <hr align="center" color="black" width="90%" size="1rem"></hr> */}
    </div>
  );
}
