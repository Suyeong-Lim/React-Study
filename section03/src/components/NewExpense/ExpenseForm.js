import React, { useState } from "react";

const ExpenseForm = () => {
  const [input, setInput] = useState({
    title: "",
    amount: 0,
    date: "",
  });
  const inputChangeHandler = (e) => {
    let userInput = e.target.value;
    setInput({
      ...input,
      [e.target.name]: userInput,
    });
    // setInput((prev) => {
    //   return { ...prev, title: userInput };
    // });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let init = "";
    const expenseData = {
      title: input.title,
      amount: input.amount,
      date: new Date(),
    };
    setInput({
      [e.target.name]: init,
    });

    console.log(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <div>
          <label>Title</label>
          <input
            type="text"
            name="title"
            onChange={inputChangeHandler}
            value={input.title}
          />
        </div>
        <div>
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            min="0.01"
            step="0.01"
            value={input.amount}
            onChange={inputChangeHandler}
          />
        </div>
        <div>
          <label>Date</label>
          <input
            type="date"
            name="date"
            min="2019-01-01"
            max="2022-12-31"
            value={input.date}
            onChange={inputChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
