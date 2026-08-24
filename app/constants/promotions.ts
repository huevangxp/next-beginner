export interface PromotionItem {
  id: number;
  name: string;
  code: string;
  discount: string;
  startDate: string;
  endDate: string;
  status: "active" | "expired";
  usage: number;
}

export const PROMOTIONS_MOCK_DATA: PromotionItem[] = [
  {
    id: 1,
    name: "ໂປຣໂມຊັ່ນປີໃໝ່ລາວ 2024",
    code: "LAONEWYEAR",
    discount: "20%",
    startDate: "2024-04-01",
    endDate: "2024-04-30",
    status: "active",
    usage: 45,
  },
  {
    id: 2,
    name: "ສ່ວນຫຼຸດລູກຄ້າໃໝ່ (Welcome Gift)",
    code: "WELCOME",
    discount: "10%",
    startDate: "2024-01-01",
    endDate: "2024-12-31",
    status: "active",
    usage: 128,
  },
  {
    id: 3,
    name: "Mega Sale 11.11 ຫຼຸດກະໜ່ຳ",
    code: "MEGA1111",
    discount: "50%",
    startDate: "2023-11-11",
    endDate: "2023-11-12",
    status: "expired",
    usage: 350,
  },
  {
    id: 4,
    name: "Black Friday Super Deal",
    code: "BLACKFRIDAY",
    discount: "30%",
    startDate: "2023-11-24",
    endDate: "2023-11-26",
    status: "expired",
    usage: 210,
  },
  {
    id: 5,
    name: "ໂປຣໂມຊັ່ນສົ່ງທ້າຍປີເກົ່າ ຕ້ອນຮັບປີໃໝ່",
    code: "HAPPYNEWYEAR",
    discount: "15%",
    startDate: "2023-12-25",
    endDate: "2024-01-05",
    status: "expired",
    usage: 180,
  },
  {
    id: 6,
    name: "Mid Year Big Sale 6.6",
    code: "MIDYEAR66",
    discount: "25%",
    startDate: "2024-06-01",
    endDate: "2024-06-10",
    status: "active",
    usage: 88,
  },
];
