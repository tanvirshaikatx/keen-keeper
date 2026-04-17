import { FaPlus } from "react-icons/fa";
import StatsCard from "../components/StatsCard";
import friendsData from "../data/friends.json";
import FriendCard from "../components/FriendCard";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Banner */}
      <div className="text-center py-16 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Friends to keep close in your life
        </h1>

        <p className="text-gray-500 mt-4 max-w-xl mx-auto">
          Your personal shelf of meaningful connections.
        </p>

        <button className="mt-6 bg-green-700 text-white px-4 py-2 rounded flex items-center gap-2 mx-auto">
          <FaPlus />
          Add a Friend
        </button>
      </div>

      {/* Stats */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 px-4 pb-10">
        <StatsCard value="10" label="Total Friends" />
        <StatsCard value="3" label="On Track" />
        <StatsCard value="6" label="Need Attention" />
        <StatsCard value="12" label="Interactions This Month" />
      </div>

      {/* Friends */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-lg font-semibold mb-6">Your Friends</h2>

        <div className="grid md:grid-cols-4 gap-6">
          {friendsData.map((f) => (
            <FriendCard key={f.id} friend={f} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;