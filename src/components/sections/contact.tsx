"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { siteConfig } from "@/config/site";
import { content } from "@/config/content";
import {
  Section,
  Container,
  SectionHeader,
  Button,
  Icons,
  AnimateOnScroll,
} from "@/components/ui";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "El nombre es requerido"),
  phone: z.string().min(8, "El teléfono es requerido"),
  email: z.string().email("Correo electrónico inválido"),
  treatment: z.string().optional(),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
  consent: z.boolean().refine((val) => val === true, {
    message: "Debes aceptar ser contactado",
  }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function Contact() {
  const t = content.es.contact;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

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

    // TODO: Implementar envío real del formulario
    // Simulación de envío
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
          <SectionHeader title={t.title} subtitle={t.subtitle} />
        </AnimateOnScroll>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Formulario */}
          <AnimateOnScroll animation="fade-up" delay={100}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="rounded-2xl border border-[#BBF7D0] bg-white p-6 shadow-sm md:p-8"
            >
              <div className="space-y-5">
                {/* Nombre */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-[#17231C]"
                  >
                    {t.form.name} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register("name")}
                    className={cn(
                      "w-full rounded-xl border bg-white px-4 py-3 text-[#17231C] placeholder-[#526158]/50 transition-colors",
                      errors.name
                        ? "border-red-500 focus:ring-red-500"
                        : "border-[#BBF7D0] focus:border-[#16A34A] focus:ring-[#16A34A]"
                    )}
                    placeholder="Tu nombre"
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
                      className="mb-2 block text-sm font-medium text-[#17231C]"
                    >
                      {t.form.phone} *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      {...register("phone")}
                      className={cn(
                        "w-full rounded-xl border bg-white px-4 py-3 text-[#17231C] placeholder-[#526158]/50 transition-colors",
                        errors.phone
                          ? "border-red-500 focus:ring-red-500"
                          : "border-[#BBF7D0] focus:border-[#16A34A] focus:ring-[#16A34A]"
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
                      className="mb-2 block text-sm font-medium text-[#17231C]"
                    >
                      {t.form.email} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register("email")}
                      className={cn(
                        "w-full rounded-xl border bg-white px-4 py-3 text-[#17231C] placeholder-[#526158]/50 transition-colors",
                        errors.email
                          ? "border-red-500 focus:ring-red-500"
                          : "border-[#BBF7D0] focus:border-[#16A34A] focus:ring-[#16A34A]"
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
                    className="mb-2 block text-sm font-medium text-[#17231C]"
                  >
                    {t.form.treatment}
                  </label>
                  <select
                    id="treatment"
                    {...register("treatment")}
                    className="w-full rounded-xl border border-[#BBF7D0] bg-white px-4 py-3 text-[#17231C] transition-colors focus:border-[#16A34A] focus:ring-[#16A34A]"
                  >
                    <option value="">{t.form.treatmentPlaceholder}</option>
                    {siteConfig.services.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.name}
                      </option>
                    ))}
                    <option value="other">Otro</option>
                  </select>
                </div>

                {/* Mensaje */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-[#17231C]"
                  >
                    {t.form.message} *
                  </label>
                  <textarea
                    id="message"
                    {...register("message")}
                    rows={4}
                    className={cn(
                      "w-full resize-none rounded-xl border bg-white px-4 py-3 text-[#17231C] placeholder-[#526158]/50 transition-colors",
                      errors.message
                        ? "border-red-500 focus:ring-red-500"
                        : "border-[#BBF7D0] focus:border-[#16A34A] focus:ring-[#16A34A]"
                    )}
                    placeholder={t.form.messagePlaceholder}
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
                    className="mt-1 h-4 w-4 rounded border-[#BBF7D0] text-[#16A34A] focus:ring-[#16A34A]"
                  />
                  <label htmlFor="consent" className="text-sm text-[#526158]">
                    {t.form.consent} *
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
                  className="w-full gap-2 bg-[#16A34A] text-white hover:bg-[#14532D]"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin">⏳</span>
                      {t.form.submitting}
                    </>
                  ) : (
                    <>
                      <Icons.calendar className="h-5 w-5" />
                      {t.form.submit}
                    </>
                  )}
                </Button>

                {/* Mensajes de estado */}
                {submitStatus === "success" && (
                  <div className="rounded-xl border border-[#BBF7D0] bg-[#ECFDF5] p-4 text-sm text-[#14532D]">
                    <Icons.check className="mr-2 inline h-4 w-4" />
                    {t.form.success}
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                    {t.form.error}
                  </div>
                )}
              </div>
            </form>
          </AnimateOnScroll>

          {/* Información de contacto */}
          <AnimateOnScroll animation="fade-up" delay={200}>
            <div className="space-y-8">
              {/* Tarjetas de contacto */}
              <div className="space-y-4">
                <a
                  href={siteConfig.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-[#BBF7D0] bg-white p-5 transition-all hover:border-[#22C55E] hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#25D366] text-white">
                    <Icons.whatsapp className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium text-[#17231C] transition-colors group-hover:text-[#16A34A]">
                      WhatsApp
                    </p>
                    <p className="text-sm text-[#526158]">
                      {siteConfig.contact.whatsapp}
                    </p>
                  </div>
                  <Icons.arrowRight className="ml-auto h-5 w-5 text-[#526158] transition-all group-hover:translate-x-1 group-hover:text-[#16A34A]" />
                </a>

                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="group flex items-center gap-4 rounded-xl border border-[#BBF7D0] bg-white p-5 transition-all hover:border-[#22C55E] hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#16A34A] text-white">
                    <Icons.phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium text-[#17231C] transition-colors group-hover:text-[#16A34A]">
                      Teléfono
                    </p>
                    <p className="text-sm text-[#526158]">
                      {siteConfig.contact.phone}
                    </p>
                  </div>
                  <Icons.arrowRight className="ml-auto h-5 w-5 text-[#526158] transition-all group-hover:translate-x-1 group-hover:text-[#16A34A]" />
                </a>

                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="group flex items-center gap-4 rounded-xl border border-[#BBF7D0] bg-white p-5 transition-all hover:border-[#22C55E] hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#16A34A] text-white">
                    <Icons.mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium text-[#17231C] transition-colors group-hover:text-[#16A34A]">
                      Correo electrónico
                    </p>
                    <p className="text-sm text-[#526158]">
                      {siteConfig.contact.email}
                    </p>
                  </div>
                  <Icons.arrowRight className="ml-auto h-5 w-5 text-[#526158] transition-all group-hover:translate-x-1 group-hover:text-[#16A34A]" />
                </a>
              </div>

              {/* Ubicación */}
              <div className="overflow-hidden rounded-xl border border-[#BBF7D0] bg-white">
                <div className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ECFDF5] text-[#16A34A]">
                      <Icons.mapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-medium text-[#17231C]">Ubicación</p>
                      <p className="mt-1 text-sm text-[#526158]">
                        {siteConfig.location.address}
                      </p>
                      <p className="text-sm text-[#526158]">
                        {siteConfig.location.city}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Placeholder para mapa */}
                <div className="flex h-48 items-center justify-center border-t border-[#BBF7D0] bg-[#F0FDF4]">
                  <div className="text-center text-[#526158]">
                    <Icons.mapPin className="mx-auto mb-2 h-8 w-8 text-[#16A34A]" />
                    <p className="text-sm">Google Maps</p>
                    <p className="text-xs">[Mapa pendiente]</p>
                  </div>
                </div>
              </div>

              {/* Horarios */}
              <div className="rounded-xl border border-[#BBF7D0] bg-white p-5">
                <div className="mb-4 flex items-center gap-3">
                  <Icons.clock className="h-5 w-5 text-[#16A34A]" />
                  <p className="font-medium text-[#17231C]">
                    Horario de atención
                  </p>
                </div>
                <div className="space-y-2 text-sm text-[#526158]">
                  <div className="flex justify-between">
                    <span>Lunes - Viernes</span>
                    <span className="font-medium text-[#17231C]">
                      {siteConfig.schedule.weekdays}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábado</span>
                    <span className="font-medium text-[#17231C]">
                      {siteConfig.schedule.saturday}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingo</span>
                    <span className="font-medium text-[#17231C]">
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
