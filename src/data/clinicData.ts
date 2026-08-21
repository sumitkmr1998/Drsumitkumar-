import { ConditionService, ClinicTechnology, DoctorProfile, ClinicContactInfo } from '../types';

export const CLINIC_CONTACT: ClinicContactInfo = {
  doctorName: 'Dr. Sumit Kumar',
  fatherName: 'Dr. Tarun Kumar Singh',
  addressLine1: 'Dr. Sumit Kumar Clinic (S/O Dr. Tarun Kumar Singh)',
  addressLine2: 'In front of Devi Ji Mandir, Ward No. 3',
  landmark: 'In front of Devi Ji Mandir',
  ward: 'Ward No. 3',
  city: 'Bhabua',
  district: 'Kaimur',
  state: 'Bihar',
  pincode: '821101',
  fullAddress: 'Dr. Sumit Kumar Clinic, S/O Dr. Tarun Kumar Singh, In front of Devi Ji Mandir, Ward No. 3, Bhabua, Kaimur, Bihar - 821101',
  phone: '+91 77660 95312',
  whatsapp: '+91 77660 95312',
  whatsappLink: 'https://wa.me/917766095312',
  email: 'contact@drsumitkumarclinic.com',
  timings: {
    days: 'Monday to Saturday',
    hours: '10:00 AM – 5:00 PM',
    note: 'Sunday by prior urgent appointment only'
  },
  mapCoordinates: {
    lat: 25.0445,
    lng: 83.6148,
    embedQuery: 'Dr. Sumit Kumar Clinic, Devi Ji Mandir, Ward 3, Bhabua, Kaimur, Bihar 821101',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Dr.+Sumit+Kumar+Bhabua+Bihar',
    googleMapsDirectQuery: 'Dr. Sumit Kumar Clinic Bhabua'
  }
};

export const DOCTOR_PROFILE: DoctorProfile = {
  name: 'Dr. Sumit Kumar',
  degree: 'MBBS',
  title: 'Experienced Doctor for Skin Conditions',
  parentage: 'S/O Dr. Tarun Kumar Singh',
  clinicName: 'Dr. Sumit Kumar Clinic',
  location: 'Bhabua, Kaimur, Bihar',
  experienceSummary: 'Dedicated to evidence-based clinical care for skin conditions and modern procedural technology in Kaimur district.',
  bio: [
    'Dr. Sumit Kumar (MBBS) is a dedicated and experienced medical doctor for skin conditions, hair problems, and general clinical care practicing in Bhabua, Kaimur, Bihar. With a strong focus on evidence-based medicine, Dr. Sumit brings modern medical protocols and state-of-the-art procedural technology to patients across the region.',
    'His clinical approach emphasizes thorough diagnostic evaluation, ethical medical counseling, and customized treatment regimens for acute and chronic skin, hair, and nail conditions. Patient safety, stringent sterilization, and clear communication form the core pillars of his practice.'
  ],
  coreValues: [
    {
      title: 'Evidence-Based Care',
      desc: 'All diagnoses and prescriptions strictly follow verified clinical guidelines and pharmacological standards.',
      icon: 'ShieldCheck'
    },
    {
      title: 'Advanced Medical Tech',
      desc: 'Equipped with medical-grade Diode Laser, Pico Laser, MNRF, and Hydraderma systems.',
      icon: 'Cpu'
    },
    {
      title: 'Ethical & Transparent',
      desc: 'No unnecessary procedures or false promises. Clear explanations of timelines and realistic outcomes.',
      icon: 'HeartHandshake'
    },
    {
      title: 'Patient Safety Priority',
      desc: 'Strict clinical sterilization, US-FDA standard equipment guidelines, and personalized post-care.',
      icon: 'Sparkles'
    }
  ],
  qualifications: [
    'MBBS (Bachelor of Medicine & Bachelor of Surgery)',
    'Clinical Practice in Skin, Hair & Aesthetic Procedures',
    'Certified in Laser & Energy-Based Devices (Diode, Pico, MNRF)',
    'Medical Ethics & Telemedicine Practice Guidelines Compliant'
  ]
};

