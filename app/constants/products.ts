export interface ProductItem {
  id: number;
  name: string;
  price: number;
  category: string;
  categoryName: string;
  stock: number;
  promotion: string | null;
}

export interface ProductCategoryOption {
  id: string;
  name: string;
}

export const PRODUCT_CATEGORIES: ProductCategoryOption[] = [
  { id: "all", name: "ທຸກໝວດໝູ່" },
  { id: "electronics", name: "ເຄື່ອງເອເລັກໂຕຣນິກ" },
  { id: "wearables", name: "ອຸປະກອນສວມໃສ່" },
  { id: "accessories", name: "ອຸປະກອນເສີມ" },
];

export const PRODUCTS_MOCK_DATA: ProductItem[] = [
  {
    id: 1,
    name: "ຫູຟັງໄຮ້ສາຍ Sony WH-1000XM5",
    price: 59.99,
    category: "electronics",
    categoryName: "ເຄື່ອງເອເລັກໂຕຣນິກ",
    stock: 12,
    promotion: "LAONEWYEAR",
  },
  {
    id: 2,
    name: "ໂມງອັດສະລິຍະ Apple Watch Series 9",
    price: 129.99,
    category: "wearables",
    categoryName: "ອຸປະກອນສວມໃສ່",
    stock: 8,
    promotion: null,
  },
  {
    id: 3,
    name: "ລຳໂພງບລູທູດ JBL Flip 6",
    price: 39.99,
    category: "electronics",
    categoryName: "ເຄື່ອງເອເລັກໂຕຣນິກ",
    stock: 25,
    promotion: "WELCOME",
  },
  {
    id: 4,
    name: "ເມົາສ໌ເກມມິ່ງ Logitech G Pro X",
    price: 24.99,
    category: "accessories",
    categoryName: "ອຸປະກອນເສີມ",
    stock: 15,
    promotion: null,
  },
  {
    id: 5,
    name: "ຄີບອດ Keychron K2 Pro Wireless",
    price: 89.99,
    category: "accessories",
    categoryName: "ອຸປະກອນເສີມ",
    stock: 6,
    promotion: "WELCOME",
  },
  {
    id: 6,
    name: "iPad Air M2 11-inch 128GB",
    price: 599.0,
    category: "electronics",
    categoryName: "ເຄື່ອງເອເລັກໂຕຣນິກ",
    stock: 10,
    promotion: null,
  },
  {
    id: 7,
    name: "ສາຍຮັດຂໍ້ມື Garmin Forerunner 265",
    price: 449.99,
    category: "wearables",
    categoryName: "ອຸປະກອນສວມໃສ່",
    stock: 4,
    promotion: "LAONEWYEAR",
  },
  {
    id: 8,
    name: "ແຜ່ນຮອງເມົາສ໌ SteelSeries QcK Prism",
    price: 19.99,
    category: "accessories",
    categoryName: "ອຸປະກອນເສີມ",
    stock: 30,
    promotion: null,
  },
];
