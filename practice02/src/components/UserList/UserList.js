import React from "react";
import UserDetail from "./UserDetail";

const UserList = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <UserDetail user={user} />
      ))}
    </div>
  );
};

export default UserList;
