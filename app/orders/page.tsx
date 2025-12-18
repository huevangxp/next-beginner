"use client";

import React, { useState, useEffect } from "react";
import {
  ShoppingCart,
  Plus,
  Search,
  Filter,
  Edit2,
  Trash2,
  User,
  Calendar,
  Package,
  CheckCircle2,
  Clock,
  XCircle,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

const OrdersPage = () => {
  const [mounted, setMounted] = useState(false);
  const [orderList, setOrderList] = useState([
    {
      id: "ORD-001",
      customer: "ສົມພອນ ໄຊຍະວົງ",
      date: "2024-12-18",
      total: 2500000,
      status: "completed",
      items: 3,
    },
    {
      id: "ORD-002",
      customer: "ແກ້ວມະນີ ຈັນທະວົງ",
      date: "2024-12-18",
      total: 1200000,
      status: "pending",
      items: 1,
    },
    {
      id: "ORD-003",
      customer: "ບຸນມີ ພົມມະຈັນ",
      date: "2024-12-17",
      total: 450000,
      status: "processing",
      items: 2,
    },
    {
      id: "ORD-004",
      customer: "ວິໄລພອນ ສຸດທິວົງ",
      date: "2024-12-17",
      total: 890000,
      status: "cancelled",
      items: 1,
    },
  ]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleStatusUpdate = (id: string, newStatus: string) => {
    setOrderList((prev) =>
      prev.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
  };

  if (!mounted) return null;

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            ລາຍການສັ່ງຊື້
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            ຈັດການ ແລະ ຕິດຕາມລາຍການສັ່ງຊື້ຈາກລູກຄ້າ
          </p>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            label: "ທັງໝົດ",
            value: orderList.length,
            icon: ShoppingCart,
            color: "blue",
          },
          {
            label: "ລໍຖ້າການຢືນຢັນ",
            value: orderList.filter((o) => o.status === "pending").length,
            icon: Clock,
            color: "amber",
          },
          {
            label: "ສຳເລັດແລ້ວ",
            value: orderList.filter((o) => o.status === "completed").length,
            icon: CheckCircle2,
            color: "emerald",
          },
          {
            label: "ຍົກເລີກ",
            value: orderList.filter((o) => o.status === "cancelled").length,
            icon: XCircle,
            color: "red",
          },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-900 p-6 rounded-[24px] border border-gray-100 dark:border-gray-800 shadow-sm"
          >
            <div className="flex items-center gap-4">
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-${stat.color}-50 dark:bg-${stat.color}-900/20 text-${stat.color}-600 dark:text-${stat.color}-400`}
              >
                <stat.icon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {stat.label}
                </p>
                <p className="text-2xl font-bold text-gray-800 dark:text-white">
                  {stat.value}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Filters & Search */}
      <div className="bg-white dark:bg-gray-900 p-4 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="ຄົ້ນຫາເລກທີສັ່ງຊື້ ຫຼື ຊື່ລູກຄ້າ..."
            className="w-full pl-11 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl text-sm focus:outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 transition-all dark:text-white"
          />
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-3 border border-gray-100 dark:border-gray-700 rounded-2xl text-sm font-bold text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
            <Filter className="w-4 h-4" />
            <span>ກັ່ນຕອງ</span>
          </button>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/50 dark:bg-gray-800/50">
                <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-wider">
                  ເລກທີສັ່ງຊື້
                </th>
                <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-wider">
                  ລູກຄ້າ
                </th>
                <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-wider">
                  ວັນທີ
                </th>
                <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-wider">
                  ຈຳນວນ
                </th>
                <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-wider">
                  ຍອດລວມ
                </th>
                <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-wider">
                  ສະຖານະ
                </th>
                <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-wider text-right">
                  ຈັດການ
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 dark:divide-gray-800">
              {orderList.map((order) => (
                <tr
                  key={order.id}
                  className="hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors group"
                >
                  <td className="px-8 py-5">
                    <span className="font-bold text-teal-600 dark:text-teal-400">
                      {order.id}
                    </span>
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-xs font-bold text-gray-500">
                        {order.customer.charAt(0)}
                      </div>
                      <span className="font-medium text-gray-800 dark:text-white">
                        {order.customer}
                      </span>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      {order.date}
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <Package className="w-4 h-4 text-gray-400" />
                      {order.items} ລາຍການ
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <span className="font-bold text-gray-800 dark:text-white">
                      {order.total.toLocaleString()} ກີບ
                    </span>
                  </td>
                  <td className="px-8 py-5">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${
                        order.status === "completed"
                          ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400"
                          : order.status === "pending"
                          ? "bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400"
                          : order.status === "processing"
                          ? "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                          : "bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400"
                      }`}
                    >
                      {order.status === "completed" && (
                        <CheckCircle2 className="w-3 h-3 mr-1.5" />
                      )}
                      {order.status === "pending" && (
                        <Clock className="w-3 h-3 mr-1.5" />
                      )}
                      {order.status === "processing" && (
                        <Clock className="w-3 h-3 mr-1.5" />
                      )}
                      {order.status === "cancelled" && (
                        <XCircle className="w-3 h-3 mr-1.5" />
                      )}
                      {order.status === "completed"
                        ? "ສຳເລັດແລ້ວ"
                        : order.status === "pending"
                        ? "ລໍຖ້າການຢືນຢັນ"
                        : order.status === "processing"
                        ? "ກຳລັງດຳເນີນການ"
                        : "ຍົກເລີກແລ້ວ"}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <div className="flex items-center justify-end gap-2">
                      {order.status === "pending" && (
                        <>
                          <button
                            onClick={() =>
                              handleStatusUpdate(order.id, "processing")
                            }
                            className="px-3 py-1.5 text-xs font-bold bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-all shadow-sm"
                          >
                            ຢືນຢັນ
                          </button>
                          <button
                            onClick={() =>
                              handleStatusUpdate(order.id, "cancelled")
                            }
                            className="px-3 py-1.5 text-xs font-bold bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-all"
                          >
                            ຍົກເລີກ
                          </button>
                        </>
                      )}
                      {order.status === "processing" && (
                        <button
                          onClick={() =>
                            handleStatusUpdate(order.id, "completed")
                          }
                          className="px-3 py-1.5 text-xs font-bold bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all shadow-sm"
                        >
                          ສຳເລັດ
                        </button>
                      )}
                      <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all">
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;
