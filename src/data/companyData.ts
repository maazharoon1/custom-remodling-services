import { ServiceCategory, WhyUsItem, ReviewItem, GalleryImage } from '../types';

export const BUSINESS_INFO = {
  name: 'Custom Remodeling Services',
  tagline: 'Providing comprehensive services across all trades, managing projects from start to finish.',
  phone: '+1 716-225-4145',
  callLink: 'tel:+17162254145',
  whatsapp: '+1 716-225-4145',
  whatsappLink: 'https://wa.me/17162254145',
  email: 'custremserv@gmail.com',
  emailLink: 'mailto:custremserv@gmail.com',
  facebook: 'https://www.facebook.com/profile.php?id=61574688016387',
  instagram: 'https://www.instagram.com/___c.r.s.__/',
  logoUrl: 'https://res.cloudinary.com/z08v8we6/image/upload/v1789000010/crscl.png',
  heroVideoUrl: 'https://res.cloudinary.com/z08v8we6/video/upload/v1789000686/crscv1.mp4',
  heroPosterUrl: '/hero-poster.jpg',
  aboutImageUrl: 'https://res.cloudinary.com/z08v8we6/image/upload/v1789000581/crscga.jpg',
  aboutImageAlt: 'Custom Remodeling Services project vehicle on residential driveway outside a multi-story home during remodeling coordination',
};

export const DEMO_SERVICES: ServiceCategory[] = [
  {
    id: 'whole-home',
    name: 'Whole-Home Remodeling',
    summary: 'Coordinate updates across multiple rooms and areas through one remodeling plan.',
    details: 'Aligning living areas, transitions, and shared spaces under a unified vision so multi-room renovations stay on schedule and visually cohesive.',
    iconName: 'Home',
    considerations: [
      'Multi-room staging and phasing',
      'Structural and spatial flow between living areas',
      'Cohesive surface materials across adjacent rooms',
      'Centralized point of contact for all trade phases'
    ]
  },
  {
    id: 'kitchen',
    name: 'Kitchen Improvements',
    summary: 'Explore layout, surface, storage, fixture, and finish updates for the kitchen.',
    details: 'From island placement and prep zones to cabinetry installation, durable stone surfaces, and accent tile backsplashes that support daily living.',
    iconName: 'UtensilsCrossed',
    considerations: [
      'Cabinetry configuration and storage utility',
      'Countertop stone selection and edge detailing',
      'Sink basin, gooseneck faucet, and appliance fitting',
      'Tiled backsplash patterns and under-cabinet illumination'
    ]
  },
  {
    id: 'bathroom',
    name: 'Bathroom Improvements',
    summary: 'Plan a more comfortable and functional bathroom with carefully coordinated finishes.',
    details: 'Modernizing vanity areas, walk-in tiled showers, alcove bathtubs, and water-resistant flooring with attention to drainage, lighting, and ventilation.',
    iconName: 'Bath',
    considerations: [
      'Walk-in glass shower enclosures and built-in benches',
      'Moisture-resistant drywall and wall tile waterproofing',
      'Vanity fixtures, mirrors, and complementary hardware',
      'Tub-to-shower conversions or fresh alcove surround replacements'
    ]
  },
  {
    id: 'interior',
    name: 'Interior Renovations',
    summary: 'Refresh walls, flooring, trim, surfaces, and other important interior elements.',
    details: 'Bringing precision to drywall smoothing, door trim, baseboard mouldings, ceiling treatments, and room partitions for a tailored living environment.',
    iconName: 'Paintbrush',
    considerations: [
      'Drywall finishing, patch repairs, and smooth priming',
      'Custom casing, baseboard, and architectural millwork',
      'Interior partition framing and open-concept transitions',
      'Subfloor preparation and level adjustments'
    ]
  },
  {
    id: 'exterior',
    name: 'Exterior Improvements',
    summary: 'Discuss exterior updates based on the property’s condition and intended project scope.',
    details: 'Targeting protective siding preparation, trim revitalization, and weather-resistant improvements that preserve the home and enhance exterior character.',
    iconName: 'Sun',
    considerations: [
      'Thorough masking and surface protection during prep',
      'Siding assessment, dormer treatments, and trim painting',
      'Entryway and exterior threshold weather-sealing',
      'Coordination with seasonal weather conditions'
    ]
  },
  {
    id: 'flooring',
    name: 'Flooring & Finishes',
    summary: 'Bring rooms together with coordinated flooring, surfaces, trim, paint, and finishing details.',
    details: 'Ensuring seamless transitions between hardwoods, luxury planks, decorative tile patterns, and paint palettes that tie distinct spaces together.',
    iconName: 'Layers',
    considerations: [
      'Hardwood, engineered, tile, and sheet flooring installation',
      'Transition strips between distinct material heights',
      'Precision grout sealing and edge caulking',
      'Wall prep, primer coats, and durable topcoat finishes'
    ]
  },
  {
    id: 'repairs',
    name: 'Repair & Completion Work',
    summary: 'Discuss incomplete remodeling work, repairs, corrections, and final finishing needs.',
    details: 'Taking on partially completed renovations, punch-list resolutions, and structural finish adjustments that require dedicated trade follow-through.',
    iconName: 'Hammer',
    considerations: [
      'Diagnosing incomplete or stalling remodel stages',
      'Corrective surface prep and ceiling/wall restoration',
      'Punch-list completion across hardware and trim',
      'Quality walk-throughs before project sign-off'
    ]
  },
  {
    id: 'coordination',
    name: 'Project Coordination',
    summary: 'Keep different phases of the renovation organized from the initial scope through completion.',
    details: 'Managing timeline pacing, material deliveries, trade sequencing, and direct homeowner communication so you never have to juggle multiple contacts.',
    iconName: 'ClipboardCheck',
    considerations: [
      'Clear project scheduling and milestone mapping',
      'Sequenced staging to minimize daily disruption',
      'Proactive scope updates and transparent check-ins',
      'Single point of accountability from start to finish'
    ]
  }
];

