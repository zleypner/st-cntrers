"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import { siteConfig } from "@/config/site";
import {
  Section,
  Container,
  Icons,
  AnimateOnScroll,
  Floating,
  Button,
} from "@/components/ui";
import { HeartHandshake, ScanLine, Clock, UserCheck } from "lucide-react";

const featureIcons = [HeartHandshake, ScanLine, Clock, UserCheck];

export function Trust() {
  const { t } = useTranslation();
  const features = t("trust.features", { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

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
                <Image
                  src="/assets/dentist/drax7.webp"
                  alt={t("trust.imageAlt1")}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Secondary image - Clínica */}
              <Floating amplitude={6} duration={4} delay={0.5}>
                <div className="absolute -right-8 -bottom-8 hidden h-48 w-48 overflow-hidden rounded-2xl border-4 border-white shadow-xl transition-transform duration-300 hover:scale-105 md:block">
                  <Image
                    src="/assets/dentist/drax8.webp"
                    alt={t("trust.imageAlt2")}
                    fill
                    sizes="192px"
                    className="object-cover"
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
              <p className="mb-4 text-sm font-medium tracking-wider text-[#38BDF8] uppercase">
                {t("trust.badge")}
              </p>
              <h2 className="mb-6 text-3xl font-bold text-[#1E3A5F] sm:text-4xl">
                {t("trust.title")}
              </h2>
              <p className="mb-10 text-lg text-[#1E3A5F]/70">
                {t("trust.subtitle")}
              </p>
            </AnimateOnScroll>

            {/* Features grid */}
            <div className="grid gap-6 sm:grid-cols-2">
              {features.map((feature, index) => {
                const Icon = featureIcons[index];
                return (
                  <AnimateOnScroll
                    key={index}
                    animation="scale-up"
                    mobileAnimation="fade-in"
                    staggerIndex={index}
                    staggerDelay={120}
                    duration={500}
                    easing="spring"
                  >
                    <div className="group -m-3 flex cursor-pointer gap-4 rounded-xl p-3 transition-all duration-300 hover:bg-[#F5F5F5] active:scale-[0.98]">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#38BDF8]/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#38BDF8]">
                        <Icon className="h-5 w-5 text-[#38BDF8] transition-colors group-hover:text-white" />
                      </div>
                      <div>
                        <h3 className="mb-1 font-semibold text-[#1E3A5F]">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-[#1E3A5F]/70">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </AnimateOnScroll>
                );
              })}
            </div>

            {/* CTA */}
            <AnimateOnScroll
              animation="fade-up"
              mobileAnimation="fade-up"
              delay={300}
              duration={500}
              easing="smooth"
            >
              <div className="mt-8">
                <a
                  href={siteConfig.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="gap-2 rounded-full bg-[#25D366] px-6 py-5 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-[#20BD5A] active:bg-[#1DA851]">
                    <Icons.whatsapp className="h-4 w-4" />
                    {t("trust.cta")}
                  </Button>
                </a>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </Container>
    </Section>
  );
}
