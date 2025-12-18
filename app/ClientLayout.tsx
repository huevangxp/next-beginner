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

  // For public pages, we want a simple layout that is stable across server/client
  if (isPublicPage) {
    return <main>{children}</main>;
  }

  // For protected pages, we only render the full layout after mounting to avoid hydration issues with the sidebar/header
  if (!mounted) {
    return <div className="min-h-screen bg-gray-50 dark:bg-gray-950" />;
  }

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-950">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-8 flex-1">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
}
