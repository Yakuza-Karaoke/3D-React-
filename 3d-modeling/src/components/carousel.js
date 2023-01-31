import React from "react";
import { useState, useEffect } from "react";

import dataForm from "../components/data";

export default function Carousel() {
  const [data, setData] = useState(dataForm);
  const [slide, setSlide] = useState(1);
  const [moveX, setMoveX] = useState(0);
  const [moveContentX, setMoveContentX] = useState(0)
  const [pageWidth, setPageWidth] = useState(window.innerWidth);
  const [offset, setOffset] = useState(pageWidth * 0.95 * (0.25 + 0.066));

  useEffect(() => {
    document.getElementById(data[slide - 1].id).onclick = () => {
      if (slide === 1) {
        setSlide(5);
        setMoveX(-(offset * 4));
        setMoveContentX(-(95*4))
      } else {
        setSlide((prevSlide) => prevSlide - 1);
        setMoveX((prevMoveX) => prevMoveX + offset);
        setMoveContentX(prevMoveContentX => prevMoveContentX + 95)
      }
      document.getElementById(data[slide].id).classList.remove("main");
    };

    document.getElementById(data[slide].id).classList.add("main");

    document.getElementById(data[slide].id).onclick = null;

    document.getElementById(data[slide + 1].id).onclick = () => {
      if (slide === 5) {
        setSlide(1);
        setMoveX(0);
        setMoveContentX(0)
      } else {
        setSlide((prevSlide) => prevSlide + 1);
        setMoveX((prevMoveX) => prevMoveX - offset);
        setMoveContentX(prevMoveContentX => prevMoveContentX - 95)
      }

      document.getElementById(data[slide].id).classList.remove("main");
    };
  }, [slide]);

  return (
    <div className="window">
      <div className="gallery" style={{ transform: `translateX(${moveX}px)` }}>
        <figure id="0">
          <img src={data[0].image} alt="image"></img>
          <figcaption>{data[0].figcaption}</figcaption>
        </figure>
        <figure id="1">
          <img src={data[1].image} alt="image"></img>
          <figcaption>{data[1].figcaption}</figcaption>
        </figure>
        <figure id="2">
          <img src={data[2].image} alt="image"></img>
          <figcaption>{data[2].figcaption}</figcaption>
        </figure>
        <figure id="3">
          <img src={data[3].image} alt="image"></img>
          <figcaption>{data[3].figcaption}</figcaption>
        </figure>
        <figure id="4">
          <img src={data[4].image} alt="image"></img>
          <figcaption>{data[4].figcaption}</figcaption>
        </figure>
        <figure id="5">
          <img src={data[5].image} alt="image"></img>
          <figcaption>{data[5].figcaption}</figcaption>
        </figure>
        <figure id="6">
          <img src={data[6].image} alt="image"></img>
          <figcaption>{data[6].figcaption}</figcaption>
        </figure>
      </div>
      <span className="divider" />

      <div className="gallery-content" style={{transform: `translateX(${moveContentX}vw)`}}>
        <div>{data[1].content}</div>
        <div>{data[2].content}</div>
        <div>{data[3].content}</div>
      </div>
    </div>
  );
}
