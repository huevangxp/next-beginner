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
import Pagination from "../components/Pagination";

const NotificationsPage = () => {
  const [mounted, setMounted] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

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
      desc: "ມີຜູ້ໃຊ້ໃໝ່ລົງທະບຽນເຂົ້າໃນລະບົບ: Keomany Chanthavong",
      time: "1 ຊົ່ວໂມງກ່ອນ",
      read: true,
      icon: User,
      color: "purple",
    },
    {
      id: 4,
      type: "system",
      title: "ສຳຮອງຂໍ້ມູນສຳເລັດ",
      desc: "ລະບົບໄດ້ສຳຮອງຂໍ້ມູນປະຈຳວັນຮຽບຮ້ອຍແລ້ວ (Auto Backup)",
      time: "5 ຊົ່ວໂມງກ່ອນ",
      read: true,
      icon: CheckCircle2,
      color: "emerald",
    },
    {
      id: 5,
      type: "order",
      title: "ລາຍການສັ່ງຊື້ສຳເລັດ #ORD-003",
      desc: "ລູກຄ້າ ບຸນມີ ພົມມະຈັນ ໄດ້ຮັບສິນຄ້າຮຽບຮ້ອຍແລ້ວ",
      time: "1 ມື້ກ່ອນ",
      read: true,
      icon: ShoppingCart,
      color: "blue",
    },
    {
      id: 6,
      type: "stock",
      title: "ສິນຄ້າໝົດສະຕັອກ: Sony WH-1000XM5",
      desc: "ສິນຄ້າໃນສາງໝົດແລ້ວ ກະລຸນາສັ່ງເພີ່ມດ່ວນ",
      time: "1 ມື້ກ່ອນ",
      read: true,
      icon: AlertTriangle,
      color: "amber",
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

  const totalPages = Math.ceil(filteredNotifications.length / itemsPerPage);
  const paginatedNotifications = filteredNotifications.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (!mounted) return null;

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center text-white shadow-sm">
              <Bell className="w-4 h-4" />
            </div>
            <span>ການແຈ້ງເຕືອນ</span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mt-0.5">
            ຕິດຕາມທຸກການເຄື່ອນໄຫວ ແລະ ການແຈ້ງເຕືອນຈາກລະບົບ
          </p>
        </div>
        <div className="flex items-center gap-2.5">
          <button
            onClick={markAllAsRead}
            className="flex items-center gap-1.5 text-xs font-semibold text-teal-600 dark:text-teal-400 hover:text-teal-700 cursor-pointer bg-teal-50 dark:bg-teal-950/40 px-3.5 py-2 rounded-xl border border-teal-200 dark:border-teal-900/30 transition-all w-fit"
          >
            <Check className="w-3.5 h-3.5" />
            <span>ໝາຍວ່າອ່ານແລ້ວທັງໝົດ</span>
          </button>
          {notificationList.length > 0 && (
            <button
              onClick={clearAll}
              className="flex items-center gap-1.5 text-xs font-semibold text-rose-600 dark:text-rose-400 hover:text-rose-700 cursor-pointer bg-rose-50 dark:bg-rose-950/40 px-3.5 py-2 rounded-xl border border-rose-200 dark:border-rose-900/30 transition-all"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>ລຶບທັງໝົດ</span>
            </button>
          )}
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-gray-900 p-2.5 sm:p-3 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm flex items-center justify-between">
        <div className="flex flex-wrap items-center gap-1.5">
          {[
            { id: "all", label: "ທັງໝົດ" },
            { id: "unread", label: "ຍັງບໍ່ໄດ້ອ່ານ" },
            { id: "order", label: "ອໍເດີສັ່ງຊື້" },
            { id: "stock", label: "ສະຕັອກສິນຄ້າ" },
          ].map((filter) => (
            <button
              key={filter.id}
              onClick={() => {
                setActiveFilter(filter.id);
                setCurrentPage(1);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeFilter === filter.id
                  ? "bg-teal-600 text-white shadow-md shadow-teal-600/20"
                  : "text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <span className="text-xs text-gray-400 font-medium hidden sm:inline-block">
          ທັງໝົດ {notificationList.length} ລາຍການ
        </span>
      </div>

      {/* Notifications List Card */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden divide-y divide-gray-100 dark:divide-gray-800">
        {paginatedNotifications.map((notif) => {
          const Icon = notif.icon;
          return (
            <div
              key={notif.id}
              onClick={() => markAsRead(notif.id)}
              className={`p-4 sm:p-5 flex items-start justify-between gap-4 transition-colors cursor-pointer group ${
                !notif.read
                  ? "bg-teal-50/40 dark:bg-teal-950/20 hover:bg-teal-50/70"
                  : "hover:bg-gray-50/70 dark:hover:bg-gray-800/40"
              }`}
            >
              <div className="flex items-start gap-3.5">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-sm ${
                    notif.color === "blue"
                      ? "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                      : notif.color === "amber"
                      ? "bg-amber-50 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400"
                      : notif.color === "emerald"
                      ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400"
                      : "bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>

                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <h3
                      className={`text-xs sm:text-sm font-bold ${
                        !notif.read
                          ? "text-gray-900 dark:text-white"
                          : "text-gray-700 dark:text-gray-300"
                      }`}
                    >
                      {notif.title}
                    </h3>
                    {!notif.read && (
                      <span className="w-2 h-2 rounded-full bg-teal-600 ring-2 ring-teal-200 dark:ring-teal-900" />
                    )}
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {notif.desc}
                  </p>
                  <p className="text-[11px] text-gray-400 flex items-center gap-1 pt-1">
                    <Clock className="w-3 h-3" />
                    <span>{notif.time}</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    markAsRead(notif.id);
                  }}
                  className="p-1.5 text-gray-400 hover:text-teal-600 hover:bg-white dark:hover:bg-gray-800 rounded-lg transition-all"
                  title="ໝາຍວ່າອ່ານແລ້ວ"
                >
                  <CheckCircle2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}

        {filteredNotifications.length === 0 && (
          <div className="py-16 text-center text-gray-400">
            <div className="w-14 h-14 bg-gray-50 dark:bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-3 text-gray-300 dark:text-gray-600">
              <Bell className="w-7 h-7" />
            </div>
            <p className="text-xs sm:text-sm font-medium">
              ບໍ່ມີລາຍການແຈ້ງເຕືອນໃນໝວດນີ້
            </p>
          </div>
        )}

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={filteredNotifications.length}
          itemsPerPage={itemsPerPage}
          onPageChange={(page) => setCurrentPage(page)}
          itemLabel="ການແຈ້ງເຕືອນ"
        />
      </div>
    </div>
  );
};

export default NotificationsPage;
