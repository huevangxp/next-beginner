"use client";

import React, { useState, useEffect } from "react";
import {
  BarChart3,
  TrendingUp,
  ShoppingBag,
  Users,
  ShieldCheck,
  Layers,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  Download,
  ChevronRight,
  Package,
  DollarSign,
} from "lucide-react";
import Link from "next/link";
import {
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  CartesianGrid,
} from "recharts";
import {
  REPORTS_WEEKLY_DATA,
  REPORTS_CARDS_MOCK_DATA,
  REPORTS_RECENT_ACTIVITY,
} from "../constants";

const ReportsPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const weeklyData = REPORTS_WEEKLY_DATA;
  const reportCards = REPORTS_CARDS_MOCK_DATA;
  const recentActivity = REPORTS_RECENT_ACTIVITY;

  if (!mounted) return null;

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
            ສູນລວມລາຍງານ
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mt-0.5">
            ຕິດຕາມ ແລະ ວິເຄາະຂໍ້ມູນທັງໝົດໃນລະບົບຂອງທ່ານ
          </p>
        </div>
        <div className="flex items-center gap-2.5">
          <button className="flex items-center gap-1.5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
            <Calendar className="w-4 h-4 text-teal-600" />
            <span>7 ວັນຜ່ານມາ</span>
          </button>
          <button className="flex items-center gap-1.5 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-md shadow-teal-600/20 active:scale-[0.98] cursor-pointer">
            <Download className="w-4 h-4" />
            <span>ສົ່ງອອກລາຍງານ</span>
          </button>
        </div>
      </div>

      {/* Summary Money at Top */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-gradient-to-br from-teal-700 via-teal-600 to-teal-800 rounded-2xl p-5 sm:p-6 text-white shadow-lg shadow-teal-700/20 relative overflow-hidden group">
          <div className="relative z-10 flex flex-col md:flex-row justify-between gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-teal-100 text-xs font-medium">
                    ຍອດຂາຍລວມເດືອນນີ້
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-black tracking-tight">125,450,000 ກີບ</h3>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-bold bg-white/20 backdrop-blur-md w-fit px-3 py-1 rounded-full">
                <ArrowUpRight className="w-3.5 h-3.5" />
                <span>ເພີ່ມຂຶ້ນ 15% ຈາກເດືອນກ່ອນ</span>
              </div>
              <p className="text-teal-100/90 text-xs max-w-md leading-relaxed">
                ຜົນການດຳເນີນງານໃນເດືອນນີ້ດີກວ່າເປົ້າໝາຍທີ່ຕັ້ງໄວ້ 5%. ລະບົບກຳລັງເຕີບໂຕຢ່າງຕໍ່ເນື່ອງ.
              </p>
            </div>
            <div className="w-full md:w-56 h-28">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={weeklyData}>
                  <defs>
                    <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ffffff" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#ffffff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#ffffff"
                    fillOpacity={1}
                    fill="url(#colorVal)"
                    strokeWidth={2.5}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-5 sm:p-6 flex flex-col justify-center">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-bold text-gray-900 dark:text-white text-sm">
              ເປົ້າໝາຍການຂາຍ
            </h4>
            <span className="text-teal-600 dark:text-teal-400 font-black text-sm">75%</span>
          </div>
          <div className="space-y-4">
            <div className="h-3 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-teal-500 to-teal-600 rounded-full w-[75%]" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-800">
                <p className="text-[10px] text-gray-400 uppercase font-bold mb-0.5">
                  ຍັງເຫຼືອ
                </p>
                <p className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
                  25M ກີບ
                </p>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-800">
                <p className="text-[10px] text-gray-400 uppercase font-bold mb-0.5">
                  ກຳນົດເວລາ
                </p>
                <p className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
                  12 ວັນ
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Report Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {reportCards.map((card, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all group overflow-hidden"
          >
            <div className="p-5 space-y-4">
              <div className="flex items-start justify-between">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shadow-sm"
                  style={{
                    backgroundColor: `${card.color}15`,
                    color: card.color,
                  }}
                >
                  <card.icon className="w-5 h-5" />
                </div>
                <div
                  className={`flex items-center gap-0.5 px-2 py-0.5 rounded-full text-[10px] font-bold ${
                    card.trendUp
                      ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400"
                      : "bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-400"
                  }`}
                >
                  {card.trendUp ? (
                    <ArrowUpRight className="w-3 h-3" />
                  ) : (
                    <ArrowDownRight className="w-3 h-3" />
                  )}
                  {card.trend}
                </div>
              </div>

              <div className="flex justify-between items-end">
                <div>
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                    {card.title}
                  </p>
                  <div className="flex items-baseline gap-1.5 mt-0.5">
                    <h3 className="text-2xl font-black text-gray-900 dark:text-white tracking-tight">
                      {card.value}
                    </h3>
                    <span className="text-xs font-medium text-gray-400">
                      {card.unit}
                    </span>
                  </div>
                </div>
                <div className="w-20 h-10">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={card.data}>
                      <Bar dataKey="val" radius={[2, 2, 0, 0]}>
                        {card.data.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={card.color}
                            fillOpacity={
                              index === card.data.length - 1 ? 1 : 0.4
                            }
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="pt-3 border-t border-gray-100 dark:border-gray-800">
                <Link
                  href={card.href}
                  className="flex items-center justify-between text-xs font-semibold text-teal-600 dark:text-teal-400 hover:text-teal-700 transition-colors"
                >
                  <span>ເບິ່ງລາຍລະອຽດ</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Activity & Weekly Trend Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between">
            <h3 className="text-sm font-bold text-gray-900 dark:text-white">
              ການເຄື່ອນໄຫວຫຼ້າສຸດ
            </h3>
            <button className="text-xs font-semibold text-teal-600 dark:text-teal-400 hover:text-teal-700 cursor-pointer">
              ເບິ່ງທັງໝົດ
            </button>
          </div>
          <div className="p-3">
            <div className="space-y-1">
              {recentActivity.map((act) => (
                <div
                  key={act.id}
                  className="flex items-center gap-3 p-2.5 hover:bg-gray-50 dark:hover:bg-gray-800/40 rounded-xl transition-all group"
                >
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      act.status === "success"
                        ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40"
                        : act.status === "warning"
                        ? "bg-amber-50 text-amber-600 dark:bg-amber-950/40"
                        : act.status === "info"
                        ? "bg-blue-50 text-blue-600 dark:bg-blue-950/40"
                        : "bg-gray-50 text-gray-600 dark:bg-gray-800"
                    }`}
                  >
                    <Package className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-bold text-gray-900 dark:text-white">
                      {act.title}
                    </p>
                    <p className="text-[11px] text-gray-400">{act.time}</p>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-teal-600 transition-all" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Weekly Trend Chart */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-5">
          <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-4">
            ແນວໂນ້ມລາຍອາທິດ
          </h3>
          <div className="h-56 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#f1f5f9"
                />
                <XAxis
                  dataKey="day"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 11, fill: "#94a3b8" }}
                  dy={6}
                />
                <Tooltip
                  cursor={{ fill: "#f8fafc" }}
                  contentStyle={{
                    borderRadius: "12px",
                    border: "none",
                    boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
                    fontSize: "12px",
                  }}
                />
                <Bar
                  dataKey="value"
                  fill="#0d9488"
                  radius={[4, 4, 0, 0]}
                  barSize={20}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;
