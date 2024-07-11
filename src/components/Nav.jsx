import React from "react";

const Nav = () => {
  return (
    <nav>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          fontWeight: "bold",
          fontFamily: "fantasy"
        }}
      >
        <li>Home</li>
        <li>About</li>
        <li>Menu</li>
        <li>Reservations</li>
        <li>Order Online</li>
        <li>Login</li>
      </ul>
    </nav>
  );
};

export default Nav;
