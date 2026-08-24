export interface PromotionItem {
  id: number;
  name: string;
  code: string;
  discount: string;
  type: string;
  startDate: string;
  endDate: string;
  status: "active" | "expired";
  usage: string;
}

export const PROMOTIONS_MOCK_DATA: PromotionItem[] = [
  {
    id: 1,
    name: "ປີໃໝ່ລາວ 2024",
    code: "LAONEWYEAR",
    discount: "20%",
    type: "Percentage",
    status: "active",
    startDate: "2024-04-01",
    endDate: "2024-04-20",
    usage: "150/500",
  },
  {
    id: 2,
    name: "Flash Sale 12.12",
    code: "FLASH12",
    discount: "50,000 ກີບ",
    type: "Fixed Amount",
    status: "expired",
    startDate: "2024-12-12",
    endDate: "2024-12-12",
    usage: "100/100",
  },
  {
    id: 3,
    name: "ລູກຄ້າໃໝ່",
    code: "WELCOME",
    discount: "10%",
    type: "Percentage",
    status: "active",
    startDate: "2024-01-01",
    endDate: "2024-12-31",
    usage: "1,240/∞",
  },
  {
    id: 4,
    name: "ວັນຊາດ 2 ທັນວາ",
    code: "NATIONALDAY",
    discount: "25%",
    type: "Percentage",
    status: "expired",
    startDate: "2024-12-01",
    endDate: "2024-12-03",
    usage: "300/300",
  },
  {
    id: 5,
    name: "Black Friday Sale",
    code: "BLACKFRIDAY",
    discount: "100,000 ກີບ",
    type: "Fixed Amount",
    status: "expired",
    startDate: "2024-11-25",
    endDate: "2024-11-30",
    usage: "250/250",
  },
  {
    id: 6,
    name: "Mid-Year Mega Sale",
    code: "MIDYEAR24",
    discount: "15%",
    type: "Percentage",
    status: "active",
    startDate: "2024-06-01",
    endDate: "2024-06-30",
    usage: "80/400",
  },
];
