import React from "react";

function ListItem(props) {
  const lableBox = props.label;
  //데이터 여부 체크
  const labelSize = props.label == undefined ? false : true;
  const nameSize = props.name == undefined ? false : true;
  const textSize = props.text == undefined ? false : true;
  
  const labelList = (
    labelSize === true && //label 없을 때
      lableBox.map((label) => {
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

        return (
          <div key={$class} className={$class}>
            {label}
          </div>
        );
      })
  )


  return (
      <li key={props.id}>
        { labelSize ? <div className="wrap_label">{labelList}</div> : null }
        { nameSize ? <div>{props.name},</div> : null }
        { textSize ? <div>{props.text},</div> : null }
        {props.date}
      </li>
  );
}

export default ListItem;
