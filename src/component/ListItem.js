import React from "react";

function ListItem(props) {
  const lableBox = props.label;
  const labelList = lableBox.map((label, idx) => {
    let $class;
    switch (label) {
      case "고위험":
        $class = "red";
        break;
      case "중위험":
        $class = "orange";
        break;
      case "저위험":
        $class = "green";
        break;
      default:
        $class = "blue";
    }

    return (
      <div key={idx} className={$class}>
        {label}
      </div>
    );
  });

  const nameSize = props.name.length;

  return (
    <>
      <li ket={props.idx}>
        <div className="wrap_label">{labelList}</div>
        { nameSize > 0 ? <div>{props.name},</div> : null }
        { props.text.length != undefined ? <div>{props.text},</div> : null }
        {props.date}
      </li>
    </>
  );
}

export default ListItem;
