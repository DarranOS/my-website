import React from 'react'
import styled from 'styled-components'
import colors from '../styles/Colors'
import IconGen from './IconGen'

function SpecialButton({
  text,
  tColor,
  HtColor,
  bgColor,
  hBgColor,
  link,
  children,
  border,
}) {
  return (
    <Container
      href={link[0]}
      rel={link[1] ?? 'blank'}
      target={link[2] ?? 'noopener noreferrer'}
      color={tColor}
      htColor={HtColor}
      border={border}
      bgColor={bgColor}
    >
      {children && children}
    </Container>
  )
}

export default SpecialButton

const Container = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${(props) => (props.border ? `${props.border}` : `2px solid white`)};
  transition: all 0.2s;
  padding: 0.6rem 1.8rem;
  width: min-content;
  border-radius: 8px;
  background: ${(props) => (props.bgColor ? `${props.bgColor}` : `${colors.white}`)};

  p {
    font-size: 2rem;
    color: ${(props) => (props.color ? props.color : colors.white)};
    margin-left: 1.5rem;
  }

  :hover {
    ${'' /* background: red; */}
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }

  :active {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
    transform: translateY(2px);
  }
`
