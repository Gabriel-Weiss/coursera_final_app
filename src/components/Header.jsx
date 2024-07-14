import React from "react";
import Nav from "./Nav";

const Header = () => {
  return (
    <section className="container">
      <section className="row">
        <section className="col">
          <img
            src="src/assets/Logo.svg"
            alt="The official logo of the Little Lemon restaurant"
          />
        </section>
        <section className="col">
          <Nav></Nav>
        </section>
      </section>
    </section>
  );
};

export default Header;
