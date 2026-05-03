import Navbar from "../components/Navbar";

const movies = [
  {
    id: 1,
    title: "Inception",
    genre: "Sci-Fi",
    rating: 8.8,
    year: 2010,
    img: "https://image.tmdb.org/t/p/w300/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
  },
  {
    id: 2,
    title: "The Dark Knight",
    genre: "Action",
    rating: 9.0,
    year: 2008,
    img: "https://image.tmdb.org/t/p/w300/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  },
  {
    id: 3,
    title: "Oppenheimer",
    genre: "Drama",
    rating: 8.5,
    year: 2023,
    img: "https://image.tmdb.org/t/p/w300/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
  },
  {
    id: 4,
    title: "Avengers",
    genre: "Action",
    rating: 8.4,
    year: 2019,
    img: "https://image.tmdb.org/t/p/w300/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
  },
  {
    id: 5,
    title: "Parasite",
    genre: "Thriller",
    rating: 8.5,
    year: 2019,
    img: "https://image.tmdb.org/t/p/w300/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
  },
  {
    id: 6,
    title: "Dune",
    genre: "Sci-Fi",
    rating: 8.0,
    year: 2021,
    img: "https://image.tmdb.org/t/p/w300/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
  },
];

function Home() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />

      {/* Hero */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-950 text-white py-16 px-8 text-center">
        <h1 className="text-5xl font-bold mb-4">🎬 Temukan Film Favoritmu</h1>
        <p className="text-gray-400 text-lg">
          Ribuan film siap kamu tonton kapan saja
        </p>
      </div>

      {/* Movie Grid */}
      <div className="px-8 py-10">
        <h2 className="text-white text-2xl font-bold mb-6">Film Populer</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="bg-gray-900 rounded-xl overflow-hidden hover:scale-105 transition cursor-pointer"
            >
              <img
                src={movie.img}
                alt={movie.title}
                className="w-full object-cover"
              />
              <div className="p-3">
                <h3 className="text-white font-bold text-sm">{movie.title}</h3>
                <p className="text-gray-400 text-xs">
                  {movie.genre} • {movie.year}
                </p>
                <p className="text-yellow-400 text-xs mt-1">
                  ⭐ {movie.rating}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
