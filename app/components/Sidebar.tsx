"use client";

import React, { useState } from "react";
import {
  Home,
  ShoppingBag,
  LayoutDashboard,
  User,
  Settings,
  Layers,
  ShieldCheck,
  ChevronDown,
  ShoppingCart,
  BarChart3,
  Tag,
  PackageSearch,
  Bell,
  Sparkles,
  UserCheck,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface MenuItem {
  name: string;
  href?: string;
  icon: any;
  badge?: string | number;
  children?: { name: string; href: string; icon: any }[];
}

interface MenuSection {
  title?: string;
  items: MenuItem[];
}

const Sidebar = () => {
  const pathname = usePathname();
  const [openMenus, setOpenMenus] = useState<string[]>(["ປະເພດ"]);

  const toggleMenu = (name: string) => {
    setOpenMenus((prev) =>
      prev.includes(name) ? prev.filter((i) => i !== name) : [...prev, name]
    );
  };

  const menuSections: MenuSection[] = [
    {
      title: "ພາບລວມ",
      items: [{ name: "ໜ້າຫຼັກ", href: "/", icon: Home }],
    },
    {
      title: "ການຄ້າ & ສາງສິນຄ້າ",
      items: [
        {
          name: "ປະເພດ",
          icon: Layers,
          children: [
            { name: "ປະເພດສິນຄ້າ", href: "/product-type", icon: Layers },
            { name: "ປະເພດສິດ", href: "/roles", icon: ShieldCheck },
          ],
        },
        { name: "ສິນຄ້າ", href: "/product", icon: ShoppingBag },
        { name: "ລາຍການສັ່ງຊື້", href: "/orders", icon: ShoppingCart },
        { name: "ສາງສິນຄ້າ", href: "/inventory", icon: PackageSearch },
        { name: "ໂປຣໂມຊັ່ນ", href: "/promotions", icon: Tag },
      ],
    },
    {
      title: "ຜູ້ໃຊ້ & ລາຍງານ",
      items: [
        { name: "ລູກຄ້າ", href: "/customers", icon: User },
        { name: "ຜູ້ດູແລລະບົບ", href: "/admins", icon: ShieldCheck },
        { name: "ລາຍງານສະຖິຕິ", href: "/reports", icon: BarChart3 },
      ],
    },
    {
      title: "ລະບົບ & ຕັ້ງຄ່າ",
      items: [
        {
          name: "ການແຈ້ງເຕືອນ",
          href: "/notifications",
          icon: Bell,
          badge: 3,
        },
        { name: "ໂປຣໄຟລ໌ສ່ວນຕົວ", href: "/profile", icon: UserCheck },
        { name: "ຕັ້ງຄ່າລະບົບ", href: "/settings", icon: Settings },
      ],
    },
  ];

  return (
    <aside className="w-64 bg-white dark:bg-gray-900 border-r border-gray-100 dark:border-gray-800 min-h-screen flex flex-col shadow-sm transition-colors duration-300">
      {/* Brand Header */}
      <div className="p-5 border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800 flex items-center justify-center shadow-md shadow-teal-600/20 text-white">
            <LayoutDashboard className="w-5 h-5" />
          </div>
          <div>
            <span className="text-base font-black text-gray-900 dark:text-white tracking-tight block">
              Admin Panel
            </span>
            <span className="text-[11px] text-teal-600 dark:text-teal-400 font-semibold flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Next Gen
            </span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-3.5 space-y-4 overflow-y-auto">
        {menuSections.map((section, sIdx) => (
          <div key={sIdx} className="space-y-1">
            {section.title && (
              <p className="px-3 text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {section.title}
              </p>
            )}

            {section.items.map((item) => {
              const Icon = item.icon;
              const hasChildren = item.children && item.children.length > 0;
              const isOpen = openMenus.includes(item.name);
              const isActive = item.href ? pathname === item.href : false;
              const isChildActive =
                hasChildren &&
                item.children?.some((child) => pathname === child.href);

              return (
                <div key={item.name} className="space-y-0.5">
                  {hasChildren ? (
                    <button
                      type="button"
                      onClick={() => toggleMenu(item.name)}
                      className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all group cursor-pointer ${
                        isChildActive
                          ? "bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-400"
                          : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/60 hover:text-teal-600 dark:hover:text-teal-400"
                      }`}
                    >
                      <Icon
                        className={`w-4 h-4 transition-colors ${
                          isChildActive
                            ? "text-teal-600 dark:text-teal-400"
                            : "text-gray-400 group-hover:text-teal-600"
                        }`}
                      />
                      <span className="flex-1 text-left">{item.name}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 text-gray-400 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href || "#"}
                      className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all group ${
                        isActive
                          ? "bg-gradient-to-r from-teal-600 to-teal-700 text-white shadow-md shadow-teal-600/20"
                          : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/60 hover:text-teal-600 dark:hover:text-teal-400"
                      }`}
                    >
                      <Icon
                        className={`w-4 h-4 transition-colors ${
                          isActive
                            ? "text-white"
                            : "text-gray-400 group-hover:text-teal-600"
                        }`}
                      />
                      <span className="flex-1">{item.name}</span>

                      {item.badge && (
                        <span
                          className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                            isActive
                              ? "bg-white text-teal-700"
                              : "bg-rose-500 text-white"
                          }`}
                        >
                          {item.badge}
                        </span>
                      )}

                      {isActive && !item.badge && (
                        <div className="w-1.5 h-1.5 rounded-full bg-white/90" />
                      )}
                    </Link>
                  )}

                  {/* Dropdown Children */}
                  {hasChildren && isOpen && (
                    <div className="ml-3.5 pl-3.5 border-l-2 border-teal-100 dark:border-teal-900/40 space-y-0.5 my-1 animate-in slide-in-from-top-1 duration-200">
                      {item.children?.map((child) => {
                        const ChildIcon = child.icon;
                        const isChildActive = pathname === child.href;
                        return (
                          <Link
                            key={child.name}
                            href={child.href}
                            className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all group ${
                              isChildActive
                                ? "text-teal-700 dark:text-teal-400 bg-teal-50/70 dark:bg-teal-950/40 font-bold"
                                : "text-gray-500 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-gray-50 dark:hover:bg-gray-800/40"
                            }`}
                          >
                            <ChildIcon
                              className={`w-3.5 h-3.5 ${
                                isChildActive
                                  ? "text-teal-600 dark:text-teal-400"
                                  : "text-gray-400 group-hover:text-teal-600"
                              }`}
                            />
                            <span>{child.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </nav>

      {/* System Status Footer */}
      <div className="p-3.5 border-t border-gray-100 dark:border-gray-800">
        <div className="bg-gray-50/80 dark:bg-gray-800/50 rounded-xl p-3 border border-gray-100 dark:border-gray-800/80">
          <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1">
            ສະຖານະລະບົບ
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs text-emerald-700 dark:text-emerald-400 font-bold">
                ອອນລາຍປົກກະຕິ
              </span>
            </div>
            <span className="text-[10px] text-gray-400 font-mono">v2.4.0</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
