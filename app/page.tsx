"use client";

import React from "react";
import {
  TrendingUp,
  Users,
  ShoppingBag,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  Plus,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Package,
  Layers,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

import FinancialChart from "./components/FinancialChart";

const DashboardPage = () => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const stats = [
    {
      title: "ລາຍຮັບທັງໝົດ",
      value: "$45,231.89",
      change: "+20.1%",
      isPositive: true,
      subtext: "ທຽບກັບເດືອນຜ່ານມາ",
      icon: DollarSign,
      gradient: "from-emerald-500 to-teal-600",
      lightBg: "bg-emerald-50/80 dark:bg-emerald-950/30",
      borderColor: "border-emerald-100 dark:border-emerald-900/40",
      textColor: "text-emerald-600 dark:text-emerald-400",
    },
    {
      title: "ລູກຄ້າທັງໝົດ",
      value: "2,350",
      change: "+180.1%",
      isPositive: true,
      subtext: "+120 ຄົນໃນອາທິດນີ້",
      icon: Users,
      gradient: "from-blue-500 to-indigo-600",
      lightBg: "bg-blue-50/80 dark:bg-blue-950/30",
      borderColor: "border-blue-100 dark:border-blue-900/40",
      textColor: "text-blue-600 dark:text-blue-400",
    },
    {
      title: "ຄຳສັ່ງຊື້ໃໝ່",
      value: "12,234",
      change: "+19.0%",
      isPositive: true,
      subtext: "ລໍຖ້າຈັດສົ່ງ 45 ລາຍການ",
      icon: ShoppingBag,
      gradient: "from-teal-500 to-cyan-600",
      lightBg: "bg-teal-50/80 dark:bg-teal-950/30",
      borderColor: "border-teal-100 dark:border-teal-900/40",
      textColor: "text-teal-600 dark:text-teal-400",
    },
    {
      title: "ອັດຕາການເຕີບໂຕ",
      value: "24.5%",
      change: "-4.5%",
      isPositive: false,
      subtext: "ເປົ້າໝາຍໄຕມາດ 30%",
      icon: TrendingUp,
      gradient: "from-purple-500 to-pink-600",
      lightBg: "bg-purple-50/80 dark:bg-purple-950/30",
      borderColor: "border-purple-100 dark:border-purple-900/40",
      textColor: "text-purple-600 dark:text-purple-400",
    },
  ];

  const recentActivity = [
    {
      id: 1,
      user: "Alex Morgan",
      action: "ຊື້ຫູຟັງໄຮ້ສາຍ Sony WH-1000XM5",
      time: "2 ນາທີກ່ອນ",
      amount: "$59.99",
      status: "completed",
      statusText: "ສຳເລັດ",
    },
    {
      id: 2,
      user: "Sarah Chen",
      action: "ອັບເດດໂປຣໄຟລ໌ ແລະ ທີ່ຢູ່ຈັດສົ່ງ",
      time: "15 ນາທີກ່ອນ",
      amount: null,
      status: "info",
      statusText: "ອັບເດດ",
    },
    {
      id: 3,
      user: "James Wilson",
      action: "ສະໝັກສະມາຊິກໃໝ່: Pro Plan",
      time: "1 ຊົ່ວໂມງກ່ອນ",
      amount: "$199.00",
      status: "completed",
      statusText: "ສຳເລັດ",
    },
    {
      id: 4,
      user: "Elena Rodriguez",
      action: "ຊື້ Apple Watch Series 9",
      time: "3 ຊົ່ວໂມງກ່ອນ",
      amount: "$129.99",
      status: "completed",
      statusText: "ສຳເລັດ",
    },
    {
      id: 5,
      user: "Souliya Vongsa",
      action: "ສັ່ງຊື້ສິນຄ້າແບບເກັບເງິນປາຍທາງ",
      time: "5 ຊົ່ວໂມງກ່ອນ",
      amount: "$85.50",
      status: "pending",
      statusText: "ລໍຖ້າ",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome & Quick Info Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-gray-900 p-5 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm relative overflow-hidden">
        <div className="flex items-center gap-4 relative z-10">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-teal-600 via-teal-500 to-emerald-400 p-0.5 shadow-md shadow-teal-500/20">
            <div className="w-full h-full bg-white dark:bg-gray-900 rounded-[14px] flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-teal-600 dark:text-teal-400" />
            </div>
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white tracking-tight">
              ພາບລວມລະບົບ
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mt-0.5">
              ຍິນດີຕ້ອນຮັບ, ຜູ້ດູແລລະບົບ! ຂໍ້ມູນ ແລະ ພາບລວມທຸລະກິດປະຈຳວັນ.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5 relative z-10">
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl text-xs font-medium text-gray-600 dark:text-gray-300">
            <Clock className="w-3.5 h-3.5 text-teal-600" />
            <span>ອັບເດດ: 5 ນາທີກ່ອນ</span>
          </div>
          <button className="px-3.5 py-1.5 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white rounded-xl text-xs font-semibold shadow-md shadow-teal-600/20 transition-all active:scale-[0.98] cursor-pointer flex items-center gap-1.5">
            <span>ດາວໂຫຼດລາຍງານ</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Modern Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.title}
              className="bg-white dark:bg-gray-900 p-5 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg hover:border-teal-200 dark:hover:border-teal-900/50 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-3">
                <div
                  className={`w-11 h-11 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center text-white shadow-md shadow-teal-900/10 group-hover:scale-105 transition-transform duration-300`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div
                  className={`flex items-center gap-0.5 text-xs font-bold px-2 py-0.5 rounded-lg ${
                    stat.isPositive
                      ? "text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40"
                      : "text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40"
                  }`}
                >
                  {stat.isPositive ? (
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  ) : (
                    <ArrowDownRight className="w-3.5 h-3.5" />
                  )}
                  {stat.change}
                </div>
              </div>

              <div>
                <p className="text-gray-500 dark:text-gray-400 text-xs font-semibold">
                  {stat.title}
                </p>
                <h3 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mt-1 tracking-tight">
                  {stat.value}
                </h3>
                <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-1">
                  {stat.subtext}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Financial Chart Component */}
      <FinancialChart />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity Table */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden flex flex-col justify-between">
          <div>
            <div className="p-5 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></div>
                <h2 className="text-base font-bold text-gray-900 dark:text-white">
                  ກິດຈະກຳຫຼ້າສຸດ
                </h2>
              </div>
              <Link
                href="/orders"
                className="text-teal-600 dark:text-teal-400 text-xs font-semibold hover:underline flex items-center gap-1"
              >
                <span>ເບິ່ງທັງໝົດ</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50/80 dark:bg-gray-800/50">
                    <th className="px-5 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                      ລູກຄ້າ
                    </th>
                    <th className="px-5 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                      ລາຍລະອຽດ
                    </th>
                    <th className="px-5 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                      ສະຖານະ
                    </th>
                    <th className="px-5 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-right">
                      ມູນຄ່າ
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800 text-xs sm:text-sm">
                  {recentActivity.map((activity) => (
                    <tr
                      key={activity.id}
                      className="hover:bg-gray-50/70 dark:hover:bg-gray-800/30 transition-colors"
                    >
                      <td className="px-5 py-3.5">
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center text-white font-bold text-xs shadow-sm">
                            {activity.user.charAt(0)}
                          </div>
                          <div>
                            <span className="font-semibold text-gray-800 dark:text-gray-200 block">
                              {activity.user}
                            </span>
                            <span className="text-[10px] text-gray-400 block">
                              {activity.time}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-3.5 text-gray-600 dark:text-gray-400 text-xs max-w-[220px] truncate">
                        {activity.action}
                      </td>
                      <td className="px-5 py-3.5">
                        <span
                          className={`text-[10px] font-semibold px-2 py-0.5 rounded-full inline-flex items-center gap-1 ${
                            activity.status === "completed"
                              ? "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-900/30"
                              : activity.status === "pending"
                              ? "bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-900/30"
                              : "bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900/30"
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              activity.status === "completed"
                                ? "bg-emerald-500"
                                : activity.status === "pending"
                                ? "bg-amber-500"
                                : "bg-blue-500"
                            }`}
                          ></span>
                          {activity.statusText}
                        </span>
                      </td>
                      <td className="px-5 py-3.5 font-bold text-gray-900 dark:text-white text-xs sm:text-sm text-right">
                        {activity.amount || "—"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Quick Actions & Pro Banner */}
        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
            <h2 className="text-base font-bold text-gray-900 dark:text-white mb-3 flex items-center justify-between">
              <span>ຈັດການດ່ວນ</span>
              <span className="text-[10px] font-semibold text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/30 px-2 py-0.5 rounded-md">
                ທາງລັດ
              </span>
            </h2>
            <div className="grid grid-cols-2 gap-2.5">
              <Link href="/product/create" className="contents">
                <button className="p-3 bg-gradient-to-br from-teal-50 to-emerald-50/50 dark:from-teal-950/30 dark:to-emerald-950/20 text-teal-700 dark:text-teal-300 rounded-xl hover:shadow-md hover:border-teal-200 transition-all border border-teal-100/60 dark:border-teal-900/30 flex flex-col items-center gap-1.5 w-full cursor-pointer group">
                  <div className="w-8 h-8 rounded-lg bg-teal-600 text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    <Package className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold">ເພີ່ມສິນຄ້າ</span>
                </button>
              </Link>
              <Link href="/customers/create" className="contents">
                <button className="p-3 bg-gradient-to-br from-blue-50 to-indigo-50/50 dark:from-blue-950/30 dark:to-indigo-950/20 text-blue-700 dark:text-blue-300 rounded-xl hover:shadow-md hover:border-blue-200 transition-all border border-blue-100/60 dark:border-blue-900/30 flex flex-col items-center gap-1.5 w-full cursor-pointer group">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    <Users className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold">ເພີ່ມລູກຄ້າ</span>
                </button>
              </Link>
              <Link href="/orders/create" className="contents">
                <button className="p-3 bg-gradient-to-br from-amber-50 to-orange-50/50 dark:from-amber-950/30 dark:to-orange-950/20 text-amber-700 dark:text-amber-300 rounded-xl hover:shadow-md hover:border-amber-200 transition-all border border-amber-100/60 dark:border-amber-900/30 flex flex-col items-center gap-1.5 w-full cursor-pointer group">
                  <div className="w-8 h-8 rounded-lg bg-amber-600 text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    <ShoppingBag className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold">ສ້າງອໍເດີ</span>
                </button>
              </Link>
              <Link href="/product-type/create" className="contents">
                <button className="p-3 bg-gradient-to-br from-purple-50 to-pink-50/50 dark:from-purple-950/30 dark:to-pink-950/20 text-purple-700 dark:text-purple-300 rounded-xl hover:shadow-md hover:border-purple-200 transition-all border border-purple-100/60 dark:border-purple-900/30 flex flex-col items-center gap-1.5 w-full cursor-pointer group">
                  <div className="w-8 h-8 rounded-lg bg-purple-600 text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    <Layers className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold">ສ້າງໝວດໝູ່</span>
                </button>
              </Link>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-teal-950 p-5 rounded-2xl text-white relative overflow-hidden shadow-xl border border-gray-800">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-1.5 bg-teal-500/20 text-teal-300 text-[10px] font-bold px-2 py-0.5 rounded-full mb-2 border border-teal-500/30">
                <Sparkles className="w-3 h-3" />
                <span>PRO MEMBERSHIP</span>
              </div>
              <h3 className="font-bold text-base mb-1">ອັບເກຣດແຜນທຸລະກິດ</h3>
              <p className="text-gray-400 text-xs mb-4 leading-relaxed">
                ປົດລັອກການວິເຄາະ AI ຂັ້ນສູງ ແລະ ການສົ່ງອອກຂໍ້ມູນແບບ Real-time.
              </p>
              <button className="w-full py-2 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-lg shadow-teal-600/30 active:scale-[0.98] cursor-pointer">
                <span>ອັບເກຣດດຽວນີ້</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="absolute top-0 right-0 -mr-6 -mt-6 w-32 h-32 bg-teal-500/20 rounded-full blur-2xl pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
