import React from "react";

function ListItem(props) {
  return (
    <>
      <li>{props.title}, {props.list}</li>
    </>
  );
}

export default ListItem;
