import {
  TrendingUp,
  Users,
  ShoppingBag,
  DollarSign,
} from "lucide-react";

export interface DashboardStat {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  subtext: string;
  icon: any;
  gradient: string;
  glowColor: string;
}

export interface DashboardActivity {
  id: number;
  user: string;
  action: string;
  time: string;
  amount: string | null;
  status: "completed" | "info" | "pending";
  statusText: string;
}

export const DASHBOARD_STATS: DashboardStat[] = [
  {
    title: "ລາຍຮັບທັງໝົດ",
    value: "$45,231.89",
    change: "+20.1%",
    isPositive: true,
    subtext: "ທຽບກັບເດືອນຜ່ານມາ",
    icon: DollarSign,
    gradient: "from-emerald-500 to-teal-600",
    glowColor: "rgba(16, 185, 129, 0.2)",
  },
  {
    title: "ລູກຄ້າທັງໝົດ",
    value: "2,350",
    change: "+180.1%",
    isPositive: true,
    subtext: "+120 ຄົນໃນອາທິດນີ້",
    icon: Users,
    gradient: "from-blue-500 to-indigo-600",
    glowColor: "rgba(59, 130, 246, 0.2)",
  },
  {
    title: "ຄຳສັ່ງຊື້ໃໝ່",
    value: "12,234",
    change: "+19.0%",
    isPositive: true,
    subtext: "ລໍຖ້າຈັດສົ່ງ 45 ລາຍການ",
    icon: ShoppingBag,
    gradient: "from-teal-500 to-cyan-600",
    glowColor: "rgba(20, 184, 166, 0.2)",
  },
  {
    title: "ອັດຕາການເຕີບໂຕ",
    value: "24.5%",
    change: "-4.5%",
    isPositive: false,
    subtext: "ເປົ້າໝາຍໄຕມາດ 30%",
    icon: TrendingUp,
    gradient: "from-purple-500 to-pink-600",
    glowColor: "rgba(168, 85, 247, 0.2)",
  },
];

export const DASHBOARD_RECENT_ACTIVITY: DashboardActivity[] = [
  {
    id: 1,
    user: "Alex Morgan",
    action: "ຊື້ຫູຟັງໄຮ້ສາຍ Sony WH-1000XM5",
    time: "2 ນາທີກ່ອນ",
    amount: "$59.99",
    status: "completed",
    statusText: "ສຳເລັດ",
  },
  {
    id: 2,
    user: "Sarah Chen",
    action: "ອັບເດດໂປຣໄຟລ໌ ແລະ ທີ່ຢູ່ຈັດສົ່ງ",
    time: "15 ນາທີກ່ອນ",
    amount: null,
    status: "info",
    statusText: "ອັບເດດ",
  },
  {
    id: 3,
    user: "James Wilson",
    action: "ສະໝັກສະມາຊິກໃໝ່: Pro Plan",
    time: "1 ຊົ່ວໂມງກ່ອນ",
    amount: "$199.00",
    status: "completed",
    statusText: "ສຳເລັດ",
  },
  {
    id: 4,
    user: "Elena Rodriguez",
    action: "ຊື້ Apple Watch Series 9",
    time: "3 ຊົ່ວໂມງກ່ອນ",
    amount: "$129.99",
    status: "completed",
    statusText: "ສຳເລັດ",
  },
  {
    id: 5,
    user: "Souliya Vongsa",
    action: "ສັ່ງຊື້ສິນຄ້າແບບເກັບເງິນປາຍທາງ",
    time: "5 ຊົ່ວໂມງກ່ອນ",
    amount: "$85.50",
    status: "pending",
    statusText: "ລໍຖ້າ",
  },
  {
    id: 6,
    user: "Keomany Chanthavong",
    action: "ສັ່ງຊື້ລຳໂພງ Bluetooth JBL Flip 6",
    time: "6 ຊົ່ວໂມງກ່ອນ",
    amount: "$39.99",
    status: "completed",
    statusText: "ສຳເລັດ",
  },
  {
    id: 7,
    user: "Bounmy Phommachan",
    action: "ສັ່ງຊື້ເມົາສ໌ເກມມິ່ງ Logitech G Pro X",
    time: "8 ຊົ່ວໂມງກ່ອນ",
    amount: "$24.99",
    status: "completed",
    statusText: "ສຳເລັດ",
  },
];
