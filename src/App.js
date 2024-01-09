import About from "./components/About";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Highlights from "./components/Highlights";
import Testimonials from "./components/Testimonials";
import "./App.css";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Highlights />
      <Testimonials />
      <About />
      <Footer />
      {/* <Example /> */}
    </div>
  );
}

export default App;
