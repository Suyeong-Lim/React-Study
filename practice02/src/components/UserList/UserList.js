import Card from "components/UI/Card";
import React from "react";
import UserDetail from "./UserDetail";

const UserList = ({ users }) => {
  return (
    <Card>
      {users.map((user) => (
        <UserDetail user={user} />
      ))}
    </Card>
  );
};

export default UserList;
