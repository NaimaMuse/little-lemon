import { render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";

test("BookingForm renders Date field", () => {
  render(
    <BookingForm
      availableTimes={[
        "17:00",
        "18:00",
        "19:00"
      ]}
      dispatch={() => {}}
      submitForm={() => {}}
    />
  );

  expect(
    screen.getByLabelText(/date/i)
  ).toBeInTheDocument();
});