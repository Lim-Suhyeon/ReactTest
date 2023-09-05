import React from "react";
import List from "../component/List";

function ListGuide() {
  const dataList = [
    { id:"listId01", name: "김철수", date: "23.01.01", text:'긴글 입력하는 곳', label: ["고위험", "중위험"] },
    { id:"listId02", name: "김영희", date: "23.01.01", text:'긴글 입력하는 곳', label: ["저위험"] },
    { id:"listId03", name: "매머드", date: "23.01.01", label: ["저위험", "기본값"] },
  ];

  return (
    <div className="guide_cont">
      <h2 className="guide_h2">List</h2>
      <List dataList={dataList} />
    </div>
  );
}
export default ListGuide;
