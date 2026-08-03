"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import { siteConfig } from "@/config/site";
import {
  Section,
  Container,
  Button,
  Icons,
  AnimateOnScroll,
  Floating,
} from "@/components/ui";
import { Siren } from "lucide-react";

export function Emergencies() {
  const { t } = useTranslation();
  return (
    <Section
      id="emergencias"
      className="relative overflow-hidden bg-[#1E3A5F] text-white"
    >
      {/* Floating background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Floating amplitude={20} duration={7} delay={0}>
          <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
        </Floating>
        <Floating amplitude={15} duration={6} delay={1}>
          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-[#38BDF8]/10 blur-3xl" />
        </Floating>
      </div>

      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div>
            <AnimateOnScroll
              animation="blur-in"
              mobileAnimation="fade-in"
              duration={600}
              easing="smooth"
            >
              {/* Badge */}
              <div className="animate-pulse-soft mb-6 inline-flex items-center gap-2 rounded-full bg-[#EF4444]/20 px-4 py-2">
                <Siren className="h-4 w-4 text-[#EF4444]" />
                <span className="text-sm font-medium tracking-wider text-[#EF4444] uppercase">
                  {t("emergencies.badge")}
                </span>
              </div>

              <h2 className="mb-6 text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl">
                {t("emergencies.title")}
              </h2>
            </AnimateOnScroll>

            {/* Emergency items with stagger */}
            <div className="mb-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {(
                t("emergencies.items", { returnObjects: true }) as string[]
              ).map((item, index) => (
                <AnimateOnScroll
                  key={index}
                  animation="fade-left"
                  mobileAnimation="fade-in"
                  staggerIndex={index}
                  staggerDelay={80}
                  duration={400}
                  easing="snappy"
                >
                  <div className="group flex cursor-default items-start gap-3">
                    <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#EF4444]/60 transition-all duration-300 group-hover:scale-125 group-hover:bg-[#EF4444]" />
                    <span className="text-white/90 transition-colors group-hover:text-white">
                      {item}
                    </span>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>

            <AnimateOnScroll
              animation="fade-up"
              mobileAnimation="fade-in"
              delay={300}
              duration={500}
              easing="smooth"
            >
              <p className="mb-8 max-w-xl text-lg text-white/80">
                {t("emergencies.description")}
              </p>
            </AnimateOnScroll>

            {/* CTA */}
            <AnimateOnScroll
              animation="fade-up"
              mobileAnimation="fade-up"
              delay={400}
              duration={500}
              easing="smooth"
            >
              <a
                href={siteConfig.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="gap-3 rounded-full bg-[#EF4444] px-10 py-7 text-lg font-bold text-white shadow-xl transition-all duration-200 hover:scale-105 hover:bg-[#DC2626] hover:shadow-2xl active:scale-100 active:bg-[#B91C1C] sm:px-12 sm:py-8 sm:text-xl"
                >
                  <Icons.whatsapp className="h-6 w-6 sm:h-7 sm:w-7" />
                  {t("emergencies.cta")}
                </Button>
              </a>
            </AnimateOnScroll>
          </div>

          {/* Image */}
          <AnimateOnScroll
            animation="swing-in"
            mobileAnimation="scale"
            delay={200}
            duration={800}
            easing="spring"
          >
            <div className="relative">
              <div className="hover:shadow-3xl relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl transition-shadow duration-500">
                <Image
                  src="/assets/dentist/drax8.webp"
                  alt={t("emergencies.imageAlt")}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Decorative badge */}
              <Floating amplitude={5} duration={3} delay={0.3}>
                <div className="absolute -top-4 -left-4 flex hidden h-16 w-16 rotate-[-8deg] items-center justify-center rounded-xl bg-[#EF4444] text-white shadow-lg md:top-6 md:left-6 md:flex">
                  <Siren className="h-8 w-8" />
                </div>
              </Floating>
            </div>
          </AnimateOnScroll>
        </div>
      </Container>
    </Section>
  );
}
