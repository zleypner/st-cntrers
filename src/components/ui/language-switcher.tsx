"use client";

import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  className?: string;
}

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={cn("flex items-center gap-1", className)}>
      <button
        type="button"
        onClick={() => changeLanguage("es")}
        className={cn(
          "rounded-md px-2 py-1 text-sm font-medium transition-colors",
          i18n.language === "es"
            ? "bg-[#1E3A5F] text-white"
            : "text-[#1E3A5F]/70 hover:bg-[#F5F5F5] hover:text-[#1E3A5F]"
        )}
        aria-label="Español"
      >
        ES
      </button>
      <span className="text-[#D1D5DB]">|</span>
      <button
        type="button"
        onClick={() => changeLanguage("en")}
        className={cn(
          "rounded-md px-2 py-1 text-sm font-medium transition-colors",
          i18n.language === "en"
            ? "bg-[#1E3A5F] text-white"
            : "text-[#1E3A5F]/70 hover:bg-[#F5F5F5] hover:text-[#1E3A5F]"
        )}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}
