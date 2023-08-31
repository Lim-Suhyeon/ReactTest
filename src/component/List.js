import React from "react";
import ListItem from "./ListItem";

function List(props) {
  const names = props.dataList;
  const nameList = names.map((data) => (
    <ListItem name={data.name} age={data.age} />
  ));

  return (
    <div className="guide_cont">
      <ul>{nameList}</ul>
    </div>
  );
}

export default List;
