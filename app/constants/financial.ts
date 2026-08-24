export interface FinancialDataPoint {
  name: string;
  revenue: number;
  expenses: number;
}

export const FINANCIAL_DATA_6_MONTHS: FinancialDataPoint[] = [
  { name: "ມັງກອນ", revenue: 4200, expenses: 2400 },
  { name: "ກຸມພາ", revenue: 3800, expenses: 1800 },
  { name: "ມີນາ", revenue: 5100, expenses: 2600 },
  { name: "ເມສາ", revenue: 4700, expenses: 3100 },
  { name: "ພຶດສະພາ", revenue: 6200, expenses: 3400 },
  { name: "ມິຖຸນາ", revenue: 7400, expenses: 3900 },
];

export const FINANCIAL_DATA_1_YEAR: FinancialDataPoint[] = [
  { name: "ມ.ກ.", revenue: 4200, expenses: 2400 },
  { name: "ກ.ພ.", revenue: 3800, expenses: 1800 },
  { name: "ມ.ນ.", revenue: 5100, expenses: 2600 },
  { name: "ມ.ສ.", revenue: 4700, expenses: 3100 },
  { name: "ພ.ພ.", revenue: 6200, expenses: 3400 },
  { name: "ມິ.ຖ.", revenue: 7400, expenses: 3900 },
  { name: "ກ.ລ.", revenue: 6900, expenses: 3700 },
  { name: "ສ.ຫ.", revenue: 8100, expenses: 4200 },
  { name: "ກ.ຍ.", revenue: 7800, expenses: 4000 },
  { name: "ຕ.ລ.", revenue: 8900, expenses: 4600 },
  { name: "ພ.ຈ.", revenue: 9400, expenses: 4900 },
  { name: "ທ.ວ.", revenue: 10800, expenses: 5200 },
];
