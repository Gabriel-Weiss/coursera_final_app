import React, { useEffect, useReducer, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "../layouts/HomePage";
import BookingPage from "../layouts/BookingPage";
import { submitAPI, fetchAPI } from "../bookingApi";
import ConfirmedBooking from "./ConfirmedBooking";

function updateTimes(state, action) {
  switch (action.type) {
    case "SET_DATE":
      return fetchAPI(action.payload);
    default:
      return state;
  }
}

export function initializeTimes() {
  return fetchAPI(new Date());
}

const Main = () => {
  const navigate = useNavigate();
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );
  const [date, setDate] = useState(new Date());
  const [guests, setGuests] = useState();
  const [occasion, setOccasion] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/confirm");
    submitAPI(e);
  };

  useEffect(() => {
    dispatch({ type: "SET_DATE", payload: date });
  }, [date]);

  return (
    <section className="container">
      <section className="row py-2" style={{ backgroundColor: "#495E57" }}>
        <section className="col">
          <p style={{ color: "#F4CE14", fontSize: "40px" }}>Little Lemon</p>
          <p style={{ color: "#edefee", fontSize: "25px" }}>Chicago</p>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button
            onClick={() => navigate("/booking")}
            type="button"
            className="btn btn-warning"
          >
            Reserve a Table
          </button>
        </section>
        <section className="col col-lg-6"></section>
        <section className="col">
          <img
            style={{
              width: "200px",
              height: "200px",
              objectFit: "cover",
              borderRadius: "10px"
            }}
            src="src\assets\restauranfood.jpg"
            alt="A image of three sandwiches on a plate, served by a person"
          />
        </section>
      </section>
      <section className="row">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/booking"
            element={
              <BookingPage
                availableTimes={availableTimes}
                dispatch={dispatch}
                date={date}
                setDate={setDate}
                guests={guests}
                setGuests={setGuests}
                occasion={occasion}
                setOccasion={setOccasion}
                handleSubmit={handleSubmit}
              />
            }
          />
          <Route path="/confirm" element={<ConfirmedBooking />} />
        </Routes>
      </section>
    </section>
  );
};

export default Main;
