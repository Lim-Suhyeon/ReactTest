import "./styles.css";
import { createGlobalStyle } from "styled-components";
import TopHeader from "./layout/TopHeader";
import TestPage from "./guide/TestPage";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

export default function App() {
  return (
    <div className="App">
      {/* <GlobalStyle /> */}
      <TopHeader title="Guide Index" />
      <TestPage />
    </div>
  );
}
