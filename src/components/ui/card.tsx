import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-[#BBF7D0] bg-white p-6 shadow-sm",
        hover &&
          "transition-all duration-300 hover:-translate-y-1 hover:border-[#22C55E] hover:shadow-md",
        className
      )}
    >
      {children}
    </div>
  );
}

interface CardIconProps {
  children: ReactNode;
  className?: string;
}

export function CardIcon({ children, className }: CardIconProps) {
  return (
    <div
      className={cn(
        "mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#ECFDF5] text-[#16A34A]",
        className
      )}
    >
      {children}
    </div>
  );
}

interface CardTitleProps {
  children: ReactNode;
  className?: string;
}

export function CardTitle({ children, className }: CardTitleProps) {
  return (
    <h3 className={cn("mb-2 text-lg font-semibold text-[#17231C]", className)}>
      {children}
    </h3>
  );
}

interface CardDescriptionProps {
  children: ReactNode;
  className?: string;
}

export function CardDescription({ children, className }: CardDescriptionProps) {
  return (
    <p className={cn("leading-relaxed text-[#526158]", className)}>
      {children}
    </p>
  );
}