export const WHY_US_ITEMS: WhyUsItem[] = [
  {
    id: 'coordination',
    title: 'Start-to-Finish Coordination',
    description: 'Keep the project connected from the first conversation through the important finishing details.',
    highlight: 'Unified Project Oversight',
    accentBg: 'bg-[#ffffff]',
    accentText: 'text-[#444d52]',
    badgeBg: 'bg-[#444d52]/10 text-[#444d52]',
    borderClass: 'border-[#444d52]/20'
  },
  {
    id: 'contact',
    title: 'One Clear Point of Contact',
    description: 'Discuss the different parts of your remodel without navigating a disconnected experience.',
    highlight: 'Direct Communication',
    accentBg: 'bg-[#faf9f7]',
    accentText: 'text-[#444d52]',
    badgeBg: 'bg-[#c79b75]/20 text-[#7a5332]',
    borderClass: 'border-[#c79b75]/30'
  },
  {
    id: 'broader-view',
    title: 'A Broader View of the Project',
    description: 'Consider how rooms, surfaces, finishes, and phases work together across the renovation.',
    highlight: 'Holistic Spatial Flow',
    accentBg: 'bg-[#f4f3f0]',
    accentText: 'text-[#444d52]',
    badgeBg: 'bg-[#444d52]/10 text-[#444d52]',
    borderClass: 'border-[#444d52]/20'
  },
  {
    id: 'details',
    title: 'Attention to the Final Details',
    description: 'Keep function, appearance, and finishing elements in view as the work progresses.',
    highlight: 'Disciplined Finishing',
    accentBg: 'bg-[#444d52]',
    accentText: 'text-white',
    badgeBg: 'bg-[#c79b75] text-white',
    borderClass: 'border-[#c79b75]/40'
  }
];

export const SAMPLE_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-01',
    label: 'Sample Review 01',
    quote: 'Having a single point of contact made our home renovation feel organized and steady from our very first planning discussion.',
    projectType: 'Interior Renovation',
    focusArea: 'Project Coordination'
  },
  {
    id: 'rev-02',
    label: 'Sample Review 02',
    quote: 'The team respected our timeline and kept us informed through every phase, making sure our kitchen surfaces and finishes came together smoothly.',
    projectType: 'Kitchen Improvement',
    focusArea: 'Finish & Cabinetry Detailing'
  },
  {
    id: 'rev-03',
    label: 'Sample Review 03',
    quote: 'Clear conversations, proactive updates, and steady follow-through on the final punch list items made all the difference in our space.',
    projectType: 'Bathroom Improvement',
    focusArea: 'Tile & Fixture Installation'
  }
];

