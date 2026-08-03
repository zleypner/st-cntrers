"use client";

import { useState, useMemo } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { siteConfig } from "@/config/site";
import {
  Section,
  Container,
  SectionHeader,
  Button,
  Icons,
  AnimateOnScroll,
} from "@/components/ui";
import { cn } from "@/lib/utils";

type ContactFormData = {
  name: string;
  phone: string;
  email: string;
  treatment?: string;
  message: string;
  consent: boolean;
};

export function Contact() {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const contactSchema = useMemo(
    () =>
      z.object({
        name: z.string().min(2, t("contact.form.nameRequired")),
        phone: z.string().min(8, t("contact.form.phoneRequired")),
        email: z.string().email(t("contact.form.emailInvalid")),
        treatment: z.string().optional(),
        message: z.string().min(10, t("contact.form.messageRequired")),
        consent: z.boolean().refine((val) => val === true, {
          message: t("contact.form.consentRequired"),
        }),
      }),
    [t]
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form data:", data);
      setSubmitStatus("success");
      reset();
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contacto" background="soft">
      <Container>
        <AnimateOnScroll animation="fade-up">
          <SectionHeader
            title={t("contact.title")}
            subtitle={t("contact.subtitle")}
          />
        </AnimateOnScroll>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Formulario */}
          <AnimateOnScroll animation="fade-up" delay={100}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="rounded-2xl border border-[#38BDF8]/30 bg-white p-6 shadow-sm md:p-8"
            >
              <div className="space-y-5">
                {/* Nombre */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-[#1E3A5F]"
                  >
                    {t("contact.form.name")} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register("name")}
                    className={cn(
                      "w-full rounded-xl border bg-white px-4 py-3 text-[#1E3A5F] placeholder-[#1E3A5F]/50 transition-colors",
                      errors.name
                        ? "border-red-500 focus:ring-red-500"
                        : "border-[#38BDF8]/30 focus:border-[#38BDF8] focus:ring-[#38BDF8]"
                    )}
                    placeholder={t("contact.form.namePlaceholder")}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Teléfono y Email */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-[#1E3A5F]"
                    >
                      {t("contact.form.phone")} *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      {...register("phone")}
                      className={cn(
                        "w-full rounded-xl border bg-white px-4 py-3 text-[#1E3A5F] placeholder-[#1E3A5F]/50 transition-colors",
                        errors.phone
                          ? "border-red-500 focus:ring-red-500"
                          : "border-[#38BDF8]/30 focus:border-[#38BDF8] focus:ring-[#38BDF8]"
                      )}
                      placeholder="+506 0000 0000"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-[#1E3A5F]"
                    >
                      {t("contact.form.email")} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register("email")}
                      className={cn(
                        "w-full rounded-xl border bg-white px-4 py-3 text-[#1E3A5F] placeholder-[#1E3A5F]/50 transition-colors",
                        errors.email
                          ? "border-red-500 focus:ring-red-500"
                          : "border-[#38BDF8]/30 focus:border-[#38BDF8] focus:ring-[#38BDF8]"
                      )}
                      placeholder="tu@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Tratamiento */}
                <div>
                  <label
                    htmlFor="treatment"
                    className="mb-2 block text-sm font-medium text-[#1E3A5F]"
                  >
                    {t("contact.form.treatment")}
                  </label>
                  <select
                    id="treatment"
                    {...register("treatment")}
                    className="w-full rounded-xl border border-[#38BDF8]/30 bg-white px-4 py-3 text-[#1E3A5F] transition-colors focus:border-[#38BDF8] focus:ring-[#38BDF8]"
                  >
                    <option value="">
                      {t("contact.form.treatmentPlaceholder")}
                    </option>
                    {siteConfig.services.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.name}
                      </option>
                    ))}
                    <option value="other">
                      {t("contact.form.treatmentOther")}
                    </option>
                  </select>
                </div>

                {/* Mensaje */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-[#1E3A5F]"
                  >
                    {t("contact.form.message")} *
                  </label>
                  <textarea
                    id="message"
                    {...register("message")}
                    rows={4}
                    className={cn(
                      "w-full resize-none rounded-xl border bg-white px-4 py-3 text-[#1E3A5F] placeholder-[#1E3A5F]/50 transition-colors",
                      errors.message
                        ? "border-red-500 focus:ring-red-500"
                        : "border-[#38BDF8]/30 focus:border-[#38BDF8] focus:ring-[#38BDF8]"
                    )}
                    placeholder={t("contact.form.messagePlaceholder")}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Consentimiento */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consent"
                    {...register("consent")}
                    className="mt-1 h-4 w-4 rounded border-[#38BDF8]/30 text-[#38BDF8] focus:ring-[#38BDF8]"
                  />
                  <label
                    htmlFor="consent"
                    className="text-sm text-[#1E3A5F]/70"
                  >
                    {t("contact.form.consent")} *
                  </label>
                </div>
                {errors.consent && (
                  <p className="text-sm text-red-500">
                    {errors.consent.message}
                  </p>
                )}

                {/* Botón de envío */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full gap-2 bg-[#38BDF8] text-white hover:bg-[#0EA5E9]"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin">⏳</span>
                      {t("contact.form.submitting")}
                    </>
                  ) : (
                    <>
                      <Icons.calendar className="h-5 w-5" />
                      {t("contact.form.submit")}
                    </>
                  )}
                </Button>

                {/* Mensajes de estado */}
                {submitStatus === "success" && (
                  <div className="rounded-xl border border-[#38BDF8]/30 bg-[#38BDF8]/10 p-4 text-sm text-[#1E3A5F]">
                    <Icons.check className="mr-2 inline h-4 w-4" />
                    {t("contact.form.success")}
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                    {t("contact.form.error")}
                  </div>
                )}
              </div>
            </form>
          </AnimateOnScroll>

          {/* Información de contacto */}
          <AnimateOnScroll animation="fade-up" delay={200}>
            <div className="space-y-8">
              {/* CTA Buttons */}
              <div className="grid gap-4 sm:grid-cols-2">
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="group flex items-center justify-center gap-3 rounded-xl bg-[#1E3A5F] px-6 py-5 text-white shadow-lg transition-all hover:scale-[1.02] hover:bg-[#2D4A6F] hover:shadow-xl active:scale-[0.98]"
                >
                  <Icons.phone className="h-6 w-6" />
                  <div className="text-left">
                    <p className="text-lg font-semibold">
                      {t("contact.callNow")}
                    </p>
                    <p className="text-sm text-white/80">
                      {siteConfig.contact.phone}
                    </p>
                  </div>
                </a>

                <a
                  href={siteConfig.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 rounded-xl bg-[#25D366] px-6 py-5 text-white shadow-lg transition-all hover:scale-[1.02] hover:bg-[#20BD5A] hover:shadow-xl active:scale-[0.98]"
                >
                  <Icons.whatsapp className="h-6 w-6" />
                  <div className="text-left">
                    <p className="text-lg font-semibold">WhatsApp</p>
                    <p className="text-sm text-white/80">
                      {t("contact.sendMessage")}
                    </p>
                  </div>
                </a>
              </div>

              {/* Info Cards */}
              <div className="flex items-center gap-4 rounded-xl border border-[#38BDF8]/30 bg-white p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#38BDF8]/10 text-[#38BDF8]">
                  <Icons.shield className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-medium text-[#1E3A5F]">
                    {t("contact.professionalCode")}
                  </p>
                  <p className="text-sm text-[#1E3A5F]/70">
                    {siteConfig.doctorCode}
                  </p>
                </div>
              </div>

              {/* Ubicación */}
              <div className="overflow-hidden rounded-xl border border-[#38BDF8]/30 bg-white">
                <div className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#38BDF8]/10 text-[#38BDF8]">
                      <Icons.mapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-medium text-[#1E3A5F]">
                        {t("contact.location")}
                      </p>
                      <p className="mt-1 text-sm text-[#1E3A5F]/70">
                        {siteConfig.location.address}
                      </p>
                      <p className="text-sm text-[#1E3A5F]/70">
                        {siteConfig.location.city},{" "}
                        {siteConfig.location.country}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Botones de navegación */}
                <div className="flex gap-3 border-t border-[#38BDF8]/30 bg-[#F5F5F5] p-4">
                  <a
                    href={siteConfig.location.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-medium text-[#1E3A5F] shadow-sm transition-all hover:shadow-md"
                  >
                    <Icons.googleMaps className="h-5 w-5 text-[#EA4335]" />
                    Google Maps
                  </a>
                  <a
                    href={siteConfig.location.wazeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-medium text-[#1E3A5F] shadow-sm transition-all hover:shadow-md"
                  >
                    <Icons.waze className="h-5 w-5 text-[#33CCFF]" />
                    Waze
                  </a>
                </div>
              </div>

              {/* Horarios */}
              <div className="rounded-xl border border-[#38BDF8]/30 bg-white p-5">
                <div className="mb-4 flex items-center gap-3">
                  <Icons.clock className="h-5 w-5 text-[#38BDF8]" />
                  <p className="font-medium text-[#1E3A5F]">
                    {t("contact.schedule")}
                  </p>
                </div>
                <div className="space-y-2 text-sm text-[#1E3A5F]/70">
                  <div className="flex justify-between">
                    <span>{t("contact.weekdays")}</span>
                    <span className="font-medium text-[#1E3A5F]">
                      {siteConfig.schedule.weekdays}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t("contact.saturday")}</span>
                    <span className="font-medium text-[#1E3A5F]">
                      {siteConfig.schedule.saturday}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t("contact.sunday")}</span>
                    <span className="font-medium text-[#1E3A5F]">
                      {siteConfig.schedule.sunday}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </Container>
    </Section>
  );
}
