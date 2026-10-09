
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Hero from "../components/home/Hero";
import TrustStats from "../components/home/TrustStats";
import DoctorPreview from "../components/home/DoctorPreview";
import DoctorsPreviewGrid from "../components/home/DoctorsPreviewGrid";
import TreatmentsPreview from "../components/home/TreatmentsPreview";
import HowItWorks from "../components/home/HowItWorks";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Testimonials from "../components/home/Testimonials";
import FAQ from "../components/home/FAQ";
import WhatsAppButton from "../components/common/WhatsAppButton";
import LocationsPreview from "../components/home/LocationsPreview";

function Home() {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#f8faf8]">
      <Navbar />

      <main>
        {/* Main hero section */}
        <Hero />

        {/* Clinic trust indicators */}
        <TrustStats />

        {/* Featured doctor: Dr. Pranita Kanade */}
        <DoctorPreview />

        {/* Multiple doctors preview */}
        <DoctorsPreviewGrid />

        {/* Treatment categories */}
        <TreatmentsPreview />

        {/* Consultation process */}
        <HowItWorks />

        {/* Clinic benefits */}
        <WhyChooseUs />

        {/* Patient testimonials */}
        <Testimonials />

        {/* Available locations */}
        <LocationsPreview />

        {/* Frequently asked questions */}
        <FAQ />
      </main>

      <Footer />

      <WhatsAppButton />
    </div>
  );
}

export default Home;
