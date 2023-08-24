import React, { useState, useEffect } from "react";

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
      console.log(value);
    } else {
      setActive(false);
    }
    setValue(e.target.value);
  };

  //reset button
  const onReset = (e) => {
    setValue("");
    setActive(false);
  };

  return (
    <div className="inp_wrap">
      <div className="inp_box">
        <input
          value={value}
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
      <b>값 : {value}</b>
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
