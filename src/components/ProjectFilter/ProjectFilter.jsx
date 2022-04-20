import { useEffect } from 'react'
import styled from 'styled-components'
import { Button } from 'components'
import { colors } from 'styles'

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
          <Button
            background={activeCategory === 'All' ? colors.compBlue : colors.white}
            color={activeCategory === 'All' ? colors.white : colors.compBlue}
            flash={colors.compBlue}
            fontsize={'1.4rem'}
          >
            All
          </Button>
        </div>

        <div onClick={() => setActiveCategory('React')}>
          <Button
            background={activeCategory === 'React' ? colors.compBlue : colors.white}
            color={activeCategory === 'React' ? colors.white : colors.compBlue}
            flash={colors.compBlue}
            fontsize={'1.4rem'}
          >
            React
          </Button>
        </div>
        <div onClick={() => setActiveCategory('Wordpress')}>
          <Button
            background={activeCategory === 'Wordpress' ? colors.compBlue : colors.white}
            color={activeCategory === 'Wordpress' ? colors.white : colors.compBlue}
            flash={colors.compBlue}
            fontsize={'1.4rem'}
          >
            Wordpress
          </Button>
        </div>
        <div onClick={() => setActiveCategory('Typescript')}>
          <Button
            background={activeCategory === 'Typescript' ? colors.compBlue : colors.white}
            color={activeCategory === 'Typescript' ? colors.white : colors.compBlue}
            flash={colors.compBlue}
            fontsize={'1.4rem'}
          >
            Typescript
          </Button>
        </div>

        <div onClick={() => setActiveCategory('Tailwind CSS')}>
          <Button
            background={
              activeCategory === 'Tailwind CSS' ? colors.compBlue : colors.white
            }
            color={activeCategory === 'Tailwind CSS' ? colors.white : colors.compBlue}
            flash={colors.compBlue}
            fontsize={'1.4rem'}
          >
            Tailwind CSS
          </Button>
        </div>
        {/* <div onClick={() => setActiveCategory('Illustration')}>
          <Button
            background={
              activeCategory === 'Illustration' ? colors.compBlue : colors.white
            }
            color={activeCategory === 'Illustration' ? colors.white : colors.compBlue}
            flash={colors.compBlue}
            fontsize={'1.4rem'}
          >
            Illustration
          </Button>
        </div> */}
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
    margin-top: 3rem;
    margin-bottom: 4rem;
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
    margin-right: 3rem;
  }
`
