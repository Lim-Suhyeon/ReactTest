import React from "react";
import List from "../component/List";

function ListGuide() {
  const dataList = [
    { name: "김철수", age: "20" },
    { name: "김영희", age: "21" },
    { name: "매머드", age: "22" },
  ];

  return (
    <div className="guide_cont">
      <h2 className="guide_h2">List</h2>
      <List dataList={dataList} />
    </div>
  );
}
export default ListGuide;
