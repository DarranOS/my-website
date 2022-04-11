import { useEffect } from 'react'
import React from 'react'
import styled from 'styled-components'
import SecondaryButton from '../SecondaryButton'
import colors from '../../styles/Colors'

const ProjectFilter = ({ setActiveCategory, activeCategory, setFiltered, projects }) => {
  useEffect(() => {
    if (activeCategory === 'All') {
      setFiltered(projects)
      return
    }

    const filtered = projects.filter((project) => project.icons.includes(activeCategory))

    setFiltered(filtered)
  }, [activeCategory])

  return (
    <Filter>
      <Buttons>
        <div onClick={() => setActiveCategory('All')}>
          <SecondaryButton
            background={activeCategory === 'All' ? colors.compBlue : colors.white}
            color={activeCategory === 'All' ? colors.white : colors.compBlue}
            flash={colors.compBlue}
          >
            All
          </SecondaryButton>
        </div>
        {/* <div onClick={() => setActiveCategory('UI/UX')}>
          <SecondaryButton
            background={activeCategory === 'UI/UX' ? colors.compBlue : colors.white}
            color={activeCategory === 'UI/UX' ? colors.white : colors.compBlue}
            flash={colors.compBlue}
          >
            UI/UX
          </SecondaryButton>
        </div> */}
        <div onClick={() => setActiveCategory('React')}>
          <SecondaryButton
            background={activeCategory === 'React' ? colors.compBlue : colors.white}
            color={activeCategory === 'React' ? colors.white : colors.compBlue}
            flash={colors.compBlue}
          >
            React
          </SecondaryButton>
        </div>
        <div onClick={() => setActiveCategory('Wordpress')}>
          <SecondaryButton
            background={activeCategory === 'Wordpress' ? colors.compBlue : colors.white}
            color={activeCategory === 'Wordpress' ? colors.white : colors.compBlue}
            flash={colors.compBlue}
          >
            Wordpress
          </SecondaryButton>
        </div>
        <div onClick={() => setActiveCategory('Typescript')}>
          <SecondaryButton
            background={activeCategory === 'Typescript' ? colors.compBlue : colors.white}
            color={activeCategory === 'Typescript' ? colors.white : colors.compBlue}
            flash={colors.compBlue}
          >
            Typescript
          </SecondaryButton>
        </div>
        <div onClick={() => setActiveCategory('Next.js')}>
          <SecondaryButton
            background={activeCategory === 'Next.js' ? colors.compBlue : colors.white}
            color={activeCategory === 'Next.js' ? colors.white : colors.compBlue}
            flash={colors.compBlue}
          >
            Next.js
          </SecondaryButton>
        </div>
        <div onClick={() => setActiveCategory('Illustration')}>
          <SecondaryButton
            background={
              activeCategory === 'Illustration' ? colors.compBlue : colors.white
            }
            color={activeCategory === 'Illustration' ? colors.white : colors.compBlue}
            flash={colors.compBlue}
          >
            Illustration
          </SecondaryButton>
        </div>
      </Buttons>
    </Filter>
  )
}

export default ProjectFilter

const Filter = styled.div`
  display: flex;
  flex-direction: column;
  margin-block: 2rem;

  @media (min-width: 992px) {
    margin-block: 2rem;
  }
`
const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;

  div {
    margin-bottom: 1rem;

    @media (min-width: 992px) {
      margin-bottom: 0rem;
    }
  }

  *:not(:last-child) {
    margin-right: 2rem;
  }
`
