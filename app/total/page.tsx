import { Suspense } from "react";

export const metadata = {
  title: "total - MoniCondimentos",
};

export default function total() {
  return (
    <Suspense fallback={<div className="">Cargando</div>}>
      <div>Hola</div>
    </Suspense>
  );
}
