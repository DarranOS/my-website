import styled from 'styled-components'

function SecondaryButton({ text, color, background, flash, children, fullBorder }) {
  return (
    <ButtonStyle
      color={color}
      background={background}
      flash={flash}
      fullBorder={fullBorder}
    >
      {children}
      {text}
    </ButtonStyle>
  )
}

const ButtonStyle = styled.div`
  font-size: 1.6rem;
  color: ${(props) => props.color};
  display: flex;
  align-items: center;
  border-color: ${(props) => props.color};
  border-style: solid;
  border-width: ${(props) => (props.fullBorder ? '2px' : '0 0 2px 0')};
  padding: 1rem 2rem;
  padding-right: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.4s;
  position: relative;
  background-image: ${(props) =>
    props.background
      ? `linear-gradient(
      120deg,
      ${props.background}  0%,
      ${props.background}  50%,
      ${props.color} 50%)`
      : 'yellow'};
  background-size: 240%;

  :hover {
    ${'' /* background: ${(props) => props.color}; */}

    color: ${(props) => props.background};
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
    transform: translateY(-3px);
    background-position: 100%;
    border-color: ${(props) => props.background};

    ::after {
      transform: scaleX(1.4) scaleY(1.6);
      opacity: 0;
      background: ${(props) => (props.flash ? props.flash : 'green')};
    }

    div:first-child {
      color: ${(props) => props.background};
    }
  }

  :active {
    transform: translateY(-1px);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }

  ::after {
    content: '';
    display: inline-block;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    transition: all 0.4s;
  }

  div:first-child {
    margin-right: 1.5rem;
  }
`

export default SecondaryButton
