import {
  Brain,
  HeartPulse,
  Leaf,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Wind,
  Baby,
} from "lucide-react";

export const treatments = [
  {
    slug: "skin-hair-care",
    title: "Skin & Hair Care",
    shortDescription:
      "Personalized care for common skin and hair concerns.",
    description:
      "A consultation-led approach focused on understanding your individual concerns, lifestyle and overall wellness.",
    icon: Sparkles,
  },
  {
    slug: "digestive-wellness",
    title: "Digestive Wellness",
    shortDescription:
      "Thoughtful support for everyday digestive concerns.",
    description:
      "Understand your symptoms, routines and dietary patterns through a personalized consultation.",
    icon: Leaf,
  },
  {
    slug: "allergy-respiratory",
    title: "Allergy & Respiratory",
    shortDescription:
      "Personalized consultation for recurring respiratory concerns.",
    description:
      "A structured consultation experience designed to understand recurring symptoms and individual triggers.",
    icon: Wind,
  },
  {
    slug: "stress-sleep",
    title: "Stress & Sleep",
    shortDescription:
      "Support focused on better routines and overall wellbeing.",
    description:
      "A calm consultation process that considers lifestyle, sleep patterns and individual wellbeing.",
    icon: Brain,
  },
  {
    slug: "joint-wellness",
    title: "Joint & Musculoskeletal",
    shortDescription:
      "Individualized care for everyday joint and mobility concerns.",
    description:
      "A detailed consultation focused on understanding your symptoms, routines and overall health context.",
    icon: HeartPulse,
  },
  {
    slug: "womens-wellness",
    title: "Women's Wellness",
    shortDescription:
      "Private, personalized and comfortable consultations.",
    description:
      "A patient-first consultation experience designed around individual needs and concerns.",
    icon: ShieldCheck,
  },
  {
    slug: "child-wellness",
    title: "Child Wellness",
    shortDescription:
      "Gentle, parent-guided consultation for children.",
    description:
      "A comfortable consultation environment where parents can discuss their child's health concerns.",
    icon: Baby,
  },
  {
    slug: "general-wellness",
    title: "General Wellness",
    shortDescription:
      "Personalized consultations for your overall wellbeing.",
    description:
      "A holistic consultation experience centered around your health history, lifestyle and goals.",
    icon: Stethoscope,
  },
];