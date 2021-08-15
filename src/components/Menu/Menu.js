import React from "react";
import "core-js/modules/es.array.from";
import { Link } from 'gatsby';
import './style.css';

import { FaBars } from "react-icons/fa/";
import { FaTimes } from "react-icons/fa/";



class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.itemList = React.createRef();

    const pages = props.pages.map((page) => ({
      to: page.node.fields.slug,
      label: page.node.frontmatter.menuTitle
        ? page.node.frontmatter.menuTitle
        : page.node.frontmatter.title,
    }));

    this.renderedItems = []; // will contain references to rendered DOM elements of menu
  }

  state = {
    open: false,
    hiddenItems: [],
  };

  hideOverflowedMenuItems = () => {
    const PADDING_AND_SPACE_FOR_MORELINK = this.props.screenWidth >= 1024 ? 60 : 0;

    const itemsContainer = this.itemList.current;
    const maxWidth = itemsContainer.offsetWidth - PADDING_AND_SPACE_FOR_MORELINK;

    this.setState({ hiddenItems: [] }); // clears previous state

    const menu = this.renderedItems.reduce(
      (result, item) => {
        item.classList.add("item");
        item.classList.remove("hideItem");

        const currentCumulativeWidth = result.cumulativeWidth + item.offsetWidth;
        result.cumulativeWidth = currentCumulativeWidth;

        if (!item.classList.contains("more") && currentCumulativeWidth > maxWidth) {
          const link = item.querySelector("a");

          item.classList.add("hideItem");
          item.classList.remove("item");
          result.hiddenItems.push({
            to: link.getAttribute("data-slug"),
            label: link.text,
          });
        }
        return result;
      },
      { visibleItems: [], cumulativeWidth: 0, hiddenItems: [] }
    );

    this.setState((prevState) => ({ hiddenItems: menu.hiddenItems }));
  };

  toggleMenu = e => {
    e.preventDefault();

    if (this.props.screenWidth < 1024) {
      this.renderedItems.map(item => {
        const oldClass = this.state.open ? "nav-menu active" : "nav-menu";
        const newClass = this.state.open ? "nav-menu" : "nav-menu active";

        if (item.classList.contains(oldClass)) {
          item.classList.add(newClass);
          item.classList.remove(oldClass);
        }
      });
    }

    this.setState(prevState => ({ open: !prevState.open }));
  };

  closeMenu = (e) => {
    //e.preventDefault();

    if (this.state.open) {
      this.setState({ open: false });
      if (this.props.screenWidth < 1024) {
        this.renderedItems.map((item) => {
          if (item.classList.contains("main-container")) {
            item.classList.remove("main-container");
          }
        });
      }
    }
  };



  render() {
    const { open } = this.state;
    


    return (
      <React.Fragment>
      <div>
     <div className={open ? "main-container" : ""} onClick={this.closeMenu} />
      <nav className="navbar" onClick={this.toggleMenu}>
        <div className="nav-container">
          <Link to='/'
          className="nav-logo">
            Learn Diesels 
            <i className="fa fa-code"></i>
          </Link>

          <ul className={open ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/"
                className="nav-links"
                activeClassName="active"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/category"
                className="nav-links"
                activeClassName="active"
              >
                Categories
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/about-me"
                className="nav-links"
                activeClassName="active"
              >
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <a
              className="youtube"
                href="/youtube"
                activeClassName="active"
              >
                YouTube
              </a>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/search"
                className="nav-links"
                activeClassName="active"
              >
                Search
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/contact"
                className="nav-links"
                activeClassName="active"
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="nav-icon" onClick={this.closeMenu}>
           <i>{open ? <FaTimes /> : <FaBars /> }</i> 
          </div>
        </div>
      </nav>
    </ div>
      </React.Fragment>
    );
  }
}

export default Menu;
