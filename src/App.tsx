import Navbar from "./components/layout/Navbar";
import About from "./components/sections/About";
import Hero from "./components/sections/Hero";
import TrustStats from "./components/sections/TrustStats";
import Services from "./components/sections/Services";
import Fleet from "./components/sections/Fleet";
import Timetable from "./components/sections/Timetable";
import Gallery from "./components/sections/Gallery";
import Contact from "./components/sections/Contact";
import Testimonials from "./components/sections/Testimonials";
import FinalCta from "./components/sections/FinalCta";
import Footer from "./components/sections/Footer";

import { SiteSettingsProvider } from "./context/SiteSettingsContext";
import { ThemeProvider } from "./theme/ThemeProvider";

export default function App() {
  return (
    <SiteSettingsProvider>
      <ThemeProvider>
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
            <Testimonials />
            <Contact />
            <FinalCta />
          </main>

          <Footer />
        </div>
      </ThemeProvider>
    </SiteSettingsProvider>
  );
}