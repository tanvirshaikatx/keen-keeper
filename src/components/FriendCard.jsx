import { useNavigate } from "react-router-dom";

const colors = {
  overdue: "bg-red-500 text-white",
  "almost due": "bg-yellow-400",
  "on-track": "bg-green-600 text-white",
};

const FriendCard = ({ friend }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/friend/${friend.id}`)}
      className="bg-white p-5 rounded shadow text-center cursor-pointer"
    >
      <img src={friend.picture} className="w-16 h-16 rounded-full mx-auto" />

      <h2 className="mt-2 font-semibold">{friend.name}</h2>

      <p className="text-xs text-gray-500">
        {friend.days_since_contact}d ago
      </p>

      <div className="mt-2">
        {friend.tags.map((tag, i) => (
          <span key={i} className="badge mr-1">{tag}</span>
        ))}
      </div>

      <div className="mt-2">
        <span className={`px-2 py-1 text-xs rounded ${colors[friend.status]}`}>
          {friend.status}
        </span>
      </div>
    </div>
  );
};

export default FriendCard;