import { NavLink } from "react-router-dom";
import { FaHome, FaClock, FaChartBar } from "react-icons/fa";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "flex items-center gap-1 px-3 py-1 rounded-md bg-green-700 text-white text-sm font-medium"
      : "flex items-center gap-1 px-3 py-1 rounded-md text-gray-600 hover:bg-gray-100 text-sm";

  return (
    <div className="bg-base-100 border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        
        {/* Left: Logo */}
        <h1 className="text-lg font-bold text-gray-800 ">
          Keen<span className="text-green-700 font-bold">Keeper</span>
        </h1>

        {/* Right: Nav Links */}
        <div className="flex items-center gap-4">
          <NavLink to="/" className={linkClass}>
            <FaHome />
            Home
          </NavLink>

          <NavLink to="/timeline" className={linkClass}>
            <FaClock />
            Timeline
          </NavLink>

          <NavLink to="/stats" className={linkClass}>
            <FaChartBar />
            Stats
          </NavLink>
        </div>

      </div>
    </div>
  );
};

export default Navbar;