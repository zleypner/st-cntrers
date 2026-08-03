import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

import { cn } from "@/lib/utils";

/**
 * Premium Button Design System
 * Inspired by Apple, Stripe, Linear, Vercel, Raycast
 *
 * Specifications:
 * - Height: 56px (fixed)
 * - Padding: 16px vertical, 32px horizontal
 * - Border Radius: 14px
 * - Font: 16px, weight 600, letter-spacing -0.02em
 * - Icon: 18px with 10px gap
 * - Hover: translateY(-2px), scale(1.02), shadow
 * - Active: translateY(0), scale(0.98)
 * - Transition: 300ms ease-out
 */

const buttonVariants = cva(
  // Base styles - Premium Design System
  [
    // Layout
    "inline-flex items-center justify-center gap-[10px]",
    // Sizing - Fixed height 56px, padding 16px/32px
    "h-14 px-8 py-4",
    // Min width for proper CTA presence
    "min-w-[220px] w-fit",
    // Typography - 16px, 600 weight, -0.02em tracking
    "text-base font-semibold tracking-[-0.02em] leading-6 text-center whitespace-nowrap",
    // Border radius - 14px modern premium
    "rounded-[14px]",
    // Transitions - 300ms ease-out for elegance
    "transition-all duration-300 ease-out",
    // Focus state - Modern ring
    "outline-none focus-visible:ring-[4px] focus-visible:ring-[rgba(56,189,248,0.18)]",
    // Disabled state
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:scale-100 disabled:hover:shadow-none",
    // Icon sizing
    "[&_svg]:w-[18px] [&_svg]:h-[18px] [&_svg]:shrink-0",
    // Selection
    "select-none",
  ].join(" "),
  {
    variants: {
      variant: {
        // Primary WhatsApp - Green
        whatsapp: [
          "bg-[#25D366] text-white",
          "hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-[#20BD5A]",
          "hover:shadow-[0_12px_30px_rgba(37,211,102,0.25)]",
          "active:translate-y-0 active:scale-[0.98] active:bg-[#1DA851]",
        ].join(" "),
        // Primary Blue - Main CTA
        primary: [
          "bg-[#38BDF8] text-white",
          "hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-[#0EA5E9]",
          "hover:shadow-[0_12px_30px_rgba(56,189,248,0.25)]",
          "active:translate-y-0 active:scale-[0.98] active:bg-[#0284C7]",
        ].join(" "),
        // Secondary - Navy outline style
        secondary: [
          "bg-[#1E3A5F] text-white",
          "hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-[#2D4A6F]",
          "hover:shadow-[0_12px_30px_rgba(30,58,95,0.25)]",
          "active:translate-y-0 active:scale-[0.98] active:bg-[#162D4A]",
        ].join(" "),
        // Emergency - Red urgent
        emergency: [
          "bg-[#EF4444] text-white",
          "hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-[#DC2626]",
          "hover:shadow-[0_12px_30px_rgba(239,68,68,0.25)]",
          "active:translate-y-0 active:scale-[0.98] active:bg-[#B91C1C]",
        ].join(" "),
        // Ghost - Transparent with hover
        ghost: [
          "bg-transparent text-[#1E3A5F]",
          "hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-[#F5F5F5]",
          "hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)]",
          "active:translate-y-0 active:scale-[0.98] active:bg-[#E5E7EB]",
        ].join(" "),
        // Outline - Border style
        outline: [
          "bg-white text-[#1E3A5F] border-2 border-[#E5E7EB]",
          "hover:-translate-y-0.5 hover:scale-[1.02] hover:border-[#38BDF8] hover:text-[#38BDF8]",
          "hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)]",
          "active:translate-y-0 active:scale-[0.98]",
        ].join(" "),
      },
      size: {
        // Default - Full CTA size (56px height)
        default: "h-14 px-8 min-w-[220px]",
        // Secondary - Slightly smaller min-width
        secondary: "h-14 px-8 min-w-[180px]",
        // Compact - For header/nav (still 56px height but less padding)
        compact: "h-14 px-6 min-w-[160px]",
        // Full width - For forms
        full: "h-14 px-8 w-full min-w-0",
        // Icon only - Square button
        icon: "h-14 w-14 min-w-0 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <ButtonPrimitive
        ref={ref}
        data-slot="button"
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

/**
 * ButtonMicrocopy - Consistent microcopy styling beneath CTAs
 * Font: 14px, weight 400, 60% opacity, 20px line height
 * Spacing: 10px from button
 */
function ButtonMicrocopy({
  children,
  className,
  align = "center",
}: {
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center" | "right";
}) {
  return (
    <p
      className={cn(
        "mt-[10px] text-sm leading-5 font-normal text-[#1E3A5F]/60",
        align === "center" && "text-center",
        align === "left" && "text-left",
        align === "right" && "text-right",
        className
      )}
    >
      {children}
    </p>
  );
}

/**
 * ButtonGroup - Wrapper for CTA with proper spacing
 * Spacing: 24px from content above
 */
function ButtonGroup({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("mt-6", className)}>{children}</div>;
}

export { Button, ButtonMicrocopy, ButtonGroup, buttonVariants };
