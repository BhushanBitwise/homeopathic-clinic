const createCity = ({
  city,
  state,
  slug,
  region,
  description,
  highlights,
}) => ({
  city,
  state,
  slug,
  region,
  description,
  highlights,
  path: `/locations/${state.toLowerCase().replace(/\s+/g, "-")}/${slug}`,
});

const maharashtraCities = [
  createCity({
    city: "Pune",
    state: "Maharashtra",
    slug: "pune",
    region: "Western Maharashtra",
    description:
      "Homeopathy consultation for individuals and families in Pune, with a patient-first approach focused on understanding symptoms, lifestyle, and overall wellbeing.",
    highlights: [
      "Personalized consultation",
      "Lifestyle and wellness guidance",
      "Support for long-term health concerns",
      "Online consultation availability",
    ],
  }),

  createCity({
    city: "Mumbai",
    state: "Maharashtra",
    slug: "mumbai",
    region: "Konkan",
    description:
      "Homeopathy consultation for patients in Mumbai looking for a structured, personalized approach to their health concerns and ongoing wellbeing.",
    highlights: [
      "Personalized case assessment",
      "Online consultation support",
      "Family wellness guidance",
      "Long-term follow-up approach",
    ],
  }),

  createCity({
    city: "Navi Mumbai",
    state: "Maharashtra",
    slug: "navi-mumbai",
    region: "Konkan",
    description:
      "Homeopathy consultation support for patients across Navi Mumbai with a convenient digital-first appointment experience.",
    highlights: [
      "Convenient online consultation",
      "Personalized health assessment",
      "Follow-up support",
      "Family-oriented care",
    ],
  }),

  createCity({
    city: "Thane",
    state: "Maharashtra",
    slug: "thane",
    region: "Konkan",
    description:
      "Personalized homeopathy consultation for patients in Thane with an emphasis on individual symptoms, lifestyle and long-term wellbeing.",
    highlights: [
      "Individualized consultation",
      "Lifestyle-focused approach",
      "Online appointment option",
      "Structured follow-ups",
    ],
  }),

  createCity({
    city: "Nashik",
    state: "Maharashtra",
    slug: "nashik",
    region: "Nashik Division",
    description:
      "Homeopathy consultation for patients in Nashik seeking personalized guidance for general wellness and long-term health concerns.",
    highlights: [
      "Personalized consultation",
      "Wellness-focused guidance",
      "Online consultation",
      "Follow-up support",
    ],
  }),

  createCity({
    city: "Nagpur",
    state: "Maharashtra",
    slug: "nagpur",
    region: "Vidarbha",
    description:
      "Personalized homeopathy consultation for patients in Nagpur with convenient online appointment and follow-up support.",
    highlights: [
      "Personalized case review",
      "Online consultation",
      "Family wellness support",
      "Follow-up care",
    ],
  }),

  createCity({
    city: "Chhatrapati Sambhajinagar",
    state: "Maharashtra",
    slug: "chhatrapati-sambhajinagar",
    region: "Marathwada",
    description:
      "Homeopathy consultation support for patients in Chhatrapati Sambhajinagar with a personalized and patient-first approach.",
    highlights: [
      "Personalized consultation",
      "Long-term wellness guidance",
      "Online appointment support",
      "Individual case assessment",
    ],
  }),

  createCity({
    city: "Kolhapur",
    state: "Maharashtra",
    slug: "kolhapur",
    region: "Western Maharashtra",
    description:
      "Personalized homeopathy consultation for patients in Kolhapur with an emphasis on understanding individual health concerns.",
    highlights: [
      "Personalized care",
      "Lifestyle guidance",
      "Online consultation",
      "Follow-up support",
    ],
  }),

  createCity({
    city: "Solapur",
    state: "Maharashtra",
    slug: "solapur",
    region: "Western Maharashtra",
    description:
      "Homeopathy consultation for individuals and families in Solapur seeking personalized health and wellness guidance.",
    highlights: [
      "Individual consultation",
      "Wellness guidance",
      "Online appointments",
      "Follow-up support",
    ],
  }),

  createCity({
    city: "Sangli",
    state: "Maharashtra",
    slug: "sangli",
    region: "Western Maharashtra",
    description:
      "Personalized homeopathy consultation support for patients in Sangli with convenient appointment options.",
    highlights: [
      "Personalized consultation",
      "Online appointment",
      "Lifestyle guidance",
      "Ongoing follow-up",
    ],
  }),

  createCity({
    city: "Satara",
    state: "Maharashtra",
    slug: "satara",
    region: "Western Maharashtra",
    description:
      "Homeopathy consultation support for patients in Satara focused on personalized assessment and long-term wellness.",
    highlights: [
      "Personalized assessment",
      "Wellness guidance",
      "Online consultation",
      "Follow-up care",
    ],
  }),

  createCity({
    city: "Ahmednagar",
    state: "Maharashtra",
    slug: "ahmednagar",
    region: "Maharashtra",
    description:
      "Personalized homeopathy consultation for patients in Ahmednagar with a patient-first approach.",
    highlights: [
      "Personalized consultation",
      "Online appointments",
      "Lifestyle guidance",
      "Follow-up support",
    ],
  }),

  createCity({
    city: "Jalgaon",
    state: "Maharashtra",
    slug: "jalgaon",
    region: "North Maharashtra",
    description:
      "Homeopathy consultation support for patients in Jalgaon looking for personalized health and wellness guidance.",
    highlights: [
      "Individual case assessment",
      "Online consultation",
      "Wellness support",
      "Follow-up care",
    ],
  }),

  createCity({
    city: "Amravati",
    state: "Maharashtra",
    slug: "amravati",
    region: "Vidarbha",
    description:
      "Personalized homeopathy consultation for patients in Amravati with convenient online appointment options.",
    highlights: [
      "Personalized consultation",
      "Online appointment",
      "Lifestyle guidance",
      "Ongoing support",
    ],
  }),

  createCity({
    city: "Akola",
    state: "Maharashtra",
    slug: "akola",
    region: "Vidarbha",
    description:
      "Homeopathy consultation support for individuals and families in Akola.",
    highlights: [
      "Personalized consultation",
      "Online consultation",
      "Wellness guidance",
      "Follow-up support",
    ],
  }),

  createCity({
    city: "Latur",
    state: "Maharashtra",
    slug: "latur",
    region: "Marathwada",
    description:
      "Personalized homeopathy consultation for patients in Latur with a structured approach to individual health concerns.",
    highlights: [
      "Personalized care",
      "Online consultation",
      "Lifestyle guidance",
      "Follow-up support",
    ],
  }),

  createCity({
    city: "Nanded",
    state: "Maharashtra",
    slug: "nanded",
    region: "Marathwada",
    description:
      "Homeopathy consultation support for patients in Nanded seeking personalized wellness guidance.",
    highlights: [
      "Individual assessment",
      "Online consultation",
      "Wellness support",
      "Follow-up care",
    ],
  }),

  createCity({
    city: "Dhule",
    state: "Maharashtra",
    slug: "dhule",
    region: "North Maharashtra",
    description:
      "Personalized homeopathy consultation support for patients in Dhule.",
    highlights: [
      "Personalized consultation",
      "Online appointments",
      "Lifestyle guidance",
      "Follow-up support",
    ],
  }),

  createCity({
    city: "Bhiwandi",
    state: "Maharashtra",
    slug: "bhiwandi",
    region: "Konkan",
    description:
      "Homeopathy consultation support for patients in Bhiwandi with convenient online appointment options.",
    highlights: [
      "Personalized consultation",
      "Online consultation",
      "Wellness guidance",
      "Follow-up support",
    ],
  }),

  createCity({
    city: "Kalyan",
    state: "Maharashtra",
    slug: "kalyan",
    region: "Konkan",
    description:
      "Personalized homeopathy consultation for patients in Kalyan.",
    highlights: [
      "Individual case assessment",
      "Online appointment",
      "Lifestyle guidance",
      "Follow-up care",
    ],
  }),

  createCity({
    city: "Dombivli",
    state: "Maharashtra",
    slug: "dombivli",
    region: "Konkan",
    description:
      "Homeopathy consultation support for patients in Dombivli.",
    highlights: [
      "Personalized consultation",
      "Online consultation",
      "Wellness guidance",
      "Follow-up support",
    ],
  }),

  createCity({
    city: "Mira Bhayandar",
    state: "Maharashtra",
    slug: "mira-bhayandar",
    region: "Konkan",
    description:
      "Personalized homeopathy consultation support for patients in Mira Bhayandar.",
    highlights: [
      "Personalized assessment",
      "Online consultation",
      "Lifestyle guidance",
      "Follow-up support",
    ],
  }),

  createCity({
    city: "Vasai Virar",
    state: "Maharashtra",
    slug: "vasai-virar",
    region: "Konkan",
    description:
      "Homeopathy consultation support for patients in Vasai Virar with convenient digital appointment options.",
    highlights: [
      "Personalized consultation",
      "Online appointments",
      "Wellness guidance",
      "Follow-up care",
    ],
  }),

  createCity({
    city: "Panvel",
    state: "Maharashtra",
    slug: "panvel",
    region: "Konkan",
    description:
      "Personalized homeopathy consultation support for patients in Panvel.",
    highlights: [
      "Individual assessment",
      "Online consultation",
      "Lifestyle guidance",
      "Follow-up support",
    ],
  }),

  createCity({
    city: "Malegaon",
    state: "Maharashtra",
    slug: "malegaon",
    region: "Nashik Division",
    description:
      "Homeopathy consultation support for patients in Malegaon.",
    highlights: [
      "Personalized consultation",
      "Online appointments",
      "Wellness support",
      "Follow-up care",
    ],
  }),

  createCity({
    city: "Ichalkaranji",
    state: "Maharashtra",
    slug: "ichalkaranji",
    region: "Western Maharashtra",
    description:
      "Personalized homeopathy consultation support for patients in Ichalkaranji.",
    highlights: [
      "Personalized care",
      "Online consultation",
      "Lifestyle guidance",
      "Follow-up support",
    ],
  }),

  createCity({
    city: "Wardha",
    state: "Maharashtra",
    slug: "wardha",
    region: "Vidarbha",
    description:
      "Homeopathy consultation support for patients in Wardha.",
    highlights: [
      "Individual assessment",
      "Online consultation",
      "Wellness guidance",
      "Follow-up support",
    ],
  }),

  createCity({
    city: "Chandrapur",
    state: "Maharashtra",
    slug: "chandrapur",
    region: "Vidarbha",
    description:
      "Personalized homeopathy consultation support for patients in Chandrapur.",
    highlights: [
      "Personalized consultation",
      "Online appointments",
      "Lifestyle guidance",
      "Follow-up care",
    ],
  }),

  createCity({
    city: "Parbhani",
    state: "Maharashtra",
    slug: "parbhani",
    region: "Marathwada",
    description:
      "Homeopathy consultation support for patients in Parbhani.",
    highlights: [
      "Personalized assessment",
      "Online consultation",
      "Wellness guidance",
      "Follow-up support",
    ],
  }),

  createCity({
    city: "Jalna",
    state: "Maharashtra",
    slug: "jalna",
    region: "Marathwada",
    description:
      "Personalized homeopathy consultation support for patients in Jalna.",
    highlights: [
      "Personalized consultation",
      "Online appointments",
      "Lifestyle guidance",
      "Follow-up care",
    ],
  }),

  createCity({
    city: "Beed",
    state: "Maharashtra",
    slug: "beed",
    region: "Marathwada",
    description:
      "Homeopathy consultation support for patients in Beed.",
    highlights: [
      "Individual assessment",
      "Online consultation",
      "Wellness guidance",
      "Follow-up support",
    ],
  }),

  createCity({
    city: "Osmanabad",
    state: "Maharashtra",
    slug: "osmanabad",
    region: "Marathwada",
    description:
      "Personalized homeopathy consultation support for patients in Osmanabad.",
    highlights: [
      "Personalized consultation",
      "Online consultation",
      "Lifestyle guidance",
      "Follow-up care",
    ],
  }),

  createCity({
    city: "Buldhana",
    state: "Maharashtra",
    slug: "buldhana",
    region: "Vidarbha",
    description:
      "Homeopathy consultation support for patients in Buldhana.",
    highlights: [
      "Personalized care",
      "Online appointment",
      "Wellness guidance",
      "Follow-up support",
    ],
  }),
];

