import { useState } from "react";
import { RiHome3Line } from 'react-icons/ri';
import { RiContactsLine } from 'react-icons/ri';
import { BsCalendar4Event } from 'react-icons/bs';
import { HiListBullet } from 'react-icons/hi';
import { AiOutlineInfo } from 'react-icons/ai';
import { RxListBullet } from 'react-icons/rx';

const Nav = () => {
  return (
    <nav className="main-menu">
      <ul>
        <div className="Now">
          <li>
            <a href="#home">
              <RiHome3Line size={40} />
              <span className="nav-text" style={{ paddingLeft: '30px' }}>Home</span>
            </a>
          </li>
          <li className="has-subnav">
            <a href="#About">
              <AiOutlineInfo size={40} />
              <span className="nav-text" style={{ paddingLeft: '30px' }}>About</span>
            </a>
          </li>
          <li>
            <a href="#">
              <RxListBullet size={40} />
              <span className="nav-text" style={{ paddingLeft: '30px' }}>Bulletin</span>
            </a>
          </li>
          <li>
            <a href="#Events">
              <BsCalendar4Event size={40} />
              <span className="nav-text" style={{ paddingLeft: '30px' }}>Event</span>
            </a>
          </li>
          <li className="has-subnav">
            <a href="#Footer">
              <RiContactsLine size={40} />
              <span className="nav-text" style={{ paddingLeft: '30px' }}>Contact us</span>
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
