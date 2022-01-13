import React from "react";
import Section from "./Section";
import styled from "styled-components";
import ViewProjects from "./ViewProjects";
import colors from "../styles/Colors";
import AboutMe from "./AboutMe";
import ContactForm from "./ContactForm";
import ClipPaths from "../styles/ClipPaths";
import gradient from "../styles/gradients";

// import ColorBlock from "./ColorBlock";

const Home = () => {
  return (
    <Container>
      <Section
        heading1={[["Darran", "O'Shea"], `${colors.white}`]}
        heading2={[["FullStack", "WebDesign", "Graphics"], `${colors.white}`]}
        color={colors.primary}
        leftButton={[
          "#",
          "Check out my work",
          `${colors.primary}`,
          `${colors.secondary}`,
          "noShadow",
        ]}
        bgImg="/images/lucky2.jpg"
        bgImgOpac={[".8", "multiply"]}
        topMargin="0vh"
        bgOpac={0.9}
        bgColor={gradient(
          "linear",
          `${colors.primary}`,
          `${colors.secondary}`,
          "60",
          "80"
        )}
        zIndex={10}
        clip={ClipPaths.hero}
        arrow
      ></Section>

      <Section
        heading3={["A Little About Me"]}
        color={colors.white}
        topMargin="-10vh"
        topPadding="40%"
        bgOpac={1}
        zIndex={0}
      >
        <AboutMe />
      </Section>

      <Section
        // heading2={["My Projects", `${colors.white}`]}
        color={colors.purple}
        bgImg="/images/hypnotic-brass-grey_1220.jpg"
        bgImgOpac={["1", "color-dodge"]}
        bgOpac={1}
        zIndex={10}
        bgColor={gradient(
          "linear",
          `${colors.primary}`,
          `${colors.darkOrange}`,
          "10",
          "90"
        )}
        clip={ClipPaths.hero2}
      >
        <ViewProjects textColor={colors.white} />
      </Section>

      <Section
        heading3={["Skills & Artwork"]}
        color="mediumturquoise"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste amet saepe earum autem velit temporibus? Exercitationem tempora, quam ab esse suscipit, eligendi repellendus praesentium nesciunt vitae ratione rem facere aliquam!"
        leftButton="5"
        rightButton="6"
        topMargin="-10vh"
        topPadding="40%"
      />

      <Section
        heading2={[["Get in Touch"], `${colors.white}`]}
        color={colors.grad1}
        bgImgOpac={["0.8", "multiply"]}
        zIndex={0}
        bgColor={gradient(
          "linear",
          `${colors.primary}`,
          `${colors.secondary}`,
          "20",
          "80"
        )}
      >
        <ContactForm />
      </Section>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
`;
