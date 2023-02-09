import { useState } from "react";
const Nav = () => {
  return (
    <nav class="main-menu">
      <ul>
        <div className="Now">
          <li>
            <a href="https://Learningrobo.com">
              <i class="fa fa-th-large fa-2x"></i>
              <span class="nav-text">Home</span>
            </a>
          </li>
          <li class="has-subnav">
            <a href="#">
              <i class="fa fa-cogs fa-2x"></i>
              <span class="nav-text">About</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-paint-brush fa-2x"></i>
              <span class="nav-text">Bulletin</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-info fa-2x"></i>
              <span class="nav-text">Event</span>
            </a>
          </li>
          <li class="has-subnav">
            <a href="#">
              <i class="fa fa-address-book fa-2x"></i>
              <span class="nav-text">Contact us</span>
            </a>
          </li>
        </div>
      </ul>
      <ul class="logout">
        {/* <li>
          <a href="#">
            <i class="fa fa-power-off fa-2x"></i>
            <span class="nav-text">Logout</span>
          </a>
        </li> */}
      </ul>
    </nav>
  );
};
export default Nav;
