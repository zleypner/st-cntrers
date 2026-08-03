"use client";

import { useTranslation } from "react-i18next";
import { siteConfig } from "@/config/site";
import {
  Container,
  Button,
  ButtonMicrocopy,
  ButtonGroup,
  Icons,
  AnimateOnScroll,
} from "@/components/ui";

export function CTA() {
  const { t } = useTranslation();

  return (
    <section className="relative flex h-screen items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/test/img3.jpg')" }}
      />
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-[#1E3A5F]/85" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <AnimateOnScroll
            animation="rise-up"
            mobileAnimation="scale"
            duration={800}
            easing="elastic"
          >
            <h2 className="mb-4 text-2xl leading-tight font-bold text-white sm:mb-6 sm:text-3xl md:text-4xl lg:text-5xl">
              {t("cta.title")}
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll
            animation="blur-in"
            mobileAnimation="fade-in"
            delay={150}
            duration={600}
            easing="smooth"
          >
            <p className="mx-auto mb-6 max-w-2xl text-base text-white/80 sm:mb-10 md:text-lg">
              {t("cta.description")}
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll
            animation="fade-up"
            mobileAnimation="fade-up"
            delay={300}
            duration={500}
            easing="smooth"
          >
            <ButtonGroup className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={siteConfig.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-xs sm:w-auto sm:max-w-none"
              >
                <Button variant="whatsapp" size="full" className="sm:w-auto">
                  <Icons.whatsapp />
                  {t("cta.primaryCta")}
                </Button>
              </a>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="w-full max-w-xs sm:w-auto sm:max-w-none"
              >
                <Button variant="secondary" size="full" className="sm:w-auto">
                  <Icons.phone />
                  {t("cta.secondaryCta")}
                </Button>
              </a>
            </ButtonGroup>
            <ButtonMicrocopy className="text-white/70">
              {t("cta.microcopy")}
            </ButtonMicrocopy>
          </AnimateOnScroll>
        </div>
      </Container>
    </section>
  );
}
