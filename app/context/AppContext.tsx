"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Theme = "light" | "dark" | "system";
type Language = "lo" | "en";

interface AppContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const translations = {
  lo: {
    dashboard: "ໜ້າຫຼັກ",
    products: "ສິນຄ້າ",
    profile: "ຂໍ້ມູນສ່ວນຕົວ",
    settings: "ການຕັ້ງຄ່າ",
    system_status: "ສະຖານະລະບົບ",
    online: "ກຳລັງເຮັດວຽກ",
    welcome: "ຍິນດີຕ້ອນຮັບ",
    search: "ຄົ້ນຫາ...",
    logout: "ອອກຈາກລະບົບ",
    appearance: "ຮູບແບບການສະແດງຜົນ",
    light: "ໂໝດສະຫວ່າງ",
    dark: "ໂໝດມືດ",
    system: "ຕາມລະບົບ",
    language_region: "ພາສາ ແລະ ພາກພື້ນ",
    system_language: "ພາສາຂອງລະບົບ",
    backup: "ການສຳຮອງຂໍ້ມູນ",
    about_system: "ກ່ຽວກັບລະບົບ",
    version: "ເວີຊັນ",
    build_date: "ວັນທີສ້າງ",
    developer: "ຜູ້ພັດທະນາ",
    save_all: "ບັນທຶກທັງໝົດ",
    system_settings: "ການຕັ້ງຄ່າລະບົບ",
    manage_settings: "ຈັດການການຕັ້ງຄ່າທົ່ວໄປ ແລະ ຄວາມປອດໄພຂອງລະບົບ.",
    total_revenue: "ລາຍຮັບທັງໝົດ",
    active_users: "ຜູ້ໃຊ້ງານ",
    new_orders: "ຄຳສັ່ງຊື້ໃໝ່",
    growth_rate: "ອັດຕາການເຕີບໂຕ",
    recent_activity: "ກິດຈະກຳຫຼ້າສຸດ",
    view_all: "ເບິ່ງທັງໝົດ",
    user: "ຜູ້ໃຊ້",
    activity: "ກິດຈະກຳ",
    time: "ເວລາ",
    amount: "ຈຳນວນ",
    quick_actions: "ຈັດການດ່ວນ",
    add_product: "ເພີ່ມສິນຄ້າ",
    add_user: "ເພີ່ມຜູ້ໃຊ້",
    upgrade_pro: "ອັບເກຣດ Pro Plan",
    pro_desc: "ເຂົ້າເຖິງການວິເຄາະຂັ້ນສູງ ແລະ ສິນຄ້າບໍ່ຈຳກັດ.",
    upgrade_now: "ອັບເກຣດດຽວນີ້",
    last_updated: "ອັບເດດຫຼ້າສຸດ",
    minutes_ago: "ນາທີກ່ອນ",
    download_report: "ດາວໂຫຼດລາຍງານ",
    edit_product: "ແກ້ໄຂສິນຄ້າ",
    stock: "ມີໃນສາງ",
    items: "ລາຍການ",
    all_categories: "ທຸກໝວດໝູ່",
    filter: "ກັ່ນຕອງ",
    electronics: "ເຄື່ອງເອເລັກໂຕຣນິກ",
    wearables: "ອຸປະກອນສວມໃສ່",
    accessories: "ອຸປະກອນເສີມ",
  },
  en: {
    dashboard: "Dashboard",
    products: "Products",
    profile: "Profile",
    settings: "Settings",
    system_status: "System Status",
    online: "Online",
    welcome: "Welcome",
    search: "Search...",
    logout: "Logout",
    appearance: "Appearance",
    light: "Light Mode",
    dark: "Dark Mode",
    system: "System",
    language_region: "Language & Region",
    system_language: "System Language",
    backup: "System Backup",
    about_system: "About System",
    version: "Version",
    build_date: "Build Date",
    developer: "Developer",
    save_all: "Save All",
    system_settings: "System Settings",
    manage_settings: "Manage general settings and system security.",
    total_revenue: "Total Revenue",
    active_users: "Active Users",
    new_orders: "New Orders",
    growth_rate: "Growth Rate",
    recent_activity: "Recent Activity",
    view_all: "View All",
    user: "User",
    activity: "Activity",
    time: "Time",
    amount: "Amount",
    quick_actions: "Quick Actions",
    add_product: "Add Product",
    add_user: "Add User",
    upgrade_pro: "Upgrade to Pro Plan",
    pro_desc: "Access advanced analytics and unlimited products.",
    upgrade_now: "Upgrade Now",
    last_updated: "Last updated",
    minutes_ago: "minutes ago",
    download_report: "Download Report",
    edit_product: "Edit Product",
    stock: "In Stock",
    items: "items",
    all_categories: "All Categories",
    filter: "Filter",
    electronics: "Electronics",
    wearables: "Wearables",
    accessories: "Accessories",
  },
};

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setThemeState] = useState<Theme>("light");
  const [language, setLanguageState] = useState<Language>("lo");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme;
    const savedLang = localStorage.getItem("lang") as Language;
    if (savedTheme) setTheme(savedTheme);
    if (savedLang) {
      setLanguageState(savedLang);
      document.documentElement.lang = savedLang;
    }
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (newTheme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.classList.toggle("dark", isDark);
    }
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  };

  const t = (key: string) => {
    return (translations[language] as any)[key] || key;
  };

  return (
    <AppContext.Provider value={{ theme, setTheme, language, setLanguage, t }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context)
    throw new Error("useAppContext must be used within AppProvider");
  return context;
};
