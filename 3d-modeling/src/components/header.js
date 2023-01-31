import React from "react";
import { useNavigate } from "react-router-dom"
import mont_obl from "../icons/Montazhnaya_oblast_1.svg";

export default function Header() {
  const navigate = useNavigate()

  const onMain = () => {
    navigate("/")
  }
  const onDeadlines = () => {
    navigate("/deadlines")
  }
  const onGuarantee = () => {
    navigate("/guarantee")
  }
  const onOrder = () => {
    navigate("/order")
  }
  const onContacts = () => {
    navigate("/contacts")
  }
  return (
    <header>
      <img src={mont_obl} alt="logo" class="logo" />
      <nav>
        <ul className="menu">
          <li>
            <a onClick={onMain}>На главную</a>
          </li>
          <li>
            <a onClick={onDeadlines}>Сроки</a>
          </li>
          <li>
            <a onClick={onGuarantee}>Гарантии</a>
          </li>
          <li>
            <a onClick={onOrder}>Заказ услуги </a>
          </li>
          <li>
            <a onClick={onContacts}>Контакты</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
