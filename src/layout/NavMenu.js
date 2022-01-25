import React, { useState } from 'react'
import styled from 'styled-components'
import colors from '../styles/Colors'
import menuData from '../assets/data/menuData'
import Animations from '../styles/Animations'

function NavButton() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <Container>
      <Button active={menuOpen} onClick={toggleMenu}>
        <span> </span>
      </Button>

      {menuOpen && (
        <Background scale={menuOpen ? 'scale(1)' : 'scale(0.1)'}>
          <MenuList>
            {menuData.map((data) => (
              <li key={data.id}>
                <MenuItem>
                  <a>
                    <span>0{data.id}</span> {data.title}
                  </a>
                </MenuItem>
              </li>
            ))}
          </MenuList>
        </Background>
      )}
    </Container>
  )
}

export default NavButton

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  div {
    font-size: 2rem;
  }
`

const Button = styled.button`
  position: fixed;
  top: 3%;
  right: 5%;
  z-index: 1000;
  background: white;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  width: 6rem;
  height: 6rem;
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  span {
    width: 3rem;
    height: 3px;
    background: ${(props) => (props.active ? 'transparent' : `${colors.primary}`)};
    display: inline-block;
    position: relative;

    ::before,
    ::after {
      position: absolute;
      content: '';
      width: 3rem;
      height: 3px;
      display: inline-block;
      transition: all 0.2s;
      background: ${colors.primary};
    }
    ::before {
      top: ${(props) => (props.active ? '0' : '-.8rem')};
      left: 0;
      transform: ${(props) => (props.active ? 'rotate(45deg)' : 'rotate(0)')};
    }
    ::after {
      top: ${(props) => (props.active ? '0' : '.8rem')};
      left: 0;
      transform: ${(props) => (props.active ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }

  &:hover span::before {
    top: ${(props) => (props.active ? '0' : '-1rem')};
  }

  &:hover span::after {
    top: ${(props) => (props.active ? '0' : '1rem')};
  }

  :active {
    transform: translateY(3px);
  }
`

const Background = styled.div`
  transform: ${(props) => props.scale};
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: 500;
  top: 0;
  right: 0;
  background: ${colors.grad3};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 3s;
`

const MenuList = styled.div`
  font-size: 1.6rem;
  z-index: 900;
  list-style: none;
  text-align: center;
`

const MenuItem = styled.div`
  margin: 1rem;

  a,
  a:link,
  a:visited {
    font-family: 'BasementGrotesque';
    letter-spacing: 0.6rem;
    display: inline-block;
    font-size: 3rem;
    font-weight: 300;
    color: white;
    padding: 1rem 2rem;
    text-transform: uppercase;
    background-image: linear-gradient(120deg, transparent 0%, transparent 50%, white 50%);
    background-size: 240%;
    transition: all 0.2s;

    span {
      font-family: 'Aleo';
      margin-right: 1rem;
      font-style: italic;
      font-weight: 100;
      animation: 0.6s ${Animations.moveUpBottom} 0.6s ease-in-out;
      animation-iteration-count: 1;
      webkit-animation-fill-mode: backwards;
      animation-fill-mode: backwards;
    }
  }

  a:hover,
  a:active {
    background-position: 100%;
    color: ${colors.primary};
    transform: translateX(1rem);
  }
`
