import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "./BookingForm";

function initializeTimes() {
  const today = new Date();

  return fetchAPI(today);
}

function updateTimes(state, action) {
  return fetchAPI(new Date(action.date));
}

function Main() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  const navigate = useNavigate();

  function submitForm(formData) {
    const success = submitAPI(formData);

    if (success) {
      navigate("/confirmed");
    }
  }

  return (
    <main>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </main>
  );
}

export default Main;

export { initializeTimes, updateTimes };