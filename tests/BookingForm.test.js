import { render, screen } from "@testing-library/react";
import BookingForm from "../src/components/BookingForm";
import { fetchAPI } from "../src/bookingApi";
import { initializeTimes } from "../src/components/Main";

test("Renders the BookingForm heading", () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Book a Table");
  expect(headingElement).toBeInTheDocument();
});

test("Testing the initializeTimes function", () => {
  const date = new Date();
  const testTimes = fetchAPI(date);

  const returnTimes = initializeTimes();
  expect(returnTimes).toEqual(expect.arrayContaining(testTimes));
});

test("Testing the updateTimes function", () => {});
