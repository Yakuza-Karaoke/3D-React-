import React from "react";

import plus from "../../icons/plus.png"
import globus from "../../icons/Globus.png"

export default function Pechat() {
  return (
    <div>
      <h1 style={{marginTop: "2rem"}}>Новости нашей студии</h1>

      <div className="square-block">
        <div
          style={{
            flexDirection: "column",
            marginTop: "2%",
            marginBottom: "2%",
            marginLeft: "6%",
          }}
        >
          <img src={plus} alt="plus" height="200px" />
          <p style={{ textAlign: "center", fontSize: "24px" }}>
            22.01.2023 <br />
            19:21
          </p>
        </div>
        <p style={{ marginTop: "9%", textAlign: "center", fontSize: "24px" }}>
          Была добавлена вкладка “Выбор материала для FDM печати”. Предлагаем
          ознакомиться с представленным материалом, чтобы иметь понимание
          назанчения разных типов материалов. <br />
          <br />
          Хорошего дня!
        </p>
      </div>

      <div
        className="square-block"
        style={{ marginTop: "3%", marginBottom: "60px" }}
      >
        <div
          style={{
            flexDirection: "column",
            marginBottom: "2%",
            marginLeft: "6%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={globus} alt="plus" height="200px" />
          <p style={{textAlign: "center", fontSize: "24px"}}>
            22.01.2023 <br />
            18:00
          </p>
        </div>
        <p style={{ marginTop: "9%", textAlign: "center", fontSize: "24px" }}>
          Мы запустили сайт! Спустя продолжительное время дизайна и разработки
          была представлена текущая версия сайта. В ней имеется много
          недоработок и косяков. При их выявлении или проблемах с использованием
          сайта просьба обратиться к нам на почту с соответсвущим запросом, для
          устранения неполадок и возникших неудобств. <br />
          <br />
          Приятного посещения и хорошего дня!
        </p>
      </div>
    </div>
  );
}
