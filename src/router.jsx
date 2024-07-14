import { createBrowserRouter } from "react-router-dom";
import HomePage from "./layouts/HomePage";
import BookingPage from "./layouts/BookingPage";

export default createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "booking",
    element: <BookingPage />
  }
]);
