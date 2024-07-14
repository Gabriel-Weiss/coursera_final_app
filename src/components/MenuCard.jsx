import React from "react";

const MenuCard = ({ image, name, price, description }) => {
  return (
    <section
      style={{
        backgroundColor: "lightgray",
        width: "30%",
        height: "380px",
        overflow: "hidden",
        border: "none",
        borderTopLeftRadius: "12px",
        borderTopRightRadius: "12px",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <img
        src={image}
        style={{
          width: "100%",
          objectFit: "cover"
        }}
        alt=""
      />
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "25px",
          padding: "20px"
        }}
      >
        <section
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <span
            style={{
              color: "#495e57",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <span>{name}</span>
            <span style={{ color: "#ee9972" }}>{price}</span>
          </span>
          <p
            style={{
              color: "#495e57"
            }}
          >
            {description}
          </p>
        </section>
        <span
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center"
          }}
        >
          <span
            style={{
              color: "#495e57",
              fontWeight: "bold"
            }}
          >
            Order a delivery
          </span>
          <img
            style={{ width: "20px" }}
            src="src/assets/icons8-delivery-48.png"
            alt=""
          />
        </span>
      </section>
    </section>
  );
};

export default MenuCard;
