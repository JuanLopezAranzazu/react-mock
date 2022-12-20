import React from "react";
import "./User.css";

const User = (props) => {
  const { id, first_name, last_name } = props.data;

  const isChecked = () => {
    const index = props.filtered.findIndex((item) => item === id);
    return index > -1;
  };

  return (
    <div className={isChecked() ? "user user-checked" : "user"}>
      <p>
        {first_name} {last_name}
      </p>
      <input
        style={{ width: "30px", height: "30px" }}
        value={id}
        type="checkbox"
        checked={isChecked()}
        onChange={props.handleCheck}
      />
    </div>
  );
};

export default User;
