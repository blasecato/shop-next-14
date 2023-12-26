import { Suspense } from "react";

export const metadata = {
  title: "summary - MoniCondimentos",
};

export default function summary() {
  return (
    <Suspense fallback={<div className="">Cargando</div>}>
      <div>Hola</div>
    </Suspense>
  );
}
