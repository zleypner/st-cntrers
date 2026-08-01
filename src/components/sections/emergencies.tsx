"use client";

import { siteConfig } from "@/config/site";
import {
  Section,
  Container,
  Button,
  Icons,
  AnimateOnScroll,
  Floating,
} from "@/components/ui";
import { Siren } from "lucide-react";

const emergencyItems = [
  "Dolor dental severo o repentino",
  "Diente golpeado por trauma o deportes",
  "Corona, relleno o restauración perdida",
  "Dientes fracturados, astillados o desplazados",
  "Hinchazón, absceso o infección aguda",
  "Evaluación dental post-accidente",
];

export function Emergencies() {
  return (
    <Section
      id="emergencias"
      className="relative overflow-hidden bg-[#16A34A] text-white"
    >
      {/* Floating background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Floating amplitude={20} duration={7} delay={0}>
          <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
        </Floating>
        <Floating amplitude={15} duration={6} delay={1}>
          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-white/5 blur-3xl" />
        </Floating>
      </div>

      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div>
            <AnimateOnScroll
              animation="blur-in"
              mobileAnimation="fade-in"
              duration={600}
              easing="smooth"
            >
              {/* Badge */}
              <div className="animate-pulse-soft mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                <Siren className="h-4 w-4" />
                <span className="text-sm font-medium tracking-wider uppercase">
                  Emergencias Dentales
                </span>
              </div>

              <h2 className="mb-6 text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl">
                Cuando algo sale mal, la experiencia importa más.
              </h2>

              <p className="mb-8 max-w-xl text-lg text-white/80">
                La Dra. Contreras ha dedicado años de entrenamiento enfocado en
                trauma dental y cuidado urgente. Las emergencias se atienden con
                prioridad, toma de decisiones calmada y técnicas que protegen la
                vida a largo plazo de tus dientes.
              </p>
            </AnimateOnScroll>

            {/* Emergency items with stagger */}
            <div className="mb-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {emergencyItems.map((item, index) => (
                <AnimateOnScroll
                  key={index}
                  animation="fade-left"
                  mobileAnimation="fade-in"
                  staggerIndex={index}
                  staggerDelay={80}
                  duration={400}
                  easing="snappy"
                >
                  <div className="group flex cursor-default items-start gap-3">
                    <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-white/60 transition-all duration-300 group-hover:scale-125 group-hover:bg-white" />
                    <span className="text-white/90 transition-colors group-hover:text-white">
                      {item}
                    </span>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>

            {/* CTA */}
            <AnimateOnScroll
              animation="fade-up"
              mobileAnimation="fade-up"
              delay={400}
              duration={500}
              easing="smooth"
            >
              <a
                href={siteConfig.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="gap-2 rounded-full bg-white px-8 text-[#16A34A] transition-colors duration-200 hover:bg-white/90 active:bg-white/80"
                >
                  <Icons.whatsapp className="h-5 w-5" />
                  Contactar ahora
                </Button>
              </a>
            </AnimateOnScroll>
          </div>

          {/* Image */}
          <AnimateOnScroll
            animation="swing-in"
            mobileAnimation="scale"
            delay={200}
            duration={800}
            easing="spring"
          >
            <div className="relative">
              <div className="hover:shadow-3xl aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl transition-shadow duration-500">
                <img
                  src="/assets/test/img3.jpg"
                  alt="Consultorio dental moderno"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Decorative badge */}
              <Floating amplitude={5} duration={3} delay={0.3}>
                <div className="absolute -top-4 -left-4 flex hidden h-16 w-16 rotate-[-8deg] items-center justify-center rounded-xl bg-white text-[#16A34A] shadow-lg md:top-6 md:left-6 md:flex">
                  <Siren className="h-8 w-8" />
                </div>
              </Floating>
            </div>
          </AnimateOnScroll>
        </div>
      </Container>
    </Section>
  );
}
