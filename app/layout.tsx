import "./ui/styles/globals.css";
import { roboto } from "./ui/fonts";
import Sidebar from "@/components/Organisms/Sidebar/Sidebar";
import { Providers } from "./providers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      <body className={`${roboto.className} antialiased`}>
        <Providers>
          <main>{children}</main>
          <ToastContainer />
        </Providers>
      </body>
    </html>
  );
}
