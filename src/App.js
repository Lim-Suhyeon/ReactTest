import "./styles.css";
import { createGlobalStyle } from "styled-components";
import TodoHead from "./components/TodoHead";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

export default function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <TodoHead title="테스트 중입니다." />
    </div>
  );
}
