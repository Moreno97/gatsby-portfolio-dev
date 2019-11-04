import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Header } from "Theme";
import { Container, Button } from "Common";
import dev from "Static/illustrations/me.jpeg";
import { Wrapper, IntroWrapper, Details, Thumbnail } from "./styles";

export const Intro = () => (
  <Wrapper>
    <Header />
    <IntroWrapper as={Container}>
      <Thumbnail>
        <img
          src={dev}
          style={{
            borderRadius: 400,
            width: 200
          }}
          alt="I’m Antonio and I'm a Mobile Developer"
        />
      </Thumbnail>
      <Details>
        <h1>Hi There!</h1>
        <h4>I’m Antonio and I'm a Mobile Developer</h4>
      </Details>
    </IntroWrapper>
  </Wrapper>
);
