import React, { useState } from "react";
import "./User.css";
const UserForm = ({ onSaveUserData, onValidCheck }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  };

  const init = () => {
    setName("");
    setAge("");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const userData = {
      name,
      age,
    };

    if (userData.name === "" || userData.age === "") {
      onValidCheck(true);
    } else {
      onSaveUserData(userData);
      init();
    }
  };

  return (
    <div className="Wrapper">
      <form className="user-form" onSubmit={submitHandler}>
        <label>
          <p>UserName</p>
          <input type="text" value={name} onChange={nameChangeHandler} />
        </label>
        <label>
          <p>Age(Years)</p>
          <input type="number" value={age} onChange={ageChangeHandler} />
        </label>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default UserForm;
