"use client";

import { useTranslation } from "react-i18next";
import { siteConfig } from "@/config/site";
import {
  Section,
  Container,
  AnimateOnScroll,
  Button,
  ButtonMicrocopy,
  ButtonGroup,
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
                {/* Premium Service Card */}
                <div className="group relative flex h-full flex-col rounded-2xl border border-[#38BDF8]/30 bg-white p-6 shadow-sm transition-all duration-[250ms] ease-out focus-within:border-[#38BDF8] focus-within:ring-2 focus-within:ring-[#38BDF8]/20 hover:-translate-y-1 hover:border-[#38BDF8] hover:shadow-lg">
                  {/* Icon Container - Unified Design */}
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#38BDF8] text-white shadow-sm transition-all duration-[250ms] group-hover:bg-[#0EA5E9] group-hover:shadow-md">
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>

                  {/* Title - Consistent Typography */}
                  <h3 className="mb-4 text-xl leading-tight font-semibold text-[#1E3A5F]">
                    {service.title}
                  </h3>

                  {/* Description - Consistent Typography */}
                  <p className="text-[15px] leading-relaxed text-[#1E3A5F]/70">
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
          <ButtonGroup className="mt-12 flex flex-col items-center text-center">
            <p className="mb-6 text-base font-medium text-[#1E3A5F]/80">
              {t("services.ctaPreText")}
            </p>
            <a
              href={siteConfig.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="whatsapp">
                <Icons.whatsapp />
                {t("services.cta")}
              </Button>
            </a>
            <ButtonMicrocopy>{t("services.ctaMicrocopy")}</ButtonMicrocopy>
          </ButtonGroup>
        </AnimateOnScroll>
      </Container>
    </Section>
  );
}
