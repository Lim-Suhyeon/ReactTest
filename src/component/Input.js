import React from "react";

function Input(props) {
  //btn_del show
  const onChange = (event) => {
    console.log(event.target);
  };
  return (
    <div className="inp_wrap">
      <div className="inp_box">
        <input
          placeholder={props.placeholder}
          type={props.type}
          onChange={onChange}
        />
        <button className="btn_del" />
      </div>
    </div>
  );
}

Input.defaultProps = {
  type: "text",
  placeholder: "",
};

export default Input;
