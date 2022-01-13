import React from 'react'
import styled from 'styled-components'

import { BootstrapFill } from '@styled-icons/bootstrap/BootstrapFill'
import { ReactLogo } from '@styled-icons/simple-icons/ReactLogo'
import { Reactrouter } from '@styled-icons/simple-icons/Reactrouter'
import { Sass } from '@styled-icons/simple-icons/Sass'
import { Nextdotjs } from '@styled-icons/simple-icons/Nextdotjs'
import { Tailwindcss } from '@styled-icons/simple-icons/Tailwindcss'
import { Firebase } from '@styled-icons/simple-icons/Firebase'
import { Vuedotjs } from '@styled-icons/simple-icons/Vuedotjs'
import { Github } from '@styled-icons/bootstrap/Github'
import { Vercel } from '@styled-icons/simple-icons/Vercel'
import { Redux } from '@styled-icons/simple-icons/Redux'
import { Styledcomponents } from '@styled-icons/simple-icons/Styledcomponents'
import { Check2Square } from '@styled-icons/bootstrap/Check2Square'
import { BackspaceFill } from '@styled-icons/bootstrap/BackspaceFill'
import OdinLogo from '../assets/svgs/odin-logo.svg'
import { HddNetworkFill } from '@styled-icons/bootstrap/HddNetworkFill'

const Logo = styled.div`
  display: flex;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  color: ${(props) => props.color};

  :hover {
    color: ${(props) => props.hoverColor};
  }
`

function IconGen({ icon, color, size, hoverColor }) {
  switch (icon) {
    case 'React':
      return (
        <Logo size={size} color={color} hoverColor={hoverColor}>
          <ReactLogo />
        </Logo>
      )

    case 'Bootstrap':
      return (
        <Logo size={size} color={color} hoverColor={hoverColor}>
          <BootstrapFill />
        </Logo>
      )
    case 'Odin':
      return (
        <Logo size={size} color={color} hoverColor={hoverColor}>
          <OdinLogo />
        </Logo>
      )
    case 'Sass':
      return (
        <Logo size={size} color={color} hoverColor={hoverColor}>
          <Sass />
        </Logo>
      )
    case 'Next JS':
      return (
        <Logo size={size} color={color} hoverColor={hoverColor}>
          <Nextdotjs />
        </Logo>
      )
    case 'Tailwind CSS':
      return (
        <Logo size={size} color={color} hoverColor={hoverColor}>
          <Tailwindcss />
        </Logo>
      )
    case 'Vue':
      return (
        <Logo size={size} color={color} hoverColor={hoverColor}>
          <Vuedotjs />
        </Logo>
      )
    case 'Github':
      return (
        <Logo size={size} color={color} hoverColor={hoverColor}>
          <Github />
        </Logo>
      )
    case 'Firebase':
      return (
        <Logo size={size} color={color} hoverColor={hoverColor}>
          <Firebase />
        </Logo>
      )
    case 'Redux':
      return (
        <Logo size={size} color={color} hoverColor={hoverColor}>
          <Redux />
        </Logo>
      )
    case 'Vercel':
      return (
        <Logo size={size} color={color} hoverColor={hoverColor}>
          <Vercel />
        </Logo>
      )
    case 'ReactRouter':
      return (
        <Logo size={size} color={color} hoverColor={hoverColor}>
          <Reactrouter />
        </Logo>
      )
    case 'Styled Components':
      return (
        <Logo size={size} color={color} hoverColor={hoverColor}>
          <Styledcomponents />
        </Logo>
      )
    case 'TickBox':
      return (
        <Logo size={size} color={color} hoverColor={hoverColor}>
          <Check2Square />
        </Logo>
      )
    case 'Backspace':
      return (
        <Logo size={size} color={color} hoverColor={hoverColor}>
          <BackspaceFill />
        </Logo>
      )
    case 'Deploy':
      return (
        <Logo size={size} color={color} hoverColor={hoverColor}>
          <HddNetworkFill />
        </Logo>
      )

    default:
      return <p>Error</p>
  }
}

export default IconGen
