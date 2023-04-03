import React from 'react';
import styled from 'styled-components';

const MyDiv = styled.div`
 npm background-color: ${(props) => props.color};
`;

export default function PropsStyle({ color = 'skyblue' }) {
  return <MyDiv color={color}>PropsStyle</MyDiv>;
}
