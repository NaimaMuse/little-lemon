import { useReducer } from "react";
import BookingForm from "./BookingForm";

function initializeTimes() {
  return [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00"
  ];
}

function updateTimes(state, action) {
  return state;
}

function Main() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  return (
    <main>
      <h1>Welcome to Little Lemon</h1>

      <p>
        We are a family-owned Mediterranean restaurant in Chicago.
      </p>

      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
      />
    </main>
  );
}

export default Main;