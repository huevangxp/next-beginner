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
  Filter,
  ChevronRight,
  Package,
  DollarSign,
} from "lucide-react";
import Link from "next/link";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
} from "recharts";

const ReportsPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Mock data for charts
  const weeklyData = [
    { day: "Mon", value: 400 },
    { day: "Tue", value: 300 },
    { day: "Wed", value: 600 },
    { day: "Thu", value: 800 },
    { day: "Fri", value: 500 },
    { day: "Sat", value: 900 },
    { day: "Sun", value: 700 },
  ];

  const reportCards = [
    {
      title: "ລາຍງານສິນຄ້າ",
      desc: "ສະຫຼຸບຈຳນວນສິນຄ້າ ແລະ ສະຕັອກ",
      value: "1,240",
      unit: "ລາຍການ",
      trend: "+12%",
      trendUp: true,
      icon: ShoppingBag,
      color: "#0d9488", // teal-600
      href: "/product",
      data: [
        { name: "W1", val: 40 },
        { name: "W2", val: 30 },
        { name: "W3", val: 60 },
        { name: "W4", val: 45 },
      ],
    },
    {
      title: "ລາຍງານການສັ່ງຊື້",
      desc: "ຍອດຂາຍ ແລະ ລາຍການສັ່ງຊື້",
      value: "45.2M",
      unit: "ກີບ",
      trend: "+8.5%",
      trendUp: true,
      icon: TrendingUp,
      color: "#2563eb", // blue-600
      href: "/orders",
      data: [
        { name: "W1", val: 20 },
        { name: "W2", val: 45 },
        { name: "W3", val: 30 },
        { name: "W4", val: 55 },
      ],
    },
    {
      title: "ລາຍງານຜູ້ໃຊ້ງານ",
      desc: "ຈຳນວນຜູ້ໃຊ້ ແລະ ການເຄື່ອນໄຫວ",
      value: "850",
      unit: "ຄົນ",
      trend: "+5.2%",
      trendUp: true,
      icon: Users,
      color: "#9333ea", // purple-600
      href: "/users",
      data: [
        { name: "W1", val: 10 },
        { name: "W2", val: 25 },
        { name: "W3", val: 20 },
        { name: "W4", val: 35 },
      ],
    },
    {
      title: "ປະເພດສິນຄ້າ",
      desc: "ການແບ່ງໝວດໝູ່ສິນຄ້າ",
      value: "24",
      unit: "ໝວດ",
      trend: "0%",
      trendUp: true,
      icon: Layers,
      color: "#ea580c", // orange-600
      href: "/product-type",
      data: [
        { name: "W1", val: 5 },
        { name: "W2", val: 5 },
        { name: "W3", val: 8 },
        { name: "W4", val: 8 },
      ],
    },
    {
      title: "ຜູ້ດູແລລະບົບ",
      desc: "ການຈັດການສິດ ແລະ ຜູ້ດູແລ",
      value: "12",
      unit: "ຄົນ",
      trend: "+1",
      trendUp: true,
      icon: ShieldCheck,
      color: "#dc2626", // red-600
      href: "/admins",
      data: [
        { name: "W1", val: 2 },
        { name: "W2", val: 2 },
        { name: "W3", val: 3 },
        { name: "W4", val: 3 },
      ],
    },
    {
      title: "ປະເພດສິດ",
      desc: "ບົດບາດ ແລະ ການກຳນົດສິດ",
      value: "6",
      unit: "ບົດບາດ",
      trend: "ຄົງທີ່",
      trendUp: true,
      icon: ShieldCheck,
      color: "#4f46e5", // indigo-600
      href: "/roles",
      data: [
        { name: "W1", val: 4 },
        { name: "W2", val: 4 },
        { name: "W3", val: 4 },
        { name: "W4", val: 4 },
      ],
    },
  ];

  const recentActivity = [
    {
      id: 1,
      type: "Order",
      title: "New Order #ORD-005",
      time: "2 mins ago",
      status: "pending",
    },
    {
      id: 2,
      type: "User",
      title: "New User Registered",
      time: "15 mins ago",
      status: "success",
    },
    {
      id: 3,
      type: "Product",
      title: "iPhone 15 Pro stock updated",
      time: "1 hour ago",
      status: "info",
    },
    {
      id: 4,
      type: "Admin",
      title: "Admin role changed for Keo",
      time: "3 hours ago",
      status: "warning",
    },
  ];

  if (!mounted) return null;

  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            ສູນລວມລາຍງານ
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            ຕິດຕາມ ແລະ ວິເຄາະຂໍ້ມູນທັງໝົດໃນລະບົບຂອງທ່ານ
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-5 py-3 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl text-sm font-bold text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all shadow-sm">
            <Calendar className="w-4 h-4" />
            <span>7 ວັນຜ່ານມາ</span>
          </button>
          <button className="flex items-center gap-2 px-5 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-2xl text-sm font-bold transition-all shadow-lg shadow-teal-100 dark:shadow-none">
            <Download className="w-4 h-4" />
            <span>ສົ່ງອອກລາຍງານ</span>
          </button>
        </div>
      </div>

      {/* Summary Money at Top */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-teal-600 rounded-[32px] p-8 text-white shadow-lg shadow-teal-100 dark:shadow-none relative overflow-hidden group">
          <div className="relative z-10 flex flex-col md:flex-row justify-between gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                  <DollarSign className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-teal-100 text-sm font-medium">
                    ຍອດຂາຍລວມເດືອນນີ້
                  </p>
                  <h3 className="text-4xl font-bold">125,450,000 ກີບ</h3>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold bg-white/20 w-fit px-4 py-2 rounded-full">
                <ArrowUpRight className="w-4 h-4" />
                <span>ເພີ່ມຂຶ້ນ 15% ຈາກເດືອນກ່ອນ</span>
              </div>
              <p className="text-teal-100/80 text-sm max-w-md">
                ຜົນການດຳເນີນງານໃນເດືອນນີ້ດີກວ່າເປົ້າໝາຍທີ່ຕັ້ງໄວ້ 5%.
                ລະບົບກຳລັງເຕີບໂຕຢ່າງຕໍ່ເນື່ອງ.
              </p>
            </div>
            <div className="w-full md:w-64 h-32">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={weeklyData}>
                  <defs>
                    <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ffffff" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#ffffff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#ffffff"
                    fillOpacity={1}
                    fill="url(#colorVal)"
                    strokeWidth={3}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
          <BarChart3 className="absolute -right-8 -bottom-8 w-48 h-48 text-white/5 group-hover:scale-110 transition-transform duration-700" />
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-[32px] border border-gray-100 dark:border-gray-800 shadow-sm p-8 flex flex-col justify-center">
          <div className="flex items-center justify-between mb-6">
            <h4 className="font-bold text-gray-800 dark:text-white">
              ເປົ້າໝາຍການຂາຍ
            </h4>
            <span className="text-teal-600 font-bold">75%</span>
          </div>
          <div className="space-y-6">
            <div className="h-4 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
              <div className="h-full bg-teal-600 rounded-full w-[75%] animate-pulse" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl">
                <p className="text-[10px] text-gray-400 uppercase font-bold mb-1">
                  ຍັງເຫຼືອ
                </p>
                <p className="text-sm font-bold text-gray-700 dark:text-gray-200">
                  25M ກີບ
                </p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl">
                <p className="text-[10px] text-gray-400 uppercase font-bold mb-1">
                  ກຳນົດເວລາ
                </p>
                <p className="text-sm font-bold text-gray-700 dark:text-gray-200">
                  12 ວັນ
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Report Cards Grid with Mini Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reportCards.map((card, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-900 rounded-[32px] border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:shadow-teal-500/5 transition-all group overflow-hidden"
          >
            <div className="p-8 space-y-6">
              <div className="flex items-start justify-between">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-inner border"
                  style={{
                    backgroundColor: `${card.color}10`,
                    color: card.color,
                    borderColor: `${card.color}20`,
                  }}
                >
                  <card.icon className="w-7 h-7" />
                </div>
                <div
                  className={`flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-bold ${
                    card.trendUp
                      ? "bg-emerald-50 text-emerald-600"
                      : "bg-red-50 text-red-600"
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
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {card.title}
                  </p>
                  <div className="flex items-baseline gap-2 mt-1">
                    <h3 className="text-3xl font-bold text-gray-800 dark:text-white">
                      {card.value}
                    </h3>
                    <span className="text-sm font-bold text-gray-400">
                      {card.unit}
                    </span>
                  </div>
                </div>
                {/* Mini Chart per Week */}
                <div className="w-24 h-12">
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

              <div className="pt-6 border-t border-gray-50 dark:border-gray-800">
                <Link
                  href={card.href}
                  className="flex items-center justify-between text-sm font-bold text-teal-600 hover:text-teal-700 transition-colors"
                >
                  <span>ເບິ່ງລາຍລະອຽດ</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-900 rounded-[32px] border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden">
          <div className="p-8 border-b border-gray-50 dark:border-gray-800 flex items-center justify-between">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">
              ການເຄື່ອນໄຫວຫຼ້າສຸດ
            </h3>
            <button className="text-sm font-bold text-teal-600 hover:text-teal-700">
              ເບິ່ງທັງໝົດ
            </button>
          </div>
          <div className="p-4">
            <div className="space-y-2">
              {recentActivity.map((act) => (
                <div
                  key={act.id}
                  className="flex items-center gap-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-2xl transition-all group"
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      act.status === "success"
                        ? "bg-emerald-50 text-emerald-600"
                        : act.status === "warning"
                        ? "bg-amber-50 text-amber-600"
                        : act.status === "info"
                        ? "bg-blue-50 text-blue-600"
                        : "bg-gray-50 text-gray-600"
                    }`}
                  >
                    <Package className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-gray-800 dark:text-white">
                      {act.title}
                    </p>
                    <p className="text-xs text-gray-400">{act.time}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-teal-600 transition-all" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Weekly Trend Chart */}
        <div className="bg-white dark:bg-gray-900 rounded-[32px] border border-gray-100 dark:border-gray-800 shadow-sm p-8">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
            ແນວໂນ້ມລາຍອາທິດ
          </h3>
          <div className="h-[300px] w-full">
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
                  tick={{ fontSize: 12, fill: "#94a3b8" }}
                  dy={10}
                />
                <Tooltip
                  cursor={{ fill: "#f8fafc" }}
                  contentStyle={{
                    borderRadius: "16px",
                    border: "none",
                    boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
                  }}
                />
                <Bar
                  dataKey="value"
                  fill="#0d9488"
                  radius={[6, 6, 0, 0]}
                  barSize={30}
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
