"use client";

import React from "react";
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
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

const Sidebar = () => {
  const pathname = usePathname();
  const [openMenus, setOpenMenus] = useState<string[]>([]);

  const toggleMenu = (name: string) => {
    setOpenMenus((prev) =>
      prev.includes(name) ? prev.filter((i) => i !== name) : [...prev, name]
    );
  };

  const menuItems = [
    { name: "ໜ້າຫຼັກ", href: "/", icon: Home },
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
    { name: "ຜູ້ໃຊ້ງານ", href: "/users", icon: User },
    { name: "ຜູ້ດູແລລະບົບ", href: "/admins", icon: ShieldCheck },
  ];

  return (
    <aside className="w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 min-h-screen flex flex-col shadow-sm transition-colors duration-300">
      <div className="p-6 border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center gap-3">
          <div className="bg-teal-600 p-2 rounded-lg shadow-lg shadow-teal-100 dark:shadow-none">
            <LayoutDashboard className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold text-gray-800 dark:text-white tracking-tight">
            Admin Panel
          </span>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const hasChildren = item.children && item.children.length > 0;
          const isOpen = openMenus.includes(item.name);
          const isActive = item.href ? pathname === item.href : false;
          const isChildActive =
            hasChildren &&
            item.children?.some((child) => pathname === child.href);

          return (
            <div key={item.name} className="space-y-1">
              {hasChildren ? (
                <button
                  onClick={() => toggleMenu(item.name)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                    isChildActive
                      ? "bg-teal-50/50 dark:bg-teal-900/10 text-teal-700 dark:text-teal-400"
                      : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-teal-600 dark:hover:text-teal-400"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 transition-colors ${
                      isChildActive
                        ? "text-teal-600 dark:text-teal-400"
                        : "text-gray-400 group-hover:text-teal-500"
                    }`}
                  />
                  <span className="font-medium flex-1 text-left">
                    {item.name}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              ) : (
                <Link
                  href={item.href || "#"}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                    isActive
                      ? "bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-400 shadow-sm"
                      : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-teal-600 dark:hover:text-teal-400"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 transition-colors ${
                      isActive
                        ? "text-teal-600 dark:text-teal-400"
                        : "text-gray-400 group-hover:text-teal-500"
                    }`}
                  />
                  <span className="font-medium">{item.name}</span>
                  {isActive && (
                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-teal-600 dark:bg-teal-400" />
                  )}
                </Link>
              )}

              {/* Dropdown Children */}
              {hasChildren && isOpen && (
                <div className="ml-4 pl-4 border-l border-gray-100 dark:border-gray-800 space-y-1 animate-in slide-in-from-top-2 duration-200">
                  {item.children?.map((child) => {
                    const ChildIcon = child.icon;
                    const isChildActive = pathname === child.href;
                    return (
                      <Link
                        key={child.name}
                        href={child.href}
                        className={`flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-200 group ${
                          isChildActive
                            ? "text-teal-700 dark:text-teal-400 font-bold"
                            : "text-gray-500 dark:text-gray-500 hover:text-teal-600 dark:hover:text-teal-400"
                        }`}
                      >
                        <ChildIcon
                          className={`w-4 h-4 ${
                            isChildActive
                              ? "text-teal-600 dark:text-teal-400"
                              : "text-gray-400 group-hover:text-teal-500"
                          }`}
                        />
                        <span className="text-sm">{child.name}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-100">
        <div className="bg-gray-50 rounded-2xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
            ສະຖານະລະບົບ
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-gray-600 font-medium text-teal-600">
              ອອນລາຍ
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
