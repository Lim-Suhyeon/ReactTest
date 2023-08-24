import React, { useState, useEffect } from "react";

function Input(props) {
  //btn_del show
  const [isDelbtn, setActive] = useState(false);

  //화면 진입시
  useEffect(() => {
    const inpValue = props.defaultValue;
    if (inpValue != "") {
      setActive(true);
    }
  }, []);

  const onChange = (e) => {
    const $value = e.target.value.length;
    if ($value > 0) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  //reset button
  const onReset = (e) => {};

  return (
    <div className="inp_wrap">
      <div className="inp_box">
        <input
          defaultValue={props.defaultValue}
          placeholder={props.placeholder}
          type={props.type}
          onChange={onChange}
        />
        {isDelbtn && (
          <button
            className="btn_del"
            onClick={onReset} /* disabled={!isDelbtn} */
          >
            삭제
          </button>
        )}
      </div>
    </div>
  );
}

Input.defaultProps = {
  defaultValue: "",
  type: "text",
  placeholder: "",
  isDelbtn: true,
};

export default Input;
