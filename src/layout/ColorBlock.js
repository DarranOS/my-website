import React from "react";
import styled from "styled-components";

function ColorBlock({ color }) {
  return <ColoredSquare color={color}></ColoredSquare>;
}

const ColoredSquare = styled(ColorBlock)`
  height: 200px;
  weight: 200px;
  background: ${(props) => props.color};
`;
export default ColorBlock;
