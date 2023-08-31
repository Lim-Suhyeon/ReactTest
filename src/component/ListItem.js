import React from "react";

function ListItem(props) {
  return (
    <>
      <li>
        {props.name}, {props.date}
      </li>
    </>
  );
}

export default ListItem;
