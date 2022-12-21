import React from "react";
import "./User.css";

const User = (props) => {
  const { id, first_name } = props.data;

  return (
    <div className={props.filtered.includes(id) ? "user user-checked" : "user"}>
      <p>{first_name}</p>
      <input
        style={{ width: "30px", height: "30px" }}
        value={id}
        type="checkbox"
        checked={props.filtered.includes(id)}
        onChange={props.handleCheck}
      />
    </div>
  );
};

export default User;
