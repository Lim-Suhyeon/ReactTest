import React, { useState, useEffect } from "react";

function Input(props) {
  //btn_del show
  const [isDelbtn, setActive] = useState(false);
  useEffect(() => {
    console.log("컴포넌트가 화면에 나타남");
    return () => {
      console.log("컴포넌트가 화면에서 사라짐");
    };
  }, []);
  const init = () => {
    alert();
  };
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
