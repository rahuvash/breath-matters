import React from "react"
import Section1 from "./components/Section1"
import PartnerLogos from "./components/PartnerLogos"
import DiscoverSection from "./components/DiscoverSection"
import ProductIntro from "./components/ProductIntro.tsx"
import PowerSection from "./components/PowerSection"
import HowItWorks from "./components/HowItWorks.jsx" 
import WhyDifferent from "./components/WhyDifferent.jsx" 
import WhoIsItFor from "./components/WhoIsItFor.jsx" 
import SuccessStories from "./components/SuccessStories.jsx" 
import CapnoBenefits from "./components/CapnoBenefits.jsx" 
import KeyFeatures from "./components/KeyFeatures.jsx" 
import HeroSection from "./components/HeroSection.jsx" 
import FAQSection from "./components/FAQSection.tsx" 
import CTASection from "./components/CTASection.tsx" 
import Footer from "./components/Footer.tsx" 




function App() {


  return (
    <>
    <Section1/>
    <PartnerLogos/>
    <DiscoverSection/>
    <ProductIntro/>
    <PowerSection/>
    <HowItWorks/>
    <WhyDifferent/>
    <WhoIsItFor/>
    <SuccessStories/>
    <KeyFeatures/>
    <CapnoBenefits/>
    <HeroSection/>
    <FAQSection/>
    <CTASection/>
  
    <Footer/>
    </>
  )
}

export default App
