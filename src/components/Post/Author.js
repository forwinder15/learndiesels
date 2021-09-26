import React from "react";
import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";
import styled from "@emotion/styled";

const Author = (props) => {
  const { note, theme } = props;

  const AuthorStyle = styled.div`
    margin: ${theme.space.l} 0;
    padding: ${theme.space.l} 0;
    border-top: 1px solid ${theme.line.color};
    border-bottom: 1px solid ${theme.line.color};
    @media (max-width: tablet) {
      display: flex;
    }
  `;
  const Note = styled.div`
    font-size: 0.9em;
    line-height: 1.6;
  `;
  const Avatar = styled.div`
    float: left;
    border: 1px solid ${theme.line.color};
    display: inline-block;
    height: 100px;
    margin: 5px 20px 0 0;
    overflow: hidden;
    width: 200px;
    @media (max-width: tablet) {
      flex: 0 0 auto;
    }
  `;

  return (
    <React.Fragment>
      <AuthorStyle>
        <Avatar>
          <StaticImage
            src="../../images/jpg/avatar.jpg"
            alt="John Coker"
            placeholder="tracedSVG"
            width={400}
          />
        </Avatar>
        <Note dangerouslySetInnerHTML={{ __html: note }} />
      </AuthorStyle>
    </React.Fragment>
  );
};

Author.propTypes = {
  note: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
};

export default Author;
