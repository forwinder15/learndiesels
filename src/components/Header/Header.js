import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { createRef } from "react";
import VisibilitySensor from "react-visibility-sensor";

import { ScreenWidthContext, FontLoadedContext } from "../../layouts";
import config from "../../../content/meta/config";
import Menu from "../Menu";
import { StaticImage } from "gatsby-plugin-image";
import styled from "@emotion/styled";

class Header extends React.Component {
  state = {
    fixed: false,
  };

  visibilitySensorChange = (val) => {
    if (val) {
      this.setState({ fixed: false });
    } else {
      this.setState({ fixed: true });
    }
  };

  getHeaderSize = () => {
    const fixed = this.state.fixed ? "fixed" : "";
    const homepage = this.props.path === "/" ? "homepage" : "";

    return `${fixed} ${homepage}`;
  };

  render() {
    const { pages, path, theme } = this.props;
    const { fixed } = this.state;

  

    return (
      <React.Fragment>
        <header className={`header ${this.getHeaderSize()}`}>
         
          <FontLoadedContext.Consumer>
            {(loaded) => (
              <ScreenWidthContext.Consumer>
                {(width) => (
                  <Menu
                    path={path}
                    fixed={fixed}
                    screenWidth={width}
                    fontLoaded={loaded}
                    pages={pages}
                    theme={theme}
                  />
                )}
              </ScreenWidthContext.Consumer>
            )}
          </FontLoadedContext.Consumer>
        </header>
        <VisibilitySensor onChange={this.visibilitySensorChange}>
          <div className="sensor" />
        </VisibilitySensor>
      </React.Fragment>
    );
  }
}

Header.propTypes = {
  pages: PropTypes.array.isRequired,
  path: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
};

export default Header;


{/* <StaticImage
                src="../../images/jpg/avatar1.jpg"
                alt="Learn Diesels"
                placeholder="blurred"
              /> */}