"use client";

import React, { useState, useEffect } from "react";
import {
  Bell,
  ShoppingCart,
  AlertTriangle,
  User,
  CheckCircle2,
  Clock,
  Trash2,
  ChevronRight,
  Check,
} from "lucide-react";

const NotificationsPage = () => {
  const [mounted, setMounted] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    setMounted(true);
  }, []);

  const [notificationList, setNotificationList] = useState([
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
  ]);

  const markAllAsRead = () => {
    setNotificationList((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const markAsRead = (id: number) => {
    setNotificationList((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const clearAll = () => {
    if (window.confirm("ທ່ານຕ້ອງການລຶບການແຈ້ງເຕືອນທັງໝົດແທ້ບໍ?")) {
      setNotificationList([]);
    }
  };

  const filteredNotifications = notificationList.filter((notif) => {
    if (activeFilter === "unread") return !notif.read;
    if (activeFilter === "order") return notif.type === "order";
    if (activeFilter === "stock") return notif.type === "stock";
    return true;
  });

  if (!mounted) return null;

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in duration-500">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center text-white shadow-sm">
              <Bell className="w-4 h-4" />
            </div>
            ການແຈ້ງເຕືອນ
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mt-0.5">
            ຕິດຕາມທຸກການເຄື່ອນໄຫວ ແລະ ການແຈ້ງເຕືອນຈາກລະບົບ
          </p>
        </div>
        <button
          onClick={markAllAsRead}
          className="flex items-center gap-1.5 text-xs font-semibold text-teal-600 dark:text-teal-400 hover:text-teal-700 cursor-pointer bg-teal-50 dark:bg-teal-950/40 px-3 py-1.5 rounded-xl border border-teal-200 dark:border-teal-900/30 transition-all w-fit"
        >
          <Check className="w-3.5 h-3.5" />
          <span>ໝາຍວ່າອ່ານແລ້ວທັງໝົດ</span>
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-gray-900 p-2.5 sm:p-3 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm flex items-center justify-between">
        <div className="flex flex-wrap items-center gap-1.5">
          {[
            { id: "all", label: "ທັງໝົດ" },
            { id: "unread", label: "ຍັງບໍ່ໄດ້ອ່ານ" },
            { id: "order", label: "ການສັ່ງຊື້" },
            { id: "stock", label: "ສາງສິນຄ້າ" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeFilter === tab.id
                  ? "bg-teal-600 text-white shadow-sm shadow-teal-600/20"
                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <button
          onClick={clearAll}
          className="p-1.5 text-gray-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-900/20 rounded-lg transition-colors cursor-pointer"
          title="ລຶບທັງໝົດ"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>

      {/* Notifications List */}
      <div className="space-y-3">
        {filteredNotifications.map((notif) => (
          <div
            key={notif.id}
            className={`p-4 rounded-2xl border transition-all group flex items-start gap-3.5 ${
              notif.read
                ? "bg-white dark:bg-gray-900 border-gray-100 dark:border-gray-800 opacity-80"
                : "bg-white dark:bg-gray-900 border-teal-200/70 dark:border-teal-900/50 shadow-sm"
            }`}
          >
            <div
              className={`w-10 h-10 rounded-xl shrink-0 flex items-center justify-center shadow-sm ${
                notif.color === "blue"
                  ? "bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400"
                  : notif.color === "amber"
                  ? "bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400"
                  : notif.color === "purple"
                  ? "bg-purple-50 text-purple-600 dark:bg-purple-950/40 dark:text-purple-400"
                  : "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400"
              }`}
            >
              <notif.icon className="w-5 h-5" />
            </div>
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h3
                    className={`text-xs sm:text-sm font-bold ${
                      notif.read
                        ? "text-gray-700 dark:text-gray-300"
                        : "text-gray-900 dark:text-white"
                    }`}
                  >
                    {notif.title}
                  </h3>
                  {!notif.read && (
                    <span className="w-2 h-2 rounded-full bg-teal-500" />
                  )}
                </div>
                <span className="text-[11px] text-gray-400 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {notif.time}
                </span>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                {notif.desc}
              </p>
              {!notif.read && (
                <div className="pt-1">
                  <button
                    onClick={() => markAsRead(notif.id)}
                    className="text-[11px] font-semibold text-teal-600 dark:text-teal-400 hover:underline cursor-pointer"
                  >
                    ໝາຍວ່າອ່ານແລ້ວ
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredNotifications.length === 0 && (
        <div className="py-16 text-center space-y-3 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800">
          <div className="w-12 h-12 bg-gray-50 dark:bg-gray-800 rounded-xl flex items-center justify-center mx-auto text-gray-400">
            <Bell className="w-6 h-6" />
          </div>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium">
            ບໍ່ມີການແຈ້ງເຕືອນໃນໝວດນີ້
          </p>
        </div>
      )}
    </div>
  );
};

export default NotificationsPage;
