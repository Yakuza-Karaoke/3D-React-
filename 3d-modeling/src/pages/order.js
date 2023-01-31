import React from "react";

import Header from "../components/header";
import Burger from "../components/burger-menu";
import Footer from "../components/footer";

export default function Order() {
  return (
    <div>
      <Header />
      <Burger name="Заказать услугу" />

      <p>
        Для заказа услуги просим вас сформировать запрос, имеющий следующую
        структуру:
      </p>
      <ul>
        <li>
          Тип услуги, который вам требуется(3D печать, 3D
          моделирование/сканирование, реверс инженеринг и т.д.);
        </li>
        <li>
          Исходные данные(оригинальная деталь, 3D модель, чертежи/эскизы, фото с
          размерами);
        </li>
        <li>Требования по материалу;</li>
        <li>Требуемое количество деталей;</li>
        <li>Срочность;</li>
        <li>Тип заказа(от частного лица/от юр. лица по счету);</li>
        <li>Прочие комментарии.</li>
      </ul>

      <p>К запросу прикрепить имеющиеся файлы:</p>
      <ul>
        <li>3D модели для печати(STL,3mf, OBJ);</li>
        <li>3D модели для редактирования и фрезеровки(STEP, SAT, F3D);</li>
        <li>Чертежи(PDF, DWG, DXF);</li>
        <li>И другие файлы при наличии.</li>
      </ul>
      <p>
        Сформированный запрос просим прислать на нашу почту в виде письма с
        прикреплёнными файлами.
      </p>

      <h1>Почта: 3d_one@mail.ru</h1>
      <p>
        В случае возникновения проблем с почтой, есть возможность связаться по
        whatsapp или мобильному телефону, указанному ниже, мы с удовольствием
        поможем вам решить вашу проблему и сориентируем по поводу возможности и
        условий выполненения заказа. Спасибо за внимание!
      </p>
      <h1>Контактный номер: 8(999)-237-55-98</h1>

      <Footer />
    </div>
  );
}