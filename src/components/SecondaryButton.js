import styled from "styled-components";

function SecondaryButton({ text, color, bgColor, bgHover, children }) {
  return (
    <ButtonStyle color={color} bgColor={bgColor}>
      <a href="#">
        {text}
        {children}
      </a>
    </ButtonStyle>
  );
}

const ButtonStyle = styled.div`
  a:link,
  a:visited {
    font-size: 1.6rem;
    color: ${(props) => props.color};
    display: inline-block;
    border-bottom: 2px solid ${(props) => props.color};
    padding: 3px;
    padding-right: 1.5rem;
    ${"" /* background: ${(props) => (props.bgColor ? props.bgColor : "white")}; */}
    font-weight: bold;
    cursor: pointer;
    transition: all 0.4s;
    position: relative;
    background-image: linear-gradient(
      120deg,
      transparent 0%,
      transparent 50%,
      orange 50%
    );
    background-size: 240%;
  }

  a:hover {
    ${"" /* background: ${(props) => props.color}; */}
    color: white;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
    transform: translateY(-3px);
    background-position: 100%;

    &::after {
      transform: scaleX(1.4) scaleY(1.6);
      opacity: 0;
      background: ${(props) => (props.bgColor ? props.bgColor : "white")};
    }
  }

  a:active {
    transform: translateY(-1px);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }

  a::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    transition: all 0.4s;
  }
`;

export default SecondaryButton;
