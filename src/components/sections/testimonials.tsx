"use client";

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

export function Testimonials() {
  const { t } = useTranslation();
  const testimonials = t("testimonials.items", {
    returnObjects: true,
  }) as Array<{
    text: string;
    name: string;
    role: string;
  }>;

  return (
    <Section id="testimonios" className="overflow-hidden bg-white">
      <Container>
        <AnimateOnScroll
          animation="blur-in"
          mobileAnimation="fade-in"
          duration={600}
          easing="smooth"
        >
          <p className="mb-4 text-sm font-medium tracking-wider text-[#38BDF8] uppercase">
            {t("testimonials.badge")}
          </p>
          <h2 className="mb-12 max-w-lg text-3xl font-bold text-[#1E3A5F] sm:text-4xl">
            {t("testimonials.title")}
          </h2>
        </AnimateOnScroll>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <AnimateOnScroll
              key={index}
              animation="flip-up"
              mobileAnimation="fade-up"
              staggerIndex={index}
              staggerDelay={150}
              duration={600}
              easing="spring"
            >
              <div className="group h-full cursor-pointer rounded-2xl border border-[#E5E7EB] bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#38BDF8]/50 hover:shadow-xl active:scale-[0.98]">
                {/* Stars with stagger animation */}
                <div className="mb-4 flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Icons.star
                      key={i}
                      className="h-5 w-5 fill-[#38BDF8] text-[#38BDF8] transition-transform duration-300 group-hover:scale-110"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="mb-6 leading-relaxed text-[#1E3A5F]/70 transition-colors duration-300 group-hover:text-[#1E3A5F]">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Author */}
                <div className="border-t border-[#E5E7EB] pt-4 transition-colors duration-300 group-hover:border-[#38BDF8]/30">
                  <p className="font-semibold text-[#1E3A5F]">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-[#38BDF8]">{testimonial.role}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Google Reviews Banner */}
        <AnimateOnScroll
          animation="rise-up"
          mobileAnimation="fade-up"
          delay={300}
          duration={700}
          easing="elastic"
        >
          <div className="relative mt-16 overflow-hidden rounded-2xl border border-[#E5E7EB] bg-gradient-to-r from-white to-[#F5F5F5] p-8 transition-shadow duration-300 hover:shadow-lg">
            {/* Floating decorative element */}
            <Floating amplitude={5} duration={4} delay={0}>
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-[#38BDF8]/5 blur-2xl" />
            </Floating>

            <div className="relative grid items-center gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-2 text-3xl font-bold text-[#1E3A5F] sm:text-4xl">
                  {t("testimonials.bannerTitle")}
                </h3>
                <p className="text-[#1E3A5F]/70">
                  {t("testimonials.bannerDescription")}
                </p>
              </div>
              <div className="hidden justify-end md:flex">
                <div className="flex h-32 w-48 items-center justify-center rounded-xl bg-gradient-to-br from-[#F5F5F5] to-[#E5E7EB] transition-transform duration-300 hover:scale-105">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Icons.star
                        key={i}
                        className="h-8 w-8 fill-[#38BDF8] text-[#38BDF8]"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
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
          <div className="mt-12 text-center">
            <a
              href={siteConfig.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="gap-2 rounded-full bg-[#25D366] px-8 py-6 text-base font-semibold text-white shadow-lg transition-colors hover:bg-[#20BD5A] active:bg-[#1DA851]">
                <Icons.whatsapp className="h-5 w-5" />
                {t("testimonials.ctaButton")}
              </Button>
            </a>
          </div>
        </AnimateOnScroll>
      </Container>
    </Section>
  );
}
