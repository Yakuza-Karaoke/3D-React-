import React from "react";
import mont_obl from "../icons/Montazhnaya_oblast_1.svg";

export default function Header() {
  return (
    <header>
      <img src={mont_obl} alt="logo" class="logo" />
      <nav>
        <ul className="menu">
          <li>
            <a>На главную</a>
          </li>
          <li>
            <a >Сроки</a>
          </li>
          <li>
            <a>Гарантии</a>
          </li>
          <li>
            <a>Оплата и доставка </a>
          </li>
          <li>
            <a>Контакты</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
