import React from "react";

import Header from "../components/header";
import Burger from "../components/burger-menu";
import Footer from "../components/footer";

import map from "../icons/map.png"

export default function Contacts() {
  return (
    <div>
      <Header />
      <Burger name="Контактная информация" />

      <p style={{paddingTop: "30px"}}>
        Почтовый адрес для коммерческих обращений, пожеланий по печати,
        индивидуальных запросов и вопросов совместной работы:
      </p>
      <h1 style={{color: "red"}}>3d_one@mail.ru</h1>

      <p>
        Вопросы сотрудничества, коммерческие предлоджения, уточнение деталей
        заказов и т.д.
      </p>
      <h1 style={{color: "red"}}>8(999)-237-55-98</h1>

      <h1 style={{fontWeight: "bold"}}>Как нас найти?</h1>
      <p style={{textAlign: "center", fontSize: "36px"}}>
        Основной адрес студии: г. Санкт - Петербург, ул. Маршала Говорова, д.
        29, лит. Л
      </p>

      <div className="flex">
        <p style={{paddingLeft: 0, width: "45%"}}>Ссылка на яндекс карты:</p>
        <div class="map map-yandex">
          <a href="https://yandex.ru/maps/-/CCUzJPaPKA" target="_blank">
            Яндекс
          </a>
        </div>
      </div>
      <div className="flex">
        <p style={{paddingLeft: "0", width: "45%"}}>Ссылка на Google карты:</p>
        <div class="map map-google">
          <a href="https://goo.gl/maps/cSAKqDHxdeArUXpS8" target="_blank">
            Google
          </a>
        </div>
      </div>

      <img
        src={map}
        alt="Карта"
        style={{display: "block", marginLeft: "auto", marginRight: "auto"}}
      />
      <h1 style={{marginBottom: "50px"}}>
        При заезде на машине необходимо взять бесплатный билет на стойке
        шлакбаума(действует 2 часа).
      </h1>

      <Footer />
    </div>
  );
}
