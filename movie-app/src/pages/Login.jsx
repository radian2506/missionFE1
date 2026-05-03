import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center">
      <div className="bg-gray-900 p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-white mb-2">Login</h2>
        <p className="text-gray-400 mb-6">Selamat datang kembali!</p>

        <div className="mb-4">
          <label className="block text-gray-400 mb-1">Email</label>
          <input
            type="email"
            placeholder="email@example.com"
            className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-400 mb-1">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Tambahkan onClick di button */}
        <button
          onClick={handleLogin}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded-lg transition"
        >
          Login
        </button>

        <p className="text-gray-400 text-center mt-4">
          Belum punya akun?{" "}
          <Link to="/register" className="text-red-400 hover:underline">
            Daftar sekarang
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
