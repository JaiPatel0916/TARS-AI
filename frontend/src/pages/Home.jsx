import Section from "../components/Section";
import StickyScrollRevealDemo from "../components/StickyScrollRevealDemo";
import { Card } from "../components/Card";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CoreServices from "../components/CoreServices";


export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#14001f] via-[#1f0033] to-[#2b004d]">
      <Navbar />
      <Section />
      <Card />

      {/* Behind section */}
      {/* StickyScroll section (must stay clean) */}
      <div className="relative z-10 ">
        <StickyScrollRevealDemo />
      </div>

      {/* CoreServices overlaps from below */}
      <div className="relative z-20 -mt-[50vh] pointer-events-auto">
        <CoreServices />
      </div>


      <Footer />
    </div>
  );
}
