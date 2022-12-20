import React from "react";

const UserContext = React.createContext({
  users: [],
  usersFiltered: [],
  setUsersFiltered: () => {},
  createUser: () => {},
  deleteUser: () => {},
  updateUser: () => {},
});

export default UserContext;
