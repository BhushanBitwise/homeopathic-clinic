const CLINIC_WHATSAPP = "918767907569";

export function createAppointmentMessage(data) {
  return `Hello HealingCare,

I would like to book an appointment.

Name: ${data.name}
Phone: ${data.phone}
Consultation: ${data.consultationType}
Date: ${data.date}
Time: ${data.time}
Concern: ${data.concern || "Not specified"}

Thank you.`;
}

export function openWhatsApp(message) {
  const url = `https://wa.me/${CLINIC_WHATSAPP}?text=${encodeURIComponent(
    message
  )}`;

  window.open(url, "_blank", "noopener,noreferrer");
}

export function openClinicWhatsApp(
  message = "Hello, I would like to know more about booking a consultation."
) {
  const url = `https://wa.me/${CLINIC_WHATSAPP}?text=${encodeURIComponent(
    message
  )}`;

  window.open(url, "_blank", "noopener,noreferrer");
}