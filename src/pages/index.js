import PropTypes from "prop-types";
import React from "react";
import { graphql } from "gatsby";
import { ThemeContext } from "../layouts";
import Blog from "../components/Blog";
import Hero from "../components/Hero";

class IndexPage extends React.Component {
  separator = React.createRef();

  scrollToContent = (e) => {
    this.separator.current.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  render() {
    const {
      data: {
        posts: { edges: posts = [] },
      },
    } = this.props;

    return (
      <React.Fragment>
        <ThemeContext.Consumer>
          {(theme) => <Hero scrollToContent={this.scrollToContent} theme={theme} />}
        </ThemeContext.Consumer>

        <hr ref={this.separator} />

        <ThemeContext.Consumer>
          {(theme) => <Blog posts={posts} theme={theme} />}
        </ThemeContext.Consumer>

        <style jsx>{`
          hr {
            margin: 0;
            border: 0;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default IndexPage;

//eslint-disable-next-line no-undef
export const query = graphql`
  query IndexQuery {
    posts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//posts/[0-9]+.*--/" } }
      sort: { fields: [fields___prefix], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
            prefix
          }
          frontmatter {
            title
            category
            author
            cover {
              children {
                ... on ImageSharp {
                  gatsbyImageData(layout: CONSTRAINED, aspectRatio: 2, placeholder: TRACED_SVG)
                }
              }
            }
          }
        }
      }
    }
  }
`;

//hero-background
