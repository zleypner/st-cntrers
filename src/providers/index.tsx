"use client";

import { type ReactNode } from "react";
import { QueryProvider } from "./query-provider";
import { I18nProvider } from "./i18n-provider";
import { Toaster } from "sonner";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <I18nProvider>
      <QueryProvider>
        {children}
        <Toaster richColors position="top-right" />
      </QueryProvider>
    </I18nProvider>
  );
}

export { QueryProvider } from "./query-provider";
export { I18nProvider } from "./i18n-provider";
