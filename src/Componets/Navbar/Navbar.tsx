import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import netflixLogo from "../../assets/netflix logo.jpeg";
import backgroundImage from "../../assets/background image.jpg";

const Navbar = () => {
  const [showSignInModal, setShowSignInModal] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <img
          src={backgroundImage}
          alt="netflix background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Navbar Content */}
      <nav className="relative z-10 bg-gradient-to-b from-black/70 to-transparent px-4 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="/">
            <img
              src={netflixLogo}
              alt="Netflix Logo"
              className="h-8 w-auto md:h-10"
            />
          </a>

          <div>
            <button
              onClick={() => setShowSignInModal(true)}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm md:text-base transition-colors duration-200 font-medium"
            >
              Sign In
            </button>
          </div>
        </div>
      </nav>

      {/* Sign In Modal with Transitions */}
      <AnimatePresence>
        {showSignInModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-black/90 rounded-lg w-full max-w-md overflow-hidden border border-gray-700"
            >
              {/* Modal Header */}
              <div className="bg-black p-6">
                <h2 className="text-white text-2xl font-bold">Sign In</h2>
              </div>

              {/* Modal Body */}
              <div className="p-6">
                <form className="space-y-4 justify-content-middle">
                  <motion.div whileFocus={{ scale: 1.01 }}>
                    <input
                      type="email"
                      placeholder="Email or phone number"
                      className="w-full p-3 bg-black/20 text-white rounded border border-white/30 focus:outline-none focus:ring-2 focus:ring-red-500"
                      required
                    />
                  </motion.div>

                  <motion.div whileFocus={{ scale: 1.01 }}>
                    <input
                      type="password"
                      placeholder="Password"
                      className="w-full p-3 bg-black/20 text-white rounded border border-white/30 focus:outline-none focus:ring-2 focus:ring-red-500"
                      required
                    />
                  </motion.div>

                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded font-medium transition-colors duration-200"
                  >
                    Sign In
                  </button>

                  <div className="relative py-4">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-600"></div>
                    </div>
                    <div className="relative flex justify-center">
                      <span className="px-2 bg-black/90 text-gray-400 text-sm">
                        OR
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="w-full bg-black/20 hover:bg-black/30 text-white py-3 rounded font-medium border border-white/30 transition-colors duration-200"
                  >
                    Use a sign-in code
                  </button>

                  <p className="text-white text-center text-sm underline hover:text-red-400 transition-colors duration-200">
                    Forgot password?
                  </p>

                  <div className="flex justify-between items-center pt-4">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                      />
                      <span className="text-white text-sm font-medium">
                        Remember me
                      </span>
                    </label>

                    <a
                      href="#"
                      className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                    >
                      Need help?
                    </a>
                  </div>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-gray-400">
                    New to Netflix?{" "}
                    <a
                      href="#"
                      className="text-white hover:text-red-400 transition-colors duration-200"
                    >
                      Sign up now
                    </a>
                  </p>
                </div>

                <div className="mt-4 text-center">
                  <p className="text-gray-400 text-xs">
                    This page is protected by Google reCAPTCHA to ensure you're
                    not a bot.{" "}
                    <a
                      href="https://www.google.com/recaptcha"
                      className="text-blue-400 hover:underline"
                    >
                      Learn more.
                    </a>
                  </p>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="bg-black/70 p-4 flex justify-end">
                <button
                  onClick={() => setShowSignInModal(false)}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Content */}
      {/* Hero Section */}
      <div className="relative min-h-screen bg-[url('https://example.com/netflix-bg.jpg')] bg-cover bg-center">
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-white text-center px-4 w-full max-w-6xl mx-auto h-auto py-16 md:py-24">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 md:mb-6">
            Unlimited movies,
            <br />
            TV shows, and <br />
            more
          </h1>
          <p className="text-xl md:text-2xl mb-6 md:mb-8">
            Starts at ₦2,500. Cancel anytime.
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>

          <form className="flex flex-col sm:flex-row justify-center w-full max-w-2xl mx-auto gap-4 px-4">
            <input
              type="email"
              placeholder="Email address"
              className="flex-grow p-3 md:p-4 bg-black/70 text-white rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 md:py-4 rounded font-medium text-lg md:text-xl transition-colors duration-200 whitespace-nowrap"
            >
              Get Started &gt;
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
