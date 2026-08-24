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
      icon: DollarSign,
      color: "text-emerald-600 dark:text-emerald-400",
      bg: "bg-emerald-50 dark:bg-emerald-900/20",
    },
    {
      title: "ລູກຄ້າ",
      value: "+2,350",
      change: "+180.1%",
      isPositive: true,
      icon: Users,
      color: "text-blue-600 dark:text-blue-400",
      bg: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      title: "ຄຳສັ່ງຊື້ໃໝ່",
      value: "+12,234",
      change: "+19%",
      isPositive: true,
      icon: ShoppingBag,
      color: "text-teal-600 dark:text-teal-400",
      bg: "bg-teal-50 dark:bg-teal-900/20",
    },
    {
      title: "ອັດຕາການເຕີບໂຕ",
      value: "24.5%",
      change: "-4.5%",
      isPositive: false,
      icon: TrendingUp,
      color: "text-purple-600 dark:text-purple-400",
      bg: "bg-purple-50 dark:bg-purple-900/20",
    },
  ];

  const recentActivity = [
    {
      id: 1,
      user: "Alex Morgan",
      action: "ຊື້ຫູຟັງໄຮ້ສາຍ",
      time: "2 ນາທີກ່ອນ",
      amount: "$59.99",
    },
    {
      id: 2,
      user: "Sarah Chen",
      action: "ອັບເດດຮູບໂປຣໄຟລ໌",
      time: "15 ນາທີກ່ອນ",
      amount: null,
    },
    {
      id: 3,
      user: "James Wilson",
      action: "ສະໝັກສະມາຊິກໃໝ່: Pro Plan",
      time: "1 hr ago",
      amount: "$199.00",
    },
    {
      id: 4,
      user: "Elena Rodriguez",
      action: "ຊື້ໂມງອັດສະລິຍະ",
      time: "3 hrs ago",
      amount: "$129.99",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
            ພາບລວມລະບົບ
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mt-0.5">
            ຍິນດີຕ້ອນຮັບ, ຜູ້ດູແລລະບົບ! ນີ້ແມ່ນສິ່ງທີ່ເກີດຂຶ້ນໃນມື້ນີ້.
          </p>
        </div>
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl text-xs font-medium text-gray-600 dark:text-gray-400 shadow-sm">
            <Clock className="w-3.5 h-3.5" />
            <span>ອັບເດດຫຼ້າສຸດ: 5 ນາທີກ່ອນ</span>
          </div>
          <button className="px-3.5 py-1.5 bg-teal-600 text-white rounded-xl text-xs font-semibold hover:bg-teal-700 transition-all shadow-md shadow-teal-600/20 active:scale-[0.99] cursor-pointer">
            ດາວໂຫຼດລາຍງານ
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.title}
              className="bg-white dark:bg-gray-900 p-5 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <div
                  className={`${stat.bg} ${stat.color} p-2.5 rounded-xl`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div
                  className={`flex items-center gap-0.5 text-xs font-bold ${
                    stat.isPositive ? "text-emerald-600 dark:text-emerald-400" : "text-red-600 dark:text-red-400"
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
              <p className="text-gray-500 dark:text-gray-400 text-xs font-medium">
                {stat.title}
              </p>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mt-1 tracking-tight">
                {stat.value}
              </h3>
            </div>
          );
        })}
      </div>

      {/* Financial Chart */}
      <FinancialChart />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity Table */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between">
            <h2 className="text-base font-bold text-gray-800 dark:text-white">
              ກິດຈະກຳຫຼ້າສຸດ
            </h2>
            <button className="text-teal-600 dark:text-teal-400 text-xs font-semibold hover:underline">
              ເບິ່ງທັງໝົດ
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/75 dark:bg-gray-800/50">
                  <th className="px-5 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                    ລູກຄ້າ
                  </th>
                  <th className="px-5 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                    ກິດຈະກຳ
                  </th>
                  <th className="px-5 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                    ເວລາ
                  </th>
                  <th className="px-5 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                    ຈຳນວນ
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800 text-xs sm:text-sm">
                {recentActivity.map((activity) => (
                  <tr
                    key={activity.id}
                    className="hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors"
                  >
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center text-teal-700 dark:text-teal-400 font-bold text-xs">
                          {activity.user.charAt(0)}
                        </div>
                        <span className="font-semibold text-gray-700 dark:text-gray-300 text-xs sm:text-sm">
                          {activity.user}
                        </span>
                      </div>
                    </td>
                    <td className="px-5 py-3.5 text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                      {activity.action}
                    </td>
                    <td className="px-5 py-3.5 text-gray-400 dark:text-gray-500 text-xs">
                      {activity.time}
                    </td>
                    <td className="px-5 py-3.5 font-bold text-gray-800 dark:text-gray-200 text-xs sm:text-sm">
                      {activity.amount || "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions / Summary */}
        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
            <h2 className="text-base font-bold text-gray-800 dark:text-white mb-3">
              ຈັດການດ່ວນ
            </h2>
            <div className="grid grid-cols-2 gap-2.5">
              <Link href="/product/create" className="contents">
                <button className="p-3.5 bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-400 rounded-xl hover:bg-teal-100 dark:hover:bg-teal-900/30 transition-all flex flex-col items-center gap-1.5 w-full cursor-pointer">
                  <Plus className="w-4 h-4" />
                  <span className="text-xs font-semibold">ເພີ່ມສິນຄ້າ</span>
                </button>
              </Link>
              <Link href="/customers/create" className="contents">
                <button className="p-3.5 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all flex flex-col items-center gap-1.5 w-full cursor-pointer">
                  <Users className="w-4 h-4" />
                  <span className="text-xs font-semibold">ເພີ່ມລູກຄ້າ</span>
                </button>
              </Link>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-5 rounded-2xl text-white relative overflow-hidden shadow-lg">
            <div className="relative z-10">
              <h3 className="font-bold text-base mb-1">ອັບເກຣດ Pro Plan</h3>
              <p className="text-gray-400 text-xs mb-4">
                ເຂົ້າເຖິງການວິເຄາະຂັ້ນສູງ ແລະ ສິນຄ້າບໍ່ຈຳກັດ.
              </p>
              <button className="w-full py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer">
                <span>ອັບເກຣດດຽວນີ້</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="absolute top-0 right-0 -mr-6 -mt-6 w-28 h-28 bg-teal-500/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
