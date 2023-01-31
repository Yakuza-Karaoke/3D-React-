import React from "react";

import instagram from "../icons/instagram-svgrepo-com.svg";
import vk from "../icons/vk-svgrepo-com.svg";
import telegram from "../icons/telegram-svgrepo-com.svg";
import whatsapp from "../icons/whatsapp-svgrepo-com.svg";
import avito from "../icons/avito.png";

export default function Footer() {
  return (
    <div>
      <div style={{ marginTop: "60px" }}></div>
      <footer>
        <div>
          <a
            href="https://www.instagram.com/3d_layer_art?r=nametag"
            target="_blank"
          >
            <img src={instagram} />
          </a>
          <a href="https://vk.link/3d_one_print" target="_blank">
            <img src={vk} />
          </a>
          <a href="https://t.me/Nightmare_48" target="_blank">
            <img src={telegram} />
          </a>
          <a
            href="https://wa.me/79992375598?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82!%20%F0%9F%91%8B"
            target="_blank"
          >
            <img src={whatsapp} />
          </a>
          <a
            href="https://www.avito.ru/sankt-peterburg/predlozheniya_uslug/3d_modelirovanie_i_3d_pechatfdm_sla_slm_1968402173"
            target="_blank"
          >
            <img src={avito} style={{ paddingRight: "10px" }} />
          </a>
        </div>

        <p>
          3d_one@mail.ru
          <br />
          8(999)-237-55-98
        </p>
      </footer>
    </div>
  );
}
