import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import { FaCalendar } from "react-icons/fa/";
import { FaUser } from "react-icons/fa/";
import { FaTag } from "react-icons/fa/";
import styled from "@emotion/styled";

const Meta = (props) => {
  const { author: authorName, category, theme, updated } = props;

  const MetaStyle = styled.p`
    display: flex;
    flex-flow: row wrap;
    font-size: 0.8em;
    margin: ${theme.space.m} 0;
    background: transparent;
    svg {
      fill: ${theme.icon.color};
      margin: ${theme.space.inline.xs};
    }
    @media (max-width: tablet) {
      margin: ${`calc(${theme.space.m} * 1.5) 0 ${theme.space.m}`};
    }
  `;
  const Span = styled.span`
    align-items: center;
    display: flex;
    text-transform: uppercase;
    margin: ${theme.space.xs} ${theme.space.s} ${theme.space.xs} 0;
  `;

  return (
    <MetaStyle>
      <Span>
        <FaCalendar size={18} /> {updated}
      </Span>
      <Span>
        <FaUser size={18} /> {authorName}
      </Span>
      {category && (
        <Span>
          <FaTag size={18} />
          <Link to={`/category/${category.split(" ").join("-")}`}>{category}</Link>
        </Span>
      )}
    </MetaStyle>
  );
};

Meta.propTypes = {
  prefix: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string,
  theme: PropTypes.object.isRequired,
};

export default Meta;
