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
            ? "bg-[#16A34A] text-white"
            : "text-[#526158] hover:bg-[#F0FDF4] hover:text-[#17231C]"
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
            ? "bg-[#16A34A] text-white"
            : "text-[#526158] hover:bg-[#F0FDF4] hover:text-[#17231C]"
        )}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}
