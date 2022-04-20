import React from 'react'
import styled from 'styled-components'
import { IconGen } from 'components'
import { colors } from 'styles'

function ProjectIcons({ icons }) {
  return (
    <Container>
      {icons.map((icon) => (
        <IconTray key={icon}>
          <IconGen icon={icon} color={colors.primary} size="2rem" />
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
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 4rem;
  }
`

const IconTray = styled.div`
  display: flex;
  align-items: center;
  padding: 0.6rem 0;

  @media (min-width: 1200px) {
    border-bottom: 1px solid ${colors.primary};
  }

  p {
    margin-left: 1rem;
    font-size: 1.4rem;
    line-height: 1.15;
  }
`
