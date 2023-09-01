import React from "react";

function ListItem(props) {
  const lableBox = props.label;
  const labelList = lableBox.map((label,idx) => {
    let $class;
    const $label = label;

    switch (label) {
      case '고위험':
        $class = 'red';
        break;
      case '중위험':
        $class = 'orange';
        break;
      case '저위험':
        $class = 'green';
        break;
      default:
        $class = 'blue';
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