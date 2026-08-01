"use client";

import { siteConfig } from "@/config/site";
import { Container, Button, Icons, AnimateOnScroll } from "@/components/ui";

export function CTA() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/test/img3.jpg')" }}
      />
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-green-600/80" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <AnimateOnScroll
            animation="rise-up"
            mobileAnimation="scale"
            duration={800}
            easing="elastic"
          >
            <h2 className="mb-6 text-3xl leading-tight font-bold text-white sm:text-4xl lg:text-5xl">
              Tu sonrisa más saludable comienza hoy.
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll
            animation="blur-in"
            mobileAnimation="fade-in"
            delay={150}
            duration={600}
            easing="smooth"
          >
            <p className="mx-auto mb-10 max-w-2xl text-lg text-white/80">
              Envía un mensaje y encontraremos un horario que funcione para ti —
              sin salas de espera, sin presión, solo respuestas claras.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll
            animation="bounce-in"
            mobileAnimation="fade-up"
            delay={300}
            duration={600}
            easing="bounce"
          >
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href={siteConfig.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="w-full gap-2 rounded-full bg-[#25D366] px-8 py-6 text-base text-white shadow-lg transition-transform hover:bg-[#20BD5A] active:scale-95 sm:w-auto"
                >
                  <Icons.whatsapp className="h-5 w-5" />
                  Escríbenos por WhatsApp
                </Button>
              </a>
              <a href={`tel:${siteConfig.contact.phone}`}>
                <Button
                  size="lg"
                  className="w-full gap-2 rounded-full bg-white px-8 py-6 text-base text-[#16A34A] shadow-lg transition-colors hover:bg-white/90 active:bg-white/80 sm:w-auto"
                >
                  <Icons.phone className="h-5 w-5" />
                  Llamar ahora
                </Button>
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </Container>
    </section>
  );
}
