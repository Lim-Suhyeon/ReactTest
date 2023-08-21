import "./styles.css";
import { createGlobalStyle } from "styled-components";
import TodoHead from "./layout/TopHeader";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

export default function App() {
  return (
    <div className="App">
      {/* <GlobalStyle /> */}
      <TodoHead title="Guide" />
    </div>
  );
}
