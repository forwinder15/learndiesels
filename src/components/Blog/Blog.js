import PropTypes from "prop-types";
import React from "react";
import styled from "@emotion/styled";

import Item from "./Item";

const Blog = (props) => {
  const { posts, theme } = props;

  const MainStyle = styled.main`
    padding: 0 ${theme.space.inset.default};

    @media (max-width: tablet) {
      padding: 0 ${`0 calc(${theme.space.default} * 1.5)`};
    }
  `;
  const UlStyle = styled.ul`
    list-style: none;
    margin: 0 auto;
    padding: ${`calc(${theme.space.default} * 1.5) 0 calc(${theme.space.default} * 0.5)`};

    @media (max-width: tablet) {
      max-width: ${theme.text.maxWidth.tablet};
    }

    @media (max-width: desktop) {
      max-width: ${theme.text.maxWidth.desktop};
    }
  `;
  return (
    <React.Fragment>
      <MainStyle>
        <UlStyle>
          {posts.map((post) => {
            const {
              node,
              node: {
                fields: { slug },
              },
            } = post;
            return <Item key={slug} post={node} theme={theme} />;
          })}
        </UlStyle>
      </MainStyle>
    </React.Fragment>
  );
};

Blog.propTypes = {
  posts: PropTypes.array.isRequired,
  theme: PropTypes.object.isRequired,
};

export default Blog;
