import About from "./components/About/About";
import Contact from "./components/contact/Contact";
import Feedback from "./components/Feedback/Feedback";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Project from "./components/Project/Project";
import Work from "./components/Work/Work";

function App() {
  return (
       <>
          <Navbar />
          <Hero />
          <About />
          <Work />
          <Project />
          <Feedback />
          <Contact />
          <Footer />
       </>
  );
}

export default App;
