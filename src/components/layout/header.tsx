"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { siteConfig } from "@/config/site";
import { useScrollHeader } from "@/hooks";
import { Button, Icons, LanguageSwitcher } from "@/components/ui";
import { cn } from "@/lib/utils";

export function Header() {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isScrolled = useScrollHeader(50);

  const navigation = [
    { label: t("header.nav.treatments"), href: "#servicios" },
    { label: t("header.nav.whyUs"), href: "#por-que" },
    { label: t("header.nav.emergencies"), href: "#emergencias" },
    { label: t("header.nav.about"), href: "#sobre" },
    { label: t("header.nav.faq"), href: "#faq" },
  ];

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <a href="#inicio" className="skip-link">
        {t("accessibility.skipToContent")}
      </a>

      <header
        className={cn(
          "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/95 shadow-sm backdrop-blur-md"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link
              href="#inicio"
              className="flex items-center gap-3"
              onClick={handleNavClick}
            >
              {/* Circular M Logo */}
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#16A34A] text-xl font-bold text-white">
                M
              </div>
              <div className="hidden sm:block">
                <p className="text-lg leading-tight font-semibold text-[#17231C]">
                  Dra. Marcela Contreras
                </p>
                <p className="text-xs tracking-wider text-[#526158] uppercase">
                  Odontología Integral · Costa Rica
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-1 lg:flex">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                    "text-[#526158] hover:bg-[#F0FDF4] hover:text-[#17231C]"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA and Language Switcher */}
            <div className="hidden items-center gap-4 lg:flex">
              <LanguageSwitcher />
              <a
                href={siteConfig.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="gap-2 rounded-full bg-[#16A34A] px-6 text-white hover:bg-[#14532D]">
                  <Icons.messageCircle className="h-4 w-4" />
                  {t("header.cta")}
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="rounded-lg p-2 text-[#17231C] transition-colors hover:bg-[#F0FDF4] lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={
                mobileMenuOpen
                  ? t("accessibility.menuClose")
                  : t("accessibility.menuOpen")
              }
            >
              {mobileMenuOpen ? (
                <Icons.x className="h-6 w-6" />
              ) : (
                <Icons.menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-0 top-20 z-40 bg-white transition-all duration-300 lg:hidden",
            mobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-4 opacity-0"
          )}
        >
          <nav className="flex flex-col gap-1 p-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-4 py-3 text-base font-medium text-[#17231C] transition-colors hover:bg-[#F0FDF4]"
                onClick={handleNavClick}
              >
                {item.label}
              </Link>
            ))}

            <hr className="my-4 border-[#E5E7EB]" />

            {/* Mobile Language Switcher */}
            <div className="flex items-center justify-center gap-2 px-4 py-2">
              <LanguageSwitcher />
            </div>

            <hr className="my-4 border-[#E5E7EB]" />

            <a
              href={siteConfig.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavClick}
              className="px-4"
            >
              <Button className="w-full gap-2 rounded-full bg-[#16A34A] text-white hover:bg-[#14532D]">
                <Icons.messageCircle className="h-5 w-5" />
                {t("header.cta")}
              </Button>
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
