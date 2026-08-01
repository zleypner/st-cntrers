"use client";

import {
  Section,
  Container,
  Icons,
  AnimateOnScroll,
  Floating,
  Parallax,
} from "@/components/ui";

export function About() {
  return (
    <Section
      id="sobre"
      className="overflow-hidden bg-gradient-to-b from-[#F9FAFB] to-white"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <AnimateOnScroll
            animation="swing-in"
            mobileAnimation="scale"
            duration={800}
            easing="spring"
          >
            <div className="relative">
              <Parallax speed={0.3} direction="up">
                <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-gradient-to-br from-[#F3F4F6] to-[#E5E7EB] shadow-lg transition-shadow duration-500 hover:shadow-2xl">
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                    <Icons.user className="mb-4 h-24 w-24 text-[#16A34A]/50" />
                    <p className="font-medium text-[#526158]">
                      Fotografía de la Dra. Marcela Contreras
                    </p>
                    <p className="mt-2 text-sm text-[#9CA3AF]">
                      [Imagen pendiente]
                    </p>
                  </div>
                </div>
              </Parallax>

              {/* Decorative elements */}
              <Floating amplitude={8} duration={5} delay={0}>
                <div className="absolute -top-6 -right-6 hidden h-24 w-24 rounded-2xl bg-[#16A34A]/10 lg:block" />
              </Floating>
              <Floating amplitude={6} duration={4} delay={0.5}>
                <div className="absolute -bottom-4 -left-4 hidden h-16 w-16 rounded-xl bg-[#16A34A] lg:block" />
              </Floating>
            </div>
          </AnimateOnScroll>

          {/* Content */}
          <div>
            <AnimateOnScroll
              animation="blur-in"
              mobileAnimation="fade-in"
              duration={600}
              easing="smooth"
            >
              <p className="mb-4 text-sm font-medium tracking-wider text-[#16A34A] uppercase">
                Sobre la Doctora
              </p>

              <h2 className="mb-4 text-4xl font-bold text-[#17231C] sm:text-5xl">
                Dra. Marcela Contreras
              </h2>

              <p className="mb-8 text-sm tracking-wider text-[#526158] uppercase">
                Doctora en Cirugía Dental · Odontología Integral y de
                Emergencias
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll
              animation="fade-up"
              mobileAnimation="fade-in"
              delay={150}
              duration={500}
              easing="smooth"
            >
              <div className="mb-8 space-y-4 text-[#526158]">
                <p>
                  La Dra. Contreras fundó su práctica en Costa Rica con una
                  simple convicción: la odontología debe sentirse humana. Quince
                  años de trabajo clínico — mucho de ello en cuidado de
                  urgencias y trauma — le enseñaron que los pacientes sanan más
                  rápido cuando se sienten comprendidos.
                </p>
                <p>
                  Su enfoque es holístico y sin apuros. Cada consulta explora
                  cómo la salud oral se conecta con el sueño, la nutrición, el
                  estrés y el bienestar a largo plazo, y cada plan de
                  tratamiento está escrito para una sola persona.
                </p>
              </div>
            </AnimateOnScroll>

            {/* Quote */}
            <AnimateOnScroll
              animation="rotate-in"
              mobileAnimation="fade-up"
              delay={300}
              duration={600}
              easing="spring"
            >
              <div className="group rounded-2xl border border-[#BBF7D0] bg-[#F0FDF4] p-6 transition-all duration-300 hover:border-[#16A34A]/30 hover:shadow-lg">
                <blockquote className="mb-3 text-xl font-medium text-[#17231C] transition-colors duration-300 group-hover:text-[#16A34A]">
                  &ldquo;No trato dientes. Cuido a la persona a quien
                  pertenecen.&rdquo;
                </blockquote>
                <p className="text-sm text-[#526158]">
                  — Dra. Marcela Contreras, sobre su filosofía de práctica
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </Container>
    </Section>
  );
}