export const CONDITIONS_SERVICES: ConditionService[] = [
  {
    id: 'acne-scars',
    title: 'Acne & Acne Scar Management',
    subtitle: 'From active breakouts to deep textured scars',
    category: 'clinical',
    description: 'Comprehensive medical and procedural management for all stages of acne vulgaris, cystic breakouts, post-inflammatory erythema, and deep atrophic scars.',
    commonSymptoms: [
      'Persistent blackheads, whiteheads, and painful cysts',
      'Post-acne dark marks and hyperpigmentation',
      'Ice-pick, rolling, and boxcar scarring',
      'Hormonal flare-ups and adult acne'
    ],
    clinicalApproach: 'Targeted topical and oral therapeutics combined with medical chemical peels, subcision, MNRF, and customized laser remodeling.',
    iconName: 'Sparkles'
  },
  {
    id: 'fungal-bacterial',
    title: 'Fungal & Bacterial Skin Infections',
    subtitle: 'Accurate microscopic diagnosis & targeted anti-microbials',
    category: 'clinical',
    description: 'Specialized evaluation and treatment for ringworm (Tinea/Daad), resistant fungal infections, impetigo, folliculitis, and cellulitis.',
    commonSymptoms: [
      'Ring-shaped red, scaly, intensely itchy patches',
      'Recurrent fungal infections resistant to over-the-counter creams',
      'Pus-filled bumps on hair follicles (folliculitis)',
      'Painful red swelling or boils'
    ],
    clinicalApproach: 'Strict avoidance of harmful steroid combination creams, correct mycological identification, systemic antifungals, and hygiene counseling.',
    iconName: 'ShieldAlert'
  },
  {
    id: 'eczema-psoriasis',
    title: 'Eczema, Psoriasis & Dermatitis',
    subtitle: 'Long-term disease control and barrier restoration',
    category: 'clinical',
    description: 'Clinical management of chronic inflammatory skin conditions including atopic dermatitis, contact allergy, and plaque psoriasis with evidence-based regimens.',
    commonSymptoms: [
      'Silvery scaly plaques on elbows, knees, or scalp',
      'Dry, cracked, bleeding, or intensely itchy skin patches',
      'Allergic contact dermatitis from soaps, cement, or jewelry',
      'Seasonal skin barrier breakdown'
    ],
    clinicalApproach: 'Barrier-repair medical emollients, topical immunomodulators, phototherapy guidance, and tailored systemic therapies.',
    iconName: 'Layers'
  },
  {
    id: 'pigmentation',
    title: 'Pigmentation Disorders (Melasma & Hyperpigmentation)',
    subtitle: 'Safe, root-cause pigment correction',
    category: 'clinical',
    description: 'Diagnostic differentiation of melasma, tanning, freckles, lichen planus pigmentosus (LPP), and post-inflammatory dark spots.',
    commonSymptoms: [
      'Brownish or grayish patches on cheeks, nose, and forehead',
      'Uneven skin tone and chronic sun damage',
      'Dark under-eye circles and peri-oral pigmentation',
      'Darkening following insect bites or dermatitis'
    ],
    clinicalApproach: 'Sun protection protocols, medical depigmenting formulations, clinical superficial peels, and precision Pico Laser toning.',
    iconName: 'SunMedium'
  },
  {
    id: 'hair-fall',
    title: 'Hair Fall & Scalp Disorders',
    subtitle: 'Trichoscopic evaluation & growth stimulation',
    category: 'hair-nail',
    description: 'Complete diagnostic and therapeutic care for male and female pattern baldness, telogen effluvium, alopecia areata, and severe dandruff.',
    commonSymptoms: [
      'Excessive daily hair shedding and widening hair partition',
      'Receding hairline or crown thinning',
      'Patchy, circular bald spots (alopecia areata)',
      'Persistent itchy, greasy or dry scalp dandruff'
    ],
    clinicalApproach: 'Blood biomarker analysis, targeted growth solutions, anti-androgenic therapy, scalp therapeutics, and PRP/mesotherapy protocols.',
    iconName: 'Feather'
  },
  {
    id: 'nail-disorders',
    title: 'Nail Disorders & Infections',
    subtitle: 'Medical solutions for damaged and discolored nails',
    category: 'hair-nail',
    description: 'Expert care for fungal nail infections (onychomycosis), painful ingrowing toenails, nail psoriasis, brittle ridges, and bacterial paronychia.',
    commonSymptoms: [
      'Thickened, yellowish or crumbly nails',
      'Painful swelling and redness around nail folds',
      'Curled nail digging into the lateral skin fold',
      'Pitting, discoloration, or lifting of the nail plate'
    ],
    clinicalApproach: 'Antifungal pulse therapy, minor in-clinic nail bed procedures, nail avulsion when indicated, and nail matrix nourishment.',
    iconName: 'Hand'
  }
];

