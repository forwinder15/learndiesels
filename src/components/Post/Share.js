import React from "react";
import PropTypes from "prop-types";
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookShareCount,
  FacebookIcon,
  TwitterIcon,
} from "react-share";

import config from "../../../content/meta/config";
import styled from "@emotion/styled";

const PostShare = (props) => {
  const {
    post: {
      fields: { slug },
      frontmatter: { title },
      excerpt,
    },
    theme,
  } = props;

  const url = config.siteUrl + config.pathPrefix + slug;

  const iconSize = 36;
  const filter = (count) => (count > 0 ? count : "");

  const Share = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  const Label = styled.span`
    font-size: 1.2em;
    margin: 0 0em 1em;
  `;

  const Links = styled.div`
    display: flex;
    flex-direction: row;
  `;

  return (
    <React.Fragment>
      <Share>
        <Label>SHARE</Label>
        <Links>
          <TwitterShareButton
            url={url}
            title={title}
            additionalProps={{
              "aria-label": "Twitter share",
            }}
          >
            <TwitterIcon round size={iconSize} />
          </TwitterShareButton>
          <FacebookShareButton
            url={url}
            quote={`${title} - ${excerpt}`}
            additionalProps={{
              "aria-label": "Facebook share",
            }}
          >
            <FacebookIcon round size={iconSize} />
            <FacebookShareCount url={url}>
              {(count) => <div className="share-count">{filter(count)}</div>}
            </FacebookShareCount>
          </FacebookShareButton>
        </Links>
      </Share>
    </React.Fragment>
  );
};

PostShare.propTypes = {
  post: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default PostShare;
