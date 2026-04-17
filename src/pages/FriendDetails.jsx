import { useParams } from "react-router-dom";
import friends from "../data/friends.json";
import { useContext } from "react";
import { TimelineContext } from "../context/TimelineContext";
import toast from "react-hot-toast";

const FriendDetails = () => {
  const { id } = useParams();
  const friend = friends.find(f => f.id === parseInt(id));
  const { addEvent } = useContext(TimelineContext);

  const handle = (type) => {
    addEvent({
      type,
      title: `${type} with ${friend.name}`,
      date: new Date().toLocaleDateString(),
    });

    toast.success(`${type} added`);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-3 gap-6">

      {/* Left */}
      <div className="bg-white p-6 rounded shadow">
        <img src={friend.picture} className="w-20 h-20 rounded-full mx-auto" />
        <h2 className="text-center mt-2">{friend.name}</h2>

        <p className="text-center text-sm text-gray-500">{friend.email}</p>

        <button className="btn w-full mt-4">⏰ Snooze</button>
        <button className="btn w-full mt-2">📦 Archive</button>
        <button className="btn w-full mt-2 text-red-500">🗑️ Delete</button>
      </div>

      {/* Right */}
      <div className="md:col-span-2 space-y-4">

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-4 text-center rounded">
            {friend.days_since_contact}
          </div>
          <div className="bg-white p-4 text-center rounded">
            {friend.goal}
          </div>
          <div className="bg-white p-4 text-center rounded">
            {friend.next_due_date}
          </div>
        </div>

        <div className="bg-white p-4 rounded">
          Connect every {friend.goal} days
        </div>

        <div className="bg-white p-4 rounded flex justify-around">
          <button onClick={() => handle("Call")} className="btn">📞</button>
          <button onClick={() => handle("Text")} className="btn">💬</button>
          <button onClick={() => handle("Video")} className="btn">📹</button>
        </div>

      </div>
    </div>
  );
};

export default FriendDetails;