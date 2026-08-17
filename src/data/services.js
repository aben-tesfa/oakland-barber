export const studioConfig = {
  name: "Classic Cut",
  badgeName: "Barbershop by Binyam",
  barberName: "Binyam",
  title: "Master Barber",
  tagline: "Precision haircuts, beard trims, custom color, and treatments on Grand Ave in Oakland.",
  calendlyUrl: "https://calendly.com", // Replace with Binyam's direct Calendly link
  phone: "510-899-3222",
  formattedPhone: "+15108993222",
  email: "contact@classiccutoakland.com",
  address: "3233 Grand Ave",
  city: "Oakland, CA 94610",
  neighborhood: "Grand Lake / Lake Merritt District",
  instagram: "barbershopbybinyam",
  hours: [
    { day: "Monday – Saturday", time: "10:30 AM – 7:30 PM" },
    { day: "Sunday", time: "9:00 AM – 2:00 PM" },
  ],
  policies: [
    {
      title: "Appointments & Walk-ins",
      desc: "Book online or call 510-899-3222. Dedicated attention for every cut and style."
    },
    {
      title: "Grand Avenue Location",
      desc: "Located at 3233 Grand Ave in Oakland's vibrant Grand Lake district with easy street parking."
    },
    {
      title: "Flexible Scheduling",
      desc: "Open 7 days a week: Mon–Sat 10:30am–7:30pm and Sunday morning hours 9am–2pm."
    }
  ]
};

export const serviceCategories = ["All Services", "Haircuts", "Color & Beard", "Treatments"];

export const services = [
  {
    id: "classic-haircut",
    name: "Haircut ✂️",
    category: "Haircuts",
    price: 55,
    priceDisplay: "$55",
    duration: "30–45 min",
    popular: true,
    description: "Tailored precision haircut by Binyam. Includes detailed consultation, clipper/shear work, clean line-up, and finishing style.",
    included: [
      "Personal style & hair texture consultation",
      "Precision fade, taper, or classic shear haircut",
      "Clean neck clean-up & straight-razor detailing",
      "Styling with premium pomade or matte paste"
    ],
    calendlySlug: "haircut"
  },
  {
    id: "kids-haircut",
    name: "Kids under 10",
    category: "Haircuts",
    price: 45,
    priceDisplay: "$45",
    duration: "30 min",
    popular: false,
    description: "Patient, detailed haircut for children under 10 years old. Clean scissor or clipper cut tailored to child's preference.",
    included: [
      "Gentle & friendly consultation",
      "Clean clipper or scissor cut",
      "Taper, fade, or natural scissor trim",
      "Light styling finish"
    ],
    calendlySlug: "kids-cut"
  },
  {
    id: "haircut-and-beard-trim",
    name: "Haircut & Beard Trim",
    category: "Color & Beard",
    price: 65,
    priceDisplay: "$65",
    duration: "45–60 min",
    popular: true,
    description: "Complete grooming combo. Full precision haircut paired with sharp beard shaping, length balancing, and perimeter razor line.",
    included: [
      "Full Classic Haircut tailored to your preference",
      "Custom beard shaping & length trim",
      "Hot towel & straight-razor cheek/neck line-up",
      "Nourishing beard oil & styling finish"
    ],
    calendlySlug: "haircut-beard"
  },
  {
    id: "color-and-haircut",
    name: "Color & Haircut ✂️",
    category: "Color & Beard",
    price: 75,
    priceDisplay: "$75",
    duration: "60–75 min",
    popular: false,
    description: "Full precision haircut combined with professional color application for gray blending, natural tone enhancement, or full coverage.",
    included: [
      "Custom hair color consultation & shade selection",
      "Professional color application & processing",
      "Gentle rinse & clarifying condition",
      "Full precision haircut & final style"
    ],
    calendlySlug: "color-haircut"
  },
  {
    id: "color-only",
    name: "Color Only",
    category: "Color & Beard",
    price: 45,
    priceDisplay: "$45 and up",
    duration: "45 min",
    popular: false,
    description: "Professional hair color treatment. Gray coverage, tone correction, or beard color enhancement starting at $45.",
    included: [
      "Color shade match & consultation",
      "Even application with scalp protection",
      "Color lock wash & conditioner",
      "Blow dry & natural finish"
    ],
    calendlySlug: "color-only"
  },
  {
    id: "specialty-treatment",
    name: "Treatment",
    category: "Treatments",
    price: null,
    priceDisplay: "Custom / Inquire",
    duration: "30 min",
    popular: false,
    description: "Deep restorative hair & scalp conditioning treatment designed to revitalize dry hair, cleanse the scalp, and promote healthy growth.",
    included: [
      "Scalp diagnosis & clarifying wash",
      "Deep moisture steam / botanical mask",
      "Invigorating scalp massage",
      "Rinse & leave-in tonic treatment"
    ],
    calendlySlug: "treatment"
  }
];
