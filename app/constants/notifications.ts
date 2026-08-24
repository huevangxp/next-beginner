import {
  ShoppingCart,
  AlertTriangle,
  User,
  CheckCircle2,
} from "lucide-react";

export interface NotificationItem {
  id: number;
  type: "order" | "stock" | "user" | "system";
  title: string;
  desc: string;
  time: string;
  read: boolean;
  icon: any;
  color: "blue" | "amber" | "purple" | "emerald";
}

export const NOTIFICATIONS_MOCK_DATA: NotificationItem[] = [
  {
    id: 1,
    type: "order",
    title: "ລາຍການສັ່ງຊື້ໃໝ່ #ORD-005",
    desc: "ລູກຄ້າ ສົມພອນ ໄຊຍະວົງ ໄດ້ສັ່ງຊື້ iPhone 15 Pro",
    time: "2 ນາທີກ່ອນ",
    read: false,
    icon: ShoppingCart,
    color: "blue",
  },
  {
    id: 2,
    type: "stock",
    title: "ສິນຄ້າໃກ້ໝົດສະຕັອກ",
    desc: "Samsung Galaxy S23 Ultra ເຫຼືອພຽງ 2 ລາຍການໃນສາງ",
    time: "15 ນາທີກ່ອນ",
    read: false,
    icon: AlertTriangle,
    color: "amber",
  },
  {
    id: 3,
    type: "user",
    title: "ຜູ້ໃຊ້ໃໝ່ລົງທະບຽນ",
    desc: "ມີຜູ້ໃຊ້ໃໝ່ລົງທະບຽນເຂົ້າໃນລະບົບ: Keomany Chanthavong",
    time: "1 ຊົ່ວໂມງກ່ອນ",
    read: true,
    icon: User,
    color: "purple",
  },
  {
    id: 4,
    type: "system",
    title: "ສຳຮອງຂໍ້ມູນສຳເລັດ",
    desc: "ລະບົບໄດ້ສຳຮອງຂໍ້ມູນປະຈຳວັນຮຽບຮ້ອຍແລ້ວ (Auto Backup)",
    time: "5 ຊົ່ວໂມງກ່ອນ",
    read: true,
    icon: CheckCircle2,
    color: "emerald",
  },
  {
    id: 5,
    type: "order",
    title: "ລາຍການສັ່ງຊື້ສຳເລັດ #ORD-003",
    desc: "ລູກຄ້າ ບຸນມີ ພົມມະຈັນ ໄດ້ຮັບສິນຄ້າຮຽບຮ້ອຍແລ້ວ",
    time: "1 ມື້ກ່ອນ",
    read: true,
    icon: ShoppingCart,
    color: "blue",
  },
  {
    id: 6,
    type: "stock",
    title: "ສິນຄ້າໝົດສະຕັອກ: Sony WH-1000XM5",
    desc: "ສິນຄ້າໃນສາງໝົດແລ້ວ ກະລຸນາສັ່ງເພີ່ມດ່ວນ",
    time: "1 ມື້ກ່ອນ",
    read: true,
    icon: AlertTriangle,
    color: "amber",
  },
];
