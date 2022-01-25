import React from 'react'
import styled from 'styled-components'
import colors from '../styles/Colors'

function Frame({ src }) {
  console.log(src)
  return (
    <Container>
      <img alt="" src={src} />
    </Container>
  )
}

export default Frame

const Container = styled.div`
  padding: 4%;
  background: ${colors.grad9};
  border-radius: 10px;
  width: 80vw;
  transform-origin: center;
  transition: all 0.2s ease-in;

  img {
    width: 100%;
    border-radius: 3%;
    filter: drop-shadow(0px 0px 2px white);
  }

  :hover {
    transform: scale(1.1) rotate(3deg) translateY(-2rem) translateX(2rem);
    outline-offset: 1.5rem;
    outline: 0.3rem solid ${colors.secondary};
  }
`
