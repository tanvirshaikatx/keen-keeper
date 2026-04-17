const StatsCard = ({ value, label }) => {
  return (
    <div className="bg-base-100 shadow-sm rounded-lg p-6 text-center">
      <h2 className="text-2xl font-semibold text-gray-800">{value}</h2>
      <p className="text-sm text-gray-500 mt-1">{label}</p>
    </div>
  );
};

export default StatsCard;