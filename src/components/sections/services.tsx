"use client";

import { useTranslation } from "react-i18next";
import { siteConfig } from "@/config/site";
import {
  Section,
  Container,
  AnimateOnScroll,
  Button,
  Icons,
} from "@/components/ui";
import {
  Stethoscope,
  Gem,
  Siren,
  AlertCircle,
  Sparkles,
  Activity,
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Odontología General",
    description:
      "Diagnóstico completo, chequeos sin prisa y planes de tratamiento construidos alrededor de tu salud integral.",
    featured: false,
  },
  {
    icon: Gem,
    title: "Odontología Estética",
    description:
      "Blanqueamiento, carillas y restauraciones estéticas diseñadas para verse naturales, nunca artificiales.",
    featured: true,
  },
  {
    icon: Siren,
    title: "Emergencias Dentales",
    description:
      "Dolor agudo, fracturas e infecciones atendidas con prioridad y disponibilidad el mismo día.",
    featured: false,
  },
  {
    icon: AlertCircle,
    title: "Trauma Dental",
    description:
      "Manejo avanzado de dientes lesionados, desplazados o avulsionados con preservación a largo plazo en mente.",
    featured: false,
  },
  {
    icon: Sparkles,
    title: "Limpieza y Periodoncia",
    description:
      "Higiene profesional profunda y programas de salud de encías que protegen todo tu cuerpo.",
    featured: false,
  },
  {
    icon: Activity,
    title: "Restauraciones",
    description:
      "Rellenos, inlays y coronas usando materiales biocompatibles modernos y técnicas de precisión.",
    featured: false,
  },
];

export function Services() {
  const { t } = useTranslation();

  return (
    <Section
      id="servicios"
      className="bg-gradient-to-b from-white to-[#F5F5F5]"
    >
      <Container>
        <AnimateOnScroll animation="blur-in" easing="smooth" duration={600}>
          <p className="mb-12 max-w-3xl text-lg text-[#1E3A5F]/70">
            Desde visitas preventivas hasta trauma complejo, cada tratamiento es
            planificado personalmente por la Dra. Contreras.
          </p>
        </AnimateOnScroll>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <AnimateOnScroll
                key={service.title}
                animation="scale-up"
                mobileAnimation="fade-up"
                staggerIndex={index}
                staggerDelay={100}
                duration={600}
                easing="spring"
                className="h-full"
              >
                <div
                  className={`group relative h-full cursor-pointer rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl active:scale-[0.98] ${
                    service.featured
                      ? "border-[#38BDF8] bg-white shadow-md"
                      : "border-[#E5E7EB] bg-white hover:border-[#38BDF8]/50"
                  }`}
                >
                  {/* Icon */}
                  <div
                    className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl transition-colors ${
                      service.featured
                        ? "bg-[#38BDF8] text-white"
                        : "bg-[#38BDF8]/10 text-[#38BDF8] group-hover:bg-[#38BDF8] group-hover:text-white"
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* Content */}
                  <h3 className="mb-2 text-xl font-semibold text-[#1E3A5F]">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#1E3A5F]/70">
                    {service.description}
                  </p>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>

        {/* CTA */}
        <AnimateOnScroll
          animation="fade-up"
          mobileAnimation="fade-up"
          delay={400}
          duration={500}
          easing="smooth"
        >
          <div className="mt-12 text-center">
            <a
              href={siteConfig.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="gap-2 rounded-full bg-[#25D366] px-8 py-6 text-base font-semibold text-white shadow-lg transition-colors hover:bg-[#20BD5A] active:bg-[#1DA851]">
                <Icons.whatsapp className="h-5 w-5" />
                {t("services.cta")}
              </Button>
            </a>
          </div>
        </AnimateOnScroll>
      </Container>
    </Section>
  );
}
