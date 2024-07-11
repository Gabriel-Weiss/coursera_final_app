import React from "react";

const Main = () => {
  return (
    <section
      style={{
        backgroundColor: "lavender",
        height: "100%"
      }}
    >
      <section
        style={{
          backgroundColor: "#495e57",
          height: "25%",
          position: "relative",
          paddingInline: "100px"
        }}
      >
        <section
          style={{
            width: "250px",
            height: "90%",
            position: "absolute",
            top: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around"
          }}
        >
          <p style={{ color: "#F4CE14", fontSize: "40px" }}>Little Lemon</p>
          <p style={{ color: "#edefee", fontSize: "25px" }}>Chicago</p>
          <p
            style={{
              color: "#edefee",
              fontSize: "15px",
              width: "200px",
              marginBlock: "3px"
            }}
          >
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button
            type="button"
            style={{
              width: "50%",
              paddingBlock: "5px",
              paddingInline: "8px",
              fontSize: "12px",
              borderRadius: "10px",
              backgroundColor: "#f4ce14",
              border: "0",
              fontWeight: "bold"
            }}
          >
            Reserve a Table
          </button>
        </section>
        <img
          style={{
            width: "200px",
            height: "200px",
            position: "absolute",
            right: "95px",
            top: "20px",
            objectFit: "cover",
            borderRadius: "10px"
          }}
          src="src\assets\restauranfood.jpg"
          alt="A image of three sandwiches on a plate, served by a person"
        />
      </section>
      <section style={{ backgroundColor: "lightgray", height: "75%" }}>
        <section>This weeks specials!</section>
        <section>Online Menu</section>
        <section>
          <section>Card1</section>
          <section>Card2</section>
          <section>Card3</section>
        </section>
      </section>
    </section>
  );
};

export default Main;
