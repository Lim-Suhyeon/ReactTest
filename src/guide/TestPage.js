import React from "react";
import styled from "styled-components";
import ReactDOM from 'react-dom';
import { Routes, Route, BrowserRouter } from "react-router-dom";

import InputGude from "./InputGude";

function TestPage(props) {
  return (
    <BrowserRouter>
      testPage
      <Routes>
        testPage
        <Route path="./InputGude" exact render={() => <InputGude />} />
      </Routes>
    </BrowserRouter> 
  );
}

export default TestPage;