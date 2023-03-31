import React from 'react';
import styled from 'styled-components';

export default function TestStyled() {
  const MyDiv = styled.div`
    background-color: orange;
  `;
  const MyHeading = styled.h1`
    background-color: pink;
    color: aliceblue;
  `;
  const MySpan = styled.span`
    background-color: skyblue;
    font-weight: 700;
  `;

  return (
    <MyDiv>
      <MyHeading>h1 태그 입니다</MyHeading>
      <MySpan>span태그 입니다</MySpan>
    </MyDiv>
  );
}
