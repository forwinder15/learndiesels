import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { lighten } from "polished";

const Bodytext = (props) => {
  const { html, theme } = props;

  const BodytextStyle = styled.div`
    animation-name: bodytextEntry;
    animation-duration: ${theme.time.duration.long};
    h2,
    h3 {
      margin: 1.5em 0 1em;
    }
    h2 {
      line-height: ${theme.font.lineHeight.s};
      font-size: ${theme.font.size.l};
    }
    h3 {
      font-size: ${theme.font.size.m};
      line-height: ${theme.font.lineHeight.m};
    }
    p {
      font-size: ${theme.font.size.m};
      line-height: ${theme.font.lineHeight.xxl};
      margin: 0 0 1.5em;
    }
    ul {
      list-style: square;
      margin: 0 0 1.5em;
      padding: 0 0 0 1.5em;
    }
    li {
      margin: 0.7em 0;
      font-size: 1.2em;
      line-height: 1.5;
    }
    a {
      font-weight: ${theme.font.weight.bold};
      color: ${theme.color.brand.primary};
      text-decoration: underline;
    }
    a.gatsby-resp-image-link {
      border: 0;
      display: block;
      margin: 2.5em 0;
      border-radius: ${theme.size.radius.default};
      overflow: hidden;
      border: 1px solid ${theme.line.color};
    }
    @keyframes bodytextEntry {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    table {
      display: inline-block;
      overflow-x: auto;
      position: relative;
      margin: 0.5em 0 2.5em;
      max-width: 100%;
      width: 100%;
      border-spacing: 0;
      border-collapse: collapse;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
        "Open Sans", "Helvetica Neue", sans-serif;
      font-size: 1.4rem;
      white-space: nowrap;
      vertical-align: top;
    }
    table {
      -webkit-overflow-scrolling: touch;
      background: radial-gradient(ellipse at left, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 75%) 0
          center,
        radial-gradient(ellipse at right, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 75%) 100% center;
      background-attachment: scroll, scroll;
      background-size: 10px 100%, 10px 100%;
      background-repeat: no-repeat;
    }
    table td:first-of-type {
      background-image: linear-gradient(
        to right,
        rgba(255, 255, 255, 1) 50%,
        rgba(255, 255, 255, 0) 100%
      );
      background-size: 20px 100%;
      background-repeat: no-repeat;
    }
    table td:last-child {
      background-image: linear-gradient(
        to left,
        rgba(255, 255, 255, 1) 50%,
        rgba(255, 255, 255, 0) 100%
      );
      background-position: 100% 0;
      background-size: 20px 100%;
      background-repeat: no-repeat;
    }
    table th {
      /* color: var(--darkgrey); */
      color: #3e3e3c;
      font-size: 1.2rem;
      font-weight: 700;
      letter-spacing: 0.2px;
      text-align: left;
      text-transform: uppercase;
      /* background-color: color(var(--whitegrey) l(+4%)); */
      background-color: ${lighten("0.04", theme.color.neutral.gray.c)};
    }
    table th,
    table td {
      padding: 6px 12px;
      /* border: color(var(--whitegrey) l(-1%) s(-5%)) 1px solid; */
      border: ${lighten("-0.01", theme.color.neutral.gray.c)} 1px solid;
    }

    @media only screen and (max-width: 760px),
      (min-device-width: 768px) and (max-device-width: 1024px) {
      /* Force table to not be like tables anymore */
      table {
        overflow-x: auto;
        font-size: 0.8rem;
      }
      table th {
        font-size: 1rem;
      }

      blockquote {
        padding: 2rem 1.5rem;
        color: #3e3e3c;
        font-style: italic;
        border-left: 3px solid ${theme.color.brand.primary};
        position: relative;
        margin: 2rem 0;
      }
    }
  `;

  return (
    <React.Fragment>
      <BodytextStyle dangerouslySetInnerHTML={{ __html: html }} />
    </React.Fragment>
  );
};

Bodytext.propTypes = {
  html: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
};

export default Bodytext;
