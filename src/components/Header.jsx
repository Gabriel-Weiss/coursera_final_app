import React from "react";
import Nav from "./Nav";

const Header = () => {
  return (
    <section
      style={{
        paddingInline: "100px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <img
        src="src/assets/Logo.svg"
        alt="The official logo of the Little Lemon restaurant"
      />
      <Nav></Nav>
    </section>
  );
};

export default Header;
