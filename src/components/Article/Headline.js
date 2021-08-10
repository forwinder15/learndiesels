import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const Headline = (props) => {
  const { title, children, theme } = props;

  const Headh1 = styled.h1`
    font-size: 3em;
    margin: ${theme.space.stack.l};
    animation-name: headlineEntry;
    animation-duration: ${theme.time.duration.long};
    @media (max-width: 980px) {
      font-size: ${`calc(${theme.font.size.xl} * 1.2)`};
    }
    @media (max-width: 750px) {
      ${`calc(${theme.hero.h1.size} * 1.5)`};
    }

    span {
      font-weight: ${theme.font.weight.standard};
      display: block;
      font-size: 0.5em;
      letter-spacing: 0;
      margin: ${theme.space.stack.xs};
    }
    svg {
      height: 0.75em;
      fill: ${theme.color.brand.primary};
    }
    @keyframes headlineEntry {
      from {
        opacity: 0.5;
      }
      to {
        opacity: 1;
      }
    }
  `;

  return (
    <React.Fragment>
      {title ? <Headh1>{title}</Headh1> : <Headh1>{children}</Headh1>}
    </React.Fragment>
  );
};

Headline.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  theme: PropTypes.object.isRequired,
};

export default Headline;
