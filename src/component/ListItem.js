import React from "react";

function ListItem(props) {
  const lableBox = props.label;
  const labelList = lableBox.map((label,idx) => {
    let $class;
    const $label = label;
    if($label == '고위험') {
      $class = 'red';
    }else {
      $class = 'green';
    }
    return (<div key={idx} className={$class}>{label}</div>)
  });

  return (
    <>
      <li ket={props.idx}>
        <div className="wrap_label">
          {labelList}
        </div>
        {props.name}, {props.date}
      </li>
    </>
  );
}

export default ListItem;