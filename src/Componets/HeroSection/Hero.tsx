import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import squidgameimage from "../../assets/Movies/Squid game 3 Poster.jpeg";
import squidgameimage2 from "../../assets/Movies/Squid Game.jpeg";
import Tlyerperryimage from "../../assets/Movies/tlyer perry madeaes destination wedding.jpeg";
import Tlperperryimage2 from "../../assets/Movies/tyler perry.jpg";
import sandman from "../../assets/Movies/Sandman Season 2 poster.avif";
import sandman2 from "../../assets/Movies/Sandman.webp";
import Brick1 from "../../assets/Movies/Brick 1 (1).jpg";
import Brick2 from "../../assets/Movies/Brick 2.jpg";
import zaim from "../../assets/Movies/ziam.webp";
import Zaim2 from "../../assets/Movies/Ziam (1).webp";
import Untamed1 from "../../assets/Movies/untamed -1.avif";
import Untamed2 from "../../assets/Movies/untamed-2.webp";
import Jaat1 from "../../assets/Movies/Jaat-.jpeg";
import Jaat2 from "../../assets/Movies/Jaat_film_poster.jpg";
import koj1 from "../../assets/Movies/king of jo'burg.webp";
import koj2 from "../../assets/Movies/kings of jo'burg.webp";
import tokillamonkey1 from "../../assets/Movies/to kill a monkey.jpg";
import tokillamonkey2 from "../../assets/Movies/to kill a monkey 2.jpg";
import strawimage from "../../assets/Movies/Straw-2025-Netflix.jpg";
import fallbackImage from "../../assets/Movies/Straw-2025-Netflix.jpg"; 
import { MdTv } from "react-icons/md";
import { FaDownload, FaChild } from "react-icons/fa";
import { TbDeviceDesktop } from "react-icons/tb";

interface Movie {
  id: number;
  title: string;
  image: string;
  image2?: string;
  genre: string;
  year: number;
  rating: string;
  description: string;
  seasons?: number;
}

