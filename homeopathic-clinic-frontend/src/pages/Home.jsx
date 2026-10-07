import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Hero from "../components/home/Hero";
import TrustStats from "../components/home/TrustStats";
import DoctorPreview from "../components/home/DoctorPreview";
import TreatmentsPreview from "../components/home/TreatmentsPreview";
import HowItWorks from "../components/home/HowItWorks";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Testimonials from "../components/home/Testimonials";
import FAQ from "../components/home/FAQ";
import WhatsAppButton from "../components/common/WhatsAppButton";

function Home() {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#f8faf8]">
      <Navbar />

      <main>
        <Hero />
        <TrustStats />
        <DoctorPreview />
        <TreatmentsPreview />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default Home;