import React, { useState, ChangeEvent, FormEvent } from "react";

// Define Props type
interface ReservationContentProps {
  availableTimes: string[];
  onReservation: (formData: FormData) => void;
}

// Define form data state type
interface FormData {
  date: string;
  time: string;
  guests: number;
  occasion: string;
}

const ReservationContent: React.FC<ReservationContentProps> = (props) => {
  // Initialize state for form fields
  const [formData, setFormData] = useState<FormData>({
    date: "",
    time: props.availableTimes[0], // Default first available time
    guests: 2,
    occasion: "bday",
  });

  // Handler function to update state when form fields change
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;

    // Update the corresponding field in the state
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handler function for form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.onReservation(formData); // Pass form data to parent
  };

  return (
    <form className="reservationForm" onSubmit={handleSubmit}>
      <label htmlFor="date">Date</label>
      <input
        type="date"
        id="date"
        value={formData.date}
        onChange={handleInputChange}
      />

      <label htmlFor="time">Time</label>
      <select
        name="time"
        id="time"
        value={formData.time}
        onChange={handleInputChange}
      >
        {props.availableTimes.map((time) => (
          <option key={time} value={time}>
            {time} PM
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        min="2"
        max="15"
        id="guests"
        value={formData.guests}
        onChange={handleInputChange}
      />

      <label htmlFor="occasn">Occasion</label>
      <select
        name="Occasion"
        id="occasn"
        value={formData.occasion}
        onChange={handleInputChange}
      >
        <option value="bday">Birthday</option>
        <option value="aniversary">Anniversary</option>
      </select>

      <button className="buttongap" type="submit">
        Make a Reservation
      </button>
    </form>
  );
};

export { ReservationContent };
