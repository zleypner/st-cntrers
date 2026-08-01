"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";
import {
  Section,
  Container,
  Icons,
  Button,
  AnimateOnScroll,
} from "@/components/ui";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "¿Qué tan rápido puedo ser atendido por una emergencia dental?",
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
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="faq" className="bg-[#F5F5F5]">
      <Container>
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Left column - Title */}
          <div className="lg:col-span-2">
            <AnimateOnScroll
              animation="blur-in"
              mobileAnimation="fade-in"
              duration={600}
              easing="smooth"
            >
              <p className="mb-4 text-sm font-medium tracking-wider text-[#38BDF8] uppercase">
                FAQ
              </p>
              <h2 className="mb-6 text-3xl font-bold text-[#1E3A5F] sm:text-4xl">
                Respuestas antes de tu primera visita.
              </h2>
              <p className="mb-6 text-[#1E3A5F]/70">
                ¿Aún tienes dudas? Un mensaje corto de WhatsApp es todo lo que
                necesitas.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll
              animation="fade-up"
              mobileAnimation="fade-up"
              delay={200}
              duration={500}
              easing="smooth"
            >
              <a
                href={siteConfig.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="gap-2 rounded-full bg-[#25D366] text-white transition-colors duration-200 hover:bg-[#20BD5A] active:bg-[#1DA851]">
                  <Icons.whatsapp className="h-4 w-4" />
                  Enviar mensaje
                </Button>
              </a>
            </AnimateOnScroll>
          </div>

          {/* Right column - Accordion */}
          <div className="space-y-3 lg:col-span-3">
            {faqs.map((faq, index) => (
              <AnimateOnScroll
                key={index}
                animation="slide-right"
                mobileAnimation="fade-in"
                staggerIndex={index}
                staggerDelay={80}
                duration={500}
                easing="snappy"
              >
                <div
                  className={cn(
                    "overflow-hidden rounded-2xl border transition-all duration-300",
                    openIndex === index
                      ? "border-[#38BDF8] bg-white shadow-md"
                      : "border-[#E5E7EB] bg-white hover:border-[#38BDF8]/50 hover:shadow-sm"
                  )}
                >
                  <button
                    type="button"
                    className="group flex w-full items-center justify-between p-5 text-left"
                    onClick={() => toggleItem(index)}
                    aria-expanded={openIndex === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span
                      className={cn(
                        "pr-4 font-medium transition-colors duration-300",
                        openIndex === index
                          ? "text-[#38BDF8]"
                          : "text-[#1E3A5F] group-hover:text-[#38BDF8]"
                      )}
                    >
                      {faq.question}
                    </span>
                    <div
                      className={cn(
                        "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300",
                        openIndex === index
                          ? "rotate-180 bg-[#38BDF8] text-white"
                          : "bg-[#F5F5F5] text-[#1E3A5F]/70 group-hover:bg-[#38BDF8]/10"
                      )}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </button>

                  <div
                    id={`faq-answer-${index}`}
                    className={cn(
                      "grid transition-all duration-300 ease-out",
                      openIndex === index
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5 leading-relaxed text-[#1E3A5F]/70">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
