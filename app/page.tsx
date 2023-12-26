import { Suspense } from "react";
import Dashboard from "@/components/Organisms/Dashboard/Dashboard";

export const metadata = {
  title: "Home - MoniCondimentos",
};

export default function Home() {
  return (
    <Suspense fallback={<div className="">Cargando</div>}>
      <Dashboard />
    </Suspense>
  );
}
