"use client";

import { type ReactNode } from "react";
import { QueryProvider } from "./query-provider";
import { Toaster } from "sonner";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <QueryProvider>
      {children}
      <Toaster richColors position="top-right" />
    </QueryProvider>
  );
}

export { QueryProvider } from "./query-provider";
