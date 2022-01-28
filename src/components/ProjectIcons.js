import React from 'react'
import styled from 'styled-components'
import IconGen from './IconGen'

function ProjectIcons({ icons }) {
  return (
    <Container>
      {icons.map((icon) => (
        <IconTray key={icon}>
          <IconGen icon={icon} color="white" size="3rem" />
          <p>{icon}</p>
        </IconTray>
      ))}
    </Container>
  )
}

export default ProjectIcons

const Container = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 2rem;
  }

  div > div {
    width: 2rem;
  }
`

const IconTray = styled.div`
  display: flex;
  align-items: center;
  padding: 0.8rem 0;

  p {
    margin-left: 1.5rem;
    color: white;
    font-size: 1.6rem;
  }
`
