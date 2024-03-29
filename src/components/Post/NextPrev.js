import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { FaArrowRight } from "react-icons/fa/";
import { FaArrowLeft } from "react-icons/fa/";

const NextPrev = (props) => {
  const {
    theme,
    next: {
      fields: { prefix: nextPrefix, slug: nextSlug } = {},
      frontmatter: { title: nextTitle } = {},
    } = {},
    prev: {
      fields: { prefix: prevPrefix, slug: prevSlug } = {},
      frontmatter: { title: prevTitle } = {},
    } = {},
  } = props;

  const LinkStyle = styled.div`
    display: inline-block;
    padding: 0 ${theme.space.xl} ${theme.space.l};
    border-bottom: 1px solid ${theme.line.color};
    margin: ${theme.space.stack.l};

    a {
      display: inline-block;
      flex-basis: 50%;
    }
    a:nth-of-type(2) {
      margin: ${theme.space.default} 0 0;
    }
    svg {
      fill: ${theme.color.special.attention};
      width: ${theme.space.m};
      height: ${theme.space.m};
      margin: ${theme.space.inline.m};
    }
    @media (hover: hover) {
      a:hover svg {
        transform: scale(1.5);
      }
    }
    @media (max-width: 650px) {
      svg {
        transition: all 0.5s;
        margin: ${theme.space.inline.s};
      }
    }
  `;
  const Words = styled.h4`
    display: inline-block;
    font-weight: 600;
    margin: 0;
    font-size: 1.4em;
    color: ${theme.color.neutral.gray.j};
  `;
  const Time = styled.time`
    color: ${theme.color.neutral.gray.g};
    display: block;
    font-weight: 400;
    font-size: 0.8em;
    margin-top: 0.5em;
  `;
  return (
    <React.Fragment>
      <h3
        css={css`
          display: grid;
          font-size: 2em;
          justify-content: center;
        `}
      >
        Related Articles
      </h3>
      <LinkStyle>
        {nextSlug && (
          <Link to={nextSlug}>
            <FaArrowLeft />
            <Words>
              {nextTitle} <Time>{nextPrefix} </Time>
            </Words>
          </Link>
        )}
        {prevSlug && (
          <Link to={prevSlug}>
            <FaArrowRight />
            <Words>
              {prevTitle} <Time>{prevPrefix}</Time>
            </Words>
          </Link>
        )}
      </LinkStyle>
    </React.Fragment>
  );
};

NextPrev.propTypes = {
  next: PropTypes.object,
  prev: PropTypes.object,
  theme: PropTypes.object.isRequired,
};

export default NextPrev;
