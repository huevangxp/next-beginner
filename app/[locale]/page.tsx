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
  MoreVertical,
  Plus,
} from "lucide-react";

import FinancialChart from "../components/FinancialChart";
import { useTranslations } from "next-intl";
import { Link } from "../../i18n/routing";

const DashboardPage = () => {
  const t = useTranslations("Dashboard");
  const navT = useTranslations("Navigation");

  const stats = [
    {
      title: t("stats.totalRevenue"),
      value: "$45,231.89",
      change: "+20.1%",
      isPositive: true,
      icon: DollarSign,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      title: t("stats.activeUsers"),
      value: "+2,350",
      change: "+180.1%",
      isPositive: true,
      icon: Users,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      title: t("stats.newOrders"),
      value: "+12,234",
      change: "+19%",
      isPositive: true,
      icon: ShoppingBag,
      color: "text-teal-600",
      bg: "bg-teal-50",
    },
    {
      title: t("stats.growthRate"),
      value: "24.5%",
      change: "-4.5%",
      isPositive: false,
      icon: TrendingUp,
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
  ];

  const recentActivity = [
    {
      id: 1,
      user: "Alex Morgan",
      action: "ຊື້ຫູຟັງໄຮ້ສາຍ",
      time: `2 ${t("minutesAgo")}`,
      amount: "$59.99",
    },
    {
      id: 2,
      user: "Sarah Chen",
      action: "ອັບເດດຮູບໂປຣໄຟລ໌",
      time: `15 ${t("minutesAgo")}`,
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
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            {t("title")}
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            {t("welcome")} {t("description")}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl text-sm font-medium text-gray-600 dark:text-gray-400 shadow-sm">
            <Clock className="w-4 h-4" />
            <span>
              {t("lastUpdated")}: 5 {t("minutesAgo")}
            </span>
          </div>
          <button className="px-4 py-2 bg-teal-600 text-white rounded-xl text-sm font-bold hover:bg-teal-700 transition-all shadow-lg shadow-teal-100">
            {t("downloadReport")}
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.title}
              className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`${stat.bg} dark:bg-opacity-10 ${stat.color} p-3 rounded-xl`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <div
                  className={`flex items-center gap-1 text-sm font-bold ${
                    stat.isPositive ? "text-emerald-600" : "text-red-600"
                  }`}
                >
                  {stat.isPositive ? (
                    <ArrowUpRight className="w-4 h-4" />
                  ) : (
                    <ArrowDownRight className="w-4 h-4" />
                  )}
                  {stat.change}
                </div>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">
                {stat.title}
              </p>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-1">
                {stat.value}
              </h3>
            </div>
          );
        })}
      </div>

      {/* Financial Chart */}
      <FinancialChart />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activity Table */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-50 dark:border-gray-800 flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-800 dark:text-white">
              {t("recentActivity.title")}
            </h2>
            <button className="text-teal-600 text-sm font-bold hover:underline">
              {t("recentActivity.viewAll")}
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/50 dark:bg-gray-800/50">
                  <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">
                    {t("recentActivity.user")}
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">
                    {t("recentActivity.activity")}
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">
                    {t("recentActivity.time")}
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">
                    {t("recentActivity.amount")}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 dark:divide-gray-800">
                {recentActivity.map((activity) => (
                  <tr
                    key={activity.id}
                    className="hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center text-teal-700 dark:text-teal-400 font-bold text-xs">
                          {activity.user.charAt(0)}
                        </div>
                        <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
                          {activity.user}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                      {activity.action}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-400 dark:text-gray-500">
                      {activity.time}
                    </td>
                    <td className="px-6 py-4 text-sm font-bold text-gray-800 dark:text-gray-200">
                      {activity.amount || "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions / Summary */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
            <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-4">
              {t("quickActions.title")}
            </h2>
            <div className="grid grid-cols-2 gap-3">
              <button className="p-4 bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-400 rounded-xl hover:bg-teal-100 dark:hover:bg-teal-900/30 transition-all flex flex-col items-center gap-2">
                <Plus className="w-5 h-5" />
                <span className="text-xs font-bold">
                  {t("quickActions.addProduct")}
                </span>
              </button>
              <button className="p-4 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all flex flex-col items-center gap-2">
                <Users className="w-5 h-5" />
                <span className="text-xs font-bold">
                  {t("quickActions.addUser")}
                </span>
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl text-white relative overflow-hidden shadow-xl">
            <div className="relative z-10">
              <h3 className="font-bold text-lg mb-2">{t("upgrade.title")}</h3>
              <p className="text-gray-400 text-sm mb-6">
                {t("upgrade.description")}
              </p>
              <button className="w-full py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-xl font-bold transition-all">
                {t("upgrade.button")}
              </button>
            </div>
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
