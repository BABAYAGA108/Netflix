import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../firebaseconfig";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/browse");
    } catch (err) {
      // 2. Proper error typing
      if (err instanceof Error) {
        setError(getErrorMessage((err as AuthError).code)); // Cast to Firebase AuthError
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/browse");
    } catch (err) {
      if (err instanceof Error) {
        setError(getErrorMessage(err.message)); // or err.code for Firebase errors
      } else {
        setError("An unknown error occurred");
      }
    }
  };

  // Helper function for user-friendly error messages
  const getErrorMessage = (code) => {
    switch (code) {
      case "auth/invalid-email":
        return "Invalid email format";
      case "auth/user-not-found":
      case "auth/wrong-password":
        return "Invalid email or password";
      case "auth/too-many-requests":
        return "Too many attempts. Try again later";
      default:
        return "Login failed. Please try again";
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-trasparent bg-opacity-90 bg-[url('../../assets/background-image.jpg')] bg-cover bg-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md mx-4 backdrop-blur-sm bg-opacity-90">
        <h2 className="text-white text-3xl font-bold mb-8 text-center">
          Sign In
        </h2>

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-3 bg-red-900/50 text-red-300 text-sm rounded-md">
            {error}
          </div>
        )}

        <form className="space-y-6" onSubmit={handleSubmit}>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            disabled={loading}
            className={`w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700 transition duration-200 font-medium text-lg ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        {/* Google Sign-In Button */}
        <button
          onClick={handleGoogleSignIn}
          className="w-full mt-4 bg-white text-gray-800 py-3 rounded-md hover:bg-gray-200 transition duration-200 font-medium flex items-center justify-center gap-2"
        >
          <img
            src="https://www.google.com/favicon.ico"
            alt="Google"
            className="w-5 h-5"
          />
          Sign In with Google
        </button>

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
