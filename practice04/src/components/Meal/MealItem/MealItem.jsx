import React from "react";
import S from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = ({ key, meal }) => {
  const Realprice = `$${meal.price.toFixed(2)}`;
  return (
    <li className={S.meal}>
      <div>
        <h3>{meal.name}</h3>
        <div className={S.description}>{meal.description}</div>
        <div className={S.price}>{Realprice}</div>
      </div>
      <div>
        <MealItemForm />
      </div>
    </li>
  );
};

export default MealItem;
