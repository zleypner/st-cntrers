import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

import { cn } from "@/lib/utils";

/**
 * Premium Button Design System
 * Inspired by Apple, Mayo Clinic, Four Seasons
 *
 * Mobile-First Specifications:
 * - Height: 48px (fixed, meets 44px touch target)
 * - Padding: 24px horizontal
 * - Border Radius: 9999px (pill shape)
 * - Font: 15px, weight 600 (primary) / 500 (secondary)
 * - Icon: 18px with 8px gap
 * - Transition: 200ms ease-out
 */

const buttonVariants = cva(
  // Base styles - Premium Design System
  [
    // Layout - centered content with consistent gap
    "inline-flex items-center justify-center gap-2",
    // Sizing - Fixed height 48px for accessibility
    "h-12 px-6",
    // Typography - 15px, consistent across all buttons
    "text-[15px] font-semibold leading-none text-center whitespace-nowrap",
    // Border radius - Pill shape for premium feel
    "rounded-full",
    // Transitions - Smooth and elegant
    "transition-all duration-200 ease-out",
    // Focus state - Modern ring
    "outline-none focus-visible:ring-[3px] focus-visible:ring-offset-2",
    // Disabled state
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:scale-100 disabled:hover:shadow-none",
    // Icon sizing - 18px consistent
    "[&_svg]:w-[18px] [&_svg]:h-[18px] [&_svg]:shrink-0",
    // Selection
    "select-none",
    // Cursor
    "cursor-pointer",
  ].join(" "),
  {
    variants: {
      variant: {
        // Primary WhatsApp - Green
        whatsapp: [
          "bg-[#25D366] text-white font-semibold",
          "focus-visible:ring-[#25D366]/30",
          "hover:bg-[#20BD5A] hover:shadow-lg hover:shadow-[#25D366]/20",
          "active:scale-[0.98] active:bg-[#1DA851]",
        ].join(" "),
        // Primary Blue - Main CTA
        primary: [
          "bg-[#38BDF8] text-white font-semibold",
          "focus-visible:ring-[#38BDF8]/30",
          "hover:bg-[#0EA5E9] hover:shadow-lg hover:shadow-[#38BDF8]/20",
          "active:scale-[0.98] active:bg-[#0284C7]",
        ].join(" "),
        // Secondary - Navy
        secondary: [
          "bg-[#1E3A5F] text-white font-medium",
          "focus-visible:ring-[#1E3A5F]/30",
          "hover:bg-[#2D4A6F] hover:shadow-lg hover:shadow-[#1E3A5F]/20",
          "active:scale-[0.98] active:bg-[#162D4A]",
        ].join(" "),
        // Emergency - Red urgent
        emergency: [
          "bg-[#EF4444] text-white font-semibold",
          "focus-visible:ring-[#EF4444]/30",
          "hover:bg-[#DC2626] hover:shadow-lg hover:shadow-[#EF4444]/20",
          "active:scale-[0.98] active:bg-[#B91C1C]",
        ].join(" "),
        // Ghost - Transparent with hover
        ghost: [
          "bg-transparent text-[#1E3A5F] font-medium",
          "focus-visible:ring-[#1E3A5F]/20",
          "hover:bg-[#F5F5F5]",
          "active:scale-[0.98] active:bg-[#E5E7EB]",
        ].join(" "),
        // Outline - Border style
        outline: [
          "bg-white text-[#1E3A5F] border-2 border-[#E5E7EB] font-medium",
          "focus-visible:ring-[#38BDF8]/30",
          "hover:border-[#38BDF8] hover:text-[#38BDF8]",
          "active:scale-[0.98]",
        ].join(" "),
      },
      size: {
        // Default - Standard CTA (48px height)
        default: "h-12 px-6 min-w-[180px]",
        // Compact - For header/nav (48px height, less min-width)
        compact: "h-12 px-5 min-w-0",
        // Full width - For mobile forms and stacked layouts
        full: "h-12 px-6 w-full min-w-0",
        // Small - For inline actions (44px height - minimum touch target)
        small: "h-11 px-4 text-sm min-w-0",
        // Icon only - Square button
        icon: "h-12 w-12 min-w-0 p-0",
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
 * Font: 13px, weight 400, 60% opacity
 * Spacing: 8px from button
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
        "mt-2 text-[13px] leading-5 font-normal text-[#1E3A5F]/60",
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
