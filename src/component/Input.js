import React from "react";

function Input(props) {
  return (
    <div className="input_wrap">
      <div className="">
        <input placeholder={props.placeholder} type={props.type} />
        <button className="btn_del" />
      </div>
    </div>
  );
}

Input.defaultProps = {
    type: 'text',
    placeholder: ''
}

export default Input;
