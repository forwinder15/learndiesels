import React from "react";
import PropTypes from "prop-types";
import "prismjs/themes/prism-okaidia.css";

import asyncComponent from "../AsyncComponent";
import Headline from "../Article/Headline";
import Bodytext from "../Article/Bodytext";
import Meta from "./Meta";
import Author from "./Author";
import NextPrev from "./NextPrev";
import { Subscribe } from "../subscribe/Subscribe";

const Share = asyncComponent(() =>
  import("./Share")
    .then((module) => {
      return module.default;
    })
    .catch((error) => {})
);

const Post = (props) => {
  const {
    post,
    post: {
      html,
      fields: { slug },
      frontmatter: { title, author, category, updated },
    },
    authornote,
    next: nextPost,
    prev: prevPost,
    theme,
  } = props;

  return (
    <React.Fragment>
      <header>
        <Headline title={title} theme={theme} />
        <Meta author={author} updated={updated} category={category} theme={theme} />
      </header>
      <Bodytext html={html} theme={theme} />
      <footer>
        <Subscribe />
        <Share post={post} theme={theme} />
        <Author note={authornote} theme={theme} />
        <NextPrev next={nextPost} prev={prevPost} theme={theme} />
      </footer>
    </React.Fragment>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
  authornote: PropTypes.string.isRequired,
  next: PropTypes.object,
  prev: PropTypes.object,
  theme: PropTypes.object.isRequired,
};

export default Post;
