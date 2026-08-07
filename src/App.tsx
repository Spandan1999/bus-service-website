import Navbar from "./components/layout/Navbar";
import About from "./components/sections/About";
import Hero from "./components/sections/Hero";
import TrustStats from "./components/sections/TrustStats";
import Services from "./components/sections/Services";
import Fleet from "./components/sections/Fleet";
import Timetable from "./components/sections/Timetable";
import Gallery from "./components/sections/Gallery";
import Contact from "./components/sections/Contact";
export default function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <TrustStats />
        <About />
        <Services />
        <Fleet />
        <Timetable />
        <Gallery />
        <Contact />
      </main>
    </div>
  );
}