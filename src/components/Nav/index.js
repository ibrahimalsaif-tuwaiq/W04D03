import React from "react";
import { Link, useHistory } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import "./style.css";

const Nav = () => {
  const history = useHistory();

  const back = () => {
    history.goBack();
  };

  return (
    <div>
      <ul className="navBar">
        <li>
          <IoArrowBack onClick={back} />
        </li>
        <li><Link className="navItem" to="/" style={{ textDecoration: 'none' }}>Home</Link></li>
        <li><Link className="navItem" to="/contact" style={{ textDecoration: 'none' }}>Contact</Link></li>
        <li><Link className="navItem" to="/about" style={{ textDecoration: 'none' }}>About</Link></li>
        <li><Link className="navItem" to="/cards" style={{ textDecoration: 'none' }}>Cards</Link></li>
      </ul>
    </div>
  );
};

export default Nav;
