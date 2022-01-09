import React from "react";
import BootstrapLogo from "../assets/svgs/bootstrap-logo.svg";
import ReactLogo from "../assets/svgs/react-logo.svg";
import OdinLogo from "../assets/svgs/odin-logo.svg";
import SassLogo from "../assets/svgs/sass-logo.svg";
import NextLogo from "../assets/svgs/next-logo.svg";
import TailwindLogo from "../assets/svgs/tailwind-logo.svg";
import VueLogo from "../assets/svgs/vue-logo.svg";
import styled from "styled-components";

function ProjectIcons({ icons }) {
  return (
    <IconTray>
      {icons.map((icon) => {
        if (icon === "React") return <img key={icon} src={ReactLogo} alt="" />;
        if (icon === "Bootstrap") return <img key={icon} src={BootstrapLogo} alt="" />;
        if (icon === "Odin") return <img key={icon} src={OdinLogo} alt="" />;
        if (icon === "Sass") return <img key={icon} src={SassLogo} alt="" />;
        if (icon === "Next") return <img key={icon} src={NextLogo} alt="" />;
        if (icon === "Tailwind") return <img key={icon} src={TailwindLogo} alt="" />;
        if (icon === "Vue") return <img key={icon} src={VueLogo} alt="" />;
      })}
    </IconTray>
  );
}

export default ProjectIcons;

const IconTray = styled.div`
  display: flex;

  img {
    width: 36px;
    height: 36px;
    margin: 3px 8px;
  }
`;
