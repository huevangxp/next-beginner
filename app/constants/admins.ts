export interface AdminItem {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: string;
  status: "active" | "inactive";
  joinedDate: string;
}

export const ADMINS_MOCK_DATA: AdminItem[] = [
  {
    id: 1,
    name: "ສົມພອນ ໄຊຍະວົງ",
    email: "somphone.admin@example.com",
    phone: "+856 20 5555 0001",
    role: "Super Admin",
    status: "active",
    joinedDate: "2023-01-15",
  },
  {
    id: 2,
    name: "ມະນີວັນ ຈັນທະວົງ",
    email: "manivan.admin@example.com",
    phone: "+856 20 5555 0002",
    role: "Admin",
    status: "active",
    joinedDate: "2023-03-20",
  },
  {
    id: 3,
    name: "ບຸນມີ ພົມມະຈັນ",
    email: "bounmy.admin@example.com",
    phone: "+856 20 5555 0003",
    role: "Manager",
    status: "active",
    joinedDate: "2023-06-10",
  },
  {
    id: 4,
    name: "ວິໄລສັກ ແກ້ວມະນີ",
    email: "vilaysack.admin@example.com",
    phone: "+856 20 5555 0004",
    role: "Editor",
    status: "inactive",
    joinedDate: "2023-09-05",
  },
  {
    id: 5,
    name: "ດາວອນ ສຸລິຍະວົງ",
    email: "davone.admin@example.com",
    phone: "+856 20 5555 0005",
    role: "Admin",
    status: "active",
    joinedDate: "2023-11-12",
  },
  {
    id: 6,
    name: "ອານຸສອນ ລັດຕະນະ",
    email: "anousone.admin@example.com",
    phone: "+856 20 5555 0006",
    role: "Manager",
    status: "active",
    joinedDate: "2024-01-08",
  },
];
