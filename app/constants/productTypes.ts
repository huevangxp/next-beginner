export interface ProductTypeItem {
  id: number;
  name: string;
  description: string;
  count: number;
  status: "active" | "inactive";
}

export const PRODUCT_TYPES_MOCK_DATA: ProductTypeItem[] = [
  {
    id: 1,
    name: "ເຄື່ອງເອເລັກໂຕຣນິກ",
    description: "ອຸປະກອນໄຟຟ້າ, ໂທລະສັບ, ຄອມພິວເຕີ ແລະ ອຸປະກອນໄອທີ",
    count: 145,
    status: "active",
  },
  {
    id: 2,
    name: "ອຸປະກອນສວມໃສ່",
    description: "ໂມງອັດສະລິຍະ, ສາຍຮັດສຸຂະພາບ ແລະ ອຸປະກອນ IoT",
    count: 38,
    status: "active",
  },
  {
    id: 3,
    name: "ອຸປະກອນເສີມ",
    description: "ເຄສ, ສາຍສາກ, ຫູຟັງ, ແຜ່ນຮອງເມົາສ໌ ແລະ ອື່ນໆ",
    count: 82,
    status: "active",
  },
  {
    id: 4,
    name: "ເຄື່ອງໃຊ້ໄຟຟ້າໃນບ້ານ",
    description: "ອຸປະກອນອຳນວຍຄວາມສະດວກພາຍໃນເຮືອນ",
    count: 24,
    status: "inactive",
  },
  {
    id: 5,
    name: "ກ້ອງ ແລະ ອຸປະກອນຖ່າຍພາບ",
    description: "ກ້ອງດິຈິຕອນ, ເລນ, ຂາຕັ້ງກ້ອງ ແລະ ໄຟສະຕູດິໂອ",
    count: 19,
    status: "active",
  },
];
