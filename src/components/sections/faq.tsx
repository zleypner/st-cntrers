"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { siteConfig } from "@/config/site";
import {
  Section,
  Container,
  Icons,
  Button,
  ButtonGroup,
  AnimateOnScroll,
} from "@/components/ui";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

export function FAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = t("faq.items", { returnObjects: true }) as Array<{
    question: string;
    answer: string;
  }>;

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="faq" className="bg-[#F5F5F5]">
      <Container>
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Left column - Title */}
          <div className="lg:col-span-2">
            <AnimateOnScroll
              animation="blur-in"
              mobileAnimation="fade-in"
              duration={600}
              easing="smooth"
            >
              <p className="mb-4 text-sm font-medium tracking-wider text-[#38BDF8] uppercase">
                {t("faq.badge")}
              </p>
              <h2 className="mb-6 text-3xl font-bold text-[#1E3A5F] sm:text-4xl">
                {t("faq.title")}
              </h2>
              <p className="mb-6 text-[#1E3A5F]/70">{t("faq.subtitle")}</p>
            </AnimateOnScroll>

            <AnimateOnScroll
              animation="fade-up"
              mobileAnimation="fade-up"
              delay={200}
              duration={500}
              easing="smooth"
            >
              <ButtonGroup>
                <a
                  href={siteConfig.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="whatsapp">
                    <Icons.whatsapp />
                    {t("faq.cta")}
                  </Button>
                </a>
              </ButtonGroup>
            </AnimateOnScroll>
          </div>

          {/* Right column - Accordion */}
          <div className="space-y-3 lg:col-span-3">
            {faqs.map((faq, index) => (
              <AnimateOnScroll
                key={index}
                animation="slide-right"
                mobileAnimation="fade-in"
                staggerIndex={index}
                staggerDelay={80}
                duration={500}
                easing="snappy"
              >
                <div
                  className={cn(
                    "overflow-hidden rounded-2xl border transition-all duration-300",
                    openIndex === index
                      ? "border-[#38BDF8] bg-white shadow-md"
                      : "border-[#E5E7EB] bg-white hover:border-[#38BDF8]/50 hover:shadow-sm"
                  )}
                >
                  <button
                    type="button"
                    className="group flex w-full items-center justify-between p-5 text-left"
                    onClick={() => toggleItem(index)}
                    aria-expanded={openIndex === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span
                      className={cn(
                        "pr-4 font-medium transition-colors duration-300",
                        openIndex === index
                          ? "text-[#38BDF8]"
                          : "text-[#1E3A5F] group-hover:text-[#38BDF8]"
                      )}
                    >
                      {faq.question}
                    </span>
                    <div
                      className={cn(
                        "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300",
                        openIndex === index
                          ? "rotate-180 bg-[#38BDF8] text-white"
                          : "bg-[#F5F5F5] text-[#1E3A5F]/70 group-hover:bg-[#38BDF8]/10"
                      )}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </button>

                  <div
                    id={`faq-answer-${index}`}
                    className={cn(
                      "grid transition-all duration-300 ease-out",
                      openIndex === index
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5 leading-relaxed text-[#1E3A5F]/70">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
