/**
 * Configuración central de Clínica Dental Santa Teresa Más Sonrisas
 *
 * TODO: Confirmar:
 * - Años exactos de experiencia profesional
 * - Lista completa de servicios y nombres oficiales
 * - Dirección exacta de la clínica
 * - Horarios de atención
 * - Credenciales y formación académica
 * - Redes sociales oficiales
 * - URL de Google Business Profile
 */

export const siteConfig = {
  // Información básica
  name: "Clínica Dental Santa Teresa Más Sonrisas",
  shortName: "Santa Teresa Más Sonrisas",
  doctorName: "Dra. Marcela Contreras",
  doctorFirstName: "Marcela",
  doctorCode: "486513", // Código profesional

  // Descripción
  description:
    "Cuida tu salud dental con la experiencia, dedicación y atención personalizada de Clínica Dental Santa Teresa Más Sonrisas. Agenda tu consulta y recupera la confianza en tu sonrisa.",

  // TODO: Confirmar años exactos de experiencia
  yearsOfExperience: "20+", // Referencia de testimonio - pendiente confirmar

  // Contacto
  contact: {
    phone: "+506 8842 1641",
    phoneLink: "+50688421641",
    whatsapp: "8842 1641",
    whatsappLink: "https://wa.me/50688421641",
    email: "[EMAIL]", // TODO: Agregar correo electrónico
  },

  // Ubicación
  location: {
    address: "Santa Teresa, Cóbano",
    city: "Puntarenas, Costa Rica",
    country: "Costa Rica",
    mapsUrl:
      "https://www.google.com/maps/place/Clinica+Dental+dra+Marcela+Contreras/@9.6371451,-85.1614267,17z",
    wazeUrl: "https://waze.com/ul?ll=9.6371451,-85.1614267&navigate=yes",
  },

  // Horarios
  schedule: {
    weekdays: "9:30 AM – 5:00 PM",
    saturday: "Closed",
    sunday: "Closed",
  },

  // Enlaces externos
  links: {
    googleReviews: "[GOOGLE_REVIEWS_URL]", // TODO: Agregar URL de reseñas de Google
    googleBusiness: "[GOOGLE_BUSINESS_URL]", // TODO: Agregar URL de Google Business
    instagram: "[INSTAGRAM_URL]", // TODO: Agregar Instagram si existe
    facebook: "[FACEBOOK_URL]", // TODO: Agregar Facebook si existe
  },

  // SEO
  seo: {
    title:
      "Clínica Dental Santa Teresa Más Sonrisas | Atención Dental Personalizada",
    description:
      "Cuida tu salud dental con la experiencia, dedicación y atención personalizada de Clínica Dental Santa Teresa Más Sonrisas. Agenda tu consulta y recupera la confianza en tu sonrisa.",
    keywords: [
      "clínica dental",
      "dentista",
      "Santa Teresa",
      "Más Sonrisas",
      "limpieza dental",
      "tratamiento de caries",
      "puentes dentales",
      "restauraciones dentales",
      "atención dental personalizada",
    ],
  },

  // Navegación
  navigation: [
    { label: "Inicio", href: "#inicio" },
    { label: "Servicios", href: "#servicios" },
    { label: "Sobre la Doctora", href: "#sobre" },
    { label: "Testimonios", href: "#testimonios" },
    { label: "Preguntas Frecuentes", href: "#faq" },
    { label: "Contacto", href: "#contacto" },
  ],

  // Servicios - TODO: Confirmar lista completa con la doctora
  services: [
    {
      id: "limpieza",
      name: "Limpiezas Dentales",
      description:
        "Limpieza profesional para mantener tus dientes y encías saludables, eliminando placa y sarro acumulado.",
      icon: "sparkles",
    },
    {
      id: "caries",
      name: "Tratamiento de Caries",
      description:
        "Detección temprana y tratamiento cuidadoso de caries para preservar la salud de tus dientes.",
      icon: "shield",
    },
    {
      id: "restauraciones",
      name: "Restauraciones Dentales",
      description:
        "Restauraciones estéticas y funcionales que devuelven la apariencia natural a tu sonrisa.",
      icon: "tooth",
    },
    {
      id: "puentes",
      name: "Puentes Dentales",
      description:
        "Soluciones personalizadas para reemplazar dientes perdidos y recuperar tu función masticatoria.",
      icon: "grid",
    },
    {
      id: "salud-oral",
      name: "Cuidado de la Salud Oral",
      description:
        "Evaluación completa y plan de cuidado preventivo para mantener tu boca saludable.",
      icon: "heart",
    },
    {
      id: "sonrisa",
      name: "Mejoramiento de la Sonrisa",
      description:
        "Tratamientos personalizados para lograr la sonrisa que siempre has deseado.",
      icon: "smile",
    },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
