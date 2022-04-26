import Modal from "components/UI/Modal";
import React, { useContext } from "react";
import CartContext from "store/cart-context";
import CartItem from "./CartItem";
import S from "./Cart.module.css";

const Cart = ({ onClose }) => {
  const cartContext = useContext(CartContext);
  const totalAmount = `${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;

  const cardItemAddHandler = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };

  const cardItemRemoveHandler = (id) => {
    cartContext.deleteItem(id);
  };

  const cartItems = (
    <ul className={S["cart-items"]}>
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cardItemRemoveHandler.bind(null, item.id)}
          onAdd={cardItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={onClose}>
      {cartItems}
      <div className={S.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>

      <div className={S.actions}>
        <button className={S["button--alt"]} onClick={onClose}>
          Close
        </button>
        {hasItems && <button className={S.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
