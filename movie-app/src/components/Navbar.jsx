import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-8 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-red-500">🎬 MovieApp</h1>
      <div className="flex gap-4">
        <Link to="/home" className="hover:text-red-400">
          Home
        </Link>
        <Link to="/login" className="hover:text-red-400">
          Login
        </Link>
        <Link to="/register" className="hover:text-red-400">
          Register
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
