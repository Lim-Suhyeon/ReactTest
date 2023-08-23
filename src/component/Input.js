import React, { useState, useEffect } from "react";

function Input(props) {
  //btn_del show
  const [isDelbtn, setActive] = useState(false);
  useEffect(() => {
    if (props.defaultValue != undefined) {
      console.log(props.defaultValue);
    }
  });
  const onChange = (e) => {
    const $value = e.target.value.length;
    if ($value > 0) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  return (
    <div className="inp_wrap">
      <div className="inp_box">
        <input
          defaultValue={props.defaultValue}
          placeholder={props.placeholder}
          type={props.type}
          onChange={onChange}
        />
        <button className={`btn_del ${isDelbtn ? "active" : ""}`}>삭제</button>
      </div>
    </div>
  );
}

Input.defaultProps = {
  type: "text",
  placeholder: "",
  isDelbtn: false,
};

export default Input;
