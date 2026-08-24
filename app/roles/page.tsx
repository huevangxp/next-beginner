"use client";

import React, { useState, useEffect } from "react";
import {
  ShieldCheck,
  Plus,
  Search,
  Edit2,
  Trash2,
  Users,
  Lock,
  Download,
  FileSpreadsheet,
} from "lucide-react";
import Link from "next/link";
import { exportToExcel } from "../utils/exportUtils";
import Pagination from "../components/Pagination";

const RolesPage = () => {
  const [mounted, setMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    setMounted(true);
  }, []);

  const roles = [
    {
      id: 1,
      name: "Super Admin",
      description: "ມີສິດທິສູງສຸດໃນລະບົບ ສາມາດຈັດການທຸກຢ່າງໄດ້",
      usersCount: 2,
      status: "active",
      permissions: ["ທຸກສິດທິ", "ຈັດການຜູ້ໃຊ້", "ຈັດການລະບົບ"],
    },
    {
      id: 2,
      name: "Manager",
      description: "ຈັດການສິນຄ້າ, ຄຳສັ່ງຊື້ ແລະ ເບິ່ງລາຍງານຕ່າງໆ",
      usersCount: 5,
      status: "active",
      permissions: ["ຈັດການສິນຄ້າ", "ຈັດການອໍເດີ", "ເບິ່ງລາຍງານ"],
    },
    {
      id: 3,
      name: "Editor",
      description: "ເພີ່ມ ແລະ ແກ້ໄຂຂໍ້ມູນສິນຄ້າ, ໂປຣໂມຊັ່ນ",
      usersCount: 8,
      status: "active",
      permissions: ["ຈັດການສິນຄ້າ", "ຈັດການໂປຣໂມຊັ່ນ"],
    },
    {
      id: 4,
      name: "Viewer",
      description: "ສາມາດເບິ່ງຂໍ້ມູນຕ່າງໆໄດ້ເທົ່ານັ້ນ ບໍ່ສາມາດແກ້ໄຂໄດ້",
      usersCount: 12,
      status: "inactive",
      permissions: ["ເບິ່ງຂໍ້ມູນ"],
    },
    {
      id: 5,
      name: "Inventory Staff",
      description: "ຈັດການສະຕັອກສິນຄ້າ ແລະ ກວດນັບສິນຄ້າໃນສາງ",
      usersCount: 4,
      status: "active",
      permissions: ["ຈັດການສາງສິນຄ້າ", "ເບິ່ງສິນຄ້າ"],
    },
    {
      id: 6,
      name: "Customer Support",
      description: "ກວດສອບອໍເດີລູກຄ້າ ແລະ ຕອບການແຈ້ງເຕືອນ",
      usersCount: 6,
      status: "active",
      permissions: ["ເບິ່ງອໍເດີ", "ຈັດການລູກຄ້າ"],
    },
  ];

  const handleDownloadExcel = () => {
    const exportData = filteredRoles.map((role) => ({
      ID: role.id,
      ຊື່ປະເພດສິດ: role.name,
      ຄຳອະທິບາຍ: role.description,
      ຈຳນວນຜູ້ໃຊ້: role.usersCount,
      ສິດທິ: role.permissions.join(", "),
      ສະຖານະ: role.status,
    }));
    exportToExcel(exportData, "Roles_Report");
  };

  const handleDelete = (id: number) => {
    if (window.confirm("ທ່ານແນ່ໃຈບໍ່ວ່າຕ້ອງການລຶບປະເພດສິດນີ້?")) {
      console.log("Deleting role:", id);
    }
  };

  const filteredRoles = roles.filter((role) => {
    const matchesSearch =
      role.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      role.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || role.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const totalPages = Math.ceil(filteredRoles.length / itemsPerPage);
  const paginatedRoles = filteredRoles.slice(
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
            ປະເພດສິດ (Roles & Permissions)
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mt-0.5">
            ຈັດການບົດບາດ ແລະ ກຳນົດສິດທິການເຂົ້າເຖິງລະບົບ
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
          <Link href="/roles/create">
            <button className="flex items-center gap-1.5 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-md shadow-teal-600/20 active:scale-[0.98] cursor-pointer">
              <Plus className="w-4 h-4" />
              <span>ເພີ່ມປະເພດສິດ</span>
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
            placeholder="ຄົ້ນຫາປະເພດສິດ..."
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
            value={statusFilter}
            onChange={(e) => {
              setStatusFilter(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full sm:w-auto px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-xl text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800/60 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all cursor-pointer"
          >
            <option value="all">ທຸກສະຖານະ</option>
            <option value="active">ເປີດໃຊ້ງານ</option>
            <option value="inactive">ປິດໃຊ້ງານ</option>
          </select>
        </div>
      </div>

      {/* Roles Table */}
      <div
        id="roles-table"
        className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/80 dark:bg-gray-800/50">
                <th className="px-5 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                  ປະເພດສິດ
                </th>
                <th className="px-5 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                  ຄຳອະທິບາຍ
                </th>
                <th className="px-5 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                  ຈຳນວນຜູ້ໃຊ້
                </th>
                <th className="px-5 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                  ສິດທິ
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
              {paginatedRoles.map((role) => (
                <tr
                  key={role.id}
                  className="hover:bg-gray-50/70 dark:hover:bg-gray-800/30 transition-colors group"
                >
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center text-white font-bold text-sm shadow-sm">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 dark:text-white">
                          {role.name}
                        </p>
                        <p className="text-[11px] text-gray-400">
                          ID: #{role.id.toString().padStart(4, "0")}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3.5 text-gray-600 dark:text-gray-400 max-w-xs truncate">
                    {role.description}
                  </td>
                  <td className="px-5 py-3.5">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                      <Users className="w-3 h-3 text-teal-600" />
                      {role.usersCount} ຄົນ
                    </span>
                  </td>
                  <td className="px-5 py-3.5">
                    <div className="flex flex-wrap gap-1">
                      {role.permissions.map((perm, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-semibold bg-teal-50 text-teal-700 dark:bg-teal-950/40 dark:text-teal-300 border border-teal-200 dark:border-teal-900/40"
                        >
                          <Lock className="w-2.5 h-2.5" />
                          {perm}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-5 py-3.5">
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${
                        role.status === "active"
                          ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900/30"
                          : "bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-400 border-rose-200 dark:border-rose-900/30"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          role.status === "active"
                            ? "bg-emerald-500"
                            : "bg-rose-500"
                        }`}
                      ></span>
                      {role.status === "active" ? "ເປີດໃຊ້ງານ" : "ປິດໃຊ້ງານ"}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <Link href={`/roles/${role.id}/edit`}>
                        <button className="p-1.5 text-gray-400 hover:text-teal-600 hover:bg-teal-50 dark:hover:bg-teal-900/20 rounded-lg transition-all cursor-pointer" title="ແກ້ໄຂ">
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDelete(role.id)}
                        className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredRoles.length === 0 && (
            <div className="py-16 text-center text-gray-400">
              <p className="text-sm">ບໍ່ພົບຂໍ້ມູນປະເພດສິດທີ່ຄົ້ນຫາ</p>
            </div>
          )}
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={filteredRoles.length}
          itemsPerPage={itemsPerPage}
          onPageChange={(page) => setCurrentPage(page)}
          itemLabel="ປະເພດສິດ"
        />
      </div>
    </div>
  );
};

export default RolesPage;
