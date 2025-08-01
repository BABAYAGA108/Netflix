import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    <div className="absolute inset-0 bg-black/40 z-0">
      <nav className="relative z-10 bg-gradient-to-b from-black/70 to-transparent px-4 py-6">
        
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <svg
            width="160px" 
            height="x" 
            viewBox="0 0 111 30" 
            fill="#E50914" 
            className="mr-8" 
            aria-label="Netflix"
          >
            <g>
              <path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"></path>
            </g>
          </svg>

          <div>
            <button
              onClick={() => setShowSignInModal(true)}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm md:text-base transition-colors duration-200 font-medium "
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

      {/* Hero Section */}
      <div className="relative min-h-screen bg-[url('https://example.com/netflix-bg.jpg')] bg-cover bg-center">
        {/* Overlay for better text readability */}

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
    </div>
  );
};

export default Navbar;
