import { Link } from "react-router-dom";
const SignIn = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-trasparent bg-opacity-90 bg-[url('../../assets/background-image.jpg')] bg-cover bg-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md mx-4 backdrop-blur-sm bg-opacity-90 ">   
        <h2 className="text-white text-3xl font-bold mb-8 text-center">
          Sign In
        </h2>
        <form className="space-y-6">
          <div>
            <label
              className="block text-gray-300 mb-2 text-sm font-medium"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 rounded bg-black/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label
              className="block text-gray-300 mb-2 text-sm font-medium"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 rounded bg-black/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-600 rounded bg-gray-700"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-300"
              >
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <Link
                to="/forgot-password"
                className="font-medium text-red-400 hover:text-red-300"
              >
                Forgot password?
              </Link>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700 transition duration-200 font-medium text-lg"
          >
            Sign In
          </button>
        </form>
        <div className="mt-6 text-center text-sm text-gray-400">
          New to Netflix?{" "}
          <Link
            to="/signup"
            className="font-medium text-red-400 hover:text-red-300"
          >
            Sign up now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
