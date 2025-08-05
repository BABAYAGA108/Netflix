import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Componets/Navbar/Navbar";
import SignIn from "./Componets/SignIn page/SignIn";
import Hero from "./Componets/HeroSection/Hero";
import Footer from "./Componets/Footer/Footer";
import FQA from "./Componets/HeroSection/FQA";
import Reason from "./Componets/HeroSection/Reason";
import SignUp from "./Componets/SignIn page/SignUp";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/hero" element={<Hero />} />
      </Routes>
      <Hero />
      <Reason />
      <FQA />
      <Footer />
    </Router>
  );
}

function Home() {
  return (
    <div className="text-white">
      {/* Your home page content */}
      <h1>Welcome to Netflix Clone</h1>
    </div>
  );
}

export default App;
