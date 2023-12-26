import Sidebar from "@/components/Organisms/Sidebar/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="md:flex justify-center m-auto max-w-screen-xl">
      <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/4">
        <Sidebar />
      </aside>
      <div className="md:w-3/4 xl:w3/4 2xl:w4/5 h-screen overflow-y-scroll scroll-none p-6">
        {children}
      </div>
    </div>
  );
}
