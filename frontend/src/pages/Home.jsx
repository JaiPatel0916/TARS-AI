import Section from "../components/Section";

import StickyScrollRevealDemo from "../components/StickyScrollRevealDemo";
import { Card, CardHeader, CardContent } from "../components/Card";

import Footer from "../components/Footer";
import CoreServices from "../components/CoreServices";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#14001f] via-[#1f0033] to-[#2b004d]">
      <Navbar/>
      <Section />
      <Card />
      <StickyScrollRevealDemo />
      <CoreServices />
      <Footer/>
    </div>
  );
}

