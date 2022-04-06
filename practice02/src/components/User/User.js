import Modal from "components/Modal/Modal";
import React from "react";
import { useState } from "react";
import "./User.css";
import UserForm from "./UserForm";

const User = ({ addUserData }) => {
  const [isvalid, setValid] = useState(false);

  const saveUserDataHandler = (enteredUserData) => {
    const userData = {
      ...enteredUserData,
      id: Math.random().toString(),
    };
    addUserData(userData);
  };

  const validCheckHandler = (valid) => {
    if (valid) {
      setValid(true);
    } else {
      setValid(false);
    }
  };

  const validHandler = () => {
    setValid(!isvalid);
  };

  return (
    <div>
      {isvalid === true && <Modal onValidClick={validHandler} />}
      <UserForm
        onSaveUserData={saveUserDataHandler}
        onValidCheck={validCheckHandler}
      />
    </div>
  );
};

export default User;
