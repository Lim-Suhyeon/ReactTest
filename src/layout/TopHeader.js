import React from "react";
import styled from "styled-components";

const HeadBlock = styled.div`
  padding: 20px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
`;

function TopHeader(props) {
  return (
    <HeadBlock>
      {/*<a href="#none" class="btn_back">
        뒤로가기
  </a>*/}
      <h1>{props.title}</h1>
    </HeadBlock>
  );
}

export default TopHeader;
