import "./ui/globals.css";
import { roboto } from "./ui/fonts";
import Sidebar from "@/components/Organisms/Sidebar/Sidebar";
import { Providers } from "./providers";

export const metadata = {
  title: "MoniCondimentos",
  description: "Empresa de venta de condimentos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body id="__next" className={`${roboto.className} antialiased`}>
        <Providers>
          <div className="md:flex">
            <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5">
              <Sidebar />
            </aside>
            <main className="md:w-8/12 xl:w3/4 2xl:w4/5 h-screen overflow-y-scroll">
              <div className="p-6">{children}</div>
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
