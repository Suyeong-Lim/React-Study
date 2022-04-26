import React from "react";

import mealsImage from "../../assets/meals.jpg";
import S from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = ({ onClick }) => {
  return (
    <>
      <header className={S.header}>
        <h1>델리샤스</h1>
        <HeaderCartButton onClick={onClick} />
      </header>
      <div className={S["main-image"]}>
        <img src={mealsImage} alt="food" />
      </div>
    </>
  );
};

export default Header;
