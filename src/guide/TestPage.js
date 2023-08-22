import React from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import InputGuide from "./InputGuide";
import ButtonGuide from "./ButtonGuide";
import PopupGuide from "./InputGuide";

function TestPage(props) {
  return (
    <BrowserRouter>
      Routes
      <Routes>
        <Route path="/InputGuide" element={<InputGuide />} />
        <Route path="/ButtonGuide" element={<ButtonGuide />} />
        <Route path="/PopupGuide" element={<PopupGuide />} />
      </Routes>
    </BrowserRouter>
  );
}

export default TestPage;
