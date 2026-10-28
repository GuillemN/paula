/**
 * dancerData.js
 * Visual-first dance portfolio data featuring:
 * - Ball al Casino
 * - Escola de Dansa
 * - Coordinadora Hotel
 * - CV Timeline
 */

export const dancerProfile = {
  fullName: "Paula Navarro",
  heroImage: "/images/hero_stage.jpg"
};

export const visualWorks = [
  {
    id: "work-casino",
    title: "Ball al Gran Casino",
    category: "casino",
    role: "Ballarina Solista & Elenc Resident",
    venue: "Gran Casino Costa Brava & Casino Barcelona",
    director: "Direcció Artística Casino Shows",
    year: "2023 – 2025",
    coverImage: "/images/casino_show.jpg",
    images: [
      {
        url: "/images/casino_show.jpg",
        caption: "Xou Solista de Cabaret & Vestuari de Gala",
        photographer: "Casino Production Stills"
      },
      {
        url: "/images/project_theater_ensemble.jpg",
        caption: "Coreografia d'Elenc sota els Canelobres del Casino",
        photographer: "Antoine Julien"
      },
      {
        url: "/images/action_stage.jpg",
        caption: "Solo Acrobàtic a l'Escenari Principal",
        photographer: "Sven Lindholm"
      },
      {
        url: "/images/hero_stage.jpg",
        caption: "Salt d'Obertura del Gran Xou Resident",
        photographer: "Marcus Thorp"
      }
    ]
  },
  {
    id: "work-escola",
    title: "Escola de Dansa Contemporània & Jazz",
    category: "school",
    role: "Professora & Coreògrafa",
    venue: "Estudi de Dansa & Centre de Formació",
    director: "Direcció Pedagògica",
    year: "2021 – 2024",
    coverImage: "/images/escola_dansa.jpg",
    images: [
      {
        url: "/images/escola_dansa.jpg",
        caption: "Masterclass de Contemporani & Treball Postural",
        photographer: "Arxiu Escola de Dansa"
      },
      {
        url: "/images/action_stage.jpg",
        caption: "Tècnica de Terra (Floorwork) & Elasticitat",
        photographer: "Sven Lindholm"
      },
      {
        url: "/images/project_duet.jpg",
        caption: "Preparació de Duos per a Certàmens Nacionals",
        photographer: "Antoine Julien"
      },
      {
        url: "/images/editorial_portrait.jpg",
        caption: "Retrat d'Equip Docent & Direcció Coreogràfica",
        photographer: "Claire Beaumont"
      }
    ]
  },
  {
    id: "work-hotel",
    title: "Coordinadora d'Espectacles d'Hotel",
    category: "hotel",
    role: "Cap d'Espectacles & Coreògrafa Resident",
    venue: "Resorts & Hotels de Luxe 5* (Costa Brava & Mallorca)",
    director: "Direcció d'Esdeveniments i Animació",
    year: "2022 – 2024",
    coverImage: "/images/hotel_coordinator.jpg",
    images: [
      {
        url: "/images/hotel_coordinator.jpg",
        caption: "Presentació i Coordinació del Xou Sunset a la Terrassa",
        photographer: "Resort Entertainment Media"
      },
      {
        url: "/images/project_stadium.jpg",
        caption: "Espectacle Nocturn de Gran Format a l'Amfiteatre",
        photographer: "Live Resort Shows"
      },
      {
        url: "/images/project_stadium_dancer.jpg",
        caption: "Actuació Solista d'Animació & Música en Viu",
        photographer: "Marcus Vance Media"
      },
      {
        url: "/images/casino_show.jpg",
        caption: "Gala Temàtica d'Estiu als Jardins de l'Hotel",
        photographer: "Production Unit"
      }
    ]
  },
  {
    id: "work-metamorphosis",
    title: "Metamorphosis",
    category: "stage",
    role: "Ballarina Solista",
    venue: "Sadler's Wells & Gira Europea de Teatre",
    director: "Chor. Wayne McGregor Studio",
    year: "2025",
    coverImage: "/images/hero_stage.jpg",
    images: [
      {
        url: "/images/hero_stage.jpg",
        caption: "Salt Solista d'Elevació en Escenari",
        photographer: "Marcus Thorp"
      },
      {
        url: "/images/project_theater_ensemble.jpg",
        caption: "Escena de Conjunt • Teatre Sadler's Wells",
        photographer: "Antoine Julien"
      },
      {
        url: "/images/action_stage.jpg",
        caption: "Assaig de Treball de Terra",
        photographer: "Sven Lindholm"
      }
    ]
  },
  {
    id: "work-stadium",
    title: "Echoes in the Dark (Gira en Estadis)",
    category: "stage",
    role: "Elenc Principal de Gira",
    venue: "Gira Internacional (32 Ciutats)",
    director: "Dir. Christian Breslauer",
    year: "2024",
    coverImage: "/images/project_stadium.jpg",
    images: [
      {
        url: "/images/project_stadium.jpg",
        caption: "Escenari d'Estadi davant de 50.000 persones",
        photographer: "Tour Media"
      },
      {
        url: "/images/project_stadium_dancer.jpg",
        caption: "Solo de Gira a la Passarel·la Central",
        photographer: "Marcus Vance"
      },
      {
        url: "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=1200&q=80",
        caption: "Coreografia Comercial & High Heels",
        photographer: "Kamil Kalbarczyk"
      }
    ]
  },
  {
    id: "work-opera",
    title: "Rite of Spring Reimagined",
    category: "stage",
    role: "Duo Solista & Elevacions Acrobàtiques",
    venue: "Opéra National de Paris",
    director: "Chor. Sidi Larbi Cherkaoui",
    year: "2024",
    coverImage: "/images/project_duet.jpg",
    images: [
      {
        url: "/images/project_duet.jpg",
        caption: "Adagio Duet Lift & Teixit en Moviment",
        photographer: "Antoine Julien"
      },
      {
        url: "/images/project_theater_ensemble.jpg",
        caption: "Coreografia Completa de la Companyia",
        photographer: "Opéra de Paris Media"
      }
    ]
  }
];

