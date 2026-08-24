"use client";

import React, { useState, useEffect } from "react";
import {
  ShieldCheck,
  Plus,
  Search,
  Filter,
  Edit2,
  Trash2,
  Users,
  Download,
  FileSpreadsheet,
} from "lucide-react";
import Link from "next/link";
import { exportToExcel } from "../utils/exportUtils";

const RolesPage = () => {
  const [mounted, setMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  const roles = [
    {
      id: 1,
      name: "Super Admin",
      description: "ມີສິດທິສູງສຸດໃນການຈັດການທຸກຢ່າງໃນລະບົບ",
      userCount: 2,
      status: "active",
      permissions: ["ທັງໝົດ"],
    },
    {
      id: 2,
      name: "Manager",
      description: "ຈັດການສິນຄ້າ, ລາຍການສັ່ງຊື້ ແລະ ລາຍງານ",
      userCount: 5,
      status: "active",
      permissions: ["ສິນຄ້າ", "ລາຍການສັ່ງຊື້", "ລາຍງານ"],
    },
    {
      id: 3,
      name: "Editor",
      description: "ເພີ່ມ ແລະ ແກ້ໄຂຂໍ້ມູນສິນຄ້າ",
      userCount: 8,
      status: "active",
      permissions: ["ສິນຄ້າ"],
    },
    {
      id: 4,
      name: "Viewer",
      description: "ເບິ່ງຂໍ້ມູນໄດ້ຢ່າງດຽວ ບໍ່ສາມາດແກ້ໄຂໄດ້",
      userCount: 12,
      status: "inactive",
      permissions: ["ເບິ່ງຂໍ້ມູນ"],
    },
  ];

  const handleDownloadExcel = () => {
    const exportData = roles.map((role) => ({
      ID: role.id,
      ປະເພດສິດ: role.name,
      ຄຳອະທິບາຍ: role.description,
      ຈຳນວນຜູ້ໃຊ້: role.userCount,
      ສະຖານະ: role.status,
      ສິດທິ: role.permissions.join(", "),
    }));
    exportToExcel(exportData, "Roles_Report");
  };

  const handleDelete = (id: number) => {
    if (window.confirm("ທ່ານແນ່ໃຈບໍ່ວ່າຕ້ອງການລຶບສິດທິນີ້?")) {
      console.log("Deleting role:", id);
    }
  };

  const filteredRoles = roles.filter((role) =>
    role.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    role.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!mounted) return null;

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
            ປະເພດສິດ (Roles)
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
              <span>ເພີ່ມສິດທິໃໝ່</span>
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
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 transition-all dark:text-white placeholder:text-gray-400"
          />
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
                  ຜູ້ໃຊ້ໃນກຸ່ມ
                </th>
                <th className="px-5 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                  ສິດທິການເຂົ້າເຖິງ
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
              {filteredRoles.map((role) => (
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
                    <div className="flex items-center gap-1.5 text-gray-700 dark:text-gray-300 font-semibold">
                      <Users className="w-3.5 h-3.5 text-teal-600" />
                      <span>{role.userCount} ຄົນ</span>
                    </div>
                  </td>
                  <td className="px-5 py-3.5">
                    <div className="flex flex-wrap gap-1">
                      {role.permissions.map((perm, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                        >
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
                      <button className="p-1.5 text-gray-400 hover:text-teal-600 hover:bg-teal-50 dark:hover:bg-teal-900/20 rounded-lg transition-all cursor-pointer">
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
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
        </div>
      </div>
    </div>
  );
};

export default RolesPage;
