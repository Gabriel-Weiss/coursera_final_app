import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import BookingForm from "../components/BookingForm";

const BookingPage = ({
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
    <section className="container">
      <section className="row">
        <section className="col">
          <BookingForm
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
        </section>
      </section>
    </section>
  );
};

export default BookingPage;
