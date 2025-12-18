"use client";

import React, { useState, useEffect } from "react";
import {
  ShoppingCart,
  Search,
  Filter,
  User,
  Calendar,
  Package,
  CheckCircle2,
  Clock,
  XCircle,
  ChevronRight,
  X,
  Phone,
  MapPin,
  CreditCard,
} from "lucide-react";

const OrdersPage = () => {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [selectedOrder, setSelectedOrder] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    if (activeTab === "all") return true;
    return order.status === activeTab;
  });

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

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 p-1 bg-gray-100 dark:bg-gray-800/50 rounded-2xl w-fit">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${
              activeTab === tab.id
                ? "bg-white dark:bg-gray-700 text-teal-600 shadow-sm"
                : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            }`}
          >
            {tab.name}
            <span
              className={`px-2 py-0.5 rounded-md text-[10px] ${
                activeTab === tab.id
                  ? "bg-teal-50 text-teal-600"
                  : "bg-gray-200 dark:bg-gray-600 text-gray-500"
              }`}
            >
              {tab.count}
            </span>
          </button>
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
              {filteredOrders.map((order) => (
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
                        ? "ລໍຖ້າຢືນຢັນ"
                        : order.status === "processing"
                        ? "ຢືນຢັນແລ້ວ"
                        : "ຍົກເລີກແລ້ວ"}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <div className="flex items-center justify-end gap-2">
                      {order.status === "pending" && (
                        <button
                          onClick={() => openOrderDetails(order)}
                          className="px-4 py-2 text-xs font-bold bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition-all shadow-lg shadow-teal-100 dark:shadow-none"
                        >
                          ກວດສອບ
                        </button>
                      )}
                      {order.status === "processing" && (
                        <button
                          onClick={() =>
                            handleStatusUpdate(order.id, "completed")
                          }
                          className="px-4 py-2 text-xs font-bold bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100 dark:shadow-none"
                        >
                          ສຳເລັດ
                        </button>
                      )}
                      <button
                        onClick={() => openOrderDetails(order)}
                        className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all"
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
            <div className="py-20 text-center">
              <div className="w-20 h-20 bg-gray-50 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="w-10 h-10 text-gray-300" />
              </div>
              <p className="text-gray-500 dark:text-gray-400 font-medium">
                ບໍ່ມີລາຍການສັ່ງຊື້ໃນໝວດນີ້
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Order Details Modal */}
      {isModalOpen && selectedOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white dark:bg-gray-900 w-full max-w-2xl rounded-[32px] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
            {/* Modal Header */}
            <div className="p-6 md:p-8 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between bg-gray-50/50 dark:bg-gray-800/50">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-600 flex items-center justify-center text-white shadow-lg shadow-teal-100 dark:shadow-none">
                  <ShoppingCart className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                    ລາຍລະອຽດການສັ່ງຊື້
                  </h3>
                  <p className="text-sm text-teal-600 font-bold">
                    {selectedOrder.id}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-white dark:hover:bg-gray-700 rounded-full transition-all text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8 space-y-8 max-h-[70vh] overflow-y-auto custom-scrollbar">
              {/* Customer Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    ຂໍ້ມູນລູກຄ້າ
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                      <User className="w-4 h-4 text-teal-600" />
                      <span className="font-bold">
                        {selectedOrder.customer}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                      <Phone className="w-4 h-4 text-teal-600" />
                      <span>{selectedOrder.phone}</span>
                    </div>
                    <div className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                      <MapPin className="w-4 h-4 text-teal-600 mt-1" />
                      <span className="text-sm leading-relaxed">
                        {selectedOrder.address}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    ຂໍ້ມູນການສັ່ງຊື້
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                      <Calendar className="w-4 h-4 text-teal-600" />
                      <span>ວັນທີ: {selectedOrder.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                      <CreditCard className="w-4 h-4 text-teal-600" />
                      <span>ການຊຳລະ: ໂອນຜ່ານທະນາຄານ</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div
                        className={`px-3 py-1 rounded-full text-[10px] font-bold ${
                          selectedOrder.status === "completed"
                            ? "bg-emerald-50 text-emerald-600"
                            : selectedOrder.status === "pending"
                            ? "bg-amber-50 text-amber-600"
                            : selectedOrder.status === "processing"
                            ? "bg-blue-50 text-blue-600"
                            : "bg-red-50 text-red-600"
                        }`}
                      >
                        {selectedOrder.status === "completed"
                          ? "ສຳເລັດແລ້ວ"
                          : selectedOrder.status === "pending"
                          ? "ລໍຖ້າຢືນຢັນ"
                          : selectedOrder.status === "processing"
                          ? "ຢືນຢັນແລ້ວ"
                          : "ຍົກເລີກແລ້ວ"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product List */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                  ລາຍການສິນຄ້າ
                </h4>
                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-gray-100 dark:border-gray-800">
                        <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase">
                          ສິນຄ້າ
                        </th>
                        <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase text-center">
                          ຈຳນວນ
                        </th>
                        <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase text-right">
                          ລາຄາ
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                      {selectedOrder.items.map((item: any, i: number) => (
                        <tr key={i}>
                          <td className="px-6 py-4">
                            <span className="text-sm font-bold text-gray-800 dark:text-white">
                              {item.name}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-center">
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              x{item.quantity}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <span className="text-sm font-bold text-gray-800 dark:text-white">
                              {item.price.toLocaleString()}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr className="bg-gray-100/50 dark:bg-gray-800">
                        <td
                          colSpan={2}
                          className="px-6 py-4 text-right font-bold text-gray-500"
                        >
                          ຍອດລວມທັງໝົດ:
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-teal-600 text-lg">
                          {selectedOrder.total.toLocaleString()} ກີບ
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 md:p-8 border-t border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row gap-4 bg-gray-50/50 dark:bg-gray-800/50">
              {selectedOrder.status === "pending" ? (
                <>
                  <button
                    onClick={() =>
                      handleStatusUpdate(selectedOrder.id, "cancelled")
                    }
                    className="flex-1 py-4 bg-red-50 text-red-600 rounded-2xl font-bold hover:bg-red-100 transition-all"
                  >
                    ປະຕິເສດການສັ່ງຊື້
                  </button>
                  <button
                    onClick={() =>
                      handleStatusUpdate(selectedOrder.id, "processing")
                    }
                    className="flex-1 py-4 bg-teal-600 text-white rounded-2xl font-bold hover:bg-teal-700 shadow-lg shadow-teal-100 dark:shadow-none transition-all flex items-center justify-center gap-2"
                  >
                    <CheckCircle2 className="w-5 h-5" />
                    ຢືນຢັນການສັ່ງຊື້
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="w-full py-4 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-2xl font-bold hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
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
