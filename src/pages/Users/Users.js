import React, { useContext, useState } from "react";
import "./Users.css";
// context
import UserContext from "./../../data/UserContext";
// components
import Header from "./../../components/Header/Header";
import User from "./../../components/User/User";

const Users = () => {
  const [search, setSearch] = useState("");
  const userContext = useContext(UserContext);
  const { usersFiltered, setUsersFiltered, users } = userContext;

  const handleCheck = (event) => {
    let updatedList = [...usersFiltered];
    if (event.target.checked) {
      updatedList = [...usersFiltered, Number(event.target.value)];
    } else {
      updatedList.splice(usersFiltered.indexOf(Number(event.target.value)), 1);
    }
    console.log(updatedList);
    setUsersFiltered(updatedList);
  };

  const getItem = (id) => {
    return users.find((item) => item.id === id);
  };

  return (
    <div className="users">
      <Header setSearch={setSearch} />
      <div className="data">
        {users
          .filter((item) => {
            if (search === "") {
              return item;
            } else if (
              item.first_name.toLowerCase().includes(search.toLowerCase())
            ) {
              return item;
            }
          })
          .map((item) => {
            return (
              <User
                data={item}
                key={item.id}
                filtered={usersFiltered}
                handleCheck={handleCheck}
              />
            );
          })}
      </div>
      <h1>Filtered data</h1>
      <div className="filtered">
        {usersFiltered.map((item) => {
          return (
            <div className="checked" key={item}>
              <p>
                {getItem(item).first_name} {getItem(item).last_name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
