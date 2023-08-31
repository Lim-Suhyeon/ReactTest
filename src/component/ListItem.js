import React from "react";

function ListItem(props) {
  return (
    <>
      {props.map((names) => (
        <li>
          <div>{props.tit}</div>
          <div>{props.txt}</div>
        </li>
      ))}
    </>
  );
}

export default ListItem;
