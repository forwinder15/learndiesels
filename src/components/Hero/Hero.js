import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { StaticImage } from "gatsby-plugin-image";

import { FaArrowDown } from "react-icons/fa/";

const Hero = (props) => {
  const { scrollToContent, theme } = props;

  const Section = styled.section`
    align-items: center;
    background-size: cover;
    color: ${theme.text.color.primary.inverse};
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    min-height: 80vh;
    height: 100px;
    padding: ${theme.space.inset.l};
    padding-top: ${theme.header.height.homepage};

    h1 {
      text-align: center;
      font-size: ${theme.hero.h1.size};
      margin: ${theme.space.stack.l};
      color: ${theme.hero.h1.color};
      line-height: ${theme.hero.h1.lineHeight};
      strong {
        position: relative;
        &::after,
        &::before {
          content: "›";
          color: ${theme.text.color.attention};
          margin: 0 ${theme.space.xs} 0 0;
          text-shadow: 0 0 ${theme.space.s} ${theme.color.neutral.gray.k};
        }
        &::after {
          content: "‹";
          margin: 0 0 0 ${theme.space.xs};
        }
      }
    }
    button {
      background: ${theme.background.color.brand};
      border: 0;
      border-radius: 50%;
      font-size: ${theme.font.size.m};
      padding: ${theme.space.s} ${theme.space.m};
      cursor: pointer;
      width: ${theme.space.xl};
      height: ${theme.space.xl};
      &:focus {
        outline-style: none;
        background: ${theme.color.brand.primary.active};
      }
      svg {
        position: relative;
        top: 5px;
        fill: ${theme.color.neutral.white};
        stroke-width: 40;
        stroke: ${theme.color.neutral.white};
        animation-duration: ${theme.time.duration.long};
        animation-name: buttonIconMove;
        animation-iteration-count: infinite;
      }
    }
    @keyframes buttonIconMove {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
      100% {
        transform: translateY(0);
      }
    }
    @media (max-width: tablet) {
      h1 {
        max-width: 80%;
        font-size: ${`calc(${theme.hero.h1.size} * 1.3)`};
      }
      button {
        font-size: ${theme.font.size.l};
      }
    }
    @media (max-width: desktop) {
      h1 {
        max-width: 70%;
        font-size: ${`calc(${theme.hero.h1.size} * 1.5)`};
      }
      button {
        font-size: ${theme.font.size.xl};
      }
    }
  `;

  return (
    <React.Fragment>
      <div style={{ display: "grid" }}>
        {/* You can use a GatsbyImage component if the image is dynamic */}
        <StaticImage
          style={{
            gridArea: "1/1",
            // You can set a maximum height for the image, if you wish.
            // maxHeight: 600,
          }}
          layout="fullWidth"
          alt="hero image"
          placeholder="blurred"
          src="../../images/png/hero-background.png"
          formats={["auto", "webp", "avif"]}
        />
        <div
          style={{
            // By using the same grid area for both, they are stacked on top of each other
            gridArea: "1/1",
            position: "relative",
            // This centers the other elements inside the hero component
            placeItems: "center",
            layout: "fullWidth",
            display: "grid",
          }}
        >
          <Section className="hero">
            <h1>
              The place to learn and grow <br></br>your <strong>Diesel</strong> skills
            </h1>
            <button onClick={scrollToContent} aria-label="scroll">
              <FaArrowDown />
            </button>
          </Section>
        </div>
      </div>
    </React.Fragment>
  );
};

Hero.propTypes = {
  scrollToContent: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
};

export default Hero;
