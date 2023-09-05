import React from "react";

function ListItem(props) {
  const lableBox = props.label;
  const labelList = lableBox.map((label) => {
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
        $class = "";
    }
    
    console.log($class);

    return (
      <div key={$class} className={$class}>
        {label}
      </div>
    );
  });

  const labelSize = props.label == undefined ? false : true;
  const nameSize = props.name == undefined ? false : true;
  const textSize = props.text == undefined ? false : true;

  return (
      <li key={props.id}>
        <div className="wrap_label">{labelList}</div>
        { nameSize ? <div>{props.name},</div> : null }
        { textSize ? <div>{props.text},</div> : null }
        {props.date}
      </li>
  );
}

export default ListItem;