export const cvTimelineData = [
  {
    id: "cv-casino",
    year: "2023 – 2025",
    title: "Ballarina Solista & Elenc Resident",
    organization: "Gran Casino Costa Brava & Casino Barcelona",
    category: "dance",
    categoryBadge: "Ball al Casino",
    description: "Ballarina solista i d'elenc en produccions nocturnes de gran format, varietés, números acrobàtics i cabaret resident. Més de 180 funcions en directe davant de públic internacional.",
    skills: ["Cabaret de Luxe", "Tècnica de Talons", "Duos Acrobàtics", "Presència Escènica"]
  },
  {
    id: "cv-escola",
    year: "2021 – 2024",
    title: "Professora de Dansa & Coreògrafa",
    organization: "Escola de Dansa Contemporània & Jazz",
    category: "teaching",
    categoryBadge: "Escola de Dansa",
    description: "Docència regular de dansa contemporània, modern jazz, tècnica de terra (floorwork) i flexibilitat per a joves i adults. Creació de coreografies premiades en certàmens nacionals de dansa.",
    skills: ["Pedagogia de Dansa", "Coreografia d'Alumnes", "Dansa Contemporània", "Metodologia Didàctica"]
  },
  {
    id: "cv-hotel",
    year: "2022 – 2024",
    title: "Coordinadora d'Espectacles & Esdeveniments d'Hotel",
    organization: "Luxury Resort & Spa 5* (Mallorca & Costa Brava)",
    category: "coordination",
    categoryBadge: "Coordinadora Hotel",
    description: "Lideratge i gestió integral de l'equip artístic: disseny de la programació nocturna, coordinació d'espectacles musicals i de dansa a l'aire lliure, gestió de proveïdors i coordinació tècnica de llum i so.",
    skills: ["Direcció Artística d'Esdeveniments", "Gestió d'Equip", "Coordinació d'Escenari", "Resort 5 Estrelles"]
  },
  {
    id: "cv-tour",
    year: "2024 – 2025",
    title: "Ballarina de Gira Internacional & Teatre",
    organization: "Gires Europees & Sadler's Wells London",
    category: "dance",
    categoryBadge: "Teatre & Gires",
    description: "Gira internacional en auditoris i teatres d'Europa interpretant rols de solista contemporània i ensemble de gran sincronització.",
    skills: ["Companyia de Dansa", "Gires Internacionals", "Solista"]
  },
  {
    id: "cv-studies",
    year: "2017 – 2021",
    title: "Grau Superior en Dansa Contemporània & Pedagogia",
    organization: "Conservatori Superior de Dansa (Institut del Teatre)",
    category: "teaching",
    categoryBadge: "Formació Superior",
    description: "Titulació oficial superior amb màximes qualificacions. Especialització en anàlisi del moviment, biomecànica, anatomia aplicada i tècniques modernes de creació escènica.",
    skills: ["Títol Superior Oficial", "Institut del Teatre", "Pedagogia de l'Art"]
  }
];

export const galleryItems = [
  {
    id: "gal-casino",
    title: "Cabaret al Casino",
    category: "action",
    imageUrl: "/images/casino_show.jpg",
    photographer: "Gran Casino Media"
  },
  {
    id: "gal-escola",
    title: "Classe a Escola de Dansa",
    category: "action",
    imageUrl: "/images/escola_dansa.jpg",
    photographer: "Arxiu de Dansa"
  },
  {
    id: "gal-hotel",
    title: "Xou a l'Hotel Resort",
    category: "action",
    imageUrl: "/images/hotel_coordinator.jpg",
    photographer: "Resort Visuals"
  },
  {
    id: "gal-headshot",
    title: "Retrat de Càsting",
    category: "headshots",
    imageUrl: "/images/headshot_main.jpg",
    photographer: "Elena Vance"
  },
  {
    id: "gal-floorwork",
    title: "Tècnica de Terra",
    category: "action",
    imageUrl: "/images/action_stage.jpg",
    photographer: "Sven Lindholm"
  },
  {
    id: "gal-duo",
    title: "Duo Acrobàtic",
    category: "action",
    imageUrl: "/images/project_duet.jpg",
    photographer: "Antoine Julien"
  }
];

export const contactInfo = {
  email: "paula@paulanavarro.dance",
  bookingEmail: "booking@paulanavarro.dance",
  phone: "+34 622 849 210",
  location: "Barcelona • Costa Brava • Illes Balears",
  instagram: "https://instagram.com",
  youtube: "https://youtube.com"
};
