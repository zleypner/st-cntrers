"use client";

import { useTranslation } from "react-i18next";
import { siteConfig } from "@/config/site";
import { Icons, Container } from "@/components/ui";
import { Clock, MapPin, Phone } from "lucide-react";

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#E5E7EB] bg-white">
      <Container className="py-8 sm:py-12 md:py-16">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-2">
          {/* Left side - Info */}
          <div className="grid gap-8 sm:grid-cols-2">
            {/* Logo and description */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1E3A5F] font-bold text-white">
                  M
                </div>
                <span className="font-semibold text-[#1E3A5F]">
                  Dra. Marcela Contreras
                </span>
              </div>
              <p className="mb-6 max-w-xs text-sm text-[#1E3A5F]/70">
                {t("footer.description")}
              </p>
              <div className="flex gap-3">
                {siteConfig.links.instagram !== "[INSTAGRAM_URL]" && (
                  <a
                    href={siteConfig.links.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E7EB] text-[#1E3A5F]/70 transition-colors hover:border-[#38BDF8] hover:text-[#38BDF8]"
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
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E7EB] text-[#1E3A5F]/70 transition-colors hover:border-[#38BDF8] hover:text-[#38BDF8]"
                    aria-label="Facebook"
                  >
                    <Icons.facebook className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="mb-4 text-sm font-medium tracking-wider text-[#38BDF8] uppercase">
                {t("footer.contact")}
              </h4>
              <div className="space-y-3">
                {/* Call Now Button */}
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-center justify-center gap-2 rounded-lg bg-[#1E3A5F] px-4 py-3 text-sm font-medium text-white transition-all hover:bg-[#2D4A6F] hover:shadow-md"
                >
                  <Phone className="h-4 w-4" />
                  {t("footer.callNow")}
                </a>

                {/* WhatsApp Button */}
                <a
                  href={siteConfig.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-3 text-sm font-medium text-white transition-all hover:bg-[#20BD5A] hover:shadow-md"
                >
                  <Icons.whatsapp className="h-4 w-4" />
                  {t("footer.bookNow")}
                </a>

                {/* Location */}
                <div className="flex items-start gap-3 pt-2 text-sm text-[#1E3A5F]/70">
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#38BDF8]" />
                  <span>
                    {siteConfig.location.address}
                    <br />
                    {siteConfig.location.city}
                  </span>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div>
              <h4 className="mb-4 text-sm font-medium tracking-wider text-[#38BDF8] uppercase">
                {t("footer.hours")}
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-3 text-sm text-[#1E3A5F]/70">
                  <Clock className="h-4 w-4 text-[#38BDF8]" />
                  {t("contact.weekdays")} · {siteConfig.schedule.weekdays}
                </li>
                <li className="flex items-center gap-3 text-sm text-[#1E3A5F]/70">
                  <Clock className="h-4 w-4 text-[#38BDF8]" />
                  {t("contact.saturday")} · {siteConfig.schedule.saturday}
                </li>
                <li className="flex items-center gap-3 text-sm text-[#1E3A5F]/70">
                  <Clock className="h-4 w-4 text-[#38BDF8]" />
                  {t("footer.emergencies")}
                </li>
              </ul>
            </div>
          </div>

          {/* Right side - Map */}
          <div className="relative">
            <div className="flex h-full flex-col overflow-hidden rounded-xl border border-[#E5E7EB] bg-[#F5F5F5] sm:rounded-2xl">
              {/* Map image/embed area */}
              <div className="relative min-h-[180px] flex-1 sm:min-h-[200px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1965.5!2d-85.1614267!3d9.6371451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f9f6ef104dd7c61%3A0xa6428cf7858fd07!2sClinica%20Dental%20dra%20Marcela%20Contreras!5e0!3m2!1ses!2scr!4v1700000000000!5m2!1ses!2scr"
                  width="100%"
                  height="100%"
                  style={{ border: 0, position: "absolute", top: 0, left: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={t("footer.mapTitle")}
                />
              </div>
              {/* Navigation buttons */}
              <div className="flex gap-2 bg-white p-2 sm:p-3">
                <a
                  href={siteConfig.location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-[#F5F5F5] px-2 py-2.5 text-xs font-medium text-[#1E3A5F] transition-colors hover:bg-[#E5E7EB] sm:gap-2 sm:px-3 sm:text-sm"
                >
                  <MapPin className="h-3.5 w-3.5 text-[#EA4335] sm:h-4 sm:w-4" />
                  Google Maps
                </a>
                <a
                  href={siteConfig.location.wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-[#F5F5F5] px-2 py-2.5 text-xs font-medium text-[#1E3A5F] transition-colors hover:bg-[#E5E7EB] sm:gap-2 sm:px-3 sm:text-sm"
                >
                  <MapPin className="h-3.5 w-3.5 text-[#33CCFF] sm:h-4 sm:w-4" />
                  Waze
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-[#E5E7EB] pt-6 sm:mt-12 sm:gap-4 sm:pt-8 md:flex-row">
          <p className="text-sm text-[#9CA3AF]">
            &copy; {currentYear} {siteConfig.name}. {t("footer.copyright")}
          </p>
          <p className="text-sm text-[#9CA3AF]">Santa Teresa · Costa Rica</p>
        </div>
      </Container>
    </footer>
  );
}
