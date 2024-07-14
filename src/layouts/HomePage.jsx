import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import MenuList from "../components/MenuList";

const HomePage = () => {
  return (
    <section className="container">
      <section className="row">
        <section className="col">
          <MenuList />
        </section>
      </section>
    </section>
  );
};

export default HomePage;