export const GALLERY_COLLECTION: GalleryImage[] = [
  {
    id: 'crscg1',
    url: 'https://res.cloudinary.com/z08v8we6/image/upload/v1789000465/crscg1.jpg',
    width: 1536,
    height: 2048,
    aspectRatio: '3:4',
    verified: true,
    alt: 'Finished kitchen with two-tone cabinetry, speckled granite countertops, stainless apron sink, tile backsplash, and gas range',
    caption: 'Kitchen renovation with two-tone cabinetry, speckled granite countertops, and stainless steel apron sink',
    visibleDetails: [
      'Two-tone cabinetry with light lowers and natural wood uppers',
      'Speckled granite slab countertops with undermount apron sink',
      'Decorative tiled backsplash and black gas cooking range'
    ]
  },
  {
    id: 'crscg2',
    url: 'https://res.cloudinary.com/z08v8we6/image/upload/v1789000465/crscg2.jpg',
    width: 1536,
    height: 2048,
    aspectRatio: '3:4',
    verified: true,
    alt: 'Finished kitchen area featuring granite-topped island, dark refrigerator, tall pantry cabinet, and hardwood flooring',
    caption: 'Kitchen space featuring granite-topped central island, tall pantry cabinet, and hardwood flooring',
    visibleDetails: [
      'Central prep island featuring granite work surface',
      'Tall storage pantry cabinet integrated with refrigerator alcove',
      'Natural hardwood flooring connecting kitchen to open living area'
    ]
  },
  {
    id: 'crscg3',
    url: 'https://res.cloudinary.com/z08v8we6/image/upload/v1789000465/crscg3.jpg',
    width: 1536,
    height: 2048,
    aspectRatio: '3:4',
    verified: true,
    alt: 'Kitchen peninsula with light gray cabinetry, granite countertop, wood upper cabinets, and textured tile backsplash',
    caption: 'Peninsula counter arrangement with light gray base cabinets, wood upper cabinets, and gooseneck faucet',
    visibleDetails: [
      'Light gray peninsula base cabinets with granite counter overhang',
      'Coordinated wood upper wall cabinetry and textured backsplash',
      'Deep sink basin with modern gooseneck spray faucet'
    ]
  },
  {
    id: 'crscg4',
    url: 'https://res.cloudinary.com/z08v8we6/image/upload/v1789000465/crscg4.jpg',
    width: 1536,
    height: 2048,
    aspectRatio: '3:4',
    verified: true,
    alt: 'Residential home exterior showing horizontal siding and windows masked with plastic sheeting during exterior prep work',
    caption: 'Exterior residential preparation showing masked window openings and horizontal siding maintenance',
    visibleDetails: [
      'Story-and-a-half home with white horizontal siding and blue dormer',
      'Protective plastic masking over windows during exterior surface prep',
      'Careful site preparation preserving lawn and surrounding exterior'
    ]
  },
  {
    id: 'crscg5',
    url: 'https://res.cloudinary.com/z08v8we6/image/upload/v1789000465/crscg5.jpg',
    width: 443,
    height: 590,
    aspectRatio: '3:4',
    verified: true,
    alt: 'Side exterior view of residential property with white siding, blue dormer siding, and masked window areas',
    caption: 'Exterior side elevation showing siding detail and window prep work',
    visibleDetails: [
      'Side elevation view showing roofline, dormer, and horizontal siding',
      'Window masking in place ahead of exterior painting or trim work'
    ]
  },
  {
    id: 'crscg6',
    url: 'https://res.cloudinary.com/z08v8we6/image/upload/v1789000465/crscg6.jpg',
    width: 1536,
    height: 2048,
    aspectRatio: '3:4',
    verified: true,
    alt: 'Installed bathtub and wall surround unit in bathroom alcove with peach walls and silver plumbing fixtures',
    caption: 'Bathroom alcove installation featuring bathtub, wall surround unit, and plumbing fixtures',
    visibleDetails: [
      'Neutral off-white bathtub with integrated wall surround unit',
      'Showerhead and control valve installed in recessed alcove',
      'Light patterned flooring and fresh wall surfaces'
    ]
  },
  {
    id: 'crscg7',
    url: 'https://res.cloudinary.com/z08v8we6/image/upload/v1789000465/crscg7.jpg',
    width: 1536,
    height: 2048,
    aspectRatio: '3:4',
    verified: true,
    alt: 'Walk-in glass shower with marble-look wall tiles, built-in bench, dark hexagon floor tiles, and black fixtures',
    caption: 'Walk-in shower renovation featuring marble-pattern wall tile, built-in bench, and black hardware',
    visibleDetails: [
      'Frameless glass-enclosed walk-in shower configuration',
      'Marble-veined vertical wall tile with integrated shower seating bench',
      'Dark geometric hexagonal shower floor tile with matte black fixtures'
    ]
  },
  {
    id: 'crscg8',
    url: 'https://res.cloudinary.com/z08v8we6/image/upload/v1789000465/crscg8.jpg',
    width: 1536,
    height: 2048,
    aspectRatio: '3:4',
    verified: true,
    alt: 'Bathroom alcove with bathtub and shower enclosure showing renovation work and surface conditions',
    caption: 'Bathroom alcove showing bathtub enclosure and surface renovation work in progress',
    visibleDetails: [
      'Bathtub alcove setting showing existing enclosure surfaces',
      'Visible ceiling surface conditions prior to final restoration and paint'
    ]
  }
];
