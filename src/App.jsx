import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Work from "./components/work/Work";
import Images from "./components/images/Images";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Images />
      <Contact />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
