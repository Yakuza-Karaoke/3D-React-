import React from "react";

import Header from "../components/header";
import Burger from "../components/burger-menu";
import Footer from "../components/footer";

import nylon from "../icons/nylon.png";
import exclamationMark from "../icons/Exclamation_mark.png";

export default function MaterialType() {
  return (
    <div>
      <Header />
      <Burger name="" />

      <div className="material">
        <section className="material-pla">
          <p>
            Если вы задаетесь вопросом: из какого материала лучше печатать свою
            деталь, то тут вы сможете найти ответ на этот вопрос.
          </p>
          <hr align="center" width="100%" color="black" size="5px" />
          <h1>PLA</h1>
          <p style={{ fontSize: "1.5rem" }}>
            Если оригинальная или планируемая деталь является декоративной или
            статической, но не подвержена нагрузкам, то идеальным решением будет
            PLA пластик, но данный пластик не рекомендуется использовать при
            прямых солнечных лучах(без покраски).
          </p>
        </section>

        <hr
          align="center"
          width="1439px"
          color="black"
          size="5px"
          style={{ margin: "0" }}
        />

        <section className="material-petg">
          <h1>PETG</h1>
          <div style={{ display: "flex" }}>
            <p>
              ABS: Технический пластик, отличающийся повышенной термостойкостью,
              и великолпеными возможностями постобработки. Данный пластик
              способен выдерживать температуру до 110 градусов. Прекрасно
              шкурится и поддается химической обработке. При уличной
              эксплуатации настоятельно рекомендуется покраска для устранения
              воздействия УФ излучения.
            </p>
            <div style={{ width: "834px" }}></div>
          </div>
        </section>

        <hr
          align="center"
          width="1439px"
          color="black"
          size="5px"
          style={{ margin: "0" }}
        />

        <section className="material-abs">
          <div style={{ maxWidth: "520px" }}>
            <h1>ABS</h1>
            <p>
              ABS: Технический пластик, отличающийся повышенной термостойкостью,
              и великолпеными возможностями постобработки. Данный пластик
              способен выдерживать температуру до 110 градусов. Прекрасно
              шкурится и поддается химической обработке. При уличной
              эксплуатации настоятельно рекомендуется покраска для устранения
              воздействия УФ излучения.
            </p>
          </div>
          <div style={{ width: "919px" }}></div>
        </section>

        <hr
          align="center"
          width="1439px"
          color="black"
          size="5px"
          style={{ margin: "0" }}
        />

        <section className="material-nylon">
          <img src={nylon} alt="Деталь из нейлона" />
          <div>
            <h1>Nylon</h1>
            <p>
              Nylon: Высокопрочный инженерный пластик, предназначенный для
              деталей и компонентов, испытвающих высокие нагрузки. Обладает
              высокими антифрикицонными характеристиками и велкиолпеными
              параметрами межслойной адгезии. Используется для шестерен, втулок
              трения и т.д.
            </p>
          </div>
        </section>

        <hr
          align="center"
          width="1439px"
          color="black"
          size="5px"
          style={{ margin: "0" }}
        />

        <section className="material-flex">
          <div style={{ maxWidth: "600px" }}>
            <h1>Flex</h1>
            <p>
              Flex: Эластичный полиуретановый пластик(резиноподобный), имеющий
              высокие показатели эластичности и межслойной адгезии, вследствие
              чего имеет высокую прочность на разрыв. Детали из данного пластика
              долговечны, не подвержены воздействию УФ излучения. Отлично
              подходит для печати демпферов, ножек, отбойников и т.д.
            </p>
          </div>
          <div style={{ width: "900px" }}></div>
        </section>

        <hr
          align="center"
          width="1439px"
          color="black"
          size="5px"
          style={{ margin: "0" }}
        />

        <section className="material-sbs">
          <div style={{ width: "940px" }}></div>
          <div style={{ maxWidth: "500px" }}>
            <h1>SBS</h1>
            <p>
              SBS(Whatson): технический пластик, характеризуемый высокими
              показателями светопропускания, относительной эластичностью и
              термостойкостью(сравнительно с PLA). Идеально подходит для печати
              плафонов кастомных светильников и рассеивателей для различных
              ламп.
            </p>
          </div>
        </section>

        <section className="material-other">
          <img
            src={exclamationMark}
            alt="Восклицательный знак"
            height="200px"
          />
          <p>
            Существует огромное множество пластиков, не рассмотренных на данной
            странице, например композиты(смешанные пластики), которые могут быть
            как армированные, так и имеющие особые свойства(водорастворимые,
            высокотемпературные). Наша студия работает с такими пластиками,
            вопросы использования этих пластиков обсуждаются индивидуально.
          </p>
          <img
            src={exclamationMark}
            alt="Восклицательный знак"
            height="200px"
          />
        </section>
      </div>

      <Footer />
    </div>
  );
}
