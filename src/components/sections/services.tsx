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

const serviceIcons = [Stethoscope, Gem, Siren, AlertCircle, Sparkles, Activity];
const featuredIndex = 1; // Cosmetic Dentistry is featured

export function Services() {
  const { t } = useTranslation();
  const services = t("services.items", { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  return (
    <Section
      id="servicios"
      className="bg-gradient-to-b from-white to-[#F5F5F5]"
    >
      <Container>
        <AnimateOnScroll animation="blur-in" easing="smooth" duration={600}>
          <p className="mb-12 max-w-3xl text-lg text-[#1E3A5F]/70">
            {t("services.intro")}
          </p>
        </AnimateOnScroll>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = serviceIcons[index];
            const isFeatured = index === featuredIndex;
            return (
              <AnimateOnScroll
                key={index}
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
                    isFeatured
                      ? "border-[#38BDF8] bg-white shadow-md"
                      : "border-[#E5E7EB] bg-white hover:border-[#38BDF8]/50"
                  }`}
                >
                  {/* Icon */}
                  <div
                    className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl transition-colors ${
                      isFeatured
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
              <Button className="gap-3 rounded-full bg-[#25D366] px-8 py-6 text-base font-bold text-white shadow-xl transition-all hover:scale-105 hover:bg-[#20BD5A] hover:shadow-2xl active:scale-100 active:bg-[#1DA851] sm:px-10 sm:py-7 sm:text-lg">
                <Icons.whatsapp className="h-5 w-5 sm:h-6 sm:w-6" />
                {t("services.cta")}
              </Button>
            </a>
          </div>
        </AnimateOnScroll>
      </Container>
    </Section>
  );
}
