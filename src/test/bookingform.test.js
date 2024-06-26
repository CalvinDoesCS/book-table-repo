import { render, screen, fireEvent } from "@testing-library/react";
import Main, { updateTimes } from "../components/Main";
import BookingForm from '../components/BookingForm';
import { initializeTimes } from "../components/Main";
test('Renders the BookingForm heading', () => {
    render(<BookingForm availableTimes={["5:00"]} availableTimesDispatch={()=>{}}/>);
    const headingElement = screen.getByText("Booking Form");
    expect(headingElement).toBeInTheDocument();
})

test('Validate initializeTimes that it returns the correct value', () => {
    const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const result = initializeTimes();
    expect(result).toEqual(expectedTimes);
})

test('Validate updateTimes that it returns the correct value', () => {
    const selectedDate = "2024-06-13"
    const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const result = updateTimes(selectedDate);
    expect(result).toEqual(expectedTimes);
})
test("Form can be submitted by user", () => {
    render(<BookingForm availableTimes={["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]} availableTimesDispatch={()=>{}}/>);

    //Check rendering 
    expect(screen.getByLabelText(/Choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of guests/i)).toBeInTheDocument();
    expect(screen.getByText(/Occasion/i)).toBeInTheDocument();
    expect(screen.getByText(/Make Your Reservation/i)).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText(/Choose date/i), { target: { value: '2024-06-13' } });
    fireEvent.change(screen.getByLabelText(/Choose time/i), { target: { value: '18:00' } });
    fireEvent.change(screen.getByLabelText(/Number of guests/i), { target: { value: '1' } });
    fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: 'Birthday' } });

    fireEvent.click(screen.getByText(/Make Your Reservation/i));
})