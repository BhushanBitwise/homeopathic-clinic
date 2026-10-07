import { MessageCircle } from "lucide-react";

function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hello, I would like to know more about booking a consultation."
  );

  return (
    <a
      href={`https://wa.me/918767907569?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with the clinic on WhatsApp"
      className="fixed bottom-[calc(5.25rem+env(safe-area-inset-bottom))] right-4 z-40 flex size-14 items-center justify-center rounded-full bg-[#1f9d61] text-white shadow-[0_12px_30px_rgba(31,157,97,0.28)] transition-transform duration-200 hover:scale-105 active:scale-95 sm:bottom-7 sm:right-7"
    >
      <MessageCircle size={24} />
    </a>
  );
}

export default WhatsAppButton;