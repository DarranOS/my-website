import { keyframes } from 'styled-components'

const Animations = {
  fadeDropDown: keyframes`
    0% {opacity:0; top: -200vh}
    60% {opacity: .1; top: 5vh}
    80% {opacity: .5; top: -10vh}
    86% {opacity: 1; top: 5vh}
    92% {opacity: 1; top: -2vh}
    100% {opacity: 1; top: 0vh}
    `,

  fadeInRight: keyframes`
    0% {opacity:0; right: 30vw}
    90% {opacity: .9; right: 1vw}
    100% {opacity: 1; right: 0vw}
    `,
  fadeInLeft: keyframes`
    0% {opacity:0; left: 30vw}
    90% {opacity:0.9; left: -1vw}
    100% {opacity: 1; left: 0vw},
    `,
  moveUpBottom: keyframes`
    0% {opacity: 0; transform: TranslateY(5vh)}
    100% {opacity: 1; transform: TranslateY(0)}
    `,
  animateDown: keyframes`
    0%,
    20%,
    50%,
    80%,
    100% {transform: TranslateY(0)}
    40% {transform: TranslateY(5px)}
    60% {transform: TranslateY(3px)}
    `,
}

export default Animations
