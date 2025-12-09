"use client";
import { createContext, useContext, useState } from "react";

const ReservationContext = createContext();

const initialState = {
  from: undefined,
  to: undefined,
};
function ReservationProvider({ children }) {
  const [range, setRange] = useState(initialState);

  const resetRange = () => setRange(initialState);

  const valueToShare = { range, setRange, resetRange };

  return (
    <ReservationContext.Provider value={valueToShare}>
      {children}
    </ReservationContext.Provider>
  );
}

function useReservation() {
  const context = useContext(ReservationContext);
  if (!context) throw new Error("Context was use outside provider");
  return context;
}

export { ReservationProvider, useReservation };
