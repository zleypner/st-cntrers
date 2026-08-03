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
  Parallax,
  Button,
} from "@/components/ui";

export function About() {
  const { t } = useTranslation();

  return (
    <Section
      id="sobre"
      className="overflow-hidden bg-gradient-to-b from-[#F9FAFB] to-white"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <AnimateOnScroll
            animation="swing-in"
            mobileAnimation="scale"
            duration={800}
            easing="spring"
          >
            <div className="relative">
              <Parallax speed={0.3} direction="up">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-lg transition-shadow duration-500 hover:shadow-2xl">
                  <Image
                    src="/assets/dentist/drax3.webp"
                    alt={t("about.imageAlt")}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </Parallax>

              {/* Decorative elements */}
              <Floating amplitude={8} duration={5} delay={0}>
                <div className="absolute -top-6 -right-6 hidden h-24 w-24 rounded-2xl bg-[#38BDF8]/10 lg:block" />
              </Floating>
              <Floating amplitude={6} duration={4} delay={0.5}>
                <div className="absolute -bottom-4 -left-4 hidden h-16 w-16 rounded-xl bg-[#38BDF8] lg:block" />
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
                {t("about.badge")}
              </p>

              <h2 className="mb-4 text-4xl font-bold text-[#1E3A5F] sm:text-5xl">
                {t("about.name")}
              </h2>

              <p className="mb-8 text-sm tracking-wider text-[#1E3A5F]/70 uppercase">
                {t("about.credentials")}
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll
              animation="fade-up"
              mobileAnimation="fade-in"
              delay={150}
              duration={500}
              easing="smooth"
            >
              <div className="mb-8 space-y-4 text-[#1E3A5F]/70">
                {(
                  t("about.paragraphs", { returnObjects: true }) as string[]
                ).map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </AnimateOnScroll>

            {/* Quote */}
            <AnimateOnScroll
              animation="rotate-in"
              mobileAnimation="fade-up"
              delay={300}
              duration={600}
              easing="spring"
            >
              <div className="group rounded-2xl border border-[#38BDF8]/30 bg-[#38BDF8]/5 p-6 transition-all duration-300 hover:border-[#38BDF8]/50 hover:shadow-lg">
                <blockquote className="mb-3 text-xl font-medium text-[#1E3A5F] transition-colors duration-300 group-hover:text-[#38BDF8]">
                  &ldquo;{t("about.quote")}&rdquo;
                </blockquote>
                <p className="text-sm text-[#1E3A5F]/70">
                  {t("about.quoteAttribution")}
                </p>
              </div>
            </AnimateOnScroll>

            {/* CTA */}
            <AnimateOnScroll
              animation="fade-up"
              mobileAnimation="fade-up"
              delay={400}
              duration={500}
              easing="smooth"
            >
              <div className="mt-8">
                <p className="mb-4 text-sm font-medium text-[#1E3A5F]/80 sm:text-base">
                  {t("about.ctaPreText")}
                </p>
                <a
                  href={siteConfig.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="gap-3 rounded-full bg-[#25D366] px-8 py-6 text-base font-bold text-white shadow-xl transition-all hover:scale-105 hover:bg-[#20BD5A] hover:shadow-2xl active:scale-100 active:bg-[#1DA851] sm:px-10 sm:py-7 sm:text-lg">
                    <Icons.whatsapp className="h-5 w-5 sm:h-6 sm:w-6" />
                    {t("about.cta")}
                  </Button>
                </a>
                <p className="mt-3 text-xs text-[#1E3A5F]/60">
                  {t("about.ctaMicrocopy")}
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </Container>
    </Section>
  );
}
