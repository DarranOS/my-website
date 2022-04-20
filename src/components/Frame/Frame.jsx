import React from 'react'
import styled from 'styled-components'
import { colors } from 'styles'

function Frame({ src, href }) {
  return (
    <Container href={href} target="_blank">
      <img alt="" src={src} />
    </Container>
  )
}

export default Frame

const Container = styled.a`
  width: 80vw;
  transform-origin: center;
  transition: all 0.2s ease-in;
  cursor: pointer;

  img {
    width: 100%;
    object-fit: cover;
    filter: drop-shadow(0px 0px 1px white);
    border: 1px solid ${colors.primary};
  }

  @media (min-width: 1200px) {
    width: 100%;
    height: 100%;

    img {
      height: 70%;
    }
  }
`
