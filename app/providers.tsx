"use client";
import { MenuProsuctsProvider } from "@/contex/MenuProductsProvider";
import { NextUIProvider } from "@nextui-org/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <MenuProsuctsProvider>{children}</MenuProsuctsProvider>
    </NextUIProvider>
  );
}
