import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "#495e57"
      }}
    >
      <span>Copyright &copy; {currentYear} Lucky Shrub Inc. All rights</span>
      <img style={{ width: "80px" }} src="src/assets/Logo.svg" alt="Logo" />
    </section>
  );
};

export default Footer;
