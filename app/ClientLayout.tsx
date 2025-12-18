"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const publicRoutes = ["/login", "/register"];
  const isPublicPage = publicRoutes.includes(pathname);

  if (!mounted) {
    return <main>{children}</main>;
  }

  if (isPublicPage) {
    return <main>{children}</main>;
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-8 flex-1">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
}
