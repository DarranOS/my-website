import { keyframes } from "styled-components";

const Animations = {
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
};

export default Animations;
