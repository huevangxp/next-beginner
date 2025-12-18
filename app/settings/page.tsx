import { useAppContext } from "../context/AppContext";
import {
  Settings,
  Globe,
  Moon,
  Sun,
  Monitor,
  Database,
  ShieldCheck,
  BellRing,
  Smartphone,
  Cloud,
  Save,
  RefreshCw,
  Info,
} from "lucide-react";

const SettingsPage = () => {
  const { theme, setTheme, language, setLanguage, t } = useAppContext();

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            {t("system_settings")}
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            {t("manage_settings")}
          </p>
        </div>
        <button className="flex items-center gap-2 bg-teal-600 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-teal-700 transition-all shadow-lg shadow-teal-100">
          <Save className="w-5 h-5" />
          <span>{t("save_all")}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column: General & Appearance */}
        <div className="md:col-span-2 space-y-8">
          {/* Appearance Section */}
          <div className="bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm p-8 space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-teal-50 dark:bg-teal-900/30 text-teal-600 rounded-lg">
                <Monitor className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                {t("appearance")}
              </h2>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                { id: "light", name: t("light"), icon: Sun },
                { id: "dark", name: t("dark"), icon: Moon },
                { id: "system", name: t("system"), icon: Monitor },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setTheme(item.id as any)}
                    className={`flex flex-col items-center gap-3 p-4 rounded-2xl border-2 transition-all ${
                      theme === item.id
                        ? "border-teal-600 bg-teal-50/50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-400"
                        : "border-gray-50 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/50 text-gray-500 hover:border-gray-200"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                    <span className="text-xs font-bold">{item.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Language & Region */}
          <div className="bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm p-8 space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 rounded-lg">
                <Globe className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                {t("language_region")}
              </h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-800">
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-bold text-gray-700 dark:text-gray-200">
                      {t("system_language")}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      ເລືອກພາສາທີ່ທ່ານຕ້ອງການໃຊ້ໃນລະບົບ
                    </p>
                  </div>
                </div>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as any)}
                  className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2 text-sm font-medium outline-none focus:ring-2 focus:ring-teal-500/20 dark:text-white"
                >
                  <option value="lo">ພາສາລາວ</option>
                  <option value="en">English</option>
                </select>
              </div>
            </div>
          </div>

          {/* About System Section */}
          <div className="bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm p-8 space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-orange-50 dark:bg-orange-900/30 text-orange-600 rounded-lg">
                <Info className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                {t("about_system")}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-800">
                <p className="text-xs text-gray-500 dark:text-gray-400 uppercase font-bold tracking-wider mb-1">
                  {t("version")}
                </p>
                <p className="text-sm font-bold text-gray-800 dark:text-white">
                  v1.0.0-stable
                </p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-800">
                <p className="text-xs text-gray-500 dark:text-gray-400 uppercase font-bold tracking-wider mb-1">
                  {t("build_date")}
                </p>
                <p className="text-sm font-bold text-gray-800 dark:text-white">
                  December 18, 2025
                </p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-800 sm:col-span-2">
                <p className="text-xs text-gray-500 dark:text-gray-400 uppercase font-bold tracking-wider mb-1">
                  {t("developer")}
                </p>
                <p className="text-sm font-bold text-gray-800 dark:text-white">
                  Antigravity AI Team
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Quick Toggles */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm p-8 space-y-6">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
              ການແຈ້ງເຕືອນດ່ວນ
            </h3>
            <div className="space-y-4">
              {[
                {
                  name: "ການແຈ້ງເຕືອນຜ່ານມືຖື",
                  icon: Smartphone,
                  checked: true,
                },
                { name: "ການແຈ້ງເຕືອນອີເມວ", icon: BellRing, checked: false },
                { name: "ຄວາມປອດໄພຂັ້ນສູງ", icon: ShieldCheck, checked: true },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-gray-400 group-hover:text-teal-600 transition-colors" />
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                      {item.name}
                    </span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      defaultChecked={item.checked}
                    />
                    <div className="w-10 h-5 bg-gray-200 dark:bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-teal-600"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-amber-50 dark:bg-amber-900/20 rounded-3xl border border-amber-100 dark:border-amber-900/30 p-8 space-y-4">
            <div className="flex items-center gap-3 text-amber-800 dark:text-amber-400">
              <ShieldCheck className="w-6 h-6" />
              <h3 className="font-bold">ສະຖານະຄວາມປອດໄພ</h3>
            </div>
            <p className="text-sm text-amber-700 dark:text-amber-500 leading-relaxed">
              ລະບົບຂອງທ່ານໄດ້ຮັບການປົກປ້ອງດ້ວຍການເຂົ້າລະຫັດຂັ້ນສູງ.
              ກະລຸນາກວດສອບການອັບເດດເປັນປະຈຳ.
            </p>
            <button className="w-full py-3 bg-amber-600 text-white rounded-xl font-bold text-sm hover:bg-amber-700 transition-all shadow-lg shadow-amber-200 dark:shadow-none">
              ກວດສອບຄວາມປອດໄພ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
