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
            <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-[#E5E7EB] bg-[#F3F4F6] lg:aspect-auto lg:h-full">
              {/* Map placeholder */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <MapPin className="mb-4 h-12 w-12 text-[#16A34A]/50" />
                <p className="text-[#526158]">Google Maps</p>
                <p className="text-sm text-[#9CA3AF]">[Mapa pendiente]</p>
              </div>
            </div>
            {/* Open in Maps link */}
            <a
              href={siteConfig.location.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 inline-flex items-center gap-2 rounded-lg border border-[#E5E7EB] bg-white px-3 py-1.5 text-sm text-[#526158] shadow-sm transition-colors hover:text-[#17231C]"
            >
              Abrir en Maps
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
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
