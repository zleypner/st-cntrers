"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/config/site";
import { content } from "@/config/content";
import { Icons } from "@/components/ui";
import { cn } from "@/lib/utils";

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [isContactVisible, setIsContactVisible] = useState(false);
  const t = content.es.whatsapp;

  useEffect(() => {
    // Mostrar botón después de 2 segundos
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Detectar cuando la sección Contact está visible
  useEffect(() => {
    const contactSection = document.getElementById("contacto");
    if (!contactSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsContactVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    observer.observe(contactSection);
    return () => observer.disconnect();
  }, []);

  // Mostrar tooltip después de 5 segundos, solo una vez
  useEffect(() => {
    if (isVisible && !isContactVisible) {
      const tooltipTimer = setTimeout(() => {
        setShowTooltip(true);
        // Ocultar tooltip después de 4 segundos
        setTimeout(() => setShowTooltip(false), 4000);
      }, 5000);

      return () => clearTimeout(tooltipTimer);
    }
  }, [isVisible, isContactVisible]);

  return (
    <div
      className={cn(
        "fixed right-6 bottom-6 z-50 transition-all duration-500",
        isVisible && !isContactVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-8 opacity-0"
      )}
    >
      {/* Tooltip */}
      <div
        className={cn(
          "absolute right-0 bottom-full mb-3 rounded-lg border border-[#38BDF8]/30 bg-white px-4 py-2 text-sm whitespace-nowrap text-[#1E3A5F] shadow-lg transition-all duration-300",
          showTooltip
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-2 opacity-0"
        )}
      >
        {t.tooltip}
        <div className="absolute right-6 -bottom-2 h-4 w-4 rotate-45 transform border-r border-b border-[#38BDF8]/30 bg-white" />
      </div>

      {/* Botón */}
      <a
        href={siteConfig.contact.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
        aria-label={t.ariaLabel}
      >
        <Icons.whatsapp className="h-7 w-7 text-white" />
      </a>
    </div>
  );
}
