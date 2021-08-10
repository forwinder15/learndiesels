import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import styled from "@emotion/styled";

const List = (props) => {
  const { edges, theme } = props;

  const UlStyle = styled.ul`
    margin: ${theme.space.stack.m};
    padding: ${theme.space.m};
    list-style: square;
  `;

  const LiStyle = styled.li`
    padding: ${theme.space.xs} 0;
    font-size: ${theme.font.size.s};
    line-height: ${theme.font.lineHeight.l};
  `;
  return (
    <React.Fragment>
      <UlStyle>
        {edges.map((edge) => {
          const {
            node: {
              frontmatter: { title },
              fields: { slug },
            },
          } = edge;

          return (
            <LiStyle key={slug}>
              <Link to={slug}>{title}</Link>
            </LiStyle>
          );
        })}
      </UlStyle>
    </React.Fragment>
  );
};

List.propTypes = {
  edges: PropTypes.array.isRequired,
  theme: PropTypes.object.isRequired,
};

export default List;
