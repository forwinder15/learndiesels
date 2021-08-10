import PropTypes from "prop-types";
import React from "react";
import { graphql } from "gatsby";
import "core-js/modules/es.array.find";

import Article from "../components/Article";
import Search from "../components/Search";
import { ThemeContext } from "../layouts";
import Seo from "../components/Seo";
import styled from "@emotion/styled";

import AlgoliaIcon from "!svg-react-loader!../images/svg-icons/search-by-algolia.svg?name=AlgoliaLogo";

const SearchPage = (props) => {
  const {
    data: {
      site: {
        siteMetadata: { algolia },
      },
    },
  } = props;

  const Icon = styled.icon`
    .icon {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 20px;
    }
    .icon svg {
      height: 30px;
    }
  `;

  return (
    <React.Fragment>
      <ThemeContext.Consumer>
        {(theme) => (
          <Article theme={theme}>
            <Icon>
              <AlgoliaIcon />
            </Icon>

            <Search algolia={algolia} theme={theme} />
          </Article>
        )}
      </ThemeContext.Consumer>
    </React.Fragment>
  );
};

SearchPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SearchPage;

//eslint-disable-next-line no-undef
export const query = graphql`
  query SearchQuery {
    site {
      siteMetadata {
        algolia {
          appId
          searchOnlyApiKey
          indexName
        }
      }
    }
  }
`;
