import React from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/header";
import Burger from "../components/burger-menu";
import Footer from "../components/footer";

export default function Guarantee() {
  const navigate = useNavigate();

  const onServicePrize = () => {
    navigate("/service-prize");
  };
  return (
    <div>
      <Header />
      <Burger name="Гарантии на наши услуги" />

      <p style={{ paddingTop: "30px" }}>
        На нашу услуги действует гарантия надежной работы и качества(при
        правильной эксплуатации). Если ваше изделие не подошло или сломалось
        спустя короткое время работы, то мы предоставим вам новую деталь и
        продумаем почему так произошло, либо вернем деньги.
        <br />
        <br />
      </p>

      <h1>Гарантии на услуги по категориям:</h1>

      <ol>
        <li>FDM 3D печать: гарантия на изделия из обычных пластиков(PETG, PLA,
        SBS) составляет пол года, гарантия на изделия из инженерных
        пластиков(Neylon, ABS Carbon) составляет 1 год.</li>
        <li>SLA 3D печать: гарантия на изделия из фотополимерной смолы составляет
        3 месяца.</li>
        <li>SLM 3D печать: гарантия на изделия из титанового сплава Ti64
        составляет 1 год.</li>
      </ol>

      <div className="flex-p-guarantee">
        <button className="btn-p-guarantee" onClick={onServicePrize}>
          Рассчитать стоимость изготовления
        </button>
      </div>

      <Footer />
    </div>
  );
}
