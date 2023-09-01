import React from "react";
import ListItem from "./ListItem";

function List(props) {
  const $li = props.dataList;
  const dataLists = $li.map((data,idx) => (
    <ListItem {...data} />
  ));

  return (
    <>
      <ul className="list_bul">{dataLists}</ul>
    </>
  );
}

export default List;
