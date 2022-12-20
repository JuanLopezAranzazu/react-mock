import React, { useState } from "react";
// context
import UserContext from "./UserContext";
import JSONDATA from "./../MOCK_DATA.json";

const UserContextProvider = (props) => {
  const [users, setUsers] = useState(JSONDATA);
  const [usersFiltered, setUsersFiltered] = useState([]);

  const createUser = (first_name, last_name, email, gender, ip_address) => {
    const dataForUser = {
      id: Math.max(...users.map((item) => item.id)) + 1,
      first_name,
      last_name,
      email,
      gender,
      ip_address,
    };
    setUsers((current) => {
      return [...current, dataForUser];
    });
  };

  const deleteUser = (id) => {
    setUsers(users.filter((item) => item.id !== id));
  };

  const updateUser = (id, first_name, last_name, email, gender, ip_address) => {
    setUsers((current) => {
      const updatedUsers = [...current];
      const selectedIndex = users.findIndex((item) => item.id === id);
      const updatedUser = { first_name, last_name, email, gender, ip_address };
      updatedUsers[selectedIndex] = updatedUser;
      return updatedUsers;
    });
  };

  const userContext = {
    users,
    usersFiltered,
    setUsersFiltered,
    createUser,
    deleteUser,
    updateUser,
  };

  return (
    <UserContext.Provider value={userContext}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
