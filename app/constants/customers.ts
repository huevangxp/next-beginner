export interface CustomerItem {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: string;
  status: "Active" | "Inactive";
}

export const CUSTOMERS_MOCK_DATA: CustomerItem[] = [
  {
    id: 1,
    name: "ສົມພອນ ໄຊຍະວົງ",
    email: "somphone@example.com",
    phone: "+856 20 5555 1111",
    role: "VIP Member",
    status: "Active",
  },
  {
    id: 2,
    name: "ມະນີວັນ ຈັນທະວົງ",
    email: "manivan@example.com",
    phone: "+856 20 5555 2222",
    role: "Regular",
    status: "Active",
  },
  {
    id: 3,
    name: "ບຸນມີ ພົມມະຈັນ",
    email: "bounmy@example.com",
    phone: "+856 20 5555 3333",
    role: "Gold Member",
    status: "Active",
  },
  {
    id: 4,
    name: "ວິໄລສັກ ແກ້ວມະນີ",
    email: "vilaysack@example.com",
    phone: "+856 20 5555 4444",
    role: "Regular",
    status: "Inactive",
  },
  {
    id: 5,
    name: "ດາວອນ ສຸລິຍະວົງ",
    email: "davone@example.com",
    phone: "+856 20 5555 5555",
    role: "VIP Member",
    status: "Active",
  },
  {
    id: 6,
    name: "ອານຸສອນ ລັດຕະນະ",
    email: "anousone@example.com",
    phone: "+856 20 5555 6666",
    role: "Regular",
    status: "Active",
  },
  {
    id: 7,
    name: "ສຸພາພອນ ພົງສະຫວັນ",
    email: "souphaphone@example.com",
    phone: "+856 20 5555 7777",
    role: "Gold Member",
    status: "Active",
  },
];
