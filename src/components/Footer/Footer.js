import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const Footer = (props) => {
  const { html, theme } = props;

  const FooterStyle = styled.footer`
    background: ${theme.color.neutral.white};
    padding: ${theme.space.inset.default};
    padding-top: 0;
    padding-bottom: 40px;
    ul {
      list-style: none;
      text-align: center;
      padding: 0;
      li {
        color: ${theme.color.neutral.gray.g};
        font-size: ${theme.font.size.xxs};
        padding: ${theme.space.xxs} ${theme.space.s};
        position: relative;
        display: inline-block;
        &::after {
          content: "•";
          position: absolute;
          right: ${`calc(${theme.space.xs} * -1)`};
        }
        &:last-child::after {
          content: "";
        }
      }
    }
  `;
  return (
    <React.Fragment>
      <FooterStyle dangerouslySetInnerHTML={{ __html: html }} />
    </React.Fragment>
  );
};

Footer.propTypes = {
  html: PropTypes.string,
  theme: PropTypes.object.isRequired,
};

export default Footer;
