import React, { useState } from "react";

function Input(props) {
  //btn_del show
  const [isDelbtn, setActive] = useState(false);

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
          value={props.value}
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
};

export default Input;
