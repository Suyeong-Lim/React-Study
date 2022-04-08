import Card from "components/UI/Card";
import Button from "components/UI/Button";
import React, { useState } from "react";
import classes from "./User.css";

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
    if (name.trim().length === 0 || age.trim().length === 0) {
      onValidCheck(true);
    }
    if (+age < 1) {
      console.log("npnp");
      init();
      return;
    } else {
      onSaveUserData(userData);
      init();
    }
  };

  return (
    <Card className={classes.input}>
      <form className="user-form" onSubmit={submitHandler}>
        <label htmlFor="username">
          <p>UserName</p>
          <input
            id="username"
            type="text"
            value={name}
            onChange={nameChangeHandler}
          />
        </label>
        <label htmlFor="age">
          <p>Age(Years)</p>
          <input
            id="age"
            type="number"
            value={age}
            onChange={ageChangeHandler}
          />
        </label>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default UserForm;
