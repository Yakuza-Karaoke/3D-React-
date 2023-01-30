import React from "react";

import ex1 from "../../icons/frez-ex1.jpg"
import ex2 from "../../icons/frez-ex2.jpg"

export default function Frez() {
  return (
    <div>
      <p>
        Компания 3D One также предоставляет услуги по фрезерной обработке
        различных пород дерева. Высокое качество обработки позволяет выполнять
        фрезеровку как различных APT-объектов, так и технических деталей и
        креплений.
      </p>

      <div className="example-photos">
        <img src={ex1} />
        <img src={ex2} />
      </div>
    </div>
  );
}
