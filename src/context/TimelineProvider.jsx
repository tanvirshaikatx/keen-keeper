import { useState } from "react";
import { TimelineContext } from "./TimelineContext";

const TimelineProvider = ({ children }) => {
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents((prev) => [event, ...prev]);
  };

  return (
    <TimelineContext.Provider value={{ events, addEvent }}>
      {children}
    </TimelineContext.Provider>
  );
};

export default TimelineProvider;