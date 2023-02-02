import React from "react";

import plus from "../../icons/plus.png"
import globus from "../../icons/Globus.png"

export default function Pechat() {
  return (
    <div>
      <h1 style={{marginTop: "2rem"}}>Новости нашей студии</h1>

      <span className="square-block">
        <figure>
          <img src={plus} alt="plus" height="150px" />
          <figcaption>
            22.01.2023 <br />
            19:21
          </figcaption>
        </figure>
        <p>
          Была добавлена вкладка “Выбор материала для FDM печати”. Предлагаем
          ознакомиться с представленным материалом, чтобы иметь понимание
          назанчения разных типов материалов. <br />
          <br />
          Хорошего дня!
        </p>
      </span>

      <span
        className="square-block"
        style={{ marginTop: "3%", marginBottom: "60px" }}
      >
        <figure>
          <img src={globus} alt="plus" height="150px" />
          <figcaption>
            22.01.2023 <br />
            18:00
          </figcaption>
        </figure>
        <p>
          Мы запустили сайт! Спустя продолжительное время дизайна и разработки
          была представлена текущая версия сайта. В ней имеется много
          недоработок и косяков. При их выявлении или проблемах с использованием
          сайта просьба обратиться к нам на почту с соответсвущим запросом, для
          устранения неполадок и возникших неудобств. <br />
          <br />
          Приятного посещения и хорошего дня!
        </p>
      </span>
    </div>
  );
}
