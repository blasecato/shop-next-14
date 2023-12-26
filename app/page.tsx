import { Suspense } from "react";

export const metadata = {
  title: "Home - MoniCondimentos",
};

export default function Home() {
  return (
    <Suspense fallback={<div className="">Cargando</div>}>
      <div>Home</div>
    </Suspense>
  );
}
