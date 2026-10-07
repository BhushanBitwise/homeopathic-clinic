import {
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Container from "../components/common/Container";
import Button from "../components/common/Button";

import clinicInteriorImage from "../assets/images/clinic-interior.webp";

function Contact() {
  return (
    <div className="min-h-screen bg-[#f8faf8]">
      <Navbar />

      <main className="pt-[76px]">
        <section className="bg-white py-20 sm:py-28">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                  Contact
                </p>

                <h1 className="mt-4 max-w-3xl text-5xl font-semibold tracking-[-0.05em] text-slate-950">
                  We’re here to help you take the next step.
                </h1>

                <p className="mt-6 max-w-xl text-base leading-7 text-slate-600">
                  Reach out to the clinic for appointments, consultation
                  information or general enquiries.
                </p>

                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  {[
                    [MapPin, "Clinic", "Pune, Maharashtra"],
                    [Phone, "Phone", "+91 8767907569"],
                    [Mail, "Email", "hello@example.com"],
                    [Clock3, "Hours", "Mon – Sat · 9 AM – 7 PM"],
                  ].map(([Icon, title, value]) => (
                    <div
                      key={title}
                      className="rounded-[1.5rem] border border-slate-900/8 bg-[#f8faf8] p-5"
                    >
                      <Icon
                        size={20}
                        className="text-emerald-800"
                      />

                      <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400">
                        {title}
                      </p>

                      <p className="mt-2 text-sm font-semibold text-slate-900">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Button to="/appointment">
                    Book Appointment
                  </Button>

                  <Button
                    href="https://wa.me/918767907569"
                    variant="secondary"
                  >
                    <MessageCircle size={17} />
                    WhatsApp
                  </Button>
                </div>
              </div>

              <div className="overflow-hidden rounded-[2rem] bg-emerald-50">
                <img
                  src={clinicInteriorImage}
                  alt="Interior of the homeopathy clinic"
                  width="1000"
                  height="750"
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Contact;