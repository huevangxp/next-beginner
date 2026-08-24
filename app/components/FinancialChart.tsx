"use client";

import React, { useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { TrendingUp, ArrowUpRight, DollarSign, Wallet } from "lucide-react";

interface DataPoint {
  name: string;
  revenue: number;
  expenses: number;
}

const data6Months: DataPoint[] = [
  { name: "ມັງກອນ", revenue: 4200, expenses: 2400 },
  { name: "ກຸມພາ", revenue: 3800, expenses: 1800 },
  { name: "ມີນາ", revenue: 5100, expenses: 2600 },
  { name: "ເມສາ", revenue: 4700, expenses: 3100 },
  { name: "ພຶດສະພາ", revenue: 6200, expenses: 3400 },
  { name: "ມິຖຸນາ", revenue: 7400, expenses: 3900 },
];

const data1Year: DataPoint[] = [
  { name: "ມ.ກ.", revenue: 4200, expenses: 2400 },
  { name: "ກ.ພ.", revenue: 3800, expenses: 1800 },
  { name: "ມ.ນ.", revenue: 5100, expenses: 2600 },
  { name: "ມ.ສ.", revenue: 4700, expenses: 3100 },
  { name: "ພ.ພ.", revenue: 6200, expenses: 3400 },
  { name: "ມິ.ຖ.", revenue: 7400, expenses: 3900 },
  { name: "ກ.ລ.", revenue: 6900, expenses: 3700 },
  { name: "ສ.ຫ.", revenue: 8100, expenses: 4200 },
  { name: "ກ.ຍ.", revenue: 7800, expenses: 4000 },
  { name: "ຕ.ລ.", revenue: 8900, expenses: 4600 },
  { name: "ພ.ຈ.", revenue: 9400, expenses: 4900 },
  { name: "ທ.ວ.", revenue: 10800, expenses: 5200 },
];

// Custom Modern Glassmorphic Tooltip
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const revenue = payload[0]?.value || 0;
    const expenses = payload[1]?.value || 0;
    const net = revenue - expenses;

    return (
      <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-gray-100 dark:border-gray-800 p-3.5 rounded-2xl shadow-xl shadow-teal-900/10 min-w-[180px] space-y-2">
        <p className="text-xs font-bold text-gray-800 dark:text-gray-200 border-b border-gray-100 dark:border-gray-800 pb-1.5 flex items-center justify-between">
          <span>{label}</span>
          <span className="text-[10px] text-teal-600 dark:text-teal-400 font-semibold bg-teal-50 dark:bg-teal-900/30 px-1.5 py-0.5 rounded-md">
            ກຳໄລ: +${net.toLocaleString()}
          </span>
        </p>
        <div className="space-y-1.5 text-xs">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-teal-500 shadow-sm shadow-teal-500/50"></span>
              <span className="text-gray-500 dark:text-gray-400 font-medium">
                ລາຍຮັບ
              </span>
            </div>
            <span className="font-bold text-gray-900 dark:text-white">
              ${revenue.toLocaleString()}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-rose-400 shadow-sm shadow-rose-400/50"></span>
              <span className="text-gray-500 dark:text-gray-400 font-medium">
                ລາຍຈ່າຍ
              </span>
            </div>
            <span className="font-bold text-gray-900 dark:text-white">
              ${expenses.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

const FinancialChart = () => {
  const [mounted, setMounted] = useState(false);
  const [period, setPeriod] = useState<"6m" | "1y">("6m");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm h-[380px] flex items-center justify-center">
        <div className="w-7 h-7 border-2 border-teal-500/30 border-t-teal-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  const currentData = period === "6m" ? data6Months : data1Year;
  const totalRevenue = currentData.reduce((acc, curr) => acc + curr.revenue, 0);
  const totalExpenses = currentData.reduce((acc, curr) => acc + curr.expenses, 0);
  const netProfit = totalRevenue - totalExpenses;

  return (
    <div className="bg-white dark:bg-gray-900 p-5 sm:p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm relative overflow-hidden group">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-teal-500/5 dark:bg-teal-500/10 rounded-full blur-3xl pointer-events-none -z-0"></div>

      {/* Header & Controls */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center text-white shadow-md shadow-teal-500/20">
              <TrendingUp className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-gray-900 dark:text-white tracking-tight">
                ຜົນການດຳເນີນງານທາງການເງິນ
              </h2>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                ສະຖິຕິລາຍຮັບ ແລະ ລາຍຈ່າຍປະຈຳງວດ
              </p>
            </div>
          </div>
        </div>

        {/* Action Controls & Legend */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Legend Chips */}
          <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-800/60 p-1.5 rounded-xl border border-gray-100 dark:border-gray-800 text-xs">
            <div className="flex items-center gap-1.5 px-2 py-0.5">
              <span className="w-2 h-2 rounded-full bg-teal-500"></span>
              <span className="font-semibold text-gray-700 dark:text-gray-300">
                ລາຍຮັບ
              </span>
            </div>
            <div className="flex items-center gap-1.5 px-2 py-0.5">
              <span className="w-2 h-2 rounded-full bg-rose-400"></span>
              <span className="font-semibold text-gray-700 dark:text-gray-300">
                ລາຍຈ່າຍ
              </span>
            </div>
          </div>

          {/* Period Toggle */}
          <div className="flex items-center bg-gray-100 dark:bg-gray-800 p-1 rounded-xl text-xs font-semibold">
            <button
              onClick={() => setPeriod("6m")}
              className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                period === "6m"
                  ? "bg-white dark:bg-gray-900 text-teal-600 dark:text-teal-400 shadow-sm"
                  : "text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
              }`}
            >
              6 ເດືອນ
            </button>
            <button
              onClick={() => setPeriod("1y")}
              className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                period === "1y"
                  ? "bg-white dark:bg-gray-900 text-teal-600 dark:text-teal-400 shadow-sm"
                  : "text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
              }`}
            >
              1 ປີ
            </button>
          </div>
        </div>
      </div>

      {/* Top Metrics Cards */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
        <div className="bg-gradient-to-br from-teal-50/60 to-emerald-50/40 dark:from-teal-950/20 dark:to-emerald-950/10 p-3.5 rounded-xl border border-teal-100/60 dark:border-teal-900/30 flex items-center justify-between">
          <div>
            <p className="text-[11px] font-semibold text-teal-700 dark:text-teal-400 uppercase tracking-wider">
              ລາຍຮັບລວມ
            </p>
            <p className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mt-0.5">
              ${totalRevenue.toLocaleString()}
            </p>
          </div>
          <span className="text-xs font-bold text-emerald-600 bg-emerald-100/80 dark:bg-emerald-900/40 px-2 py-1 rounded-lg flex items-center gap-0.5">
            <ArrowUpRight className="w-3 h-3" /> +18.4%
          </span>
        </div>

        <div className="bg-gradient-to-br from-rose-50/60 to-orange-50/40 dark:from-rose-950/20 dark:to-orange-950/10 p-3.5 rounded-xl border border-rose-100/60 dark:border-rose-900/30 flex items-center justify-between">
          <div>
            <p className="text-[11px] font-semibold text-rose-700 dark:text-rose-400 uppercase tracking-wider">
              ລາຍຈ່າຍລວມ
            </p>
            <p className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mt-0.5">
              ${totalExpenses.toLocaleString()}
            </p>
          </div>
          <span className="text-xs font-bold text-rose-600 bg-rose-100/80 dark:bg-rose-900/40 px-2 py-1 rounded-lg">
            38.2% ຂອງລາຍຮັບ
          </span>
        </div>

        <div className="bg-gradient-to-br from-blue-50/60 to-indigo-50/40 dark:from-blue-950/20 dark:to-indigo-950/10 p-3.5 rounded-xl border border-blue-100/60 dark:border-blue-900/30 flex items-center justify-between">
          <div>
            <p className="text-[11px] font-semibold text-blue-700 dark:text-blue-400 uppercase tracking-wider">
              ກຳໄລສຸດທິ
            </p>
            <p className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mt-0.5">
              +${netProfit.toLocaleString()}
            </p>
          </div>
          <div className="w-7 h-7 rounded-lg bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 flex items-center justify-center font-bold text-xs">
            <Wallet className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Chart Canvas */}
      <div className="relative z-10 h-[270px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={currentData}
            margin={{
              top: 10,
              right: 10,
              left: -18,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="modernRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0d9488" stopOpacity={0.4} />
                <stop offset="70%" stopColor="#14b8a6" stopOpacity={0.08} />
                <stop offset="100%" stopColor="#14b8a6" stopOpacity={0.0} />
              </linearGradient>
              <linearGradient id="modernExpenses" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f43f5e" stopOpacity={0.35} />
                <stop offset="70%" stopColor="#fb7185" stopOpacity={0.05} />
                <stop offset="100%" stopColor="#fb7185" stopOpacity={0.0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="currentColor"
              className="text-gray-100 dark:text-gray-800"
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94a3b8", fontSize: 11, fontWeight: 500 }}
              dy={8}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94a3b8", fontSize: 11, fontWeight: 500 }}
              tickFormatter={(value) => `$${value}`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#0d9488"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#modernRevenue)"
              activeDot={{
                r: 6,
                fill: "#0d9488",
                stroke: "#ffffff",
                strokeWidth: 2.5,
              }}
            />
            <Area
              type="monotone"
              dataKey="expenses"
              stroke="#f43f5e"
              strokeWidth={2.5}
              fillOpacity={1}
              fill="url(#modernExpenses)"
              activeDot={{
                r: 5,
                fill: "#f43f5e",
                stroke: "#ffffff",
                strokeWidth: 2,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default FinancialChart;
