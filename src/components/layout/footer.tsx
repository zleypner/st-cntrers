"use client";

import { siteConfig } from "@/config/site";
import { Icons, Container } from "@/components/ui";
import { Clock, MapPin, Phone, Mail, ExternalLink } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#E5E7EB] bg-white">
      <Container className="py-12 md:py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left side - Info */}
          <div className="grid gap-8 sm:grid-cols-2">
            {/* Logo and description */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#16A34A] font-bold text-white">
                  M
                </div>
                <span className="font-semibold text-[#17231C]">
                  Dra. Marcela Contreras
                </span>
              </div>
              <p className="mb-6 max-w-xs text-sm text-[#526158]">
                Odontología integral, holística y de emergencias en Costa Rica.
                Pacientes tratados como personas, nunca como casos.
              </p>
              <div className="flex gap-3">
                {siteConfig.links.instagram !== "[INSTAGRAM_URL]" && (
                  <a
                    href={siteConfig.links.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E7EB] text-[#526158] transition-colors hover:border-[#16A34A] hover:text-[#16A34A]"
                    aria-label="Instagram"
                  >
                    <Icons.instagram className="h-5 w-5" />
                  </a>
                )}
                {siteConfig.links.facebook !== "[FACEBOOK_URL]" && (
                  <a
                    href={siteConfig.links.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E7EB] text-[#526158] transition-colors hover:border-[#16A34A] hover:text-[#16A34A]"
                    aria-label="Facebook"
                  >
                    <Icons.facebook className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="mb-4 text-sm font-medium tracking-wider text-[#16A34A] uppercase">
                Contacto
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="flex items-center gap-3 text-sm text-[#526158] transition-colors hover:text-[#17231C]"
                  >
                    <Phone className="h-4 w-4 text-[#16A34A]" />
                    {siteConfig.contact.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="flex items-center gap-3 text-sm text-[#526158] transition-colors hover:text-[#17231C]"
                  >
                    <Mail className="h-4 w-4 text-[#16A34A]" />
                    {siteConfig.contact.email}
                  </a>
                </li>
                <li className="flex items-start gap-3 text-sm text-[#526158]">
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#16A34A]" />
                  <span>
                    {siteConfig.location.address}
                    <br />
                    {siteConfig.location.city}
                  </span>
                </li>
              </ul>
            </div>

            {/* Hours */}
            <div>
              <h4 className="mb-4 text-sm font-medium tracking-wider text-[#16A34A] uppercase">
                Horarios
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-3 text-sm text-[#526158]">
                  <Clock className="h-4 w-4 text-[#16A34A]" />
                  Lunes - Viernes · {siteConfig.schedule.weekdays}
                </li>
                <li className="flex items-center gap-3 text-sm text-[#526158]">
                  <Clock className="h-4 w-4 text-[#16A34A]" />
                  Sábado · {siteConfig.schedule.saturday}
                </li>
                <li className="flex items-center gap-3 text-sm text-[#526158]">
                  <Clock className="h-4 w-4 text-[#16A34A]" />
                  Emergencias · Mismo día
                </li>
              </ul>
            </div>
          </div>

          {/* Right side - Map */}
          <div className="relative">
            <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#E5E7EB] bg-[#F3F4F6]">
              {/* Map image/embed area */}
              <div className="relative min-h-[200px] flex-1">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1965.5!2d-85.1614267!3d9.6371451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f9f6ef104dd7c61%3A0xa6428cf7858fd07!2sClinica%20Dental%20dra%20Marcela%20Contreras!5e0!3m2!1ses!2scr!4v1700000000000!5m2!1ses!2scr"
                  width="100%"
                  height="100%"
                  style={{ border: 0, position: "absolute", top: 0, left: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de la clínica"
                />
              </div>
              {/* Navigation buttons */}
              <div className="flex gap-2 bg-white p-3">
                <a
                  href={siteConfig.location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#F3F4F6] px-3 py-2 text-sm font-medium text-[#17231C] transition-colors hover:bg-[#E5E7EB]"
                >
                  <MapPin className="h-4 w-4 text-[#EA4335]" />
                  Google Maps
                </a>
                <a
                  href={siteConfig.location.wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#F3F4F6] px-3 py-2 text-sm font-medium text-[#17231C] transition-colors hover:bg-[#E5E7EB]"
                >
                  <MapPin className="h-4 w-4 text-[#33CCFF]" />
                  Waze
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#E5E7EB] pt-8 sm:flex-row">
          <p className="text-sm text-[#9CA3AF]">
            &copy; {currentYear} {siteConfig.name}. Todos los derechos
            reservados.
          </p>
          <p className="text-sm text-[#9CA3AF]">San José · Costa Rica</p>
        </div>
      </Container>
    </footer>
  );
}