const FAQDropdown = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [open, setOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-700">
      <button
        className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={`faq-${question.replace(/\s+/g, "-")}`}
      >
        <span className="text-lg font-semibold">{question}</span>
        <svg
          className={`w-6 h-6 transition-transform duration-200 ${open ? "rotate-45" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          id={`faq-${question.replace(/\s+/g, "-")}`}
          className="text-gray-300 pb-4"
        >
          {answer}
        </motion.div>
      )}
    </div>
  );
};

const movieData: Movie[] = [
  {
    id: 1,
    title: "Squid Game",
    image: squidgameimage,
    image2: squidgameimage2,
    genre: "Sci-Fi",
    year: 2025,
    rating: "TV-14",
    description: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games.",
    seasons: 4,
  },
  {
    id: 2,
    title: "Straw",
    image: strawimage,
    image2: fallbackImage,
    genre: "Drama",
    year: 2025,
    rating: "TV-MA",
    description: "What will be her last straw? A devastatingly bad day pushes a hardworking single mother...",
    seasons: 0,
  },
  {
    id: 3,
    title: "Madea's Destination Wedding",
    image: Tlyerperryimage,
    image2: Tlperperryimage2,
    genre: "Comedy",
    year: 2025,
    rating: "TV-14",
    description: "Madea packs her best floral dresses and a whole lot of chaos for a whirlwind wedding.",
    seasons: 0,
  },
  {
    id: 4,
    title: "The Sandman",
    image: sandman,
    image2: sandman2,
    genre: "Fantasy",
    year: 2025,
    rating: "TV-14",
    description: "After years of imprisonment, Morpheus embarks on a journey across worlds to restore his power.",
    seasons: 2,
  },
  {
    id: 5,
    title: "Brick",
    image: Brick1,
    image2: Brick2,
    genre: "Thriller, Mystery",
    year: 2025,
    rating: "TV-14",
    description: "When a mysterious brick wall encloses their apartment building overnight...",
  },
  {
    id: 6,
    title: "Ziam",
    image: Zaim2,
    image2: zaim,
    genre: "Action, Horror",
    year: 2025,
    rating: "TV-14",
    description: "A former Muay Thai fighter must use skill and grit to survive against zombies.",
    seasons: 0,
  },
  {
    id: 7,
    title: "Untamed",
    image: Untamed1,
    image2: Untamed2,
    genre: "Adventure",
    year: 2025,
    rating: "TV-14",
    description: "A wildlife photographer encounters a mysterious creature in the wilderness.",
    seasons: 1,
  },
  {
    id: 8,
    title: "JAAT",
    image: Jaat1,
    image2: Jaat2,
    genre: "Drama",
    year: 2025,
    rating: "TV-14",
    description: "A coming-of-age story about tradition and modernity in rural India.",
    seasons: 0,
  },
  {
    id: 9,
    title: "Kings of Jo'burg",
    image: koj1,
    image2: koj2,
    genre: "Crime",
    year: 2025,
    rating: "TV-14",
    description: "A powerful crime family fights to maintain their empire.",
    seasons: 4,
  },
  {
    id: 10,
    title: "How to Kill a Monkey",
    image: tokillamonkey2,
    image2: tokillamonkey1,
    genre: "Thriller",
    year: 2025,
    rating: "TV-14",
    description: "A father faces moral dilemmas in the world of cybercrime.",
    seasons: 4,
  },
];

const Hero = () => {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [activeGenre, setActiveGenre] = useState("All");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>(movieData);

  // Get unique genres
  const genres = ["All", ...new Set(movieData.map((movie) => movie.genre.split(", ")).flat())];

  // Filter movies by genre
  useEffect(() => {
    if (activeGenre === "All") {
      setFilteredMovies(movieData);
    } else {
      setFilteredMovies(
        movieData.filter((movie) => movie.genre.includes(activeGenre))
      );
    }
    setCurrentSlide(0);
  }, [activeGenre]);

  // Carousel navigation
  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === Math.ceil(filteredMovies.length / 4) - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? Math.ceil(filteredMovies.length / 4) - 1 : prev - 1
    );
  };

  // Get current slide movies
  const visibleMovies = filteredMovies.slice(
    currentSlide * 4,
    (currentSlide + 1) * 4
  );

  return (
    <div className="relative bg-black/90 min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('../../assets/hero-background.jpg')] bg-cover bg-center opacity-50"></div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 text-white text-center px-4 py-20 w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to Netflix
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Watch your favorite movies and TV shows anytime, anywhere.
        </p>
      </motion.div>

      {/* Genre Filter */}
      <div className="relative z-10 mb-8 flex flex-wrap justify-center gap-2 px-4">
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => setActiveGenre(genre)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeGenre === genre
                ? "bg-red-600 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
            aria-label={`Filter by ${genre}`}
          >
            {genre}
          </button>
        ))}
      </div>

      {/* Movie Carousel */}
      <div className="relative z-10 w-full max-w-6xl px-4 mb-20">
        <div className="relative overflow-hidden">
          {/* Carousel Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full ml-2 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Previous movies"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Movie Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {visibleMovies.map((movie) => (
              <motion.div
                key={movie.id}
                className="relative cursor-pointer rounded-lg overflow-hidden group"
                whileHover={{ y: -10 }}
                onClick={() => setSelectedMovie(movie)}
                aria-label={`View details for ${movie.title}`}
                role="button"
                tabIndex={0}
              >
                <img
                  src={movie.image || fallbackImage}
                  alt={movie.title}
                  className="w-full h-40 md:h-60 object-cover transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = fallbackImage;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4">
                  <h3 className="text-white font-bold text-lg">
                    {movie.title}
                  </h3>
                  <div className="flex items-center text-gray-300 text-sm">
                    <span>{movie.year}</span>
                    <span className="mx-2">•</span>
                    <span>{movie.rating}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full mr-2 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Next movies"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Movie Details Modal */}
      <AnimatePresence>
        {selectedMovie && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray-900 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ type: "spring", damping: 25 }}
            >
              <div className="relative">
                <img
                  src={selectedMovie.image2 || fallbackImage}
                  alt={`Cover for ${selectedMovie.title}`}
                  className="w-full h-auto aspect-video md:h-96 object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = fallbackImage;
                  }}
                />
                <button
                  onClick={() => setSelectedMovie(null)}
                  className="absolute top-4 right-4 bg-black/70 hover:bg-black text-white p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-red-600"
                  aria-label="Close movie details"
                  tabIndex={0}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                  <h2 className="text-white text-2xl md:text-3xl font-bold">
                    {selectedMovie.title}
                  </h2>
                  <div className="flex items-center gap-4">
                    <span className="text-green-500 font-medium">
                      {selectedMovie.rating}
                    </span>
                    <span className="text-gray-400">{selectedMovie.year}</span>
                    {selectedMovie.seasons !== undefined && (
                      <span className="text-gray-400">
                        {selectedMovie.seasons}{" "}
                        {selectedMovie.seasons === 1 ? "Season" : "Seasons"}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mb-6">
                  <button
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded flex items-center gap-2"
                    aria-label={`Play ${selectedMovie.title}`}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.3 2.7L15 10l-8.7 7.3c-.6.5-1.6.1-1.6-.7V3.4c0-.8 1-1.2 1.6-.7z" />
                    </svg>
                    Play
                  </button>
                  <button
                    className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded flex items-center gap-2"
                    aria-label={`Add ${selectedMovie.title} to my list`}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                    My List
                  </button>
                </div>

                <p className="text-gray-300 mb-4">
                  {selectedMovie.description}
                </p>

                <div className="border-t border-gray-700 pt-4">
                  <h3 className="text-white font-bold mb-2">Details</h3>
                  <p className="text-gray-400">Genre: {selectedMovie.genre}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Reasons Section */}
      <div className="relative z-10 w-full text-white text-start py-8 px-4">
        <h2 className="text-2xl mb-6 px-4">More reasons to join</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
          {/* Watch Anywhere Card */}
          <div className="h-64 p-6 rounded-lg bg-gradient-to-br from-[#1D172D] via-[#2A1B3D] to-black relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="text-xl font-semibold mb-3">Watch anywhere</h3>
              <p className="text-gray-300">
                Enjoy on your TV, Playstation, Xbox, Chromecast, Apple TV,
                Blu-ray players, and more.
              </p>
            </div>
            <MdTv
              className="absolute bottom-4 right-4 w-12 h-12 text-purple-400 opacity-80 group-hover:scale-110 transition-transform duration-300"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-0" />
          </div>

          {/* Download Shows Card */}
          <div className="h-64 p-6 rounded-lg bg-gradient-to-br from-[#1D172D] via-[#2A1B3D] to-black relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="text-xl font-semibold mb-3">
                Download to watch offline
              </h3>
              <p className="text-gray-300">
                Save your favorites easily and always have something to watch.
              </p>
            </div>
            <FaDownload
              className="absolute bottom-4 right-4 w-12 h-12 text-purple-400 opacity-80 group-hover:scale-110 transition-transform duration-300"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-0" />
          </div>

          {/* Watch Everywhere Card */}
          <div className="h-64 p-6 rounded-lg bg-gradient-to-br from-[#1D172D] via-[#2A1B3D] to-black relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="text-xl font-semibold mb-3">Watch everywhere</h3>
              <p className="text-gray-300">
                Stream unlimited movies and TV shows on your phone, tablet,
                laptop, and TV.
              </p>
            </div>
            <TbDeviceDesktop
              className="absolute bottom-4 right-4 w-12 h-12 text-purple-400 opacity-80 group-hover:scale-110 transition-transform duration-300"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-0" />
          </div>

          {/* Kids Profiles Card */}
          <div className="h-64 p-6 rounded-lg bg-gradient-to-br from-[#1D172D] via-[#2A1B3D] to-black relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="text-xl font-semibold mb-3">
                Create profiles for kids
              </h3>
              <p className="text-gray-300">
                Send kids on adventures with their favorite characters in a
                space made just for them.
              </p>
            </div>
            <FaChild
              className="absolute bottom-4 right-4 w-12 h-12 text-purple-400 opacity-80 group-hover:scale-110 transition-transform duration-300"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-0" />
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="relative z-10 w-full text-white text-start py-8 px-4 ">
        <h2 className="text-2xl mb-6 px-4">Frequently Asked Questions</h2>
        <div className="container mx-auto w-full flex-col gap-4 px-4 justify-center">
          <FAQDropdown
            question="What is Netflix?"
            answer="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more."
          />
          <FAQDropdown
            question="How much does Netflix cost?"
            answer="Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $8.99 to $17.99 a month."
          />
          <FAQDropdown
            question="Where can I watch?"
            answer="Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device."
          />
          <FAQDropdown
            question="How do I cancel?"
            answer="Netflix is flexible. There are no pesky contracts to tie you down. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."/>
            <FAQDropdown
            question="What can I watch on Netflix?" 
            answer="Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, whenever you want."
          />
          <FAQDropdown
            question="Is Netflix good for kids?"
            answer="The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space."/>
        </div>
      </div>

      {/* Curved Bottom */}
      <svg
        className="absolute bottom-0 left-0 w-full h-32 md:h-40"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          fill="#000000"
          d="M0,0 C300,60 600,-20 900,30 C1200,80 1440,40 1440,40 L1440,120 L0,120 Z"
        ></path>
      </svg>
    </div>
  );
};

export default Hero;