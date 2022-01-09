import React from "react";
import Section from "./Section";
import HeroSection from "./HeroSection";
import styled from "styled-components";
import ViewProjects from "./ViewProjects";
import ViewWordpress from "./ViewWordpress";
import colors from "../styles/Colors";

const Home = () => {
  return (
    <Container>
      <HeroSection
        title="Hero"
        color={colors.primary}
        leftButtonText="Check out my work"
        bgImg="/images/Lucky Luciano2.jpg"
        sub="Blah Blah"
      >
        <p>TEST</p>
      </HeroSection>
      <Section
        title="AboutMe"
        color="azure"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste amet saepe earum autem velit temporibus? Exercitationem tempora, quam ab esse suscipit, eligendi repellendus praesentium nesciunt vitae ratione rem facere aliquam!"
        leftButtonText="3"
        rightButtonText="4"
      />
      <Section
        title="Skills"
        color="mediumturquoise"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste amet saepe earum autem velit temporibus? Exercitationem tempora, quam ab esse suscipit, eligendi repellendus praesentium nesciunt vitae ratione rem facere aliquam!"
        leftButtonText="5"
        rightButtonText="6"
      />
      <Section
        title="Projects"
        color="cadetblue"
        desc="I made an effort to experiement with as many modern frameworks as possible. "
        leftButtonText="7"
        rightButtonText="8"
      >
        <ViewProjects />
      </Section>

      <Section
        title="Wordpress"
        color="PaleTurquoise"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste amet saepe earum autem velit temporibus? Exercitationem tempora, quam ab esse suscipit, eligendi repellendus praesentium nesciunt vitae ratione rem facere aliquam!"
        leftButtonText=""
        rightButtonText=""
      >
        <ViewWordpress />
      </Section>

      <Section
        title="Artwork"
        color="#FFF5ee"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste amet saepe earum autem velit temporibus? Exercitationem tempora, quam ab esse suscipit, eligendi repellendus praesentium nesciunt vitae ratione rem facere aliquam!"
        leftButtonText=""
        rightButtonText=""
      />
      <Section
        title="Contact"
        color="violet"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste amet saepe earum autem velit temporibus? Exercitationem tempora, quam ab esse suscipit, eligendi repellendus praesentium nesciunt vitae ratione rem facere aliquam!"
        leftButtonText=""
        rightButtonText=""
      />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
`;
