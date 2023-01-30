import React from "react";
import { useState } from "react";

export default function Burger() {
  const icon = document.getElementById("nav-icon");
  const block = document.getElementById("nav-block");

  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen((prevState) => !prevState);
    document.body.classList.toggle("scroll-lock");
  };

  return (
    <div>
      <div id="nav-icon" className={open ? "open" : ""} onClick={handleClick}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <h1 className="description">Главная</h1>
      <div id="nav-block" className={open ? "open" : ""}>
        <h1>Услуги</h1>

        <ul>
          <li>
            <a>Расчитать стоимость услуги</a>
          </li>
          <li>
            <a>Заказать услугу</a>
          </li>
        </ul>

        <h1>Консультация</h1>

        <ul>
          <li>
            <a>Какие материалы для чего используются?</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
