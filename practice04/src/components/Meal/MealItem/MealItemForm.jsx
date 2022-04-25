import Input from "components/UI/Input";
import React from "react";
import S from "./MealItemForm.module.css";

const MealItemForm = () => {
  return (
    <form className={S.form}>
      <Input
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
