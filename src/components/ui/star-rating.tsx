"use client";

import { Icons } from "./icons";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function StarRating({
  rating,
  maxRating = 5,
  className,
  size = "md",
}: StarRatingProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  };

  return (
    <div
      className={cn("flex gap-0.5", className)}
      aria-label={`${rating} de ${maxRating} estrellas`}
    >
      {Array.from({ length: maxRating }).map((_, i) => (
        <Icons.star
          key={i}
          className={cn(
            sizeClasses[size],
            i < rating
              ? "fill-yellow-400 text-yellow-400"
              : "fill-gray-200 text-gray-200"
          )}
        />
      ))}
    </div>
  );
}
