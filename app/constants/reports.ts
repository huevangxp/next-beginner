import {
  ShoppingBag,
  TrendingUp,
  Users,
  Layers,
} from "lucide-react";

export interface ReportWeeklyDataPoint {
  day: string;
  value: number;
}

export interface ReportCardItem {
  title: string;
  desc: string;
  value: string;
  unit: string;
  trend: string;
  trendUp: boolean;
  icon: any;
  color: string;
  href: string;
  data: { name: string; val: number }[];
}

export interface CategoryDistributionItem {
  name: string;
  sales: number;
  percentage: number;
  color: string;
}

export interface TopProductReportItem {
  id: number;
  name: string;
  sold: number;
  revenue: string;
  growth: string;
}

export const REPORTS_WEEKLY_DATA: ReportWeeklyDataPoint[] = [
  { day: "Mon", value: 400 },
  { day: "Tue", value: 300 },
  { day: "Wed", value: 600 },
  { day: "Thu", value: 800 },
  { day: "Fri", value: 500 },
  { day: "Sat", value: 900 },
  { day: "Sun", value: 700 },
];

export const REPORTS_CARDS_MOCK_DATA: ReportCardItem[] = [
  {
    title: "ລາຍງານສິນຄ້າ",
    desc: "ສະຫຼຸບຈຳນວນສິນຄ້າ ແລະ ສະຕັອກ",
    value: "1,240",
    unit: "ລາຍການ",
    trend: "+12%",
    trendUp: true,
    icon: ShoppingBag,
    color: "#0d9488",
    href: "/product",
    data: [
      { name: "W1", val: 40 },
      { name: "W2", val: 30 },
      { name: "W3", val: 60 },
      { name: "W4", val: 45 },
    ],
  },
  {
    title: "ລາຍງານການສັ່ງຊື້",
    desc: "ຍອດຂາຍ ແລະ ລາຍການສັ່ງຊື້",
    value: "45.2M",
    unit: "ກີບ",
    trend: "+8.5%",
    trendUp: true,
    icon: TrendingUp,
    color: "#2563eb",
    href: "/orders",
    data: [
      { name: "W1", val: 20 },
      { name: "W2", val: 45 },
      { name: "W3", val: 30 },
      { name: "W4", val: 55 },
    ],
  },
  {
    title: "ລາຍງານລູກຄ້າ",
    desc: "ຈຳນວນລູກຄ້າ ແລະ ການເຄື່ອນໄຫວ",
    value: "850",
    unit: "ຄົນ",
    trend: "+5.2%",
    trendUp: true,
    icon: Users,
    color: "#9333ea",
    href: "/customers",
    data: [
      { name: "W1", val: 10 },
      { name: "W2", val: 25 },
      { name: "W3", val: 20 },
      { name: "W4", val: 35 },
    ],
  },
  {
    title: "ປະເພດສິນຄ້າ",
    desc: "ຈຳນວນໝວດໝູ່ສິນຄ້າທັງໝົດ",
    value: "18",
    unit: "ໝວດ",
    trend: "0%",
    trendUp: true,
    icon: Layers,
    color: "#f59e0b",
    href: "/product-type",
    data: [
      { name: "W1", val: 15 },
      { name: "W2", val: 16 },
      { name: "W3", val: 18 },
      { name: "W4", val: 18 },
    ],
  },
];

export const REPORT_CATEGORY_DISTRIBUTION: CategoryDistributionItem[] = [
  { name: "ເຄື່ອງເອເລັກໂຕຣນິກ", sales: 45, percentage: 45, color: "#0d9488" },
  { name: "ອຸປະກອນສວມໃສ່", sales: 25, percentage: 25, color: "#2563eb" },
  { name: "ອຸປະກອນເສີມ", sales: 20, percentage: 20, color: "#9333ea" },
  { name: "ອື່ນໆ", sales: 10, percentage: 10, color: "#f59e0b" },
];

export const REPORT_TOP_SELLING_PRODUCTS: TopProductReportItem[] = [
  {
    id: 1,
    name: "iPhone 15 Pro Max 256GB",
    sold: 142,
    revenue: "$170,258",
    growth: "+24%",
  },
  {
    id: 2,
    name: "Sony WH-1000XM5 Wireless",
    sold: 98,
    revenue: "$5,879",
    growth: "+18%",
  },
  {
    id: 3,
    name: "Apple Watch Series 9",
    sold: 76,
    revenue: "$9,879",
    growth: "+12%",
  },
  {
    id: 4,
    name: "MacBook Air M2 13-inch",
    sold: 64,
    revenue: "$63,936",
    growth: "+8%",
  },
];
