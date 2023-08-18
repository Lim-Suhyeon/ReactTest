import "./styles.css";
import { createGlobalStyle } from "styled-components";
import TodoHead from "./components/TodoHead";
import ComAccordion from "./components/ComAccordion";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

export default function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <TodoHead />
      <ComAccordion customClass="acc_test" dataText="text0001" />
    </div>
  );
}
