import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import StaticImage from "gatsby-plugin-image";

import { css } from '@emotion/react';



interface SiteNavLogoProps {
  logo?: {
    childImageSharp: {
      gatsbyImageData
    };
  };
}

const SubscribeLogo = () => (
  <StaticQuery
    query={graphql`
      query SubscribeOverlayLogo {
        logo: file(relativePath: { eq: "images/jpg/logo.png" }) {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            gatsbyImageData
          }
        }
      }
    `}
    render={(data: SiteNavLogoProps) => {
      if (!data.logo) {
        return;
      }

      return (
        <StaticImage
          css={SubscribeOverlayLogo}
          className="subscribe-overlay-logo"
          src={data.logo.childImageSharp.gatsbyImageData}
          alt="alt here"
        />
      );
    }}
  />
);

const SubscribeOverlayLogo = css`
  position: fixed;
  top: 23px;
  left: 30px;
  height: 30px;
`;

export default SubscribeLogo;