"use client";

import React, { useState, useEffect } from "react";
import {
  ShieldCheck,
  Plus,
  Search,
  Filter,
  Edit2,
  Trash2,
  CheckCircle2,
  XCircle,
  ChevronRight,
  Shield,
  Users,
} from "lucide-react";
import Link from "next/link";

const RolesPage = () => {
  const [mounted, setMounted] = useState(false);

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

  if (!mounted) return null;

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            ປະເພດສິດ (Roles)
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            ຈັດການບົດບາດ ແລະ ກຳນົດສິດທິການເຂົ້າເຖິງລະບົບ
          </p>
        </div>
        <Link href="/roles/create">
          <button className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-2xl font-bold transition-all shadow-lg shadow-teal-100 dark:shadow-none active:scale-95">
            <Plus className="w-5 h-5" />
            <span>ເພີ່ມປະເພດສິດ</span>
          </button>
        </Link>
      </div>

      {/* Filters & Search */}
      <div className="bg-white dark:bg-gray-900 p-4 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="ຄົ້ນຫາປະເພດສິດ..."
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

      {/* Roles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {roles.map((role) => (
          <div
            key={role.id}
            className="bg-white dark:bg-gray-900 rounded-[32px] border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:shadow-teal-500/5 transition-all group overflow-hidden"
          >
            <div className="p-8 space-y-6">
              <div className="flex items-start justify-between">
                <div className="w-14 h-14 rounded-2xl bg-teal-50 dark:bg-teal-900/20 flex items-center justify-center text-teal-600 border border-teal-100 dark:border-teal-900/30 shadow-inner">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold ${
                    role.status === "active"
                      ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400"
                      : "bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400"
                  }`}
                >
                  {role.status === "active" ? "ເປີດໃຊ້ງານ" : "ປິດໃຊ້ງານ"}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-teal-600 transition-colors">
                  {role.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 line-clamp-2">
                  {role.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {role.permissions.map((perm, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-lg text-xs font-medium border border-gray-100 dark:border-gray-700"
                  >
                    {perm}
                  </span>
                ))}
              </div>

              <div className="pt-6 border-t border-gray-50 dark:border-gray-800 flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                  <Users className="w-4 h-4" />
                  <span className="text-sm font-bold">
                    {role.userCount} ຜູ້ໃຊ້
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 text-gray-400 hover:text-teal-600 hover:bg-teal-50 dark:hover:bg-teal-900/20 rounded-xl transition-all">
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-all">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RolesPage;
