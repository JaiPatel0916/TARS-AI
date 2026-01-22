import Section from "../components/Section";
import StickyScrollRevealDemo from "../components/StickyScrollRevealDemo";
import { Card, CardHeader, CardContent } from "../components/Card";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CoreServices from "../components/CoreServices";
import IndustriesSection from "../components/IndustriesSection";


export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#14001f] via-[#1f0033] to-[#2b004d]">
      <Navbar />
      <Section />
      <Card />
      <StickyScrollRevealDemo />
      <CoreServices />
      <IndustriesSection/>
      <Footer/>
    </div>
  );
}