const indiaCities = [
  {
    city: "Delhi",
    state: "Delhi",
    slug: "delhi",
    region: "North India",
  },
  {
    city: "Bengaluru",
    state: "Karnataka",
    slug: "bengaluru",
    region: "South India",
  },
  {
    city: "Hyderabad",
    state: "Telangana",
    slug: "hyderabad",
    region: "South India",
  },
  {
    city: "Ahmedabad",
    state: "Gujarat",
    slug: "ahmedabad",
    region: "West India",
  },
  {
    city: "Surat",
    state: "Gujarat",
    slug: "surat",
    region: "West India",
  },
  {
    city: "Vadodara",
    state: "Gujarat",
    slug: "vadodara",
    region: "West India",
  },
  {
    city: "Indore",
    state: "Madhya Pradesh",
    slug: "indore",
    region: "Central India",
  },
  {
    city: "Bhopal",
    state: "Madhya Pradesh",
    slug: "bhopal",
    region: "Central India",
  },
  {
    city: "Jaipur",
    state: "Rajasthan",
    slug: "jaipur",
    region: "North India",
  },
  {
    city: "Lucknow",
    state: "Uttar Pradesh",
    slug: "lucknow",
    region: "North India",
  },
  {
    city: "Chandigarh",
    state: "Chandigarh",
    slug: "chandigarh",
    region: "North India",
  },
  {
    city: "Kolkata",
    state: "West Bengal",
    slug: "kolkata",
    region: "East India",
  },
  {
    city: "Chennai",
    state: "Tamil Nadu",
    slug: "chennai",
    region: "South India",
  },
  {
    city: "Kochi",
    state: "Kerala",
    slug: "kochi",
    region: "South India",
  },
  {
    city: "Visakhapatnam",
    state: "Andhra Pradesh",
    slug: "visakhapatnam",
    region: "South India",
  },
];

const indiaLocationCities = indiaCities.map((item) => ({
  ...item,
  description: `Homeopathy consultation support for patients in ${item.city}, with a personalized approach focused on individual health concerns and overall wellbeing.`,
  highlights: [
    "Personalized consultation",
    "Online appointment support",
    "Lifestyle and wellness guidance",
    "Follow-up support",
  ],
  path: `/locations/${item.state.toLowerCase().replace(/\s+/g, "-")}/${item.slug}`,
}));

export const locations = [
  ...maharashtraCities,
  ...indiaLocationCities,
];

export const maharashtraLocations = maharashtraCities;

export const indiaLocations = indiaLocationCities;

export function getLocationBySlug(stateSlug, citySlug) {
  return locations.find(
    (location) =>
      location.state.toLowerCase().replace(/\s+/g, "-") === stateSlug &&
      location.slug === citySlug
  );
}