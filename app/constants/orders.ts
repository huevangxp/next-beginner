export interface OrderItem {
  id: string;
  customer: string;
  email: string;
  phone: string;
  items: string;
  total: number;
  status: "completed" | "pending" | "processing" | "cancelled";
  date: string;
  payment: string;
  address: string;
}

export interface OrderTab {
  id: string;
  name: string;
  count: number;
}

export const ORDER_TABS: OrderTab[] = [
  { id: "all", name: "ທັງໝົດ", count: 7 },
  { id: "pending", name: "ລໍຖ້າຢືນຢັນ", count: 2 },
  { id: "processing", name: "ຢືນຢັນແລ້ວ", count: 2 },
  { id: "completed", name: "ສຳເລັດແລ້ວ", count: 2 },
  { id: "cancelled", name: "ຍົກເລີກແລ້ວ", count: 1 },
];

export const ORDERS_MOCK_DATA: OrderItem[] = [
  {
    id: "ORD-001",
    customer: "ສົມພອນ ໄຊຍະວົງ",
    email: "somphone@example.com",
    phone: "+856 20 5555 1111",
    items: "ຫູຟັງໄຮ້ສາຍ Sony WH-1000XM5, ລຳໂພງ JBL Flip 6",
    total: 99.98,
    status: "completed",
    date: "2024-12-18 10:30",
    payment: "BCEL One",
    address: "ບ້ານ ໂພນສະອາດ, ເມືອງ ໄຊເສດຖາ, ນະຄອນຫຼວງວຽງຈັນ",
  },
  {
    id: "ORD-002",
    customer: "ມະນີວັນ ຈັນທະວົງ",
    email: "manivan@example.com",
    phone: "+856 20 5555 2222",
    items: "Apple Watch Series 9",
    total: 129.99,
    status: "pending",
    date: "2024-12-18 11:15",
    payment: "ເງິນສົດປາຍທາງ",
    address: "ບ້ານ ໜອງບອນ, ເມືອງ ໄຊເສດຖາ, ນະຄອນຫຼວງວຽງຈັນ",
  },
  {
    id: "ORD-003",
    customer: "ບຸນມີ ພົມມະຈັນ",
    email: "bounmy@example.com",
    phone: "+856 20 5555 3333",
    items: "ເມົາສ໌ເກມມິ່ງ Logitech G Pro X, ຄີບອດ Keychron K2",
    total: 114.98,
    status: "processing",
    date: "2024-12-17 15:45",
    payment: "BCEL One",
    address: "ບ້ານ ສີໂຮມ, ເມືອງ ຈັນທະບູລີ, ນະຄອນຫຼວງວຽງຈັນ",
  },
  {
    id: "ORD-004",
    customer: "ວິໄລສັກ ແກ້ວມະນີ",
    email: "vilaysack@example.com",
    phone: "+856 20 5555 4444",
    items: "iPad Air M2 11-inch",
    total: 599.0,
    status: "completed",
    date: "2024-12-16 09:20",
    payment: "LDB Trust",
    address: "ບ້ານ ດົງປ່າລານ, ເມືອງ ສີສັດຕະນາກ, ນະຄອນຫຼວງວຽງຈັນ",
  },
  {
    id: "ORD-005",
    customer: "ດາວອນ ສຸລິຍະວົງ",
    email: "davone@example.com",
    phone: "+856 20 5555 5555",
    items: "ສາຍຮັດຂໍ້ມື Garmin Forerunner 265",
    total: 449.99,
    status: "cancelled",
    date: "2024-12-15 14:10",
    payment: "BCEL One",
    address: "ບ້ານ ທ່າຫຼວງ, ເມືອງ ໄຊເສດຖາ, ນະຄອນຫຼວງວຽງຈັນ",
  },
  {
    id: "ORD-006",
    customer: "ອານຸສອນ ລັດຕະນະ",
    email: "anousone@example.com",
    phone: "+856 20 5555 6666",
    items: "ຫູຟັງໄຮ້ສາຍ Sony WH-1000XM5",
    total: 59.99,
    status: "pending",
    date: "2024-12-15 16:30",
    payment: "ເງິນສົດປາຍທາງ",
    address: "ບ້ານ ຫົວຂົວ, ເມືອງ ໄຊເສດຖາ, ນະຄອນຫຼວງວຽງຈັນ",
  },
  {
    id: "ORD-007",
    customer: "ສຸພາພອນ ພົງສະຫວັນ",
    email: "souphaphone@example.com",
    phone: "+856 20 5555 7777",
    items: "ແຜ່ນຮອງເມົາສ໌ SteelSeries QcK Prism",
    total: 19.99,
    status: "processing",
    date: "2024-12-14 18:00",
    payment: "BCEL One",
    address: "ບ້ານ ໂພນຕ້ອງ, ເມືອງ ຈັນທະບູລີ, ນະຄອນຫຼວງວຽງຈັນ",
  },
];

export interface OrderCustomerOption {
  id: number;
  name: string;
  phone: string;
}

export interface OrderProductOption {
  id: number;
  name: string;
  price: number;
  stock: number;
}

export const CREATE_ORDER_CUSTOMERS: OrderCustomerOption[] = [
  { id: 1, name: "ສົມພອນ ໄຊຍະວົງ", phone: "020 5555 6666" },
  { id: 2, name: "ແກ້ວມະນີ ຈັນທະວົງ", phone: "020 7777 8888" },
  { id: 3, name: "ບຸນມີ ພົມມະຈັນ", phone: "020 9999 0000" },
];

export const CREATE_ORDER_PRODUCTS: OrderProductOption[] = [
  { id: 1, name: "iPhone 15 Pro", price: 15000000, stock: 10 },
  { id: 2, name: "MacBook Air M2", price: 22000000, stock: 5 },
  { id: 3, name: "AirPods Pro 2", price: 2500000, stock: 20 },
];

