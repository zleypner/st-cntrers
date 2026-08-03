"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import { siteConfig } from "@/config/site";
import {
  Button,
  ButtonMicrocopy,
  ButtonGroup,
  Icons,
  AnimateOnScroll,
  Container,
  Floating,
  Counter,
} from "@/components/ui";
import { CheckCircle } from "lucide-react";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-white via-[#F5F5F5] to-[#EFEFEF] pt-24 pb-12 md:pt-20 md:pb-0"
    >
      {/* Background decorations with floating animation */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Floating amplitude={15} duration={6} delay={0}>
          <div className="absolute top-20 right-0 h-[600px] w-[600px] rounded-full bg-[#1E3A5F]/5 blur-3xl" />
        </Floating>
        <Floating amplitude={20} duration={8} delay={1}>
          <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-[#38BDF8]/5 blur-3xl" />
        </Floating>
        <Floating amplitude={10} duration={5} delay={2}>
          <div className="absolute top-1/3 left-1/4 hidden h-[200px] w-[200px] rounded-full bg-[#1E3A5F]/3 blur-2xl lg:block" />
        </Floating>
      </div>

      <Container className="relative z-10 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="grid items-center gap-12 sm:gap-14 md:gap-16 lg:grid-cols-2 lg:gap-20 xl:gap-24">
          {/* Content */}
          <div className="relative z-10 text-center lg:text-left">
            <AnimateOnScroll
              animation="blur-in"
              mobileAnimation="fade-in"
              delay={0}
              duration={600}
              easing="smooth"
            >
              {/* Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#38BDF8]/30 bg-[#38BDF8]/10 px-3 py-1.5 sm:mb-8 sm:px-4 sm:py-2">
                <CheckCircle className="h-3.5 w-3.5 text-[#38BDF8] sm:h-4 sm:w-4" />
                <span className="text-xs font-medium tracking-wider text-[#1E3A5F] uppercase sm:text-sm">
                  {t("hero.badge")}
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
              <h1 className="text-3xl leading-tight font-bold tracking-tight text-[#1E3A5F] sm:text-4xl md:text-5xl lg:text-6xl">
                {t("hero.title")}{" "}
                <span className="relative text-[#38BDF8] italic">
                  {t("hero.titleHighlight")}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-[#38BDF8]/20 sm:-bottom-2 sm:h-1" />
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
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#1E3A5F]/70 sm:mt-6 sm:text-lg md:text-xl lg:mx-0">
                {t("hero.subtitle")}
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
              <ButtonGroup>
                {/* Pre-text */}
                <p className="mb-6 text-center text-base font-medium text-[#1E3A5F]/80">
                  {t("hero.ctaPreText")}
                </p>

                <div className="flex flex-col items-center">
                  {/* Primary CTA */}
                  <div className="flex flex-col items-center">
                    <a
                      href={siteConfig.contact.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="primary">
                        <Icons.whatsapp />
                        {t("hero.primaryCta")}
                      </Button>
                    </a>
                    <ButtonMicrocopy align="center">
                      {t("hero.primaryCtaMicrocopy")}
                    </ButtonMicrocopy>
                  </div>
                </div>
              </ButtonGroup>
            </AnimateOnScroll>

            {/* Trust badges */}
            <AnimateOnScroll
              animation="fade-up"
              mobileAnimation="fade-in"
              delay={500}
              duration={500}
              easing="smooth"
            >
              <div className="mt-6 flex flex-col items-center justify-center gap-3 text-xs text-[#1E3A5F]/70 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-6 sm:text-sm">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Icons.star
                        key={i}
                        className="h-3.5 w-3.5 fill-[#38BDF8] text-[#38BDF8] sm:h-4 sm:w-4"
                      />
                    ))}
                  </div>
                  <span>{t("hero.trustBadge1")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icons.clock className="h-3.5 w-3.5 text-[#38BDF8] sm:h-4 sm:w-4" />
                  <span>{t("hero.trustBadge2")}</span>
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
            <div className="relative z-0 mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:mr-0 lg:ml-auto lg:max-w-sm xl:max-w-md">
              {/* Main image */}
              <div className="hover:shadow-3xl relative aspect-[3/4] overflow-hidden rounded-2xl shadow-xl transition-shadow duration-500 sm:aspect-[4/5] sm:rounded-3xl sm:shadow-2xl">
                <Image
                  src="/assets/dentist/drax4.webp"
                  alt={t("about.imageAlt")}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 768px) 70vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Years badge with counter animation */}
              <AnimateOnScroll
                animation="bounce-in"
                delay={800}
                duration={600}
                easing="bounce"
              >
                <div className="absolute bottom-4 left-4 rounded-xl bg-[#1E3A5F] px-4 py-3 text-white shadow-lg transition-transform duration-300 hover:scale-105 sm:bottom-6 sm:left-6 sm:rounded-2xl sm:px-6 sm:py-4 sm:shadow-xl lg:bottom-8 lg:left-8">
                  <p className="text-2xl font-bold sm:text-3xl">
                    <Counter end={20} duration={2000} delay={1000} suffix="+" />
                  </p>
                  <p className="text-[10px] tracking-wider text-white/70 uppercase sm:text-xs">
                    {t("hero.yearsLabel")}
                  </p>
                </div>
              </AnimateOnScroll>

              {/* Floating decorative element */}
              <Floating amplitude={8} duration={4} delay={0.5}>
                <div className="absolute -top-2 -right-2 hidden h-14 w-14 rotate-12 items-center justify-center rounded-xl bg-[#38BDF8] text-white shadow-lg sm:-top-4 sm:-right-4 sm:flex sm:h-16 sm:w-16 md:top-8 md:right-8 md:h-20 md:w-20 md:rounded-2xl">
                  <Icons.tooth className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10" />
                </div>
              </Floating>
            </div>
          </AnimateOnScroll>
        </div>
      </Container>
    </section>
  );
}
