import React, { useState } from "react";
import "./ExpenseFilter.css";
const ExpenseFilter = ({ onChangeFilter, selected }) => {
  const handleDropDown = (e) => {
    const value = e.target.value;
    onChangeFilter(value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={selected} onChange={handleDropDown}>
          <option>2022</option>
          <option>2021</option>
          <option>2020</option>
          <option>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
