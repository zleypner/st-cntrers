"use client";

import { useTranslation } from "react-i18next";
import {
  Section,
  Container,
  SectionHeader,
  Icons,
  AnimateOnScroll,
} from "@/components/ui";

const stepIcons = [
  Icons.calendar,
  Icons.user,
  Icons.messageCircle,
  Icons.heart,
];

export function Process() {
  const { t } = useTranslation();
  const steps = t("process.steps", { returnObjects: true }) as Array<{
    number: number;
    title: string;
    description: string;
  }>;

  return (
    <Section id="proceso" background="white">
      <Container>
        <AnimateOnScroll animation="fade-up">
          <SectionHeader title={t("process.title")} />
        </AnimateOnScroll>

        <div className="relative">
          {/* Línea conectora (visible en desktop) */}
          <div className="absolute top-24 right-[10%] left-[10%] hidden h-0.5 bg-gradient-to-r from-[#38BDF8]/30 via-[#38BDF8] to-[#38BDF8]/30 lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = stepIcons[index];
              return (
                <AnimateOnScroll
                  key={index}
                  animation="fade-up"
                  delay={index * 100}
                >
                  <div className="relative text-center">
                    {/* Número y círculo */}
                    <div className="relative mx-auto mb-6 h-20 w-20">
                      <div className="absolute inset-0 rounded-full border-2 border-[#38BDF8]/30 bg-[#38BDF8]/5" />
                      <div className="absolute inset-2 flex items-center justify-center rounded-full bg-white shadow-sm">
                        <Icon className="h-8 w-8 text-[#38BDF8]" />
                      </div>
                      {/* Número */}
                      <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#38BDF8] text-sm font-bold text-white shadow-lg">
                        {step.number}
                      </div>
                    </div>

                    {/* Contenido */}
                    <h3 className="mb-2 text-lg font-semibold text-[#1E3A5F]">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#1E3A5F]/70">
                      {step.description}
                    </p>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
