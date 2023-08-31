import React, { useState } from "react";
import ListItem from "./ListItem";

function List(props) {
  const MENU_LIST = [
    { title: "TAMS", list: ["Users", "Wallets"] },
    { title: "Jupiter", list: ["Create", "Read", "Update", "Delete"] },
  ];
  return (
    <div className="guide_cont">
      <ul>
        {MENU_LIST.map((item, idx) => {
          return (
            // 1단 메뉴 부분
            // ListItem 하나 하나가 <li>이다
            <ListItem title={item.title} idx={idx} list={item.list} />
          );
        })}
      </ul>
    </div>
  );
}

export default List;
