"use client";

import React, { useState, useEffect } from "react";
import {
  ShoppingCart,
  Search,
  Calendar,
  ChevronRight,
  X,
  User,
  Phone,
  MapPin,
  CreditCard,
  Plus,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import Pagination from "../components/Pagination";

const OrdersPage = () => {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [selectedOrder, setSelectedOrder] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const [orderList, setOrderList] = useState([
    {
      id: "ORD-001",
      customer: "ສົມພອນ ໄຊຍະວົງ",
      phone: "020 5555 6666",
      address: "ບ້ານ ໂພນສະຫວ່າງ, ເມືອງ ຈັນທະບູລີ, ນະຄອນຫຼວງວຽງຈັນ",
      date: "2024-12-18",
      total: 2500000,
      status: "completed",
      items: [
        { name: "iPhone 15 Pro", quantity: 1, price: 15000000 },
        { name: "AirPods Pro 2", quantity: 1, price: 2500000 },
      ],
    },
    {
      id: "ORD-002",
      customer: "ແກ້ວມະນີ ຈັນທະວົງ",
      phone: "020 7777 8888",
      address: "ບ້ານ ສີຫອມ, ເມືອງ ສີໂຄດຕະບອງ, ນະຄອນຫຼວງວຽງຈັນ",
      date: "2024-12-18",
      total: 1200000,
      status: "pending",
      items: [{ name: "Samsung Galaxy S23", quantity: 1, price: 12000000 }],
    },
    {
      id: "ORD-003",
      customer: "ບຸນມີ ພົມມະຈັນ",
      phone: "020 9999 0000",
      address: "ບ້ານ ທາດຫຼວງ, ເມືອງ ໄຊເສດຖາ, ນະຄອນຫຼວງວຽງຈັນ",
      date: "2024-12-17",
      total: 450000,
      status: "processing",
      items: [{ name: "Case iPhone 15", quantity: 2, price: 225000 }],
    },
    {
      id: "ORD-004",
      customer: "ວິໄລພອນ ສຸດທິວົງ",
      phone: "020 2222 3333",
      address: "ບ້ານ ໜອງບອນ, ເມືອງ ໄຊເສດຖາ, ນະຄອນຫຼວງວຽງຈັນ",
      date: "2024-12-17",
      total: 890000,
      status: "cancelled",
      items: [{ name: "Power Bank 20000mAh", quantity: 1, price: 890000 }],
    },
    {
      id: "ORD-005",
      customer: "ດາວວອນ ສຸວັນນະ",
      phone: "020 3333 4444",
      address: "ບ້ານ ດົງໂດກ, ເມືອງ ໄຊທານີ, ນະຄອນຫຼວງວຽງຈັນ",
      date: "2024-12-16",
      total: 3200000,
      status: "completed",
      items: [{ name: "iPad 10th Gen", quantity: 1, price: 3200000 }],
    },
    {
      id: "ORD-006",
      customer: "ມະນີວັນ ຫຼວງລາດ",
      phone: "020 8888 1111",
      address: "ບ້ານ ທ່າເດື່ອ, ເມືອງ ຫາດຊາຍຟອງ, ນະຄອນຫຼວງວຽງຈັນ",
      date: "2024-12-16",
      total: 750000,
      status: "pending",
      items: [{ name: "Logitech MX Master 3S", quantity: 1, price: 750000 }],
    },
    {
      id: "ORD-007",
      customer: "ຄຳຫຼ້າ ວົງສາ",
      phone: "020 4444 9999",
      address: "ບ້ານ ໂພນທັນ, ເມືອງ ໄຊເສດຖາ, ນະຄອນຫຼວງວຽງຈັນ",
      date: "2024-12-15",
      total: 1850000,
      status: "completed",
      items: [{ name: "Apple Watch SE", quantity: 1, price: 1850000 }],
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
    setIsModalOpen(false);
  };

  const openOrderDetails = (order: any) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const filteredOrders = orderList.filter((order) => {
    const matchesTab = activeTab === "all" || order.status === activeTab;
    const matchesSearch =
      order.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const paginatedOrders = filteredOrders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const tabs = [
    { id: "all", name: "ທັງໝົດ", count: orderList.length },
    {
      id: "pending",
      name: "ລໍຖ້າຢືນຢັນ",
      count: orderList.filter((o) => o.status === "pending").length,
    },
    {
      id: "processing",
      name: "ຢືນຢັນແລ້ວ",
      count: orderList.filter((o) => o.status === "processing").length,
    },
    {
      id: "completed",
      name: "ສຳເລັດແລ້ວ",
      count: orderList.filter((o) => o.status === "completed").length,
    },
    {
      id: "cancelled",
      name: "ຍົກເລີກແລ້ວ",
      count: orderList.filter((o) => o.status === "cancelled").length,
    },
  ];

  if (!mounted) return null;

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
            ລາຍການສັ່ງຊື້
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mt-0.5">
            ຈັດການ ແລະ ຕິດຕາມສະຖານະລາຍການສັ່ງຊື້ຈາກລູກຄ້າ
          </p>
        </div>
        <Link href="/orders/create">
          <button className="flex items-center gap-1.5 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-md shadow-teal-600/20 active:scale-[0.98] cursor-pointer">
            <Plus className="w-4 h-4" />
            <span>ສ້າງອໍເດີໃໝ່</span>
          </button>
        </Link>
      </div>

      {/* Tabs & Search Filter */}
      <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
        {/* Tabs */}
        <div className="flex flex-wrap gap-1.5 p-1 bg-gray-100 dark:bg-gray-800/60 rounded-xl border border-gray-200/60 dark:border-gray-700/50 w-fit">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setCurrentPage(1);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === tab.id
                  ? "bg-white dark:bg-gray-900 text-teal-600 dark:text-teal-400 shadow-sm"
                  : "text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
              }`}
            >
              <span>{tab.name}</span>
              <span
                className={`px-1.5 py-0.2 rounded-md text-[10px] ${
                  activeTab === tab.id
                    ? "bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 font-bold"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400"
                }`}
              >
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="ຄົ້ນຫາເລກທີ ຫຼື ຊື່ລູກຄ້າ..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full pl-9 pr-3 py-1.5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 transition-all dark:text-white placeholder:text-gray-400 shadow-sm"
          />
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/80 dark:bg-gray-800/50">
                <th className="px-5 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                  ເລກທີສັ່ງຊື້
                </th>
                <th className="px-5 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                  ລູກຄ້າ
                </th>
                <th className="px-5 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                  ວັນທີ
                </th>
                <th className="px-5 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                  ຍອດລວມ
                </th>
                <th className="px-5 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                  ສະຖານະ
                </th>
                <th className="px-5 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-right">
                  ຈັດການ
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800 text-xs sm:text-sm">
              {paginatedOrders.map((order) => (
                <tr
                  key={order.id}
                  className="hover:bg-gray-50/70 dark:hover:bg-gray-800/30 transition-colors group"
                >
                  <td className="px-5 py-3.5">
                    <span className="font-bold text-teal-600 dark:text-teal-400 text-xs">
                      {order.id}
                    </span>
                  </td>
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center text-white font-bold text-xs shadow-sm">
                        {order.customer.charAt(0)}
                      </div>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {order.customer}
                      </span>
                    </div>
                  </td>
                  <td className="px-5 py-3.5 text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-gray-400" />
                      <span>{order.date}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3.5 font-bold text-gray-900 dark:text-white">
                    {order.total.toLocaleString()} ກີບ
                  </td>
                  <td className="px-5 py-3.5">
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${
                        order.status === "completed"
                          ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900/30"
                          : order.status === "pending"
                          ? "bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400 border-amber-200 dark:border-amber-900/30"
                          : order.status === "processing"
                          ? "bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-400 border-blue-200 dark:border-blue-900/30"
                          : "bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-400 border-rose-200 dark:border-rose-900/30"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          order.status === "completed"
                            ? "bg-emerald-500"
                            : order.status === "pending"
                            ? "bg-amber-500"
                            : order.status === "processing"
                            ? "bg-blue-500"
                            : "bg-rose-500"
                        }`}
                      ></span>
                      {order.status === "completed"
                        ? "ສຳເລັດແລ້ວ"
                        : order.status === "pending"
                        ? "ລໍຖ້າຢືນຢັນ"
                        : order.status === "processing"
                        ? "ຢືນຢັນແລ້ວ"
                        : "ຍົກເລີກແລ້ວ"}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      {order.status === "pending" && (
                        <button
                          onClick={() => openOrderDetails(order)}
                          className="px-2.5 py-1 text-xs font-semibold bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-all shadow-sm cursor-pointer"
                        >
                          ກວດສອບ
                        </button>
                      )}
                      {order.status === "processing" && (
                        <button
                          onClick={() =>
                            handleStatusUpdate(order.id, "completed")
                          }
                          className="px-2.5 py-1 text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-all shadow-sm cursor-pointer"
                        >
                          ສຳເລັດ
                        </button>
                      )}
                      <button
                        onClick={() => openOrderDetails(order)}
                        className="p-1.5 text-gray-400 hover:text-teal-600 hover:bg-teal-50 dark:hover:bg-teal-900/20 rounded-lg transition-all cursor-pointer"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredOrders.length === 0 && (
            <div className="py-16 text-center">
              <div className="w-14 h-14 bg-gray-50 dark:bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-3 text-gray-400">
                <ShoppingCart className="w-7 h-7" />
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm font-medium">
                ບໍ່ມີລາຍການສັ່ງຊື້ໃນໝວດນີ້
              </p>
            </div>
          )}
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={filteredOrders.length}
          itemsPerPage={itemsPerPage}
          onPageChange={(page) => setCurrentPage(page)}
          itemLabel="ລາຍການສັ່ງຊື້"
        />
      </div>

      {/* Order Details Modal */}
      {isModalOpen && selectedOrder && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white dark:bg-gray-900 w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 border border-gray-100 dark:border-gray-800"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-5 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between bg-gray-50/75 dark:bg-gray-800/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center text-white shadow-sm">
                  <ShoppingCart className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white">
                    ລາຍລະອຽດການສັ່ງຊື້
                  </h3>
                  <p className="text-xs text-teal-600 dark:text-teal-400 font-bold">
                    {selectedOrder.id}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-5 space-y-5 max-h-[70vh] overflow-y-auto">
              {/* Customer Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2.5 bg-gray-50/60 dark:bg-gray-800/40 p-3.5 rounded-xl border border-gray-100 dark:border-gray-800">
                  <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                    ຂໍ້ມູນລູກຄ້າ
                  </h4>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center gap-2 text-gray-800 dark:text-gray-200 font-semibold">
                      <User className="w-3.5 h-3.5 text-teal-600" />
                      <span>{selectedOrder.customer}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <Phone className="w-3.5 h-3.5 text-teal-600" />
                      <span>{selectedOrder.phone}</span>
                    </div>
                    <div className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                      <MapPin className="w-3.5 h-3.5 text-teal-600 mt-0.5" />
                      <span className="leading-relaxed">
                        {selectedOrder.address}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2.5 bg-gray-50/60 dark:bg-gray-800/40 p-3.5 rounded-xl border border-gray-100 dark:border-gray-800">
                  <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                    ຂໍ້ມູນການສັ່ງຊື້
                  </h4>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <Calendar className="w-3.5 h-3.5 text-teal-600" />
                      <span>ວັນທີ: {selectedOrder.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <CreditCard className="w-3.5 h-3.5 text-teal-600" />
                      <span>ການຊຳລະ: ໂອນຜ່ານທະນາຄານ</span>
                    </div>
                    <div className="pt-1">
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${
                          selectedOrder.status === "completed"
                            ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 border-emerald-200"
                            : selectedOrder.status === "pending"
                            ? "bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400 border-amber-200"
                            : selectedOrder.status === "processing"
                            ? "bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-400 border-blue-200"
                            : "bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-400 border-rose-200"
                        }`}
                      >
                        {selectedOrder.status === "completed"
                          ? "ສຳເລັດແລ້ວ"
                          : selectedOrder.status === "pending"
                          ? "ລໍຖ້າຢືນຢັນ"
                          : selectedOrder.status === "processing"
                          ? "ຢືນຢັນແລ້ວ"
                          : "ຍົກເລີກແລ້ວ"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product List */}
              <div className="space-y-2.5">
                <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                  ລາຍການສິນຄ້າ
                </h4>
                <div className="bg-gray-50/70 dark:bg-gray-800/40 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="border-b border-gray-100 dark:border-gray-800 bg-gray-100/50 dark:bg-gray-800/60">
                        <th className="px-4 py-2.5 font-bold text-gray-400 uppercase text-[10px]">
                          ສິນຄ້າ
                        </th>
                        <th className="px-4 py-2.5 font-bold text-gray-400 uppercase text-center text-[10px]">
                          ຈຳນວນ
                        </th>
                        <th className="px-4 py-2.5 font-bold text-gray-400 uppercase text-right text-[10px]">
                          ລາຄາ
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                      {selectedOrder.items.map((item: any, i: number) => (
                        <tr key={i}>
                          <td className="px-4 py-2.5 font-medium text-gray-800 dark:text-white">
                            {item.name}
                          </td>
                          <td className="px-4 py-2.5 text-center text-gray-600 dark:text-gray-400">
                            x{item.quantity}
                          </td>
                          <td className="px-4 py-2.5 text-right font-bold text-gray-800 dark:text-white">
                            {item.price.toLocaleString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr className="bg-gray-100/70 dark:bg-gray-800/80">
                        <td
                          colSpan={2}
                          className="px-4 py-2.5 text-right font-bold text-gray-600 dark:text-gray-300"
                        >
                          ຍອດລວມທັງໝົດ:
                        </td>
                        <td className="px-4 py-2.5 text-right font-bold text-teal-600 dark:text-teal-400 text-sm">
                          {selectedOrder.total.toLocaleString()} ກີບ
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-gray-100 dark:border-gray-800 flex gap-2.5 bg-gray-50/75 dark:bg-gray-800/50">
              {selectedOrder.status === "pending" ? (
                <>
                  <button
                    onClick={() =>
                      handleStatusUpdate(selectedOrder.id, "cancelled")
                    }
                    className="flex-1 py-2 bg-rose-50 dark:bg-rose-950/30 text-rose-600 hover:bg-rose-100 rounded-xl text-xs font-semibold transition-all cursor-pointer border border-rose-200 dark:border-rose-900/30"
                  >
                    ປະຕິເສດ
                  </button>
                  <button
                    onClick={() =>
                      handleStatusUpdate(selectedOrder.id, "processing")
                    }
                    className="flex-1 py-2 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white rounded-xl text-xs font-semibold shadow-md shadow-teal-600/20 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>ຢືນຢັນການສັ່ງຊື້</span>
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="w-full py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-xl text-xs font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-all cursor-pointer"
                >
                  ປິດໜ້າຕ່າງ
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrdersPage;
