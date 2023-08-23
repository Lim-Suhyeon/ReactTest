import React from "react";
import Input from "../component/Input";

function InputGuide() {
  return (
    <div className="guide_cont">
      <h2 className="guide_h2">Input</h2>
      <Input placeholder="내용을 입력해주세요" type="password" />
      <Input placeholder="내용을 입력해주세요" defaultValue="0001" />
    </div>
  );
}

export default InputGuide;
