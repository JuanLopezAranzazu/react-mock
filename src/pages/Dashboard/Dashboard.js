import React, { useState } from "react";
import "./Dashboard.css";
import JSONDATA from "./../../MOCK_DATA.json";
// components
import Modal from "../../components/Modal/Modal";

const Dashboard = () => {
  // modal
  const [isOpen, setIsOpen] = useState(false);
  const [filtered, setFiltered] = useState([]);

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
    const dataFiltered = filtered.map((item) => {
      return getItem(item);
    });
    setIsOpen(false);
    console.log(dataFiltered);
  };

  const ListView = () => {
    return (
      <div className="body-modal">
        {JSONDATA.map((item) => {
          return (
            <div className="row-modal" key={item.id}>
              <p>{item.first_name}</p>
              <input
                style={{ width: "30px", height: "30px" }}
                value={item.id}
                type="checkbox"
                checked={filtered.includes(item.id)}
                onChange={handleCheck}
              />
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="dashboard">
      <div className="options">
        <button className="btn btn-primary" onClick={() => setIsOpen(true)}>
          Modal
        </button>
      </div>
      {isOpen && (
        <Modal text="Modal" setIsOpen={setIsOpen} handleClick={handleClick}>
          <ListView />
        </Modal>
      )}
    </div>
  );
};

export default Dashboard;
