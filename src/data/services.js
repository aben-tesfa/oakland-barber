export const studioConfig = {
  name: "Oakland Barber",
  barberName: "Marcus Vance",
  title: "Solo Master Barber",
  tagline: "One chair. Dedicated attention. Precision craftsmanship in Downtown Oakland.",
  calendlyUrl: "https://calendly.com/oakland-barber", // Replace with your real Calendly username/event
  phone: "(510) 842-7890",
  formattedPhone: "+15108427890",
  email: "marcus@oaklandbarber.com",
  address: "1942 Broadway, Suite 204",
  city: "Oakland, CA 94612",
  neighborhood: "Uptown / Downtown Oakland (Near 19th St BART)",
  instagram: "oaklandbarberstudio",
  hours: [
    { day: "Tuesday – Friday", time: "9:00 AM – 7:00 PM" },
    { day: "Saturday", time: "8:30 AM – 5:00 PM" },
    { day: "Sunday – Monday", time: "Closed (By Special Request)" },
  ],
  policies: [
    {
      title: "By Appointment Only",
      desc: "Every appointment is reserved exclusively for you with dedicated buffer time so you never wait."
    },
    {
      title: "Punctuality & Arrival",
      desc: "Please arrive 5 minutes early. Enjoy complimentary pour-over coffee, cold sparkling water, or whiskey."
    },
    {
      title: "24-Hour Rescheduling",
      desc: "Need to change your time? Easily reschedule via your Calendly confirmation up to 24 hours prior."
    }
  ]
};

export const serviceCategories = ["All Services", "Haircuts", "Beard & Shave", "Complete Packages"];

export const services = [
  {
    id: "signature-haircut",
    name: "The Signature Haircut",
    category: "Haircuts",
    price: 60,
    duration: "45 min",
    popular: true,
    description: "Detailed consultation, precision scissor or clipper work, straight-razor neck shave, organic tonic wash, and tailored styling.",
    included: [
      "Head shape & hair flow consultation",
      "Precision taper, skin fade, or classic shear cut",
      "Hot lather straight-razor neck clean-up",
      "Herbal wash & invigorating scalp massage",
      "Matte paste or styling cream finish"
    ],
    calendlySlug: "signature-cut"
  },
  {
    id: "haircut-beard-ritual",
    name: "The Full Ritual (Haircut + Beard)",
    category: "Complete Packages",
    price: 95,
    duration: "75 min",
    popular: true,
    description: "Our most requested experience. Comprehensive precision haircut combined with bespoke beard sculpting and hot towel straight-razor detailing.",
    included: [
      "Full Signature Haircut & hot neck shave",
      "Custom beard shaping, length reduction & line-up",
      "Dual essential-oil steamed hot towels",
      "Straight-razor cheek & neckline edging",
      "Deep beard oil & styling balm treatment"
    ],
    calendlySlug: "full-ritual"
  },
  {
    id: "artisan-beard-sculpt",
    name: "Artisan Beard Sculpt & Razor Line",
    category: "Beard & Shave",
    price: 45,
    duration: "30 min",
    popular: false,
    description: "Detailed beard shaping tailored to your jawline, finished with hot towel treatment and straight-razor perimeter definition.",
    included: [
      "Beard architecture consultation",
      "Freehand clipper & shear tapering",
      "Eucalyptus hot steam towel",
      "Sharp straight-razor cheek & neck line",
      "Organic cedar & citrus beard elixir"
    ],
    calendlySlug: "beard-sculpt"
  },
  {
    id: "hot-towel-straight-razor-shave",
    name: "Traditional Hot Towel Shave",
    category: "Beard & Shave",
    price: 55,
    duration: "45 min",
    popular: false,
    description: "Old-world straight razor shave with multi-step hot and cold towels, rich warm lather, and soothing post-shave botanical compress.",
    included: [
      "Pre-shave essential oil application",
      "Three steaming hot herbal towels",
      "Warm rich lather brush application",
      "Close single-blade razor glide with the grain",
      "Cold towel pore close & soothing aftershave balm"
    ],
    calendlySlug: "hot-towel-shave"
  },
  {
    id: "skin-fade-shear-top",
    name: "Precision Skin Fade / Scissor Work",
    category: "Haircuts",
    price: 65,
    duration: "50 min",
    popular: false,
    description: "Flawless low, mid, or high skin fade seamlessly blended into textured shear work on top with razor sharp hairline edging.",
    included: [
      "Foil shaver / zero-gap clipper transition",
      "Point-cut texture & weight balance",
      "Razor perimeter detailing",
      "Wash & light styling"
    ],
    calendlySlug: "skin-fade"
  },
  {
    id: "executive-grooming-package",
    name: "The Executive Session",
    category: "Complete Packages",
    price: 125,
    duration: "90 min",
    popular: false,
    description: "The ultimate one-on-one grooming rejuvenation. Haircut, full beard / shave, deep scalp detox, nose/ear detailing, and premium refreshment.",
    included: [
      "Complete Signature Haircut & Beard Sculpt",
      "Charcoal clarifying shampoo & scalp treatment",
      "Four aromatic steam towels (Lavender / Mint)",
      "Ear & eyebrow clean-up detailing",
      "Complimentary top-shelf beverage during service"
    ],
    calendlySlug: "executive-session"
  }
];
