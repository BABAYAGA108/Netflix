import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Componets/Navbar/Navbar";
import SignIn from "./Componets/SignIn page/SignIn"
import Hero from "./Componets/HeroSection/Hero";
import Footer from "./Componets/Footer/Footer";
import FQA from "./Componets/HeroSection/FQA";
import Reasons from "./Componets/HeroSection/reasons";

function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <Reasons />
      <FQA />
      <Footer />

      {/* Define your routes here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/hero" element={<Hero />} />
      </Routes>
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
