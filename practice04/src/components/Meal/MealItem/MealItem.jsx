import React, { useContext } from "react";
import CartContext from "store/cart-context";
import S from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = ({ key, meal }) => {
  const Realprice = `$${meal.price.toFixed(2)}`;
  const cartContext = useContext(CartContext);

  const addCart = (amount) => {
    //새로운 객체
    cartContext.addItem({
      id: meal.id,
      name: meal.name,
      amount: amount,
      price: meal.price,
    });
    console.log(amount);
  };

  return (
    <li className={S.meal}>
      <div>
        <h3>{meal.name}</h3>
        <div className={S.description}>{meal.description}</div>
        <div className={S.price}>{Realprice}</div>
      </div>
      <div>
        <MealItemForm onAdd={addCart} />
      </div>
    </li>
  );
};

export default MealItem;
