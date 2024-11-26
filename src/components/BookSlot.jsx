// pages/book-slot.js
import { useState, useEffect } from "react";

export default function BookSlot() {
  const [nextSlotDate, setNextSlotDate] = useState("");

  useEffect(() => {
    const calculateNextSlot = () => {
      const today = new Date();
      let nextSlot;

      if (today.getDate() <= 1) {
        // If today is the 1st or earlier, the next slot is the 1st of the following month
        nextSlot = new Date(today.getFullYear(), today.getMonth() + 1, 1);
      } else {
        // Add 15 days to the current date
        nextSlot = new Date(today);
        nextSlot.setDate(nextSlot.getDate() + 15);
      }

      setNextSlotDate(nextSlot.toISOString().split("T")[0]); // Format as YYYY-MM-DD
    };

    calculateNextSlot();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Book Slot</h1>
      {nextSlotDate && (
        <p className="text-lg">
          Your next available slot is: <strong>{nextSlotDate}</strong>
        </p>
      )}
    </div>
  );
}
