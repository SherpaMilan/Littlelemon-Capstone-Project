import React from "react";
import About from "./About";
import Header from "./Header";
import HeroSection from "./Hero-Section";
import Testimonials from "./Testimonials";
import Highlights from "./Highlights";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Highlights />
      <About />
      <Testimonials />
    </div>
  );
};

export default Home;
