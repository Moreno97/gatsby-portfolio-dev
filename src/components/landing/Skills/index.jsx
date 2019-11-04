import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Container, Button } from "Common";
import dev from "Static/illustrations/skills.svg";
import { Wrapper, SkillsWrapper, Details, Thumbnail } from "./styles";

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={dev} alt="I’m Antonio and I’m a Mobile developer!" />
      </Thumbnail>
      <Details>
        <h1>Hey!</h1>
        <p>
          I'm working on <a href="https://www.apsl.net">APSL</a>
          right now as Mobile Tech Lead and Front-End Developer using
          technologies like React and React Native.
        </p>
        <Button as={AnchorLink} href="#contact">
          Hire me
        </Button>
      </Details>
    </SkillsWrapper>
  </Wrapper>
);
