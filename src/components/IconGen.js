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
import { Visualstudiocode } from '@styled-icons/simple-icons/Visualstudiocode'
import { Babel } from '@styled-icons/simple-icons/Babel'
import { Figma } from '@styled-icons/simple-icons/Figma'
import { Adobephotoshop } from '@styled-icons/simple-icons/Adobephotoshop'
import { Css3 } from '@styled-icons/simple-icons/Css3'
import { NodeJs } from '@styled-icons/fa-brands/NodeJs'
import { Npm } from '@styled-icons/fa-brands/Npm'
import { Postman } from '@styled-icons/simple-icons/Postman'
import { Html5 } from '@styled-icons/simple-icons/Html5'
import { Javascript } from '@styled-icons/simple-icons/Javascript'
import { Typescript } from '@styled-icons/simple-icons/Typescript'
import { Json } from '@styled-icons/simple-icons/Json'
import { Ubuntu } from '@styled-icons/simple-icons/Ubuntu'
import { Git } from '@styled-icons/simple-icons/Git'
import { Googlecloud } from '@styled-icons/simple-icons/Googlecloud'
import { Materialui } from '@styled-icons/simple-icons/Materialui'
import { Adobeillustrator } from '@styled-icons/simple-icons/Adobeillustrator'
import { Express } from '@styled-icons/simple-icons/Express'
import { Framer } from '@styled-icons/simple-icons/Framer'
import { Webpack } from '@styled-icons/simple-icons/Webpack'
import { Jest } from '@styled-icons/simple-icons/Jest'
import { Database } from '@styled-icons/heroicons-solid/Database'
import { Database as DatabaseFeather } from '@styled-icons/heroicons-outline/Database'
import { ChevronLeft } from '@styled-icons/feather/ChevronLeft'
import { ChevronRight } from '@styled-icons/feather/ChevronRight'

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
    case 'Visual Studio':
      return (
        <Logo size={size} color={color} hoverColor={hoverColor}>
          <Visualstudiocode />
        </Logo>
      )
    case 'Babel':
      return (
        <Logo size={size} color={color} hoverColor={hoverColor}>
          <Babel />
        </Logo>
      )
    case 'Node JS':
      return (
        <Logo size={size} color={color} hoverColor={hoverColor}>
          <NodeJs />
        </Logo>
      )
    case 'Figma':
      return (
        <Logo size={size} color={color} hoverColor={hoverColor}>
          <Figma />
        </Logo>
      )
    case 'Photoshop':
      return (
        <Logo size={size} color={color} hoverColor={hoverColor}>
          <Adobephotoshop />
        </Logo>
      )
    case 'NPM':
      return (
        <Logo size={size} color={color} hoverColor={hoverColor}>
          <Npm />
        </Logo>
      )
    case 'CSS':
      return (
        <Logo size={size} color={color} hoverColor={hoverColor}>
          <Css3 />
        </Logo>
      )
    case 'Postman':
      return (
        <Logo size={size} color={color} hoverColor={hoverColor}>
          <Postman />
        </Logo>
      )
    case 'HTML':
      return (
        <Logo size={size} color={color} hoverColor={hoverColor}>
          <Html5 />
        </Logo>
      )
    case 'Javascript':
      return (
        <Logo size={size} color={color} hoverColor={hoverColor}>
          <Javascript />
        </Logo>
      )
    case 'Typescript':
      return (
        <Logo size={size} color={color} hoverColor={hoverColor}>
          <Typescript />
        </Logo>
      )
    case 'JSON':
      return (
        <Logo size={size} color={color} hoverColor={hoverColor}>
          <Json />
        </Logo>
      )
    case 'Ubuntu':
      return (
        <Logo size={size} color={color} hoverColor={hoverColor}>
          <Ubuntu />
        </Logo>
      )
    case 'Git':
      return (
        <Logo size={size} color={color} hoverColor={hoverColor}>
          <Git />
        </Logo>
      )
    case 'Google Cloud Platform':
      return (
        <Logo size={size} color={color} hoverColor={hoverColor}>
          <Googlecloud />
        </Logo>
      )
    case 'Material Ui':
      return (
        <Logo size={size} color={color} hoverColor={hoverColor}>
          <Materialui />
        </Logo>
      )
    case 'Illustrator':
      return (
        <Logo size={size} color={color} hoverColor={hoverColor}>
          <Adobeillustrator />
        </Logo>
      )
    case 'Express':
      return (
        <Logo size={size} color={color} hoverColor={hoverColor}>
          <Express />
        </Logo>
      )
    case 'Framer':
      return (
        <Logo size={size} color={color} hoverColor={hoverColor}>
          <Framer />
        </Logo>
      )
    case 'Webpack':
      return (
        <Logo size={size} color={color} hoverColor={hoverColor}>
          <Webpack />
        </Logo>
      )
    case 'Jest':
      return (
        <Logo size={size} color={color} hoverColor={hoverColor}>
          <Jest />
        </Logo>
      )
    case 'Database':
      return (
        <Logo size={size} color={color} hoverColor={hoverColor}>
          <Database />
        </Logo>
      )
    case 'Database Outline':
      return (
        <Logo size={size} color={color} hoverColor={hoverColor}>
          <DatabaseFeather />
        </Logo>
      )
    case 'ChevronThinLeft':
      return (
        <Logo size={size} color={color} hoverColor={hoverColor}>
          <ChevronLeft />
        </Logo>
      )
    case 'ChevronThinRight':
      return (
        <Logo size={size} color={color} hoverColor={hoverColor}>
          <ChevronRight />
        </Logo>
      )

    default:
      return (
        <Logo size={size} color="transparent" hoverColor={hoverColor}>
          <DatabaseFeather />
        </Logo>
      )
  }
}

export default IconGen
