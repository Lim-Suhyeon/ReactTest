import React from "react";
import ListItem from "./ListItem";

function List(props) {
  const names = props.dataList;
  const dataLists = names.map((data) => (
    <ListItem name={data.name} date={data.date} label={data.label} />
  ));

  return (
    <>
      <ul className="list_bul">{dataLists}</ul>
    </>
  );
}

export default List;
