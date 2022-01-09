import React from "react";
import styled from "styled-components";
import Icon from "../Icon";

const Svg = styled(Icon)`
  width: 24px;
  height: 24px;
`;

export const ArrowDown = ({ className, color }) => (
  <Svg viewBox="0 0 24 24" className={className}>
    <path fill={color} d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
  </Svg>
);
