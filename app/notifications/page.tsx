"use client";

import React, { useState, useEffect } from "react";
import {
  Bell,
  ShoppingCart,
  Package,
  AlertTriangle,
  User,
  CheckCircle2,
  Clock,
  Search,
  Filter,
  Trash2,
  ChevronRight,
} from "lucide-react";

const NotificationsPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const notifications = [
    {
      id: 1,
      type: "order",
      title: "ລາຍການສັ່ງຊື້ໃໝ່ #ORD-005",
      desc: "ລູກຄ້າ ສົມພອນ ໄຊຍະວົງ ໄດ້ສັ່ງຊື້ iPhone 15 Pro",
      time: "2 ນາທີກ່ອນ",
      read: false,
      icon: ShoppingCart,
      color: "blue",
    },
    {
      id: 2,
      type: "stock",
      title: "ສິນຄ້າໃກ້ໝົດສະຕັອກ",
      desc: "Samsung Galaxy S23 Ultra ເຫຼືອພຽງ 2 ລາຍການໃນສາງ",
      time: "15 ນາທີກ່ອນ",
      read: false,
      icon: AlertTriangle,
      color: "amber",
    },
    {
      id: 3,
      type: "user",
      title: "ຜູ້ໃຊ້ໃໝ່ລົງທະບຽນ",
      desc: "ມີຜູ້ໃຊ້ໃໝ່ລົງທະບຽນເຂົ້າໃນລະບົບ",
      time: "1 ຊົ່ວໂມງກ່ອນ",
      read: true,
      icon: User,
      color: "purple",
    },
    {
      id: 4,
      type: "system",
      title: "ສຳຮອງຂໍ້ມູນສຳເລັດ",
      desc: "ລະບົບໄດ້ສຳຮອງຂໍ້ມູນປະຈຳວັນຮຽບຮ້ອຍແລ້ວ",
      time: "5 ຊົ່ວໂມງກ່ອນ",
      read: true,
      icon: CheckCircle2,
      color: "emerald",
    },
  ];

  if (!mounted) return null;

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white flex items-center gap-3">
            <Bell className="w-8 h-8 text-teal-600" />
            ການແຈ້ງເຕືອນ
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            ຕິດຕາມທຸກການເຄື່ອນໄຫວ ແລະ ການແຈ້ງເຕືອນຈາກລະບົບ
          </p>
        </div>
        <button className="text-sm font-bold text-teal-600 hover:text-teal-700 transition-colors">
          ໝາຍວ່າອ່ານແລ້ວທັງໝົດ
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-gray-900 p-4 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-2">
          {["ທັງໝົດ", "ຍັງບໍ່ໄດ້ອ່ານ", "ການສັ່ງຊື້", "ສາງສິນຄ້າ"].map(
            (tab, i) => (
              <button
                key={i}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                  i === 0
                    ? "bg-teal-50 text-teal-600 dark:bg-teal-900/20"
                    : "text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
              >
                {tab}
              </button>
            )
          )}
        </div>
        <button className="p-2 text-gray-400 hover:text-red-600 transition-colors">
          <Trash2 className="w-5 h-5" />
        </button>
      </div>

      {/* Notifications List */}
      <div className="space-y-4">
        {notifications.map((notif) => (
          <div
            key={notif.id}
            className={`p-6 rounded-[32px] border transition-all group flex items-start gap-6 ${
              notif.read
                ? "bg-white dark:bg-gray-900 border-gray-100 dark:border-gray-800 opacity-75"
                : "bg-white dark:bg-gray-900 border-teal-100 dark:border-teal-900/30 shadow-lg shadow-teal-500/5"
            }`}
          >
            <div
              className={`w-14 h-14 rounded-2xl shrink-0 flex items-center justify-center bg-${notif.color}-50 dark:bg-${notif.color}-900/20 text-${notif.color}-600`}
            >
              <notif.icon className="w-7 h-7" />
            </div>
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <h3
                  className={`font-bold ${
                    notif.read
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-gray-900 dark:text-white"
                  }`}
                >
                  {notif.title}
                </h3>
                <span className="text-xs text-gray-400 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {notif.time}
                </span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                {notif.desc}
              </p>
              {!notif.read && (
                <div className="pt-2">
                  <button className="text-xs font-bold text-teal-600 hover:underline">
                    ໝາຍວ່າອ່ານແລ້ວ
                  </button>
                </div>
              )}
            </div>
            <button className="p-2 text-gray-300 hover:text-gray-600 dark:hover:text-gray-400 opacity-0 group-hover:opacity-100 transition-all">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>

      {notifications.length === 0 && (
        <div className="py-20 text-center space-y-4">
          <div className="w-20 h-20 bg-gray-50 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto">
            <Bell className="w-10 h-10 text-gray-300" />
          </div>
          <p className="text-gray-500 font-medium">
            ບໍ່ມີການແຈ້ງເຕືອນໃນຂະນະນີ້
          </p>
        </div>
      )}
    </div>
  );
};

export default NotificationsPage;
