import React, { useState, useEffect, useRef } from "react";

function Input(props) {
  //btn_del show
  const [isDelbtn, setActive] = useState(false);
  const [value, setValue] = useState(props.defaultValue);

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
    setValue(e.target.value);
  };

  //reset button
  const onReset = () => {
    setValue("");
    setActive(false);
    nameInput.current.focus();
  };

  //focus
  const nameInput = useRef();

  return (
    <div className="inp_wrap">
      <div className="inp_box">
        <input
          value={value}
          placeholder={props.placeholder}
          type={props.type}
          onChange={onChange}
          ref={nameInput}
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
      <div>{props.val}</div>
      <p className="value">값 : {value}</p>
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
