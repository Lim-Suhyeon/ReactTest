import React from "react";

function ListItem(props) {
  return (
    <>
      <li>
        {props.name}, {props.age}
      </li>
    </>
  );
}

export default ListItem;
