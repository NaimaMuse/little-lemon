import { useState } from "react";

function BookingForm({
  availableTimes,
  dispatch,
  submitForm
}) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  function handleDateChange(event) {
    const selectedDate = event.target.value;

    setDate(selectedDate);

    dispatch({
      type: "UPDATE_TIMES",
      date: selectedDate
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const formData = {
      date: date,
      time: time,
      guests: guests,
      occasion: occasion
    };

    submitForm(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Reserve a Table</h1>

      <label htmlFor="date">
        Date
      </label>

      <input
        id="date"
        type="date"
        value={date}
        onChange={handleDateChange}
        required
      />

      <label htmlFor="time">
        Time
      </label>

      <select
        id="time"
        value={time}
        onChange={(event) =>
          setTime(event.target.value)
        }
        required
      >
        <option value="">
          Select a time
        </option>

        {availableTimes.map((availableTime) => (
          <option
            key={availableTime}
            value={availableTime}
          >
            {availableTime}
          </option>
        ))}
      </select>

      <label htmlFor="guests">
        Number of guests
      </label>

      <input
        id="guests"
        type="number"
        min="1"
        max="10"
        value={guests}
        onChange={(event) =>
          setGuests(event.target.value)
        }
        required
      />

      <label htmlFor="occasion">
        Occasion
      </label>

      <select
        id="occasion"
        value={occasion}
        onChange={(event) =>
          setOccasion(event.target.value)
        }
        required
      >
        <option value="">
          Select an occasion
        </option>

        <option value="Birthday">
          Birthday
        </option>

        <option value="Anniversary">
          Anniversary
        </option>
      </select>

      <button type="submit">
        Reserve a Table
      </button>
    </form>
  );
}

export default BookingForm;