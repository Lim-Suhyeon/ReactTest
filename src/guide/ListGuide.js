import React from "react";
import List from "../component/List";

function ListGuide() {
  const dataList = [
    { name: "김철수", date: "23.01.01", label: ["고위험", "중위험"] },
    { name: "김영희", date: "23.01.01", label: ["고위험", "저위험"] },
    { name: "매머드", date: "23.01.01", label: ["중위험", "기본값"] },
  ];

  return (
    <div className="guide_cont">
      <h2 className="guide_h2">List</h2>
      <List dataList={dataList} />
    </div>
  );
}
export default ListGuide;
