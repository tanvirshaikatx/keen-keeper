import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold text-red-500">404</h1>
      <p className="mt-2 text-gray-600">Page not found</p>

      <Link to="/" className="btn mt-4 bg-green-700 text-white">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;