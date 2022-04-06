import UserList from "components/UserList/UserList";
import { useState } from "react";
import User from "./components/User/User";

function App() {
  const [userData, setUserData] = useState([]);

  const addUserData = (newUserData) => {
    setUserData((prevUserData) => [newUserData, ...prevUserData]);
  };

  return (
    <div>
      <User addUserData={addUserData} />
      <UserList users={userData} />
    </div>
  );
}

export default App;
