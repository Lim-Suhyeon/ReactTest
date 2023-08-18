import React from "react";
// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const scrollToTop = () => {
  setTimeout(function () {
    alert("test");
    window.scrollTo({ top: 500, left: 0, behavior: "smooth" });
  }, 500);
};

function ComAccordion({ customClass, dataText }) {
  return (
    <Accordion
      className={customClass}
      allowMultipleExpanded={false}
      allowZeroExpanded={true}
    >
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            <div onClick={scrollToTop}>
              What harsh truths do you prefer to ignore?
              {dataText}
            </div>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
            occaecat ut occaecat consequat est minim minim esse tempor laborum
            consequat esse adipisicing eu reprehenderit enim. Exercitation in
            fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat
            consequat est minim minim esse tempor laborum consequat esse
            adipisicing eu reprehenderit enim. Exercitation in fugiat est ut ad
            ea cupidatat ut in cupidatat occaecat ut occaecat consequat est
            minim minim esse tempor laborum consequat esse adipisicing eu
            reprehenderit enim. Exercitation in fugiat est ut ad ea cupidatat ut
            in cupidatat occaecat ut occaecat consequat est minim minim esse
            tempor laborum consequat esse adipisicing eu reprehenderit enim.
            Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
            occaecat ut occaecat consequat est minim minim esse tempor laborum
            consequat esse adipisicing eu reprehenderit enim. Exercitation in
            fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat
            consequat est minim minim esse tempor laborum consequat esse
            adipisicing eu reprehenderit enim. Exercitation in fugiat est ut ad
            ea cupidatat ut in cupidatat occaecat ut occaecat consequat est
            minim minim esse tempor laborum consequat esse adipisicing eu
            reprehenderit enim. Exercitation in fugiat est ut ad ea cupidatat ut
            in cupidatat occaecat ut occaecat consequat est minim minim esse
            tempor laborum consequat esse adipisicing eu reprehenderit enim.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Is free will real or just an illusion?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            In ad velit in ex nostrud dolore cupidatat consectetur ea in ut
            nostrud velit in irure cillum tempor laboris sed adipisicing eu esse
            duis nulla non.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
}

export default ComAccordion;
