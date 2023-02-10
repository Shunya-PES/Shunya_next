import { useState } from "react";
const Nav = () => {
  return (
    <nav className="main-menu">
      <ul>
        <div classNameName="Now">
          <li>
            <a href="#home">
              <i className="fa fa-home fa-2x"></i>
              <span className="nav-text">Home</span>
            </a>
          </li>
          <li className="has-subnav">
            <a href="#About">
              <i className="fa fa-user fa-2x"></i>
              <span className="nav-text">About</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-clipboard fa-2x"></i>
              <span className="nav-text">Bulletin</span>
            </a>
          </li>
          <li>
            <a href="#Events">
              <i className="fa fa-info fa-2x"></i>
              <span className="nav-text">Event</span>
            </a>
          </li>
          <li className="has-subnav">
            <a href="#Footer">
              <i className="fa fa-address-book fa-2x"></i>
              <span className="nav-text">Contact us</span>
            </a>
          </li>
        </div>
      </ul>
      <ul className="logout">
        {/* <li>
          <a href="#">
            <i className="fa fa-power-off fa-2x"></i>
            <span className="nav-text">Logout</span>
          </a>
        </li> */}
      </ul>
    </nav>
  );
};
export default Nav;
