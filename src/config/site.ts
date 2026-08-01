/**
 * Configuración central de la Clínica Dental Dra. Marcela Contreras
 *
 * TODO: Confirmar con la Dra. Marcela Contreras:
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
  name: "Clínica Dental Dra. Marcela Contreras",
  shortName: "Dra. Marcela Contreras",
  doctorName: "Dra. Marcela Contreras",
  doctorFirstName: "Marcela",

  // Descripción
  description:
    "Cuida tu salud dental con la experiencia, dedicación y atención personalizada de la Dra. Marcela Contreras. Agenda tu consulta y recupera la confianza en tu sonrisa.",

  // TODO: Confirmar años exactos de experiencia
  yearsOfExperience: "20+", // Referencia de testimonio - pendiente confirmar

  // Contacto - TODO: Agregar datos reales
  contact: {
    phone: "[TELÉFONO]", // TODO: Agregar número de teléfono
    whatsapp: "[WHATSAPP]", // TODO: Agregar número de WhatsApp
    whatsappLink: "https://wa.me/[NÚMERO]", // TODO: Agregar enlace de WhatsApp
    email: "[EMAIL]", // TODO: Agregar correo electrónico
  },

  // Ubicación - TODO: Agregar datos reales
  location: {
    address: "[DIRECCIÓN]", // TODO: Agregar dirección
    city: "[CIUDAD]", // TODO: Agregar ciudad
    country: "[PAÍS]", // TODO: Agregar país
    mapsUrl: "[GOOGLE_MAPS_URL]", // TODO: Agregar enlace de Google Maps
    mapsEmbed: "[GOOGLE_MAPS_EMBED]", // TODO: Agregar embed de Google Maps
  },

  // Horarios - TODO: Confirmar horarios reales
  schedule: {
    weekdays: "[HORARIO_SEMANA]", // TODO: Agregar horario entre semana
    saturday: "[HORARIO_SÁBADO]", // TODO: Agregar horario sábado
    sunday: "Cerrado", // TODO: Confirmar
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
      "Clínica Dental Dra. Marcela Contreras | Atención Dental Personalizada",
    description:
      "Cuida tu salud dental con la experiencia, dedicación y atención personalizada de la Dra. Marcela Contreras. Agenda tu consulta y recupera la confianza en tu sonrisa.",
    keywords: [
      "clínica dental",
      "dentista",
      "Dra. Marcela Contreras",
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
