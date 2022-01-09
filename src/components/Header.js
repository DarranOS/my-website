import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import styled from "styled-components";

const Header = () => {
  const [burgerOpened, setBurgerOpened] = useState(false);

  return (
    <Container>
      <RightHeader>
        <CustomMenu onClick={() => setBurgerOpened(!burgerOpened)} />
      </RightHeader>

      <BurgerNav show={burgerOpened}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerOpened(!burgerOpened)} />
        </CloseWrapper>
        <a href="#"> Home</a>
        <a href="#"> About Me</a>
        <a href="#"> Skills</a>
        <a href="#"> Projects</a>
        <a href="#"> Wordpress</a>
        <a href="#"> Artwork</a>
        <a href="#"> Contact</a>
      </BurgerNav>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 5% 5%;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
    font-size: 1.2rem;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const RightHeader = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: end;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background: white;
  width: 300px;
  z-index: 1000;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? `translateX(0)` : `translateX(100%)`)};
  transition: transform 0.8s;

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 600;
    }
  }
`;
