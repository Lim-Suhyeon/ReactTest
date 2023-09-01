import React from "react";

function ListItem(props) {
  const lableBox = props.label;
  const labelList = lableBox.map((data) => (
    <span>{data}</span>
  ));
  return (
    <>
      <li>
        <div>{labelList}</div>
        {props.name}, {props.date}
      </li>
    </>
  );
}

export default ListItem;