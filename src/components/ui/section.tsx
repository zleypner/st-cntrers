import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "soft" | "lighter";
}

export function Section({
  children,
  className,
  id,
  background = "white",
}: SectionProps) {
  const bgClasses = {
    white: "bg-white",
    soft: "bg-[#F5F5F5]",
    lighter: "bg-[#FAFAFA]",
  };

  return (
    <section
      id={id}
      className={cn("py-16 md:py-24", bgClasses[background], className)}
    >
      {children}
    </section>
  );
}

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
}

export function Container({
  children,
  className,
  size = "default",
}: ContainerProps) {
  const sizeClasses = {
    narrow: "max-w-4xl",
    default: "max-w-6xl",
    wide: "max-w-7xl",
  };

  return (
    <div
      className={cn(
        "mx-auto px-4 sm:px-6 lg:px-8",
        sizeClasses[size],
        className
      )}
    >
      {children}
    </div>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  title,
  subtitle,
  className,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      <h2 className="text-3xl font-bold tracking-tight text-[#1E3A5F] sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-lg text-[#1E3A5F]/70">
          {subtitle}
        </p>
      )}
    </div>
  );
}
