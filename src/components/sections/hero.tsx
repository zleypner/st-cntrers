"use client";

import { siteConfig } from "@/config/site";
import {
  Button,
  Icons,
  AnimateOnScroll,
  Container,
  Floating,
  Counter,
  PulseGlow,
} from "@/components/ui";
import { CheckCircle } from "lucide-react";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-white via-[#F0FDF4] to-[#ECFDF5] pt-20"
    >
      {/* Background decorations with floating animation */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Floating amplitude={15} duration={6} delay={0}>
          <div className="absolute top-20 right-0 h-[600px] w-[600px] rounded-full bg-[#22C55E]/5 blur-3xl" />
        </Floating>
        <Floating amplitude={20} duration={8} delay={1}>
          <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-[#16A34A]/5 blur-3xl" />
        </Floating>
        <Floating amplitude={10} duration={5} delay={2}>
          <div className="absolute top-1/3 left-1/4 hidden h-[200px] w-[200px] rounded-full bg-[#22C55E]/3 blur-2xl lg:block" />
        </Floating>
      </div>

      <Container className="relative z-10 py-12 md:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div className="text-center lg:text-left">
            <AnimateOnScroll
              animation="blur-in"
              mobileAnimation="fade-in"
              delay={0}
              duration={600}
              easing="smooth"
            >
              {/* Badge */}
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#BBF7D0] bg-[#ECFDF5] px-4 py-2">
                <CheckCircle className="h-4 w-4 text-[#16A34A]" />
                <span className="text-sm font-medium tracking-wider text-[#16A34A] uppercase">
                  Integral · Holística · Personal
                </span>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll
              animation="rise-up"
              mobileAnimation="fade-up"
              delay={100}
              duration={800}
              easing="elastic"
            >
              <h1 className="text-4xl leading-tight font-bold tracking-tight text-[#17231C] sm:text-5xl lg:text-6xl">
                Una sonrisa comienza con{" "}
                <span className="relative text-[#16A34A] italic">
                  confianza.
                  <span className="absolute -bottom-2 left-0 h-1 w-full rounded-full bg-[#16A34A]/20" />
                </span>
              </h1>
            </AnimateOnScroll>

            <AnimateOnScroll
              animation="fade-up"
              mobileAnimation="fade-in"
              delay={250}
              duration={600}
              easing="smooth"
            >
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[#526158] sm:text-xl lg:mx-0">
                Mereces atención dental integral de una profesional que entiende
                la salud oral como parte de tu bienestar general — consultas sin
                prisa, planes de tratamiento personalizados, y odontología
                realizada con atención meticulosa al detalle.
              </p>
            </AnimateOnScroll>

            {/* CTAs */}
            <AnimateOnScroll
              animation="scale-up"
              mobileAnimation="fade-up"
              delay={400}
              duration={600}
              easing="spring"
            >
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                <a href="#contacto">
                  <PulseGlow>
                    <Button
                      size="lg"
                      className="w-full gap-2 rounded-full bg-[#16A34A] px-8 py-6 text-base text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#14532D] hover:shadow-xl active:scale-95 sm:w-auto"
                    >
                      <Icons.calendar className="h-5 w-5" />
                      Agendar cita
                    </Button>
                  </PulseGlow>
                </a>
                <a
                  href={siteConfig.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full gap-2 rounded-full border-[#D1D5DB] px-8 py-6 text-base text-[#17231C] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F9FAFB] active:scale-95 sm:w-auto"
                  >
                    <Icons.whatsapp className="h-5 w-5" />
                    WhatsApp
                  </Button>
                </a>
              </div>
            </AnimateOnScroll>

            {/* Trust badges */}
            <AnimateOnScroll
              animation="fade-up"
              mobileAnimation="fade-in"
              delay={500}
              duration={500}
              easing="smooth"
            >
              <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-[#526158] lg:justify-start">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Icons.star
                        key={i}
                        className="h-4 w-4 fill-[#16A34A] text-[#16A34A]"
                      />
                    ))}
                  </div>
                  <span>4.9 promedio en Google Reviews</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icons.clock className="h-4 w-4 text-[#16A34A]" />
                  <span>Emergencias el mismo día</span>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Image */}
          <AnimateOnScroll
            animation="swing-in"
            mobileAnimation="scale"
            delay={300}
            duration={800}
            easing="spring"
          >
            <div className="relative">
              {/* Main image placeholder */}
              <div className="hover:shadow-3xl relative aspect-[4/5] overflow-hidden rounded-3xl bg-gradient-to-br from-[#F3F4F6] to-[#E5E7EB] shadow-2xl transition-shadow duration-500">
                {/* Placeholder for doctor image */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <div className="mb-6 flex h-32 w-32 items-center justify-center rounded-full bg-[#16A34A]/10">
                    <Icons.user className="h-16 w-16 text-[#16A34A]" />
                  </div>
                  <p className="font-medium text-[#526158]">
                    Fotografía de la Dra. Marcela Contreras
                  </p>
                  <p className="mt-2 text-sm text-[#9CA3AF]">
                    [Imagen pendiente]
                  </p>
                </div>
              </div>

              {/* Years badge with counter animation */}
              <AnimateOnScroll
                animation="bounce-in"
                delay={800}
                duration={600}
                easing="bounce"
              >
                <div className="absolute -bottom-4 left-4 rounded-2xl bg-[#17231C] px-6 py-4 text-white shadow-xl transition-transform duration-300 hover:scale-105 md:bottom-8 md:left-8">
                  <p className="text-3xl font-bold">
                    <Counter end={20} duration={2000} delay={1000} suffix="+" />
                  </p>
                  <p className="text-xs tracking-wider text-white/70 uppercase">
                    años cuidando sonrisas
                  </p>
                </div>
              </AnimateOnScroll>

              {/* Floating decorative element */}
              <Floating amplitude={8} duration={4} delay={0.5}>
                <div className="absolute -top-4 -right-4 flex hidden h-20 w-20 rotate-12 items-center justify-center rounded-2xl bg-[#16A34A] text-white shadow-lg md:top-8 md:right-8 md:flex">
                  <Icons.tooth className="h-10 w-10" />
                </div>
              </Floating>
            </div>
          </AnimateOnScroll>
        </div>
      </Container>
    </section>
  );
}
