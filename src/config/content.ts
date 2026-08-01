/**
 * Contenido centralizado para la landing page
 * Preparado para internacionalización (i18n)
 */

export const content = {
  es: {
    // Header
    header: {
      cta: "Agendar una cita",
    },

    // Hero
    hero: {
      title:
        "Cuidamos tu sonrisa con experiencia, dedicación y atención personalizada",
      subtitle:
        "En la Clínica Dental Dra. Marcela Contreras combinamos experiencia, precisión y un trato humano para ayudarte a recuperar la salud, la confianza y la belleza de tu sonrisa.",
      primaryCta: "Agendar una cita",
      secondaryCta: "Consultar por WhatsApp",
      trustBadges: [
        "Atención personalizada",
        "Amplia experiencia profesional",
        "Tratamientos con dedicación",
      ],
    },

    // Sección de confianza
    trust: {
      title: "¿Por qué elegirnos?",
      items: [
        {
          title: "Atención verdaderamente personalizada",
          description:
            "Cada paciente recibe un tratamiento adaptado a sus necesidades, preocupaciones y objetivos.",
        },
        {
          title: "Experiencia y dedicación",
          description:
            "Un enfoque cuidadoso que combina conocimiento clínico, precisión y atención a los detalles.",
        },
        {
          title: "Resultados que devuelven confianza",
          description:
            "El objetivo no es solamente tratar los dientes, sino ayudar a cada paciente a sentirse seguro con su sonrisa.",
        },
        {
          title: "Trato humano y cercano",
          description:
            "Una experiencia tranquila, respetuosa y comprensible durante cada etapa del tratamiento.",
        },
      ],
    },

    // Servicios
    services: {
      title: "Nuestros Servicios",
      subtitle:
        "Tratamientos dentales con atención personalizada y profesionalismo",
      cta: "Consultar tratamiento",
      // TODO: Confirmar lista completa de servicios con la Dra. Marcela Contreras
    },

    // Sobre la doctora
    about: {
      title: "Experiencia profesional con un trato que se siente personal",
      paragraphs: [
        "La Dra. Marcela Contreras se distingue por combinar experiencia odontológica, dedicación y una atención profundamente personalizada.",
        "Cada tratamiento se realiza escuchando las necesidades del paciente, explicando el proceso con claridad y cuidando cada detalle para alcanzar resultados naturales y funcionales.",
        "Sus pacientes destacan no solamente su habilidad profesional, sino también su empatía, adaptabilidad y capacidad para devolverles la confianza en su sonrisa.",
      ],
      // TODO: Agregar formación, credenciales y especialidades
    },

    // Testimonios
    testimonials: {
      title: "Sonrisas que cuentan nuestra historia",
      subtitle: "Experiencias reales de pacientes satisfechos",
      cta: "Ver más experiencias en Google",
      translatedNote: "(Traducido del inglés)",
    },

    // Proceso
    process: {
      title: "Tu camino hacia una sonrisa más saludable",
      steps: [
        {
          number: 1,
          title: "Agenda tu consulta",
          description: "Contáctanos por WhatsApp, llamada o formulario.",
        },
        {
          number: 2,
          title: "Evaluación personalizada",
          description:
            "La doctora escucha tus necesidades y revisa tu salud dental.",
        },
        {
          number: 3,
          title: "Plan de tratamiento claro",
          description:
            "Recibes una explicación comprensible de las opciones disponibles.",
        },
        {
          number: 4,
          title: "Cuidado y seguimiento",
          description:
            "Cada etapa se realiza con atención, precisión y acompañamiento.",
        },
      ],
    },

    // CTA
    cta: {
      title: "Tu sonrisa merece atención profesional y personalizada",
      description:
        "Agenda una consulta con la Dra. Marcela Contreras y conoce las opciones disponibles para cuidar tu salud dental y recuperar la confianza en tu sonrisa.",
      primaryCta: "Agendar una cita",
      secondaryCta: "Escribir por WhatsApp",
    },

    // FAQ
    faq: {
      title: "Preguntas Frecuentes",
      items: [
        {
          question: "¿Cómo puedo agendar una cita?",
          answer:
            "Puedes agendar tu cita contactándonos por WhatsApp, llamada telefónica o completando el formulario de contacto en esta página. Te responderemos a la brevedad para confirmar tu cita.", // TODO: Confirmar proceso
        },
        {
          question: "¿Qué tratamientos ofrece la clínica?",
          answer:
            "Ofrecemos una amplia gama de tratamientos dentales, incluyendo limpiezas profesionales, tratamiento de caries, restauraciones dentales, puentes y cuidado general de la salud oral. Cada tratamiento se personaliza según las necesidades del paciente.", // TODO: Confirmar lista completa
        },
        {
          question: "¿Cómo sé cuál tratamiento necesito?",
          answer:
            "Durante la primera consulta, la Dra. Marcela Contreras realizará una evaluación completa de tu salud dental y te explicará las opciones de tratamiento disponibles de manera clara y comprensible.",
        },
        {
          question: "¿Atienden emergencias dentales?",
          answer: "[INFORMACIÓN PENDIENTE]", // TODO: Confirmar si atienden emergencias
        },
        {
          question: "¿Atienden pacientes internacionales?",
          answer:
            "Sí, atendemos pacientes internacionales. La Dra. Marcela Contreras habla inglés y español, lo que facilita la comunicación con pacientes de diferentes países.", // Inferido de testimonios en inglés
        },
        {
          question: "¿Qué debo llevar a mi primera consulta?",
          answer: "[INFORMACIÓN PENDIENTE]", // TODO: Confirmar requisitos
        },
        {
          question: "¿Cuánto dura una consulta?",
          answer: "[INFORMACIÓN PENDIENTE]", // TODO: Confirmar duración
        },
        {
          question: "¿Qué métodos de pago aceptan?",
          answer: "[INFORMACIÓN PENDIENTE]", // TODO: Confirmar métodos de pago
        },
      ],
    },

    // Contacto
    contact: {
      title: "Contacto",
      subtitle: "Estamos aquí para ayudarte",
      form: {
        name: "Nombre",
        phone: "Teléfono",
        email: "Correo electrónico",
        treatment: "Tratamiento de interés",
        treatmentPlaceholder: "Selecciona un tratamiento",
        message: "Mensaje",
        messagePlaceholder: "¿En qué podemos ayudarte?",
        consent: "Acepto ser contactado para dar seguimiento a mi solicitud",
        submit: "Solicitar una cita",
        submitting: "Enviando...",
        success:
          "¡Gracias! Tu solicitud ha sido enviada. Te contactaremos pronto.",
        error:
          "Hubo un error al enviar tu solicitud. Por favor, intenta de nuevo.",
      },
    },

    // Footer
    footer: {
      description:
        "Cuidamos tu salud dental con experiencia, dedicación y atención personalizada.",
      sections: {
        services: "Servicios",
        contact: "Contacto",
        legal: "Legal",
      },
      privacy: "Aviso de Privacidad",
      terms: "Términos y Condiciones",
      copyright: "Todos los derechos reservados.",
    },

    // WhatsApp flotante
    whatsapp: {
      tooltip: "¿Necesitas ayuda? Escríbenos",
      ariaLabel: "Contactar por WhatsApp",
    },

    // Accesibilidad
    accessibility: {
      skipToContent: "Saltar al contenido principal",
      menuOpen: "Abrir menú",
      menuClose: "Cerrar menú",
    },
  },
} as const;

export type Content = typeof content;
export type ContentLanguage = keyof Content;
