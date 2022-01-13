import React from 'react'
import styled from 'styled-components'

function Background({ color, children }) {
  return <Container color={color}>{children}</Container>
}

export default Background

const Container = styled.div`
  transform: ${(props) => props.scale};
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: -50;
  top: 0;
  right: 0;
  background: ${(props) => props.color};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;
`
