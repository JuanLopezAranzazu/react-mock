import React, { useState } from "react";
import "./App.css";
import JSONDATA from "./MOCK_DATA.json";
// components
import User from "./components/User/User";

const App = () => {
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

  return (
    <div className="app">
      <div className="search">
        <div className="content-search">
          <input
            type="text"
            placeholder="Search..."
            onChange={(event) => setSearch(event.target.value)}
          />
          <button
            className="btn btn-primary"
            onClick={() => {
              if (!selected) {
                const updatedList = JSONDATA.map((item) => item.id);
                setFiltered(updatedList);
                setSelected(true);
              } else {
                setFiltered([]);
                setSelected(false);
              }
            }}
          >
            {selected ? "Selected All" : "No selected"}
          </button>
        </div>
      </div>
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

export default App;
