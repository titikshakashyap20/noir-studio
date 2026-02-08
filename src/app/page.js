import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../sections/Hero";
import Showreel from "../sections/Showreel";
import Projects from "../sections/Projects";
import About from "../sections/About";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Showreel />
      <Projects />
      <About />
      <Footer />
    </main>
  );
}