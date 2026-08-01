"use client";

import {
  Section,
  Container,
  Icons,
  AnimateOnScroll,
  Floating,
} from "@/components/ui";
import { HeartHandshake, ScanLine, Clock, UserCheck } from "lucide-react";

const features = [
  {
    icon: HeartHandshake,
    title: "Tratada como persona",
    description:
      "Las consultas comienzan escuchando. Tu historia, miedos y metas dan forma al plan.",
  },
  {
    icon: ScanLine,
    title: "Diagnósticos modernos",
    description:
      "Escaneo digital e imágenes hacen cada diagnóstico visible, explicable y preciso.",
  },
  {
    icon: Clock,
    title: "Tiempo, sin apuros",
    description:
      "Las citas se programan generosamente para que ningún procedimiento sea apresurado.",
  },
  {
    icon: UserCheck,
    title: "Una doctora, de inicio a fin",
    description:
      "La misma profesional sigue tu caso en cada etapa del tratamiento.",
  },
];

export function Trust() {
  return (
    <Section id="por-que" className="overflow-hidden bg-white">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image collage */}
          <AnimateOnScroll
            animation="swing-in"
            mobileAnimation="scale"
            duration={800}
            easing="spring"
          >
            <div className="relative">
              {/* Main image - Doctora */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg transition-shadow duration-500 hover:shadow-xl">
                <img
                  src="/assets/test/img4.jpg"
                  alt="Dra. Marcela Contreras"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Secondary image - Clínica */}
              <Floating amplitude={6} duration={4} delay={0.5}>
                <div className="absolute -right-8 -bottom-8 hidden h-48 w-48 overflow-hidden rounded-2xl border-4 border-white shadow-xl transition-transform duration-300 hover:scale-105 md:block">
                  <img
                    src="/assets/test/img3.jpg"
                    alt="Consultorio dental"
                    className="h-full w-full object-cover"
                  />
                </div>
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
                Por qué elegirnos
              </p>
              <h2 className="mb-6 text-3xl font-bold text-[#17231C] sm:text-4xl">
                Cuidado integral que considera tu bienestar completo.
              </h2>
              <p className="mb-10 text-lg text-[#526158]">
                La salud oral está profundamente conectada con el sueño, la
                nutrición, la postura y el estrés. Por eso cada plan aquí
                comienza con el panorama completo — y luego se enfoca en lo que
                realmente necesitas.
              </p>
            </AnimateOnScroll>

            {/* Features grid */}
            <div className="grid gap-6 sm:grid-cols-2">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <AnimateOnScroll
                    key={feature.title}
                    animation="scale-up"
                    mobileAnimation="fade-in"
                    staggerIndex={index}
                    staggerDelay={120}
                    duration={500}
                    easing="spring"
                  >
                    <div className="group -m-3 flex cursor-pointer gap-4 rounded-xl p-3 transition-all duration-300 hover:bg-[#F9FAFB] active:scale-[0.98]">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#ECFDF5] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#16A34A]">
                        <Icon className="h-5 w-5 text-[#16A34A] transition-colors group-hover:text-white" />
                      </div>
                      <div>
                        <h3 className="mb-1 font-semibold text-[#17231C]">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-[#526158]">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </AnimateOnScroll>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
