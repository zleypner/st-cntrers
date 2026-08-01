"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";
import {
  Section,
  Container,
  Icons,
  Button,
  AnimateOnScroll,
  PulseGlow,
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
    <Section id="faq" className="bg-[#F9FAFB]">
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
              <p className="mb-4 text-sm font-medium tracking-wider text-[#16A34A] uppercase">
                FAQ
              </p>
              <h2 className="mb-6 text-3xl font-bold text-[#17231C] sm:text-4xl">
                Respuestas antes de tu primera visita.
              </h2>
              <p className="mb-6 text-[#526158]">
                ¿Aún tienes dudas? Un mensaje corto de WhatsApp es todo lo que
                necesitas.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll
              animation="scale-up"
              mobileAnimation="fade-up"
              delay={200}
              duration={500}
              easing="spring"
            >
              <a
                href={siteConfig.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <PulseGlow>
                  <Button
                    variant="outline"
                    className="gap-2 rounded-full border-[#16A34A] text-[#16A34A] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F0FDF4] active:scale-95"
                  >
                    <Icons.whatsapp className="h-4 w-4" />
                    Enviar mensaje
                  </Button>
                </PulseGlow>
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
                      ? "border-[#16A34A] bg-white shadow-md"
                      : "border-[#E5E7EB] bg-white hover:border-[#BBF7D0] hover:shadow-sm"
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
                          ? "text-[#16A34A]"
                          : "text-[#17231C] group-hover:text-[#16A34A]"
                      )}
                    >
                      {faq.question}
                    </span>
                    <div
                      className={cn(
                        "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300",
                        openIndex === index
                          ? "rotate-180 bg-[#16A34A] text-white"
                          : "bg-[#F3F4F6] text-[#526158] group-hover:bg-[#ECFDF5]"
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
                      <div className="px-5 pb-5 leading-relaxed text-[#526158]">
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
