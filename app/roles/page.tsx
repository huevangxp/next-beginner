"use client";

import React, { useState, useEffect } from "react";
import {
  ShieldCheck,
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
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 text-gray-600 dark:text-gray-300 px-6 py-3 rounded-2xl font-bold transition-all shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800">
            <Download className="w-5 h-5" />
            <span>ລາຍງານ</span>
          </button>
          <Link href="/roles/create">
            <button className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-2xl font-bold transition-all shadow-lg shadow-teal-100 dark:shadow-none active:scale-95">
              <Plus className="w-5 h-5" />
              <span>ເພີ່ມປະເພດສິດ</span>
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

      {/* Roles Table */}
      <div className="bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/50 dark:bg-gray-800/50">
                <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-wider">
                  ປະເພດສິດ
                </th>
                <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-wider">
                  ຄຳອະທິບາຍ
                </th>
                <th className="px-8 py-5 text-xs font-bold text-gray-400 uppercase tracking-wider">
                  ຈຳນວນຜູ້ໃຊ້
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
              {roles.map((role) => (
                <tr
                  key={role.id}
                  className="hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors group"
                >
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-900/20 flex items-center justify-center text-teal-600 dark:text-teal-400 font-bold text-lg border border-teal-100 dark:border-teal-900/30">
                        <ShieldCheck className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-800 dark:text-white">
                          {role.name}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          ID: #{role.id.toString().padStart(4, "0")}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 max-w-xs truncate">
                      <FileText className="w-4 h-4 text-gray-400 shrink-0" />
                      {role.description}
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-2 text-sm font-bold text-gray-800 dark:text-white">
                      <Users className="w-4 h-4 text-gray-400" />
                      {role.userCount} ຜູ້ໃຊ້
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${
                        role.status === "active"
                          ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400"
                          : "bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400"
                      }`}
                    >
                      {role.status === "active" ? (
                        <>
                          <CheckCircle2 className="w-3 h-3 mr-1.5" />
                          ເປີດໃຊ້ງານ
                        </>
                      ) : (
                        <>
                          <XCircle className="w-3 h-3 mr-1.5" />
                          ປິດໃຊ້ງານ
                        </>
                      )}
                    </span>
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

export default RolesPage;
