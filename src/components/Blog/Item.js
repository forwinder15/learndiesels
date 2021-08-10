import { FaArrowRight } from "react-icons/fa/";
import { FaTag } from "react-icons/fa/";
import { FaUser } from "react-icons/fa/";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const Item = (props) => {
  const {
    theme,
    post: {
      excerpt,
      fields: { slug },
      frontmatter: {
        title,
        category,
        author,
        cover: {
          children: [{ gatsbyImageData }],
        },
      },
    },
  } = props;

  const LiStyle = styled.li`
    border: 5px solid black;
    border-radius: ${theme.size.radius.default};
    padding: 20px 240px;

    @media (max-width: 992px) {
      padding: 20px 80px;
      max-width: 650px;
    }
    @media (max-width: 750px) {
      padding: 15px 10px;
      max-width: 750px;
    }
    margin: ${`calc(${theme.space.default} * 2) 0 calc(${theme.space.default} * 3)`};

    display: flex;
    transition: all ${theme.time.duration.default};
    background: transparent;
    &:hover {
      border: 1px solid ${theme.line.color};
      box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.03);

      &:after {
        bottom: ${`calc(${theme.space.default} * -2.5)`};
      }
      h1 {
        color: ${theme.blog.h1.hoverColor};
      }
    }
    a {
      text-decoration: none;
    }
    svg {
      fill: ${theme.icon.color};
      margin: ${theme.space.inline.xs};
    }
    span {
      align-items: center;
      display: flex;
      text-transform: uppercase;
      margin: ${theme.space.xs} ${theme.space.s} ${theme.space.xs} 0;
    }
    p {
      line-height: 1.5;
      padding: 0 ${theme.space.s};
    }
  `;
  const H1Style = styled.h1`
    padding: ${theme.space.m} ${theme.space.s} 0;
    line-height: ${theme.blog.h1.lineHeight};
    font-size: 3.5em;

    @media (max-width: 992px) {
      font-size: 2.5em;
    }
    @media (max-width: 750px) {
      font-size: 2em;
    }
  `;

  return (
    <React.Fragment>
      <LiStyle>
        <Link
          to={slug}
          key={slug}
          css={css`
            width: 100%;
            color: ${theme.text.color.primary};

            ::after {
              content: "";
              height: 0;
              position: absolute;
              bottom: ${`calc(${theme.space.default} * -1.5)`};
              left: 50%;
              transform: translateX(-50%);
              transition: all ${theme.time.duration.default};
              width: 50%;
            }
            &:first-child {
              &::before {
                border-top: 1px solid ${theme.line.color};
                content: "";
                height: 0;
                position: absolute;
                top: ${`calc(${theme.space.default} * -1.5)`};
                left: 50%;
                transform: translateX(-50%);
                transition: all ${theme.time.duration.default};
                width: 50%;
              }
            }
          `}
        >
          <div
            css={css`
              z-index: -1;
            `}
          >
            <GatsbyImage image={gatsbyImageData} alt="alt here" />
          </div>
          <H1Style>
            {title}{" "}
            <FaArrowRight
              css={css`
                display: inline-block;
                fill: ${theme.color.special.attention};
                stroke: ${theme.color.special.attention};
                stroke-width: 40;
                stroke-linecap: round;
                opacity: 0;
                transition: all 0.5s;
                transform: translateX(-50%);
              `}
            />
          </H1Style>
          <p
            css={css`
              display: flex;
              flex-flow: row wrap;
              font-size: 0.8em;
              padding: ${theme.space.m} ${theme.space.s};
              background: transparent;
            `}
          >
            <span>
              <FaUser size={18} /> {author}
            </span>
            {category && (
              <span>
                <FaTag size={18} /> {category}
              </span>
            )}
          </p>
          <p>{excerpt}</p>
        </Link>
      </LiStyle>
    </React.Fragment>
  );
};

Item.propTypes = {
  post: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default Item;
