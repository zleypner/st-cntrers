"use client";

import { useTranslation } from "react-i18next";
import { siteConfig } from "@/config/site";
import { Container, Button, Icons, AnimateOnScroll } from "@/components/ui";

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
            <p className="mx-auto mb-6 max-w-2xl text-sm text-white/80 sm:mb-10 sm:text-base md:text-lg">
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
            <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
              <a
                href={siteConfig.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  className="w-full gap-3 rounded-full bg-[#25D366] px-8 py-6 text-base font-bold text-white shadow-xl transition-all hover:scale-105 hover:bg-[#20BD5A] hover:shadow-2xl active:scale-100 active:bg-[#1DA851] sm:px-10 sm:py-7 sm:text-lg"
                >
                  <Icons.whatsapp className="h-5 w-5 sm:h-6 sm:w-6" />
                  {t("cta.primaryCta")}
                </Button>
              </a>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  className="w-full gap-3 rounded-full bg-[#38BDF8] px-8 py-6 text-base font-bold text-white shadow-xl transition-all hover:scale-105 hover:bg-[#0EA5E9] hover:shadow-2xl active:scale-100 active:bg-[#0284C7] sm:px-10 sm:py-7 sm:text-lg"
                >
                  <Icons.phone className="h-5 w-5 sm:h-6 sm:w-6" />
                  {t("cta.secondaryCta")}
                </Button>
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </Container>
    </section>
  );
}
