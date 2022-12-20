import React, { useState } from "react";
import "./Home.css";
import JSONDATA from "./../../MOCK_DATA.json";
// components
import User from "./../../components/User/User";
import Header from "./../../components/Header/Header";

const Home = () => {
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(false);

  const handleCheck = (event) => {
    let updatedList = [...filtered];
    if (event.target.checked) {
      updatedList = [...filtered, Number(event.target.value)];
    } else {
      updatedList.splice(filtered.indexOf(Number(event.target.value)), 1);
    }
    console.log(updatedList);
    setFiltered(updatedList);
  };

  const getItem = (id) => {
    return JSONDATA.find((item) => item.id === id);
  };

  const handleClick = () => {
    let updatedList = [];
    if (!selected) {
      updatedList = JSONDATA.map((item) => item.id);
    }
    console.log(updatedList);
    setFiltered(updatedList);
    setSelected(!selected);
  };

  return (
    <div className="home">
      <Header
        handleClick={handleClick}
        selected={selected}
        setSearch={setSearch}
      />
      <div className="data">
        {JSONDATA.filter((item) => {
          if (search === "") {
            return item;
          } else if (
            item.first_name.toLowerCase().includes(search.toLowerCase())
          ) {
            return item;
          }
        }).map((item) => {
          return (
            <User
              data={item}
              key={item.id}
              handleCheck={handleCheck}
              filtered={filtered}
            />
          );
        })}
      </div>
      <h1>Filtered data</h1>
      <div className="filtered">
        {filtered.map((item) => {
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

export default Home;
