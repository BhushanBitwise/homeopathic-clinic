import { useState } from "react";
import { ChevronDown } from "lucide-react";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { faqs } from "../../data/faq";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions, answered clearly."
            description="Everything you need to know before your consultation."
          />

          <div className="divide-y divide-slate-900/8 rounded-[1.5rem] border border-slate-900/8 bg-[#f8faf8] px-6">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={faq.question}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() =>
                      setOpenIndex(isOpen ? -1 : index)
                    }
                    className="flex w-full items-center justify-between gap-5 py-6 text-left"
                  >
                    <span className="text-sm font-semibold text-slate-900 sm:text-base">
                      {faq.question}
                    </span>

                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-slate-500 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="pb-6 pr-8">
                      <p className="text-sm leading-6 text-slate-500">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default FAQ;