import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Burger(props) {
  const icon = document.getElementById("nav-icon");
  const block = document.getElementById("nav-block");
  const navigate = useNavigate()

  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen((prevState) => !prevState);
    document.body.classList.toggle("scroll-lock");
  };

  useEffect(() => {
    if (!open) document.body.classList.remove("scroll-lock")
  }, [])

  const onServicePrize = () => {
    navigate("/service-prize")
  }
  const onOrder = () => {
    navigate("/order")
  }
  const onMaterialType = () => {
    navigate("/material-type")
  }

  return (
    <div>
      <div id="nav-icon" className={open ? "open" : ""} onClick={handleClick}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <h1 className="description">{props.name}</h1>
      <div id="nav-block" className={open ? "open" : ""}>
        <h1>Услуги</h1>

        <ul>
          <li>
            <a onClick={onServicePrize}>Как производится расчёт стоимости услуги?</a>
          </li>
          <li>
            <a onClick={onOrder}>Заказать услугу</a>
          </li>
        </ul>

        <h1>Консультация</h1>

        <ul>
          <li>
            <a onClick={onMaterialType}>Какие материалы для чего используются?</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
