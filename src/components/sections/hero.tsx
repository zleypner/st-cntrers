"use client";

import { useTranslation } from "react-i18next";
import { siteConfig } from "@/config/site";
import {
  Button,
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
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#BBF7D0] bg-[#ECFDF5] px-3 py-1.5 sm:mb-8 sm:px-4 sm:py-2">
                <CheckCircle className="h-3.5 w-3.5 text-[#16A34A] sm:h-4 sm:w-4" />
                <span className="text-xs font-medium tracking-wider text-[#16A34A] uppercase sm:text-sm">
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
              <h1 className="text-3xl leading-tight font-bold tracking-tight text-[#17231C] sm:text-4xl md:text-5xl lg:text-6xl">
                {t("hero.title")}{" "}
                <span className="relative text-[#16A34A] italic">
                  {t("hero.titleHighlight")}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-[#16A34A]/20 sm:-bottom-2 sm:h-1" />
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
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#526158] sm:mt-6 sm:text-lg md:text-xl lg:mx-0">
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
              <div className="mt-6 flex flex-col justify-center gap-3 sm:mt-8 sm:flex-row sm:gap-4 lg:justify-start">
                <a href="#contacto" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full gap-2 rounded-full bg-[#16A34A] px-6 py-5 text-sm font-semibold text-white shadow-lg transition-colors duration-200 hover:bg-[#14532D] active:bg-[#0F4024] sm:px-8 sm:py-6 sm:text-base"
                  >
                    <Icons.calendar className="h-4 w-4 sm:h-5 sm:w-5" />
                    {t("hero.primaryCta")}
                  </Button>
                </a>
                <a
                  href={siteConfig.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full gap-2 rounded-full border-[#D1D5DB] px-6 py-5 text-sm font-semibold text-[#17231C] transition-colors duration-200 hover:bg-[#F9FAFB] active:bg-[#F3F4F6] sm:px-8 sm:py-6 sm:text-base"
                  >
                    <Icons.whatsapp className="h-4 w-4 sm:h-5 sm:w-5" />
                    {t("hero.secondaryCta")}
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
              <div className="mt-6 flex flex-col items-center gap-3 text-xs text-[#526158] sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-6 sm:text-sm lg:justify-start">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Icons.star
                        key={i}
                        className="h-3.5 w-3.5 fill-[#16A34A] text-[#16A34A] sm:h-4 sm:w-4"
                      />
                    ))}
                  </div>
                  <span>{t("hero.trustBadge1")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icons.clock className="h-3.5 w-3.5 text-[#16A34A] sm:h-4 sm:w-4" />
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
            <div className="relative">
              {/* Main image */}
              <div className="hover:shadow-3xl relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl transition-shadow duration-500">
                <img
                  src="/assets/test/img4.jpg"
                  alt="Dra. Marcela Contreras explicando tratamiento dental"
                  className="h-full w-full object-cover"
                />
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
                    {t("hero.yearsLabel")}
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
