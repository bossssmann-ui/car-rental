import React from 'react';

const BookingWidget: React.FC = () => {
  return (
    <div>
      <h1>Premium Booking Widget</h1>
      <form>
        <label htmlFor="pickup">Pickup Location:</label>
        <input type="text" id="pickup" name="pickup" required />

        <label htmlFor="dropoff">Dropoff Location:</label>
        <input type="text" id="dropoff" name="dropoff" required />

        <label htmlFor="pickupDate">Pickup Date:</label>
        <input type="date" id="pickupDate" name="pickupDate" required />

        <label htmlFor="dropoffDate">Dropoff Date:</label>
        <input type="date" id="dropoffDate" name="dropoffDate" required />

        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default BookingWidget;