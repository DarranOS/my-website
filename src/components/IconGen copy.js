import React from 'react'
import BootstrapLogo from '../assets/svgs/bootstrap-logo.svg'
import ReactLogo from '../assets/svgs/react-logo.svg'
import OdinLogo from '../assets/svgs/odin-logo.svg'
import SassLogo from '../assets/svgs/sass-logo.svg'
import NextLogo from '../assets/svgs/next-logo.svg'
import TailwindLogo from '../assets/svgs/tailwind-logo.svg'
import FirebaseLogo from '../assets/svgs/firebase-logo.svg'
import VueLogo from '../assets/svgs/vue-logo.svg'
import GithubLogo from '../assets/svgs/github-logo.svg'
import VercelLogo from '../assets/svgs/vercel-logo.svg'
import ReduxLogo from '../assets/svgs/redux-logo.svg'
import StyledLogo from '../assets/svgs/styled-components-logo.svg'

import styled from 'styled-components'
import Icon from './Icon'

const Svg = styled.div`
  display: flex;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  background: white;
  margin-right: 1rem;
  padding: 8px;
  border-radius: 50%;

  img {
    width: 100%;
  }
`

function IconGen({ icon, size }) {
  console.log(icon)
  switch (icon) {
    case 'React':
      return (
        <Svg size={size}>
          <img key={icon} src={ReactLogo} alt={icon} />
        </Svg>
      )

    case 'Bootstrap':
      return (
        <Svg size={size}>
          <img key={icon} src={BootstrapLogo} alt={icon} />
        </Svg>
      )
    case 'Odin':
      return (
        <Svg size={size}>
          <img key={icon} src={OdinLogo} alt={icon} />
        </Svg>
      )
    case 'Sass':
      return (
        <Svg size={size}>
          <img key={icon} src={SassLogo} alt={icon} />
        </Svg>
      )
    case 'Next JS':
      return (
        <Svg size={size}>
          <img key={icon} src={NextLogo} alt={icon} />
        </Svg>
      )
    case 'Tailwind CSS':
      return (
        <Svg size={size}>
          <img key={icon} src={TailwindLogo} alt={icon} />
        </Svg>
      )
    case 'Vue':
      return (
        <Svg size={size}>
          <img key={icon} src={VueLogo} alt={icon} />
        </Svg>
      )
    case 'Github':
      return (
        <Svg size={size}>
          <img key={icon} src={GithubLogo} alt={icon} />
        </Svg>
      )
    case 'Firebase':
      return (
        <Svg size={size}>
          <img key={icon} src={FirebaseLogo} alt={icon} />
        </Svg>
      )
    case 'Redux':
      return (
        <Svg size={size}>
          <img key={icon} src={ReduxLogo} alt={icon} />
        </Svg>
      )
    case 'Vercel':
      return (
        <Svg size={size}>
          <img key={icon} src={VercelLogo} alt={icon} />
        </Svg>
      )
    case 'Styled Components':
      return (
        <Svg size={size}>
          <img key={icon} src={StyledLogo} alt={icon} />
        </Svg>
      )

    default:
      return (
        <Svg size={size}>
          <img key={icon} alt={icon} />
          <p>Error</p>
        </Svg>
      )
  }
}

export default IconGen
