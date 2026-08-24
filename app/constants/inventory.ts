export interface InventoryItem {
  id: number;
  name: string;
  category: string;
  stock: number;
  minStock: number;
  status: "ok" | "low" | "out";
  lastUpdate: string;
}

export const INVENTORY_MOCK_DATA: InventoryItem[] = [
  {
    id: 1,
    name: "iPhone 15 Pro Max 256GB",
    category: "Mobile",
    stock: 5,
    minStock: 10,
    status: "low",
    lastUpdate: "2024-12-18",
  },
  {
    id: 2,
    name: "MacBook Air M2 13-inch",
    category: "Laptop",
    stock: 15,
    minStock: 5,
    status: "ok",
    lastUpdate: "2024-12-17",
  },
  {
    id: 3,
    name: "AirPods Pro 2 USB-C",
    category: "Audio",
    stock: 0,
    minStock: 20,
    status: "out",
    lastUpdate: "2024-12-15",
  },
  {
    id: 4,
    name: "Samsung Galaxy S23 Ultra",
    category: "Mobile",
    stock: 8,
    minStock: 10,
    status: "low",
    lastUpdate: "2024-12-18",
  },
  {
    id: 5,
    name: "Sony WH-1000XM5 Wireless",
    category: "Audio",
    stock: 25,
    minStock: 5,
    status: "ok",
    lastUpdate: "2024-12-16",
  },
  {
    id: 6,
    name: "iPad Pro 11-inch M4",
    category: "Mobile",
    stock: 12,
    minStock: 5,
    status: "ok",
    lastUpdate: "2024-12-14",
  },
  {
    id: 7,
    name: "Dell XPS 15 9530 OLED",
    category: "Laptop",
    stock: 3,
    minStock: 5,
    status: "low",
    lastUpdate: "2024-12-13",
  },
];
