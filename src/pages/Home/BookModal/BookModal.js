import React from "react";

const BookModal = () => {
  return (
    <div>
      <input type="checkbox" id="bookingModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="bookingModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div>
            <h className="text-3xl">Book Now</h>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
