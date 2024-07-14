import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <section className="container-fluid">
        <section className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <section className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="/">
              Home
            </a>
            <a className="nav-link" href="#">
              About
            </a>
            <a className="nav-link" href="#">
              Menu
            </a>
            <a className="nav-link active" href="/booking">
              Reservations
            </a>
            <a className="nav-link" href="#">
              Order Online
            </a>
            <a className="nav-link" href="#">
              Login
            </a>
          </section>
        </section>
      </section>
    </nav>
  );
};

export default Nav;
