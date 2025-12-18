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
} from "lucide-react";

const ReportsPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const reportCards = [
    {
      title: "ລາຍງານສິນຄ້າ",
      desc: "ສະຫຼຸບຈຳນວນສິນຄ້າ ແລະ ສະຕັອກ",
      value: "1,240",
      unit: "ລາຍການ",
      trend: "+12%",
      trendUp: true,
      icon: ShoppingBag,
      color: "teal",
      href: "/product",
    },
    {
      title: "ລາຍງານການສັ່ງຊື້",
      desc: "ຍອດຂາຍ ແລະ ລາຍການສັ່ງຊື້",
      value: "45.2M",
      unit: "ກີບ",
      trend: "+8.5%",
      trendUp: true,
      icon: TrendingUp,
      color: "blue",
      href: "/orders",
    },
    {
      title: "ລາຍງານຜູ້ໃຊ້ງານ",
      desc: "ຈຳນວນຜູ້ໃຊ້ ແລະ ການເຄື່ອນໄຫວ",
      value: "850",
      unit: "ຄົນ",
      trend: "+5.2%",
      trendUp: true,
      icon: Users,
      color: "purple",
      href: "/users",
    },
    {
      title: "ປະເພດສິນຄ້າ",
      desc: "ການແບ່ງໝວດໝູ່ສິນຄ້າ",
      value: "24",
      unit: "ໝວດ",
      trend: "0%",
      trendUp: true,
      icon: Layers,
      color: "orange",
      href: "/product-type",
    },
    {
      title: "ຜູ້ດູແລລະບົບ",
      desc: "ການຈັດການສິດ ແລະ ຜູ້ດູແລ",
      value: "12",
      unit: "ຄົນ",
      trend: "+1",
      trendUp: true,
      icon: ShieldCheck,
      color: "red",
      href: "/admins",
    },
    {
      title: "ປະເພດສິດ",
      desc: "ບົດບາດ ແລະ ການກຳນົດສິດ",
      value: "6",
      unit: "ບົດບາດ",
      trend: "ຄົງທີ່",
      trendUp: true,
      icon: ShieldCheck,
      color: "indigo",
      href: "/roles",
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

      {/* Report Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reportCards.map((card, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-900 rounded-[32px] border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:shadow-teal-500/5 transition-all group overflow-hidden"
          >
            <div className="p-8 space-y-6">
              <div className="flex items-start justify-between">
                <div
                  className={`w-14 h-14 rounded-2xl bg-${card.color}-50 dark:bg-${card.color}-900/20 flex items-center justify-center text-${card.color}-600 border border-${card.color}-100 dark:border-${card.color}-900/30 shadow-inner`}
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
                <p className="text-xs text-gray-400 mt-2">{card.desc}</p>
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

        {/* Quick Stats */}
        <div className="space-y-6">
          <div className="bg-teal-600 rounded-[32px] p-8 text-white shadow-lg shadow-teal-100 dark:shadow-none relative overflow-hidden group">
            <div className="relative z-10">
              <p className="text-teal-100 text-sm font-medium">
                ຍອດຂາຍລວມເດືອນນີ້
              </p>
              <h3 className="text-3xl font-bold mt-2">125,450,000 ກີບ</h3>
              <div className="mt-6 flex items-center gap-2 text-xs font-bold bg-white/20 w-fit px-3 py-1.5 rounded-full">
                <ArrowUpRight className="w-3 h-3" />
                <span>ເພີ່ມຂຶ້ນ 15% ຈາກເດືອນກ່ອນ</span>
              </div>
            </div>
            <BarChart3 className="absolute -right-4 -bottom-4 w-32 h-32 text-white/10 group-hover:scale-110 transition-transform duration-500" />
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-[32px] border border-gray-100 dark:border-gray-800 shadow-sm p-8">
            <h4 className="font-bold text-gray-800 dark:text-white mb-6">
              ເປົ້າໝາຍການຂາຍ
            </h4>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-500">ເປົ້າໝາຍເດືອນນີ້</span>
                  <span className="font-bold text-gray-800 dark:text-white">
                    75%
                  </span>
                </div>
                <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-teal-600 rounded-full w-[75%]" />
                </div>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                ທ່ານຍັງຕ້ອງການອີກ 25,000,000 ກີບ ເພື່ອບັນລຸເປົ້າໝາຍທີ່ຕັ້ງໄວ້.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;
