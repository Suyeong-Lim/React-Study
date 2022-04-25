import React from "react";
import CartIcon from "./CartIcon";

import S from "./HeaderCartButton.module.css";

const HeaderCartButton = () => {
  return (
    <>
      <button className={S.button}>
        <span className={S.icon}>
          <CartIcon />
        </span>
        <span>장바구니</span>
        <span className={S.badge}>3</span>
      </button>
    </>
  );
};

export default HeaderCartButton;