export const CLINIC_TECHNOLOGIES: ClinicTechnology[] = [
  {
    id: 'diode-laser',
    name: 'Diode Laser',
    shortTag: 'Laser Hair Reduction',
    tagline: 'Permanent, painless reduction for unwanted face & body hair',
    description: 'Gold-standard 808nm/810nm diode laser wavelength engineered with integrated contact cooling to safely target melanin in hair follicles without damaging surrounding Indian skin tones.',
    primaryUses: [
      'Facial hair removal (chin, upper lip, sideburns, beard shaping)',
      'Full body laser hair reduction (arms, legs, chest, back)',
      'Treatment of folliculitis barbae and recurrent ingrown hair'
    ],
    keyBenefits: [
      'Integrated sapphire chill-tip for maximum comfort and virtually zero pain',
      'Safe and effective across Fitzpatrick skin types III to V common in India',
      'Long-lasting hair reduction with progressively finer re-growth',
      'Zero downtime — resume work immediately'
    ],
    suitableFor: 'Men & women seeking clean, permanent freedom from waxing, shaving, and ingrown bumps.',
    iconName: 'Zap',
    sessionDuration: '20 - 45 mins'
  },
  {
    id: 'pico-laser',
    name: 'Pico Laser',
    shortTag: 'Picosecond Precision Laser',
    tagline: 'Ultra-fast picosecond pulses for pigmentation & skin rejuvenation',
    description: 'Next-generation picosecond technology that delivers photo-acoustic acoustic shockwaves instead of intense heat. It shatters stubborn pigment particles into microscopic dust without burning the outer epidermis.',
    primaryUses: [
      'Stubborn melasma, sun spots, freckles & dark patches',
      'Multi-colored and black tattoo removal',
      'Post-acne dark spots (PIH) and carbon laser skin toning',
      'Pore tightening and collagen stimulation'
    ],
    keyBenefits: [
      'Photo-acoustic effect minimizes thermal damage to healthy skin',
      'Faster pigment clearance with fewer treatment sessions needed',
      'Safe for sensitive skin prone to hyperpigmentation',
      'Gives a refreshed, clarified complexion without peeling'
    ],
    suitableFor: 'Patients dealing with persistent melasma, dark spots, uneven skin tone, or unwanted tattoos.',
    iconName: 'Sparkle',
    sessionDuration: '25 - 40 mins'
  },
  {
    id: 'mnrf',
    name: 'MNRF (Microneedle Radiofrequency)',
    shortTag: 'Scar Remodeling & Skin Tightening',
    tagline: 'Deep dermal collagen induction for acne scars & firming',
    description: 'Combines micro-fine gold-plated needles with controlled radiofrequency thermal energy delivered straight into the deep dermis, stimulating natural elastin and collagen synthesis.',
    primaryUses: [
      'Deep atrophic acne scars (boxcar, rolling scars)',
      'Enlarged open pores and coarse skin texture',
      'Mild skin laxity, fine lines, and neck creases',
      'Stretch marks and post-surgical scar remodeling'
    ],
    keyBenefits: [
      'Delivers energy directly to the dermis while sparing the surface epidermis',
      'Significantly lowers risk of post-inflammatory hyperpigmentation',
      'Progressive improvement over 3 to 6 months as new collagen matures',
      'Customizable needle depth (0.5mm to 3.5mm) for different facial zones'
    ],
    suitableFor: 'Individuals with stubborn acne scars, coarse open pores, or early skin laxity.',
    iconName: 'Activity',
    sessionDuration: '45 - 60 mins'
  },
  {
    id: 'hydraderma-abrasion',
    name: 'Hydraderma Abrasion',
    shortTag: 'Medical Hydradermabrasion',
    tagline: 'Medical-grade vortex exfoliation, pore suction & serum infusion',
    description: 'A 4-step medical procedure combining pressurized saline-vortex vacuum exfoliation, blackhead extraction, chemical peel infusion, and antioxidant peptide hydration.',
    primaryUses: [
      'Deep cleansing of clogged pores, sebum & debris',
      'Removal of stubborn blackheads and whiteheads',
      'Immediate hydration boost for dull, tired, or dry skin',
      'Pre-event instant glowing complexion'
    ],
    keyBenefits: [
      'Completely non-invasive with zero redness or flaking',
      'Simultaneous gentle suction and targeted dermatological serum infusion',
      'Smooths uneven skin texture in a single session',
      'Safe and refreshing for all skin types, including sensitive skin'
    ],
    suitableFor: 'Anyone needing deep pore cleansing, hydration replenishment, and natural radiant skin.',
    iconName: 'Droplets',
    sessionDuration: '30 - 45 mins'
  }
];

