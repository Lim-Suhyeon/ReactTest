import React from "react";

function ListItem(props) {
  return (
    <>
      <li>
        <div>{props.label}</div>
        {props.name}, {props.date}
      </li>
    </>
  );
}

export default ListItem;
