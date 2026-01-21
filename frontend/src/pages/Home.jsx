import Section from "../components/Section";
import { Card, CardHeader, CardContent } from "../components/Card";
import Navbar from "../components/Navbar";
import StickyScrollRevealDemo from "../components/StickyScrollRevealDemo";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#14001f] via-[#1f0033] to-[#2b004d]">
      <Navbar />
      <Section />
      <Card />
      <StickyScrollRevealDemo />
      <Footer/>
    </div>
  );
}

