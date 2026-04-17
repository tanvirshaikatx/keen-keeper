import { useContext } from "react";
import { TimelineContext } from "../context/TimelineContext";

const Timeline = () => {
  const { events } = useContext(TimelineContext);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Timeline</h1>

      {events.map((e, i) => (
        <div key={i} className="bg-white p-3 mb-2 rounded">
          {e.title} - {e.date}
        </div>
      ))}
    </div>
  );
};

export default Timeline;