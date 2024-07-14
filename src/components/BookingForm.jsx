import React, { useState } from "react";

const BookingForm = ({
  availableTimes,
  dispatch,
  date,
  setDate,
  guests,
  setGuests,
  occasion,
  setOccasion,
  handleSubmit
}) => {
  return (
    <section style={{ padding: "80px 100px 20px 100px" }}>
      <span
        style={{
          display: "grid",
          placeContent: "center",
          color: "#495e57",
          fontWeight: "bolder",
          fontSize: "30px",
          paddingBottom: "20px"
        }}
      >
        Book a Table
      </span>
      <section
        style={{
          display: "grid",
          placeContent: "center",
          color: "#495e57",
          fontWeight: "bold"
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gridGap: "30px",
            maxWidth: "400px"
          }}
        >
          <label htmlFor="res-date">Choose date</label>
          <input
            style={{
              paddingBlock: "10px",
              borderRadius: "5px",
              borderWidth: "1px",
              borderColor: "#495e57",
              width: "200px",
              textAlign: "center",
              backgroundColor: "#edefee"
            }}
            type="date"
            id="res-date"
            value={date.toLocaleDateString("en-CA", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit"
            })}
            onChange={(e) => setDate(new Date(e.target.value))}
          />

          <label htmlFor="res-time">Choose time</label>
          <select
            style={{
              paddingBlock: "10px",
              borderRadius: "5px",
              borderWidth: "1px",
              borderColor: "#495e57",
              width: "200px",
              textAlign: "center",
              backgroundColor: "#edefee"
            }}
            id="res-time"
            value={""}
            onChange={(e) => dispatch({ type: "SET_DATE" })}
          >
            {availableTimes.map((item, key) => (
              <option key={key}>{item}</option>
            ))}
          </select>

          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            style={{
              paddingBlock: "10px",
              borderRadius: "5px",
              borderWidth: "1px",
              borderColor: "#495e57",
              width: "200px",
              textAlign: "center",
              backgroundColor: "#edefee"
            }}
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          />

          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            style={{
              paddingBlock: "10px",
              borderRadius: "5px",
              borderWidth: "1px",
              borderColor: "#495e57",
              width: "200px",
              textAlign: "center",
              backgroundColor: "#edefee"
            }}
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
          >
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>

          <input
            type="submit"
            value="Make Your reservation"
            style={{
              gridColumn: "1 / -1",
              fontWeight: "bold",
              paddingBlock: "10px",
              borderRadius: "5px",
              borderWidth: "1px",
              borderColor: "#495e57",
              color: "#333333",
              backgroundColor: "#f4ce14"
            }}
          />
        </form>
      </section>
    </section>
  );
};

export default BookingForm;