export const TELECONSULTATION_STEPS = [
  {
    step: '01',
    title: 'Book Your Slot & Share Details',
    desc: 'Submit your appointment inquiry online or via WhatsApp (+91 77660 95312) with your chief complaint and clear photographs of the skin condition in good natural daylight.',
    icon: 'Calendar'
  },
  {
    step: '02',
    title: 'Consult with Dr. Sumit Kumar',
    desc: 'Connect directly on a scheduled video/audio call with Dr. Sumit Kumar for detailed clinical history, symptom evaluation, and personalized medical counseling.',
    icon: 'Video'
  },
  {
    step: '03',
    title: 'Receive Digital Medical Prescription',
    desc: 'Get an official, legally valid digital prescription with clear instructions, dosage, sun-care advice, and scheduled follow-up guidance sent directly to your phone.',
    icon: 'FileText'
  }
];

export const CLINIC_FAQS = [
  {
    question: 'How do I book an in-person appointment at Dr. Sumit Kumar Clinic?',
    answer: 'You can book an appointment by filling out the online booking form on this website, calling us directly at +91 77660 95312, or sending a message on WhatsApp. Walk-ins are also welcome during clinic hours (Monday to Saturday, 10:00 AM – 5:00 PM) in Bhabua.'
  },
  {
    question: 'Where is the clinic located in Bhabua?',
    answer: 'The clinic is located in front of Devi Ji Mandir, Ward No. 3, Bhabua, Kaimur, Bihar - 821101 (Dr. Sumit Kumar Clinic, S/O Dr. Tarun Kumar Singh). It is easily accessible from all major landmarks in Bhabua town.'
  },
  {
    question: 'How does online teleconsultation work for outstation patients?',
    answer: 'Teleconsultations are conducted securely via WhatsApp video/call. You can book a time slot, upload clear photos of your skin/hair issue, and Dr. Sumit Kumar will examine the condition, discuss your history, and provide an official digital prescription.'
  },
  {
    question: 'Are laser procedures like Diode and Pico Laser safe for Indian skin tones?',
    answer: 'Yes, absolutely. The clinic uses specialized wavelengths with advanced contact cooling designed specifically for darker and medium Indian skin types (Fitzpatrick III-V) to maximize safety and prevent post-procedure hyperpigmentation.'
  },
  {
    question: 'How many sessions will I need for acne scars or laser hair reduction?',
    answer: 'The number of sessions depends on skin depth, scar severity, and individual hair thickness. Typically, laser hair reduction requires 6–8 sessions, while MNRF for acne scars shows remarkable improvement in 3–4 sessions spaced 4 weeks apart. Dr. Sumit will evaluate and give you an honest roadmap.'
  },
  {
    question: 'What are the consultation fees and payment options?',
    answer: 'We provide affordable, ethical consultation rates for both clinic visits and teleconsultations. Payments can be made via Cash, UPI (Google Pay, PhonePe, Paytm), and bank transfer.'
  }
];
