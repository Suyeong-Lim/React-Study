import React, { useContext } from "react";
import CartIcon from "./CartIcon";
import CartContext from "store/cart-context";
import S from "./HeaderCartButton.module.css";

const HeaderCartButton = ({ onClick }) => {
  const cartContext = useContext(CartContext);
  const numberOfCartItems = cartContext.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  return (
    <>
      <button className={S.button} onClick={onClick}>
        <span className={S.icon}>
          <CartIcon />
        </span>
        <span>장바구니</span>
        <span className={S.badge}>{numberOfCartItems}</span>
      </button>
    </>
  );
};

export default HeaderCartButton;
