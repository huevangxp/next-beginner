"use client";

import React, { useState, useEffect } from "react";
import {
  User,
  Plus,
  Search,
  Filter,
  MoreVertical,
  Edit2,
  Trash2,
  Shield,
  Mail,
  Phone,
  Download,
  FileSpreadsheet,
  FileText as FilePdf,
} from "lucide-react";
import Link from "next/link";
import { exportToExcel } from "../utils/exportUtils";

const CustomersPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleDownloadExcel = () => {
    const exportData = customers.map((c) => ({
      ID: c.id,
      ຊື່ລູກຄ້າ: c.name,
      ອີເມວ: c.email,
      ເບີໂທ: c.phone,
      ປະເພດ: c.role,
      ສະຖານະ: c.status,
    }));
    exportToExcel(exportData, "Customer_Report");
  };

  const customers = [
    {
      id: 1,
      name: "ສົມພອນ ໄຊຍະວົງ",
      email: "somphone@example.com",
      role: "VIP Customer",
      status: "Active",
      phone: "+856 20 5555 6666",
    },
    {
      id: 2,
      name: "ນາງ ແກ້ວມະນີ",
      email: "keo@example.com",
      role: "Regular Customer",
      status: "Active",
      phone: "+856 20 7777 8888",
    },
    {
      id: 3,
      name: "ທ້າວ ສົມສັກ",
      email: "somsak@example.com",
      role: "Regular Customer",
      status: "Inactive",
      phone: "+856 20 9999 0000",
    },
    {
      id: 4,
      name: "ນາງ ມາລີ",
      email: "maly@example.com",
      role: "VIP Customer",
      status: "Active",
      phone: "+856 20 1111 2222",
    },
  ];

  if (!mounted) return null;

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            ລາຍຊື່ລູກຄ້າ
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            ຈັດການຂໍ້ມູນລູກຄ້າ ແລະ ປະຫວັດການສັ່ງຊື້
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative group">
            <button className="flex items-center gap-2 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 text-gray-600 dark:text-gray-300 px-6 py-3 rounded-2xl font-bold transition-all shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800">
              <Download className="w-5 h-5" />
              <span>ລາຍງານ</span>
            </button>
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20">
              <button
                onClick={handleDownloadExcel}
                className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-600 dark:text-gray-300 hover:bg-teal-50 dark:hover:bg-teal-900/20 hover:text-teal-700 dark:hover:text-teal-400 transition-colors"
              >
                <FileSpreadsheet className="w-4 h-4" />
                <span>Download Excel</span>
              </button>
            </div>
          </div>
          <Link href="/customers/create">
            <button className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-2xl font-bold transition-all shadow-lg shadow-teal-100 dark:shadow-none active:scale-95">
              <Plus className="w-5 h-5" />
              <span>ເພີ່ມລູກຄ້າໃໝ່</span>
            </button>
          </Link>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="bg-white dark:bg-gray-900 p-4 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="ຄົ້ນຫາລູກຄ້າ..."
            className="w-full pl-11 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl text-sm focus:outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 transition-all dark:text-white"
          />
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-3 border border-gray-100 dark:border-gray-700 rounded-2xl text-sm font-bold text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
            <Filter className="w-4 h-4" />
            <span>ກັ່ນຕອງ</span>
          </button>
          <select className="flex-1 md:flex-none px-5 py-3 border border-gray-100 dark:border-gray-700 rounded-2xl text-sm font-bold text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none transition-all appearance-none">
            <option>ທຸກປະເພດ</option>
            <option>VIP Customer</option>
            <option>Regular Customer</option>
          </select>
        </div>
      </div>

      {/* Customers Table */}
      <div
        id="customer-table"
        className="bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/50 dark:bg-gray-800/50">
                <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-wider">
                  ລູກຄ້າ
                </th>
                <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-wider">
                  ປະເພດ
                </th>
                <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-wider">
                  ສະຖານະ
                </th>
                <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-wider">
                  ຂໍ້ມູນຕິດຕໍ່
                </th>
                <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-wider text-right">
                  ຈັດການ
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 dark:divide-gray-800">
              {customers.map((customer) => (
                <tr
                  key={customer.id}
                  className="hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors group"
                >
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-900/20 flex items-center justify-center text-teal-600 dark:text-teal-400 font-bold text-lg border border-teal-100 dark:border-teal-900/30">
                        {customer.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-gray-800 dark:text-white">
                          {customer.name}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {customer.email}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300">
                      <Shield className="w-4 h-4 text-teal-500" />
                      {customer.role}
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${
                        customer.status === "Active"
                          ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400"
                          : "bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full mr-2 ${
                          customer.status === "Active"
                            ? "bg-emerald-500"
                            : "bg-gray-400"
                        }`}
                      />
                      {customer.status === "Active"
                        ? "ກຳລັງໃຊ້ງານ"
                        : "ປິດໃຊ້ງານ"}
                    </span>
                  </td>
                  <td className="px-8 py-5">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                        <Phone className="w-3 h-3" />
                        {customer.phone}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                        <Mail className="w-3 h-3" />
                        {customer.email}
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 text-gray-400 hover:text-teal-600 hover:bg-teal-50 dark:hover:bg-teal-900/20 rounded-xl transition-all">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-all">
                        <Trash2 className="w-4 h-4" />
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

export default CustomersPage;
