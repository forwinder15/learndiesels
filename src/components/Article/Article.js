import React from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/react";

const Article = (props) => {
  const { children } = props;

  return (
    <React.Fragment>
      <article
        css={css`
          padding: 20px 240px;
          margin: 0 auto;

          @media (max-width: 992px) {
            padding: 20px 80px;
            max-width: 650px;
          }
          @media (max-width: 750px) {
            padding: 15px 10px;
            max-width: 750px;
          }
        `}
      >
        {" "}
        {children}
      </article>
    </React.Fragment>
  );
};

export default Article;
