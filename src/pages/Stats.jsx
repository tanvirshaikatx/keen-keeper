import { useContext } from "react";
import { TimelineContext } from "../context/TimelineContext";
import { PieChart, Pie, Cell } from "recharts";

const Stats = () => {
  const { events } = useContext(TimelineContext);

  const count = { Call: 0, Text: 0, Video: 0 };

  events.forEach(e => count[e.type]++);

  const data = [
    { name: "Call", value: count.Call },
    { name: "Text", value: count.Text },
    { name: "Video", value: count.Video }
  ];

  const colors = [
    { type: "Call", color: "#22c55e" },
    { type: "Text", color: "#3b82f6" },
    { type: "Video", color: "#a855f7" }
  ];

  return (
    <div className="p-6 ">
      <h1 className="text-xl font-bold mb-4 text-center">Friendship Analytics</h1>

      <PieChart width={300} height={300} className="mx-auto">
        <Pie data={data} dataKey="value">
          <Cell fill="#22c55e" />
          <Cell fill="#3b82f6" />
          <Cell fill="#a855f7" />
        </Pie>
      </PieChart>

      {/* Legend */}
      <div className="mt-8 space-y-3 mx-auto w-max flex gap-6  ">
        {colors.map((item) => (
          <div key={item.type} className="flex items-center gap-3">
            <div 
              className="w-4 h-4 rounded " 
              style={{ backgroundColor: item.color }}
            ></div>
            <span className="text-gray-700">{item.type}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;