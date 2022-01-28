import React from 'react'
import styled from 'styled-components'
import colors from '../styles/Colors'

function Frame({ src, href }) {
  return (
    <Container href={href} target="_blank">
      <img alt="" src={src} />
    </Container>
  )
}

export default Frame

const Container = styled.a`
  padding: 4%;
  background: ${colors.grad9};
  border-radius: 10px;
  width: 80vw;
  transform-origin: center;
  transition: all 0.2s ease-in;
  cursor: pointer;

  img {
    width: 100%;
    border-radius: 3%;
    filter: drop-shadow(0px 0px 1px white);
  }

  @media (min-width: 1200px) {
    max-width: 30vw;
  }

  :hover {
    outline-offset: 1.5rem;
    outline: 0.3rem solid ${colors.secondary};
  }
`
