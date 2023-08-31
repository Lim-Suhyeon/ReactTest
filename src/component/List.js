import React from "react";
import ListItem from "./ListItem";

function List(props) {
  const names = [
    {
      title: "1",
      text: "1내용",
    },
    {
      title: "2",
      text: "2내용",
    },
  ];
  return (
    <div className="guide_cont">
      <ul>
        <ListItem title={names.title} />
      </ul>
    </div>
  );
}

export default List;
