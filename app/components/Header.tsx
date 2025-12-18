"use client";

import React, { useState } from "react";
import {
  Settings,
  User,
  LogOut,
  Bell,
  Search,
  ChevronDown,
} from "lucide-react";

import { useTranslations } from "next-intl";
import { Link } from "../../i18n/routing";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const t = useTranslations("Navigation");

  return (
    <header className="bg-white border-b border-gray-200 h-20 flex items-center justify-between px-8 sticky top-0 z-10 shadow-sm">
      <div className="flex items-center gap-8">
        {/* Logo & Title */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-700 rounded-xl flex items-center justify-center shadow-lg shadow-teal-100">
            <span className="text-white font-bold text-xl">L</span>
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-800 leading-none">
              ອັດຕະຫຼາດລະບົບຄົວເຫຼືອ
            </h1>
            <span className="text-xs font-medium text-teal-600 bg-teal-50 px-2 py-0.5 rounded-full mt-1 inline-block">
              v1.0.0
            </span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-gray-50 border border-gray-100 rounded-2xl px-4 py-2 w-80 focus-within:bg-white focus-within:border-teal-200 transition-all">
          <Search className="w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder={t("search")}
            className="bg-transparent border-none focus:ring-0 text-sm ml-2 w-full text-gray-600 placeholder:text-gray-400"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        {/* Notifications */}
        <button className="relative p-2 text-gray-400 hover:text-teal-600 hover:bg-teal-50 rounded-xl transition-all">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 border-2 border-white rounded-full"></span>
        </button>

        {/* Settings Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="p-2 text-gray-400 hover:text-teal-600 hover:bg-teal-50 rounded-xl transition-all"
          >
            <Settings
              className={`w-6 h-6 transition-transform duration-300 ${
                isDropdownOpen ? "rotate-90" : ""
              }`}
            />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-3 w-56 bg-white border border-gray-100 rounded-2xl shadow-xl py-2 animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="px-4 py-2 border-b border-gray-50 mb-1">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  {t("settings")}
                </p>
              </div>

              <Link
                href="/profile"
                className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:bg-teal-50 hover:text-teal-700 transition-colors"
              >
                <User className="w-4 h-4" />
                <span>{t("profile")}</span>
              </Link>

              <Link
                href="/settings"
                className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:bg-teal-50 hover:text-teal-700 transition-colors"
              >
                <Settings className="w-4 h-4" />
                <span>{t("settings")}</span>
              </Link>

              <div className="h-px bg-gray-50 my-1"></div>

              <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors">
                <LogOut className="w-4 h-4" />
                <span>{t("logout")}</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
