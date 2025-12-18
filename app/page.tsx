import React from "react";
import {
  TrendingUp,
  Users,
  ShoppingBag,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  MoreVertical,
  Plus,
} from "lucide-react";

import FinancialChart from "./components/FinancialChart";

const DashboardPage = () => {
  const stats = [
    {
      title: "ລາຍຮັບທັງໝົດ",
      value: "$45,231.89",
      change: "+20.1%",
      isPositive: true,
      icon: DollarSign,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      title: "ຜູ້ໃຊ້ງານ",
      value: "+2,350",
      change: "+180.1%",
      isPositive: true,
      icon: Users,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      title: "ຄຳສັ່ງຊື້ໃໝ່",
      value: "+12,234",
      change: "+19%",
      isPositive: true,
      icon: ShoppingBag,
      color: "text-teal-600",
      bg: "bg-teal-50",
    },
    {
      title: "ອັດຕາການເຕີບໂຕ",
      value: "24.5%",
      change: "-4.5%",
      isPositive: false,
      icon: TrendingUp,
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
  ];

  const recentActivity = [
    {
      id: 1,
      user: "Alex Morgan",
      action: "ຊື້ຫູຟັງໄຮ້ສາຍ",
      time: "2 ນາທີກ່ອນ",
      amount: "$59.99",
    },
    {
      id: 2,
      user: "Sarah Chen",
      action: "ອັບເດດຮູບໂປຣໄຟລ໌",
      time: "15 ນາທີກ່ອນ",
      amount: null,
    },
    {
      id: 3,
      user: "James Wilson",
      action: "ສະໝັກສະມາຊິກໃໝ່: Pro Plan",
      time: "1 ຊົ່ວໂມງກ່ອນ",
      amount: "$199.00",
    },
    {
      id: 4,
      user: "Elena Rodriguez",
      action: "ຊື້ໂມງອັດສະລິຍະ",
      time: "3 ຊົ່ວໂມງກ່ອນ",
      amount: "$129.99",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">ພາບລວມລະບົບ</h1>
          <p className="text-gray-500 mt-1">
            ຍິນດີຕ້ອນຮັບ, ຜູ້ດູແລລະບົບ! ນີ້ແມ່ນສິ່ງທີ່ເກີດຂຶ້ນໃນມື້ນີ້.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-600 shadow-sm">
            <Clock className="w-4 h-4" />
            <span>ອັບເດດຫຼ້າສຸດ: 5 ນາທີກ່ອນ</span>
          </div>
          <button className="px-4 py-2 bg-teal-600 text-white rounded-xl text-sm font-bold hover:bg-teal-700 transition-all shadow-lg shadow-teal-100">
            ດາວໂຫຼດລາຍງານ
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.title}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`${stat.bg} ${stat.color} p-3 rounded-xl`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div
                  className={`flex items-center gap-1 text-sm font-bold ${
                    stat.isPositive ? "text-emerald-600" : "text-red-600"
                  }`}
                >
                  {stat.isPositive ? (
                    <ArrowUpRight className="w-4 h-4" />
                  ) : (
                    <ArrowDownRight className="w-4 h-4" />
                  )}
                  {stat.change}
                </div>
              </div>
              <p className="text-gray-500 text-sm font-medium">{stat.title}</p>
              <h3 className="text-2xl font-bold text-gray-800 mt-1">
                {stat.value}
              </h3>
            </div>
          );
        })}
      </div>

      {/* Financial Chart */}
      <FinancialChart />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activity Table */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-50 flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-800">ກິດຈະກຳຫຼ້າສຸດ</h2>
            <button className="text-teal-600 text-sm font-bold hover:underline">
              ເບິ່ງທັງໝົດ
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/50">
                  <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">
                    ຜູ້ໃຊ້
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">
                    ກິດຈະກຳ
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">
                    ເວລາ
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">
                    ຈຳນວນ
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {recentActivity.map((activity) => (
                  <tr
                    key={activity.id}
                    className="hover:bg-gray-50/50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 font-bold text-xs">
                          {activity.user.charAt(0)}
                        </div>
                        <span className="text-sm font-bold text-gray-700">
                          {activity.user}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {activity.action}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-400">
                      {activity.time}
                    </td>
                    <td className="px-6 py-4 text-sm font-bold text-gray-800">
                      {activity.amount || "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions / Summary */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h2 className="text-lg font-bold text-gray-800 mb-4">ຈັດການດ່ວນ</h2>
            <div className="grid grid-cols-2 gap-3">
              <button className="p-4 bg-teal-50 text-teal-700 rounded-xl hover:bg-teal-100 transition-all flex flex-col items-center gap-2">
                <Plus className="w-5 h-5" />
                <span className="text-xs font-bold">ເພີ່ມສິນຄ້າ</span>
              </button>
              <button className="p-4 bg-blue-50 text-blue-700 rounded-xl hover:bg-blue-100 transition-all flex flex-col items-center gap-2">
                <Users className="w-5 h-5" />
                <span className="text-xs font-bold">ເພີ່ມຜູ້ໃຊ້</span>
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl text-white relative overflow-hidden shadow-xl">
            <div className="relative z-10">
              <h3 className="font-bold text-lg mb-2">ອັບເກຣດ Pro Plan</h3>
              <p className="text-gray-400 text-sm mb-6">
                ເຂົ້າເຖິງການວິເຄາະຂັ້ນສູງ ແລະ ສິນຄ້າບໍ່ຈຳກັດ.
              </p>
              <button className="w-full py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-xl font-bold transition-all">
                ອັບເກຣດດຽວນີ້
              </button>
            </div>
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
