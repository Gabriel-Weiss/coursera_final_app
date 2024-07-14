import React from "react";
import MenuCard from "./MenuCard";

const MenuList = () => {
  return (
    <section className="container">
      <section className="row">
        <section className="col">
          <section className="container-sm">
            <section className="row py-5">
              <section
                className="col-10 fs-2"
                style={{
                  color: "#495e57"
                }}
              >
                This weeks specials!
              </section>
              <button type="button" className="col btn btn-warning">
                Online Menu
              </button>
            </section>
            <section className="row d-flex justify-content-between">
              <MenuCard
                image={"src/assets/greek salad.jpg"}
                name={"Greek salad"}
                price={"$12.99"}
                description={
                  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis explicabo laboriosam exercitationem ducimus iusto asperiores."
                }
              />
              <MenuCard
                image={"src/assets/bruchetta.svg"}
                name={"Bruchetta"}
                price={"$5.99"}
                description={
                  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis explicabo laboriosam exercitationem ducimus iusto asperiores."
                }
              />
              <MenuCard
                image={"src/assets/lemon dessert.jpg"}
                name={"Lemon Dessert"}
                price={"$5.00"}
                description={
                  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis explicabo laboriosam exercitationem ducimus iusto asperiores."
                }
              />
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};

export default MenuList;
