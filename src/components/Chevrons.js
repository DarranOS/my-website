import React from 'react'
import styled from 'styled-components'
import colors from '../styles/Colors'
import Animations from '../styles/Animations'
import {
  ChevronLeft,
  ChevronRight,
  ChevronDoubleDown,
} from '@styled-icons/heroicons-solid'
import { Github } from '@styled-icons/bootstrap/Github'
import { HddNetworkFill } from '@styled-icons/bootstrap/HddNetworkFill'

const ChevronLeft1 = styled(ChevronLeft)`
   {
    color: white;
    cursor: pointer;
    width: 7rem;
    :hover {
      transform: translateY(-3px);
      filter: drop-shadow(0 1rem 1rem rgba(0, 0, 0, 0.2));

      &::after {
        transform: scaleX(1.4) scaleY(1.6);
        opacity: 0;
        background: ${(props) => (props.bgColor ? props.bgColor : 'white')};
      }
    }
    :active {
      transform: translateY(-1px);
      filter: drop-shadow(0 0.5rem 0.5rem rgba(0, 0, 0, 0.2));
    }
  }
`

const ChevronRight1 = styled(ChevronRight)`
   {
    color: white;
    cursor: pointer;
    width: 7rem;

    :hover {
      transform: translateY(-3px);
      filter: drop-shadow(0 1rem 1rem rgba(0, 0, 0, 0.2));

      &::after {
        transform: scaleX(1.4) scaleY(1.6);
        opacity: 0;
        background: ${(props) => (props.bgColor ? props.bgColor : 'white')};
      }
    }
    :active {
      transform: translateY(-1px);
      filter: drop-shadow(0 0.5rem 0.5rem rgba(0, 0, 0, 0.2));
    }
  }
`

const StyledGitHub = styled(Github)`
   {
    color: white;
    width: 3rem;
  }
`

const StyledDeploy = styled(HddNetworkFill)`
   {
    color: white;
    width: 3rem;
  }
`

export { ChevronLeft1, ChevronRight1, StyledDeploy, StyledGitHub }
