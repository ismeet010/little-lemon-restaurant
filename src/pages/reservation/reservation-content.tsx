import { FormControl, TextField, SelectChangeEvent } from "@mui/material";
import { useState, ChangeEvent, FormEvent, useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ComButton, ComTitle } from "../../commons/style/style";
import { useNavigate } from "react-router-dom"; // For navigation
import { AuthContext } from "../../commons/context/AuthContext";

// Define Props type
// interface ReservationContentProps {
//   availableTimes: string[];
//   onReservation: (formData: FormData) => void;
// }

// Define form data state type
interface FormData {
  date: string;
  time: string;
  guests: number;
  occasion: string;
}

const ReservationContent = () => {
  const [formData, setFormData] = useState<FormData>({
    date: "",
    time: "",
    guests: 1,
    occasion: "",
  });
  const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AuthContext);

  // Handler for TextField inputs
  const handleTextFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isLoggedIn) {
      // Redirect to login and save current path
      alert("You need to log in to make a reservation!");
      localStorage.setItem(
        "redirectAfterLogin",
        "/little-lemon-restaurant/reservation"
      );
      navigate("/little-lemon-restaurant/login");
      return;
    }
    console.log(formData);
    alert("reservation successful!");
    // props.onReservation(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <ComTitle variant="h4" gutterBottom>
        Make a Reservation
      </ComTitle>

      {/* <FormControl fullWidth margin="normal">
        <TextField
          label="Reservation Date"
          type="date"
          id="date"
          value={formData.date}
          onChange={handleTextFieldChange}
          InputLabelProps={{ 
            shrink: true,
          }}
        />
      </FormControl> */}

      <FormControl fullWidth margin="normal">
        <DatePicker
          selected={startDate}
          onChange={(date) => date && setStartDate(date || new Date())}
          minDate={new Date()}
          dateFormat="MMMM d, yyyy h:mm aa"
          timeFormat="h:mm aa"
          showTimeSelect
          filterTime={(time) => {
            const selectedTime = time.getHours() * 60 + time.getMinutes();
            return selectedTime >= 660 && selectedTime <= 1380; // Between 11:00 AM and 11:00 PM
          }}
          customInput={
            <TextField
              fullWidth
              variant="outlined"
              label="Reservation Date and Time"
            />
          }
        />
      </FormControl>

      <FormControl fullWidth margin="normal">
        <TextField
          label="Number of Guests"
          type="number"
          id="guests"
          inputProps={{ min: 2, max: 15 }}
          value={formData.guests}
          onChange={handleTextFieldChange}
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField
          label="Occasion"
          type="text"
          id="occasion"
          value={formData.occasion}
          onChange={handleTextFieldChange}
        />
      </FormControl>
      <ComButton fullWidth variant="contained" type="submit">
        Reserve!!
      </ComButton>
    </form>
  );
};

export { ReservationContent };
