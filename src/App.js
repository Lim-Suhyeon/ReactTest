import "./styles.css";
import { createGlobalStyle } from "styled-components";
import TopHeader from "./layout/TopHeader";
import ButtonGuide from "./guide/ButtonGuide";
import InputGuide from "./guide/InputGuide";
import AccordionGuide from "./guide/AccordionGuide";
import PopupGuide from "./guide/PopupGuide";
import SwiperGuide from "./guide/SwiperGuide";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

export default function App() {
  return (
    <div className="App">
      {/* <GlobalStyle /> */}
      {/* <TestPage /> */}
      <TopHeader title="Guide Index" />
      <ButtonGuide />
      <InputGuide />
      <AccordionGuide />
      <PopupGuide />
      <SwiperGuide />
    </div>
  );
}
