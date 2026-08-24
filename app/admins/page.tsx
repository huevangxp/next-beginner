"use client";

import React, { useState, useEffect } from "react";
import {
  ShieldCheck,
  Plus,
  Search,
  Edit2,
  Trash2,
  Mail,
  Phone,
  Calendar,
  Download,
  FileSpreadsheet,
} from "lucide-react";
import Link from "next/link";
import { exportToExcel } from "../utils/exportUtils";
import Pagination from "../components/Pagination";
import { ADMINS_MOCK_DATA } from "../constants";

const AdminsPage = () => {
  const [mounted, setMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    setMounted(true);
  }, []);

  const admins = ADMINS_MOCK_DATA;

  const handleDownloadExcel = () => {
    const exportData = filteredAdmins.map((admin) => ({
      ID: admin.id,
      ຊື່ຜູ້ດູແລ: admin.name,
      ອີເມວ: admin.email,
      ເບີໂທ: admin.phone,
      ບົດບາດ: admin.role,
      ສະຖານະ: admin.status,
      ວັນທີເຂົ້າຮ່ວມ: admin.joinedDate,
    }));
    exportToExcel(exportData, "Admins_Report");
  };

  const filteredAdmins = admins.filter((admin) => {
    const matchesSearch =
      admin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      admin.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      admin.phone.includes(searchQuery);
    const matchesRole = roleFilter === "all" || admin.role === roleFilter;
    return matchesSearch && matchesRole;
  });

  const totalPages = Math.ceil(filteredAdmins.length / itemsPerPage);
  const paginatedAdmins = filteredAdmins.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (!mounted) return null;

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
            ຜູ້ດູແລລະບົບ
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mt-0.5">
            ຈັດການລາຍຊື່ ແລະ ສິດທິການເຂົ້າເຖິງຂອງຜູ້ດູແລລະບົບທັງໝົດ
          </p>
        </div>
        <div className="flex items-center gap-2.5">
          <div className="relative group">
            <button className="flex items-center gap-1.5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
              <Download className="w-4 h-4 text-teal-600" />
              <span>ລາຍງານ</span>
            </button>
            <div className="absolute right-0 mt-1.5 w-44 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl shadow-xl py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20">
              <button
                onClick={handleDownloadExcel}
                className="w-full flex items-center gap-2 px-3.5 py-2 text-xs text-gray-600 dark:text-gray-300 hover:bg-teal-50 dark:hover:bg-teal-900/20 hover:text-teal-700 dark:hover:text-teal-400 transition-colors cursor-pointer"
              >
                <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600" />
                <span>Export to Excel</span>
              </button>
            </div>
          </div>
          <Link href="/admins/create">
            <button className="flex items-center gap-1.5 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-md shadow-teal-600/20 active:scale-[0.98] cursor-pointer">
              <Plus className="w-4 h-4" />
              <span>ເພີ່ມຜູ້ດູແລ</span>
            </button>
          </Link>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="bg-white dark:bg-gray-900 p-3.5 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col sm:flex-row gap-3 items-center justify-between">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="ຄົ້ນຫາຜູ້ດູແລ..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full pl-9 pr-3 py-2 bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 transition-all dark:text-white placeholder:text-gray-400"
          />
        </div>
        <div className="flex items-center gap-2.5 w-full sm:w-auto">
          <select
            value={roleFilter}
            onChange={(e) => {
              setRoleFilter(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full sm:w-auto px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-xl text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800/60 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all cursor-pointer"
          >
            <option value="all">ທຸກບົດບາດ</option>
            <option value="Super Admin">Super Admin</option>
            <option value="Manager">Manager</option>
            <option value="Editor">Editor</option>
          </select>
        </div>
      </div>

      {/* Admins Table */}
      <div
        id="admins-table"
        className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/80 dark:bg-gray-800/50">
                <th className="px-5 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                  ຜູ້ດູແລ
                </th>
                <th className="px-5 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                  ບົດບາດ
                </th>
                <th className="px-5 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                  ວັນທີເຂົ້າຮ່ວມ
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
              {paginatedAdmins.map((admin) => (
                <tr
                  key={admin.id}
                  className="hover:bg-gray-50/70 dark:hover:bg-gray-800/30 transition-colors group"
                >
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center text-white font-bold text-sm shadow-sm">
                        {admin.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 dark:text-white">
                          {admin.name}
                        </p>
                        <div className="flex items-center gap-2 text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">
                          <span className="flex items-center gap-1">
                            <Mail className="w-3 h-3 text-teal-600" /> {admin.email}
                          </span>
                          <span className="text-gray-300 dark:text-gray-600">•</span>
                          <span className="flex items-center gap-1">
                            <Phone className="w-3 h-3 text-teal-600" /> {admin.phone}
                          </span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3.5">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg text-xs font-semibold bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-400 border border-blue-200 dark:border-blue-900/30">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      {admin.role}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-1.5 text-xs">
                      <Calendar className="w-3.5 h-3.5 text-gray-400" />
                      {admin.joinedDate}
                    </div>
                  </td>
                  <td className="px-5 py-3.5">
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${
                        admin.status === "active"
                          ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900/30"
                          : "bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-400 border-rose-200 dark:border-rose-900/30"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          admin.status === "active"
                            ? "bg-emerald-500"
                            : "bg-rose-500"
                        }`}
                      ></span>
                      {admin.status === "active" ? "ເປີດໃຊ້ງານ" : "ປິດໃຊ້ງານ"}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <Link href={`/admins/${admin.id}/edit`}>
                        <button className="p-1.5 text-gray-400 hover:text-teal-600 hover:bg-teal-50 dark:hover:bg-teal-900/20 rounded-lg transition-all cursor-pointer" title="ແກ້ໄຂ">
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                      </Link>
                      <button className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all cursor-pointer">
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredAdmins.length === 0 && (
            <div className="py-16 text-center text-gray-400">
              <p className="text-sm">ບໍ່ພົບຂໍ້ມູນຜູ້ດູແລທີ່ຄົ້ນຫາ</p>
            </div>
          )}
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={filteredAdmins.length}
          itemsPerPage={itemsPerPage}
          onPageChange={(page) => setCurrentPage(page)}
          itemLabel="ຜູ້ດູແລ"
        />
      </div>
    </div>
  );
};

export default AdminsPage;
