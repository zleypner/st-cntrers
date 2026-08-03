/**
 * Contenido centralizado para la landing page
 * Soporte para internacionalización (i18n) - Español e Inglés
 * Updated: Force rebuild - all WhatsApp CTAs should say "Let's Talk"
 */

export const content = {
  es: {
    // Language
    language: {
      es: "Español",
      en: "English",
    },

    // Header
    header: {
      cta: "Inicia Tu Nueva Sonrisa",
      tagline: "Odontología Integral · Costa Rica",
      nav: {
        treatments: "Tratamientos",
        whyUs: "Por qué elegirnos",
        emergencies: "Emergencias",
        about: "Sobre mí",
        faq: "FAQ",
      },
    },

    // Hero
    hero: {
      badge: "Cuidado Excepcional. Sonrisas Extraordinarias.",
      title: "Una sonrisa comienza con",
      titleHighlight: "confianza.",
      subtitle:
        "Mereces atención dental integral de una profesional que entiende la salud oral como parte de tu bienestar general — consultas sin prisa y planes personalizados.",
      ctaPreText:
        "¿Listo para dar el primer paso hacia una sonrisa más saludable?",
      primaryCta: "Solicita Tu Consulta Personalizada",
      primaryCtaMicrocopy:
        "Recomendaciones personalizadas según tus necesidades, metas y salud oral.",
      secondaryCta: "Escríbenos por WhatsApp",
      secondaryCtaMicrocopy: "Estamos aquí para responder tus preguntas.",
      trustBadge1: "5/5 en Google Reviews",
      trustBadge2: "Emergencias el mismo día",
      yearsLabel: "años cuidando sonrisas",
    },

    // Sección de confianza
    trust: {
      badge: "Odontología Holística",
      title: "Cuidado integral que considera tu bienestar completo.",
      subtitle:
        "La salud oral está profundamente conectada con el sueño, la nutrición, la postura y el estrés. Por eso cada plan aquí comienza con el panorama completo — y luego se enfoca en lo que realmente necesitas.",
      features: [
        {
          title: "Tratada como persona",
          description:
            "Las consultas comienzan escuchando. Tu historia, miedos y metas dan forma al plan.",
        },
        {
          title: "Diagnósticos modernos",
          description:
            "Escaneo digital e imágenes hacen cada diagnóstico visible, explicable y preciso.",
        },
        {
          title: "Tiempo, sin apuros",
          description:
            "Las citas se programan generosamente para que ningún procedimiento sea apresurado.",
        },
        {
          title: "Una doctora, de inicio a fin",
          description:
            "La misma profesional sigue tu caso en cada etapa del tratamiento.",
        },
      ],
      imageAlt1: "Dra. Marcela Contreras",
      imageAlt2: "Consultorio dental",
      ctaPreText:
        "Experimenta un cuidado dental que va más allá de tu sonrisa.",
      cta: "Obtén Tu Plan de Tratamiento Personalizado",
      ctaMicrocopy:
        "Recibe orientación experta y un plan de tratamiento adaptado a tu salud oral, estilo de vida y bienestar a largo plazo.",
    },

    // Servicios
    services: {
      title: "Nuestros Servicios",
      subtitle:
        "Tratamientos dentales con atención personalizada y profesionalismo",
      intro:
        "Desde visitas preventivas hasta trauma complejo, cada tratamiento es planificado personalmente por la Dra. Contreras.",
      items: [
        {
          title: "Odontología General",
          description:
            "Diagnóstico completo, chequeos sin prisa y planes de tratamiento construidos alrededor de tu salud integral.",
        },
        {
          title: "Odontología Estética",
          description:
            "Blanqueamiento, carillas y restauraciones estéticas diseñadas para verse naturales, nunca artificiales.",
        },
        {
          title: "Emergencias Dentales",
          description:
            "Dolor agudo, fracturas e infecciones atendidas con prioridad y disponibilidad el mismo día.",
        },
        {
          title: "Trauma Dental",
          description:
            "Manejo avanzado de dientes lesionados, desplazados o avulsionados con preservación a largo plazo en mente.",
        },
        {
          title: "Limpieza y Periodoncia",
          description:
            "Higiene profesional profunda y programas de salud de encías que protegen todo tu cuerpo.",
        },
        {
          title: "Restauraciones",
          description:
            "Rellenos, inlays y coronas usando materiales biocompatibles modernos y técnicas de precisión.",
        },
      ],
      ctaPreText: "¿No sabes cuál tratamiento es el mejor para ti?",
      cta: "Obtén Tu Plan de Tratamiento Personalizado",
      ctaMicrocopy:
        "Recibe orientación experta y un plan de tratamiento adaptado a tus necesidades, metas y salud oral.",
    },

    // Sobre la doctora
    about: {
      badge: "Sobre la Doctora",
      name: "Dra. Marcela Contreras",
      credentials:
        "Doctora en Cirugía Dental · Odontología Integral y de Emergencias",
      paragraphs: [
        "La Dra. Contreras fundó su práctica en Costa Rica con una simple convicción: la odontología debe sentirse humana. Quince años de trabajo clínico — mucho de ello en cuidado de urgencias y trauma — le enseñaron que los pacientes sanan más rápido cuando se sienten comprendidos.",
        "Su enfoque es holístico y sin apuros. Cada consulta explora cómo la salud oral se conecta con el sueño, la nutrición, el estrés y el bienestar a largo plazo, y cada plan de tratamiento está escrito para una sola persona.",
      ],
      quote:
        "No me enfoco únicamente en tu sonrisa; me enfoco en tu bienestar como persona.",
      quoteAttribution:
        "— Dra. Marcela Contreras, sobre su filosofía de práctica",
      imageAlt: "Dra. Marcela Contreras explicando tratamiento dental",
      ctaPreText: "Conoce a la dentista detrás de cada sonrisa segura.",
      cta: "Conoce a la Dra. Marcela",
      ctaMicrocopy:
        "Experimenta una odontología compasiva y personalizada enfocada en tu salud a largo plazo.",
    },

    // Emergencias
    emergencies: {
      badge: "Emergencias Dentales",
      title: "Cuando algo sale mal, la experiencia importa más.",
      description:
        "La Dra. Contreras ha dedicado años de entrenamiento enfocado en trauma dental y cuidado urgente. Las emergencias se atienden con prioridad, toma de decisiones calmada y técnicas que protegen la vida a largo plazo de tus dientes.",
      ctaPreText: "¿Emergencia dental? Recibe la atención que necesitas hoy.",
      cta: "Recibe Atención Dental de Emergencia",
      ctaMicrocopy:
        "Cuéntanos qué está pasando y te ayudaremos con los siguientes pasos.",
      imageAlt: "Consultorio dental moderno",
      items: [
        "Dolor dental severo o repentino",
        "Diente golpeado por trauma o deportes",
        "Corona, relleno o restauración perdida",
        "Dientes fracturados, astillados o desplazados",
        "Hinchazón, absceso o infección aguda",
        "Evaluación dental post-accidente",
      ],
    },

    // Testimonios
    testimonials: {
      badge: "Historias de Pacientes",
      title: "Confianza de familias en toda Costa Rica.",
      subtitle: "Experiencias reales de pacientes satisfechos",
      cta: "Ver más experiencias en Google",
      ctaPreText: "5/5 en Google Reviews",
      ctaDescription:
        "Cientos de pacientes confían en la Dra. Marcela para un cuidado dental personalizado y compasivo.",
      ctaButton: "Chatea Con Nuestro Equipo",
      ctaMicrocopy:
        "¿Tienes preguntas? Estamos aquí para ayudarte a elegir el tratamiento adecuado.",
      translatedNote: "(Traducido del inglés)",
      bannerTitle: "5/5 en Google Reviews",
      bannerDescription:
        "Cientos de pacientes describen la misma experiencia: escucha atenta, explicaciones transparentes y resultados que duran.",
      items: [
        {
          text: "Llegué a las 9pm con un diente roto después de un accidente. Me atendió esa misma noche, me calmó y salvó el diente. No iré a ningún otro lado.",
          name: "Andrés M.",
          role: "Paciente de emergencia · San José",
        },
        {
          text: "La primera dentista que me explicó todo en una pantalla, sin presión y sin venderme tratamientos que no necesitaba. Absolutamente profesional.",
          name: "Laura V.",
          role: "Cuidado integral",
        },
        {
          text: "Mis hijos están relajados aquí, lo cual dice todo. La clínica es impecable y la atención al detalle está en otro nivel.",
          name: "Carolina S.",
          role: "Paciente familiar",
        },
      ],
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
      title:
        "Cada Sonrisa Saludable Comienza Sintiéndote Verdaderamente Cuidado.",
      description:
        "Tu sonrisa es parte de tu bienestar integral—no solo tus dientes. Nos tomamos el tiempo para escucharte, entender tus metas y crear planes de tratamiento personalizados que cuidan tu salud, comodidad y confianza en cada paso.",
      primaryCta: "Agenda Tu Consulta Personalizada",
      secondaryCta: "Planifica Tu Visita a Costa Rica",
      microcopy:
        "Cuidado holístico • Odontología personalizada • Confianza de pacientes locales e internacionales",
    },

    // FAQ
    faq: {
      badge: "FAQ",
      title: "Respuestas antes de tu primera visita.",
      subtitle:
        "¿Aún tienes dudas? Un mensaje corto de WhatsApp es todo lo que necesitas.",
      cta: "Escríbele al Equipo",
      items: [
        {
          question:
            "¿Qué tan rápido puedo ser atendido por una emergencia dental?",
          answer:
            "Las emergencias dentales se atienden el mismo día siempre que sea posible. Si tienes dolor severo, trauma o una infección, contáctanos inmediatamente por WhatsApp y te daremos prioridad.",
        },
        {
          question: "¿Qué incluye la primera consulta?",
          answer:
            "La primera consulta incluye una evaluación completa de tu salud oral, radiografías digitales si son necesarias, y un plan de tratamiento personalizado. También es un espacio para que compartas tus preocupaciones y objetivos.",
        },
        {
          question: "¿Qué significa realmente un enfoque holístico?",
          answer:
            "Significa que consideramos tu salud oral como parte de tu bienestar general. Evaluamos cómo factores como el estrés, la nutrición y el sueño pueden afectar tu salud dental, y creamos planes que consideran todo el panorama.",
        },
        {
          question: "¿Tratan trauma dental en niños y atletas?",
          answer:
            "Sí, la Dra. Contreras tiene experiencia especializada en trauma dental. Atendemos niños y atletas con dientes fracturados, desplazados o avulsionados, siempre con el objetivo de preservar el diente a largo plazo.",
        },
        {
          question: "¿Hablan inglés?",
          answer:
            "Sí, la Dra. Contreras y su equipo ofrecen atención completa en español e inglés.",
        },
        {
          question: "¿Qué opciones de pago están disponibles?",
          answer:
            "Aceptamos efectivo, transferencia bancaria y tarjetas de crédito/débito. También trabajamos con varios seguros dentales. Contáctanos para más detalles sobre tu caso específico.",
        },
      ],
    },

    // Contacto
    contact: {
      title: "Contacto",
      subtitle: "Estamos aquí para ayudarte",
      introTitle: "Dra. Marcela Contreras",
      introText:
        "Ayudando a las personas a sonreír con confianza a través de un cuidado dental personalizado y compasivo. Cada tratamiento comienza escuchando, entendiendo y cuidando a la persona detrás de la sonrisa.",
      callNow: "Llamar a la Clínica",
      sendMessage: "Chatear por WhatsApp",
      form: {
        name: "Nombre",
        namePlaceholder: "Tu nombre",
        nameRequired: "El nombre es requerido",
        phone: "Teléfono",
        phoneRequired: "El teléfono es requerido",
        email: "Correo electrónico",
        emailInvalid: "Correo electrónico inválido",
        treatment: "Tratamiento de interés",
        treatmentPlaceholder: "Selecciona un tratamiento",
        treatmentOther: "Otro",
        message: "Mensaje",
        messagePlaceholder: "¿En qué podemos ayudarte?",
        messageRequired: "El mensaje debe tener al menos 10 caracteres",
        consent: "Acepto ser contactado para dar seguimiento a mi solicitud",
        consentRequired: "Debes aceptar ser contactado",
        submit: "Agenda Tu Consulta Personalizada",
        submitMicrocopy:
          "Descubre tus opciones de tratamiento con orientación diseñada específicamente para ti.",
        submitting: "Enviando...",
        success:
          "¡Gracias! Tu solicitud ha sido enviada. Te contactaremos pronto.",
        error:
          "Hubo un error al enviar tu solicitud. Por favor, intenta de nuevo.",
      },
      professionalCode: "Código Profesional",
      location: "Ubicación",
      schedule: "Horario de atención",
      weekdays: "Lunes - Viernes",
      saturday: "Sábado",
      sunday: "Domingo",
      closed: "Cerrado",
    },

    // Footer
    footer: {
      description:
        "Atención dental integral y de emergencias en Costa Rica, guiada por una filosofía holística. Porque cada paciente es una persona, nunca solo un caso.",
      contact: "Contacto",
      callNow: "Llamar a la Clínica",
      bookNow: "Chatear por WhatsApp",
      hours: "Horario de la Clínica",
      emergencies: "Emergencias Dentales · Citas el mismo día disponibles",
      copyright: "Dra. Marcela Contreras. Todos los derechos reservados.",
      socialProof:
        "Confianza de pacientes de Costa Rica, Estados Unidos y Canadá.",
      mapTitle: "Visita Nuestra Clínica en Santa Teresa",
      mapSubtitle: "Fácil de encontrar con Google Maps o Waze.",
      location: "Santa Teresa · Costa Rica",
      openInMaps: "Abrir en Google Maps",
      openInWaze: "Abrir en Waze",
      closingMessage:
        "Estamos aquí cuando estés listo para dar el siguiente paso hacia una sonrisa más saludable y feliz.",
    },

    // WhatsApp flotante
    whatsapp: {
      tooltip: "Escríbele al equipo de la Dra. Marcela",
      tooltipMicrocopy: "Estamos aquí para responder tus preguntas.",
      ariaLabel: "Contactar por WhatsApp",
    },

    // Accesibilidad
    accessibility: {
      skipToContent: "Saltar al contenido principal",
      menuOpen: "Abrir menú",
      menuClose: "Cerrar menú",
    },
  },

  en: {
    // Language
    language: {
      es: "Español",
      en: "English",
    },

    // Header
    header: {
      cta: "Start Your Smile Journey",
      tagline: "Comprehensive Dentistry · Costa Rica",
      nav: {
        treatments: "Treatments",
        whyUs: "Why choose us",
        emergencies: "Emergencies",
        about: "About",
        faq: "FAQ",
      },
    },

    // Hero
    hero: {
      badge: "Exceptional Care. Extraordinary Smiles.",
      title: "A smile begins with",
      titleHighlight: "trust.",
      subtitle:
        "You deserve comprehensive dental care from a professional who understands oral health as part of your overall wellbeing — unhurried consultations and personalized treatment plans.",
      ctaPreText: "Ready to take the first step toward a healthier smile?",
      primaryCta: "Request Your Personalized Consultation",
      primaryCtaMicrocopy:
        "Personalized recommendations based on your needs, goals and oral health.",
      secondaryCta: "Let's Talk",
      secondaryCtaMicrocopy: "We're here to answer your questions.",
      trustBadge1: "5/5 on Google Reviews",
      trustBadge2: "Same-day emergencies",
      yearsLabel: "years caring for smiles",
    },

    // Trust section (Holistic Dentistry)
    trust: {
      badge: "Holistic Dentistry",
      title: "Comprehensive care that considers your complete wellbeing.",
      subtitle:
        "Oral health is deeply connected to sleep, nutrition, posture, and stress. That's why every plan here begins with the full picture — and then focuses on what you truly need.",
      features: [
        {
          title: "Treated as a person",
          description:
            "Consultations begin by listening. Your story, fears, and goals shape the plan.",
        },
        {
          title: "Modern diagnostics",
          description:
            "Digital scanning and imaging make every diagnosis visible, explainable, and precise.",
        },
        {
          title: "Time, unhurried",
          description:
            "Appointments are scheduled generously so no procedure is rushed.",
        },
        {
          title: "One doctor, start to finish",
          description:
            "The same professional follows your case at every stage of treatment.",
        },
      ],
      imageAlt1: "Dra. Marcela Contreras",
      imageAlt2: "Dental office",
      ctaPreText: "Experience dental care that goes beyond your smile.",
      cta: "Get Your Personalized Treatment Plan",
      ctaMicrocopy:
        "Receive expert guidance and a treatment plan tailored to your oral health, lifestyle, and long-term wellbeing.",
    },

    // Services
    services: {
      title: "Our Services",
      subtitle:
        "Dental treatments with personalized attention and professionalism",
      intro:
        "From preventive visits to complex trauma, every treatment is personally planned by Dra. Contreras.",
      items: [
        {
          title: "General Dentistry",
          description:
            "Complete diagnosis, unhurried checkups, and treatment plans built around your overall health.",
        },
        {
          title: "Cosmetic Dentistry",
          description:
            "Whitening, veneers, and aesthetic restorations designed to look natural, never artificial.",
        },
        {
          title: "Dental Emergencies",
          description:
            "Acute pain, fractures, and infections handled with priority and same-day availability.",
        },
        {
          title: "Dental Trauma",
          description:
            "Advanced management of injured, displaced, or avulsed teeth with long-term preservation in mind.",
        },
        {
          title: "Cleaning & Periodontics",
          description:
            "Deep professional hygiene and gum health programs that protect your whole body.",
        },
        {
          title: "Restorations",
          description:
            "Fillings, inlays, and crowns using modern biocompatible materials and precision techniques.",
        },
      ],
      ctaPreText: "Not sure which treatment is best for you?",
      cta: "Get Your Personalized Treatment Plan",
      ctaMicrocopy:
        "Receive expert guidance and a treatment plan tailored to your needs, goals, and oral health.",
    },

    // About the doctor
    about: {
      badge: "About the Doctor",
      name: "Dra. Marcela Contreras",
      credentials:
        "Doctor of Dental Surgery · Comprehensive and Emergency Dentistry",
      paragraphs: [
        "Dra. Contreras founded her practice in Costa Rica with a simple conviction: dentistry should feel human. Fifteen years of clinical work — much of it in emergency and trauma care — taught her that patients heal faster when they feel understood.",
        "Her approach is holistic and unhurried. Every consultation explores how oral health connects with sleep, nutrition, stress, and long-term wellbeing, and every treatment plan is written for one person alone.",
      ],
      quote:
        "I don't just focus on your smile; I focus on your wellbeing as a person.",
      quoteAttribution: "— Dra. Marcela Contreras, on her practice philosophy",
      imageAlt: "Dra. Marcela Contreras explaining dental treatment",
      ctaPreText: "Meet the dentist behind every confident smile.",
      cta: "Meet Dra. Marcela",
      ctaMicrocopy:
        "Experience compassionate, personalized dentistry focused on long-term health.",
    },

    // Emergencies
    emergencies: {
      badge: "Dental Emergencies",
      title: "When something goes wrong, experience matters most.",
      description:
        "Dra. Contreras has dedicated years of training focused on dental trauma and urgent care. Emergencies are handled with priority, calm decision-making, and techniques that protect the long-term life of your teeth.",
      ctaPreText: "Dental emergency? Get the care you need today.",
      cta: "Get Emergency Dental Care",
      ctaMicrocopy:
        "Tell us what's happening and we'll help you with the next steps.",
      imageAlt: "Modern dental office",
      items: [
        "Severe or sudden dental pain",
        "Tooth knocked out by trauma or sports",
        "Lost crown, filling, or restoration",
        "Fractured, chipped, or displaced teeth",
        "Swelling, abscess, or acute infection",
        "Post-accident dental evaluation",
      ],
    },

    // Testimonials
    testimonials: {
      badge: "Patient Stories",
      title: "Trust from families across Costa Rica.",
      subtitle: "Real experiences from satisfied patients",
      cta: "See more reviews on Google",
      ctaPreText: "5/5 on Google Reviews",
      ctaDescription:
        "Hundreds of patients trust Dr. Marcela for personalized, compassionate dental care.",
      ctaButton: "Chat With Our Team",
      ctaMicrocopy:
        "Have questions? We're here to help you choose the right treatment.",
      translatedNote: "(Translated from Spanish)",
      bannerTitle: "5/5 on Google Reviews",
      bannerDescription:
        "Hundreds of patients describe the same experience: attentive listening, transparent explanations, and results that last.",
      items: [
        {
          text: "I arrived at 9pm with a broken tooth after an accident. She treated me that same night, calmed me down, and saved the tooth. I won't go anywhere else.",
          name: "Andrés M.",
          role: "Emergency patient · San José",
        },
        {
          text: "The first dentist who explained everything on a screen, without pressure and without selling me treatments I didn't need. Absolutely professional.",
          name: "Laura V.",
          role: "Comprehensive care",
        },
        {
          text: "My kids are relaxed here, which says everything. The clinic is impeccable and the attention to detail is on another level.",
          name: "Carolina S.",
          role: "Family patient",
        },
      ],
    },

    // Process
    process: {
      title: "Your path to a healthier smile",
      steps: [
        {
          number: 1,
          title: "Book your appointment",
          description: "Contact us via WhatsApp, phone call, or form.",
        },
        {
          number: 2,
          title: "Personalized evaluation",
          description:
            "The doctor listens to your needs and reviews your dental health.",
        },
        {
          number: 3,
          title: "Clear treatment plan",
          description:
            "You receive an understandable explanation of available options.",
        },
        {
          number: 4,
          title: "Care and follow-up",
          description:
            "Each stage is performed with attention, precision, and support.",
        },
      ],
    },

    // CTA (Final section - Premium)
    cta: {
      title: "Every Healthy Smile Begins with Feeling Truly Cared For.",
      description:
        "Your smile is part of your overall wellbeing—not just your teeth. We take the time to listen, understand your goals, and create personalized treatment plans that care for your health, comfort, and confidence at every step.",
      primaryCta: "Book Your Personalized Consultation",
      secondaryCta: "Plan Your Visit to Costa Rica",
      microcopy:
        "Holistic care • Personalized dentistry • Trusted by local and international patients",
    },

    // FAQ
    faq: {
      badge: "FAQ",
      title: "Answers before your first visit.",
      subtitle:
        "Still have questions? A short WhatsApp message is all you need.",
      cta: "Let's Talk",
      items: [
        {
          question: "How quickly can I be seen for a dental emergency?",
          answer:
            "Dental emergencies are handled the same day whenever possible. If you have severe pain, trauma, or an infection, contact us immediately via WhatsApp and we'll prioritize you.",
        },
        {
          question: "What does the first consultation include?",
          answer:
            "The first consultation includes a complete evaluation of your oral health, digital X-rays if needed, and a personalized treatment plan. It's also a space for you to share your concerns and goals.",
        },
        {
          question: "What does a holistic approach really mean?",
          answer:
            "It means we consider your oral health as part of your overall wellbeing. We evaluate how factors like stress, nutrition, and sleep can affect your dental health, and create plans that consider the full picture.",
        },
        {
          question: "Do you treat dental trauma in children and athletes?",
          answer:
            "Yes, Dra. Contreras has specialized experience in dental trauma. We treat children and athletes with fractured, displaced, or avulsed teeth, always with the goal of long-term tooth preservation.",
        },
        {
          question: "Do you speak English?",
          answer:
            "Yes, Dra. Contreras and her team offer complete care in both Spanish and English.",
        },
        {
          question: "What payment options are available?",
          answer:
            "We accept cash, bank transfer, and credit/debit cards. We also work with various dental insurance plans. Contact us for more details about your specific case.",
        },
      ],
    },

    // Contact
    contact: {
      title: "Contact",
      subtitle: "We're here to help",
      introTitle: "Dra. Marcela Contreras",
      introText:
        "Helping people smile with confidence through personalized, compassionate dental care. Every treatment begins with listening, understanding, and caring for the person behind the smile.",
      callNow: "Call the Clinic",
      sendMessage: "Chat on WhatsApp",
      form: {
        name: "Name",
        namePlaceholder: "Your name",
        nameRequired: "Name is required",
        phone: "Phone",
        phoneRequired: "Phone is required",
        email: "Email",
        emailInvalid: "Invalid email address",
        treatment: "Treatment of interest",
        treatmentPlaceholder: "Select a treatment",
        treatmentOther: "Other",
        message: "Message",
        messagePlaceholder: "How can we help you?",
        messageRequired: "Message must be at least 10 characters",
        consent: "I agree to be contacted for follow-up on my request",
        consentRequired: "You must agree to be contacted",
        submit: "Schedule Your Personalized Consultation",
        submitMicrocopy:
          "Discover your treatment options with guidance tailored specifically to you.",
        submitting: "Sending...",
        success:
          "Thank you! Your request has been sent. We'll contact you soon.",
        error: "There was an error sending your request. Please try again.",
      },
      professionalCode: "Professional Code",
      location: "Location",
      schedule: "Office hours",
      weekdays: "Monday - Friday",
      saturday: "Saturday",
      sunday: "Sunday",
      closed: "Closed",
    },

    // Footer
    footer: {
      description:
        "Expert integrative and emergency dental care in Costa Rica, guided by a holistic philosophy. Because every patient is a person, never just a case.",
      contact: "Contact",
      callNow: "Call the Clinic",
      bookNow: "Chat on WhatsApp",
      hours: "Clinic Hours",
      emergencies: "Dental Emergencies · Same-day appointments available",
      copyright: "Dra. Marcela Contreras. All rights reserved.",
      socialProof:
        "Trusted by patients from Costa Rica, the United States, and Canada.",
      mapTitle: "Visit Our Clinic in Santa Teresa",
      mapSubtitle: "Easy to find with Google Maps or Waze.",
      location: "Santa Teresa · Costa Rica",
      openInMaps: "Open in Google Maps",
      openInWaze: "Open in Waze",
      closingMessage:
        "We're here whenever you're ready to take the next step toward a healthier, happier smile.",
    },

    // WhatsApp floating
    whatsapp: {
      tooltip: "Let's Talk",
      tooltipMicrocopy: "We're here to answer your questions.",
      ariaLabel: "Let's Talk",
    },

    // Accessibility
    accessibility: {
      skipToContent: "Skip to main content",
      menuOpen: "Open menu",
      menuClose: "Close menu",
    },
  },
} as const;

export type Content = typeof content;
export type ContentLanguage = keyof Content;
