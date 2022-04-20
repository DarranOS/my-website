import React from 'react'
import styled from 'styled-components'
import { colors } from 'styles'

function SpecialButton({
  fontsize = '1.6rem',
  tColor,
  HtColor,
  bgColor,
  link,
  children,
  border,
}) {
  return (
    <>
      {link[0] === '' ? (
        <Container2
          color={tColor}
          htColor={HtColor}
          border={border}
          bgColor={bgColor}
          fontsize={fontsize}
        >
          {children}
        </Container2>
      ) : (
        <Container1
          href={link[0]}
          rel={link[1] ?? 'blank'}
          target={link[2] ?? 'noopener noreferrer'}
          color={tColor}
          htColor={HtColor}
          border={border}
          bgColor={bgColor}
          fontsize={fontsize}
        >
          {children}
        </Container1>
      )}
    </>
  )
}

export default SpecialButton

const Container1 = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${(props) => (props.border ? `${props.border}` : `2px solid white`)};
  transition: all 0.2s;
  padding: 0.4rem 1.2rem;
  width: min-content;
  background: ${(props) => (props.bgColor ? `${props.bgColor}` : `${colors.white}`)};

  p {
    font-size: ${(props) => props.fontsize};
    color: ${(props) => (props.color ? props.color : colors.white)};
    margin-left: 0.8rem;
  }

  :hover {
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }

  :active {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
    transform: translateY(2px);
  }
`

const Container2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${(props) => (props.border ? `${props.border}` : `2px solid white`)};
  transition: all 0.2s;
  padding: 0.4rem 1.2rem;
  width: min-content;
  background: ${(props) => (props.bgColor ? `${props.bgColor}` : `${colors.white}`)};
  cursor: pointer;

  p {
    font-size: ${(props) => props.fontsize};
    color: ${(props) => (props.color ? props.color : colors.white)};
    margin-left: 0.8rem;
  }

  :hover {
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }

  :active {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
    transform: translateY(2px);
  }
`
