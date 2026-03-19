import Navbar from "./sections/Navbar"
import Hero from "./sections/Hero"
import ProblemSolution from "./sections/ProblemSolution"
import Features from "./sections/Features"
import HowItWorks from "./sections/HowItWorks"
import CtaFinal from "./sections/CtaFinal"
import Footer from "./sections/Footer"

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden scroll-smooth bg-[#00010a]">
      <Hero />
      <ProblemSolution />
      <Features />
      <HowItWorks />
      <CtaFinal />
      <Footer />
    </div>
  )
}
