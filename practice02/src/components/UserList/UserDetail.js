import React from "react";
import "./UserDetail.css";

const UserDetail = ({ user }) => {
  return (
    <div className="Wrapper">
      <div className="list">
        <div className="list-box">
          <p>
            {user.name} {user.age}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
