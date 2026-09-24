const defaultDoctors = [
  {
    _id: 'doc1',
    name: 'Dr. Richard Harris',
    email: 'richard.harris@healhorizon.com',
    image: "https://res.cloudinary.com/dpoisj00c/image/upload/v1780463715/opahfyo1famzkudcvy27.jpg",
    speciality: 'General physician',
    degree: 'MBBS, MD (General Medicine)',
    experience: '12 Years',
    about: 'Dr. Richard is committed to providing comprehensive healthcare services for families. He specializes in preventative care, health education, and managing chronic medical conditions.',
    fees: 800,
    address: {
      line1: "24, Outer Ring Road",
      line2: "Sector 5, HSR Layout, Bengaluru"
    },
    available: true,
    slots_booked: {},
    date: 1713437190000
  },
  {
    _id: 'doc2',
    name: 'Dr. Sarah Connor',
    email: 'sarah.connor@healhorizon.com',
    image: "https://res.cloudinary.com/dpoisj00c/image/upload/v1780463948/ujjhdxkurpuekxa79etk.jpg",
    speciality: 'Gynecologist',
    degree: 'MBBS, MS (Obstetrics & Gynecology)',
    experience: '10 Years',
    about: 'Dr. Sarah is dedicated to women’s health and wellness throughout all stages of life, specializing in prenatal care, minimally invasive surgeries, and reproductive health.',
    fees: 700,
    address: {
      line1: "102, Green Glen Layout",
      line2: "Near City Hospital, Mumbai"
    },
    available: true,
    slots_booked: {},
    date: 1713437190000
  },
  {
    _id: 'doc3',
    name: 'Dr. Emily Larson',
    email: 'emily.larson@healhorizon.com',
    image: "https://res.cloudinary.com/dpoisj00c/image/upload/v1780464101/vyqye9t1bd0rrkonndoz.avif",
    speciality: 'Dermatologist',
    degree: 'MBBS, MD (Dermatology)',
    experience: '6 Years',
    about: 'Dr. Emily specializes in medical and aesthetic dermatology, treating skin allergies, acne, eczema, and providing advanced anti-aging treatments.',
    fees: 600,
    address: {
      line1: " 88, Brigade Road",
      line2: "Opposite Central Mall, Pune"
    },
    available: true,
    slots_booked: {},
    date: 1713437190000
  },
  {
    _id: 'doc4',
    name: 'Dr. Christopher Nolan',
    email: 'christopher.nolan@healhorizon.com',
    image: "https://res.cloudinary.com/dpoisj00c/image/upload/v1780464345/qfcgomeuxlb8kpo33q3a.jpg",
    speciality: 'Pediatricians',
    degree: 'MBBS, MD (Pediatrics)',
    experience: '8 Years',
    about: 'Dr. Christopher provides exceptional pediatric medical care, prioritizing child growth monitoring, vaccinations, and childhood disease treatments in a child-friendly environment.',
    fees: 500,
    address: {
      line1: "15, Park Street Avenue",
      line2: "Sector 1, Salt Lake, Kolkata"
    },
    available: true,
    slots_booked: {},
    date: 1713437190000
  },
  {
    _id: 'doc5',
    name: 'Dr. Robert Downey',
    email: 'robert.downey@healhorizon.com',
    image: "https://res.cloudinary.com/dpoisj00c/image/upload/v1780464486/jzofff9gzexndkcwwsnm.webp",
    speciality: 'Neurologist',
    degree: 'MBBS, DM (Neurology)',
    experience: '10 Years',
    about: 'Dr. Robert is a board-certified neurologist specializing in diagnosing and treating complex neurological disorders, including migraines, epilepsy, and neuromuscular conditions.',
    fees: 1000,
    address: {
      line1: "304, Cyber Heights",
      line2: "Hitech City, Hyderabad"
    },
    available: true,
    slots_booked: {},
    date: 1713437190000
  },
  {
    _id: 'doc6',
    name: 'Dr. Lisa Kudrow',
    email: 'lisa.kudrow@healhorizon.com',
    image: "https://res.cloudinary.com/dpoisj00c/image/upload/v1780464585/qozy03difwtxd53bn2if.png",
    speciality: 'Gastroenterologist',
    degree: 'MBBS, DM (Gastroenterology)',
    experience: '9 Years',
    about: 'Dr. Lisa specializes in digestive health, acid reflux management, liver disease therapies, and colonoscopies, offering empathetic patient-centered care.',
    fees: 800,
    address: {
      line1: "42, Marine Drive",
      line2: "Near Clock Tower, Kochi"
    },
    available: true,
    slots_booked: {},
    date: 1713437190000
  }
];

export default defaultDoctors;
