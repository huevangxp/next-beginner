import {
  ShoppingBag,
  ShoppingCart,
  Users,
  Settings,
} from "lucide-react";

export interface RoleItem {
  id: number;
  name: string;
  description: string;
  usersCount: number;
  permissions: string[];
  status: "active" | "inactive";
}

export interface PermissionModule {
  id: string;
  name: string;
  icon: any;
  perms: string[];
}

export const PERMISSION_MODULES: PermissionModule[] = [
  {
    id: "products",
    name: "ຈັດການສິນຄ້າ",
    icon: ShoppingBag,
    perms: ["ເບິ່ງ", "ເພີ່ມ", "ແກ້ໄຂ", "ລຶບ"],
  },
  {
    id: "orders",
    name: "ຈັດການລາຍການສັ່ງຊື້",
    icon: ShoppingCart,
    perms: ["ເບິ່ງ", "ຢືນຢັນ", "ຍົກເລີກ", "ສຳເລັດ"],
  },
  {
    id: "users",
    name: "ຈັດການຜູ້ໃຊ້",
    icon: Users,
    perms: ["ເບິ່ງ", "ເພີ່ມ", "ແກ້ໄຂ", "ລຶບ"],
  },
  {
    id: "settings",
    name: "ຕັ້ງຄ່າລະບົບ",
    icon: Settings,
    perms: ["ເບິ່ງ", "ແກ້ໄຂ"],
  },
];

export const ROLES_MOCK_DATA: RoleItem[] = [
  {
    id: 1,
    name: "Super Admin",
    description: "ມີສິດທິສູງສຸດໃນການເຂົ້າເຖິງ ແລະ ຈັດການທຸກສ່ວນຂອງລະບົບ",
    usersCount: 2,
    permissions: ["ທຸກສິດທິ", "ຈັດການລະບົບ", "ຈັດການຜູ້ໃຊ້", "ຈັດການການເງິນ"],
    status: "active",
  },
  {
    id: 2,
    name: "Admin",
    description: "ຈັດການຂໍ້ມູນທົ່ວໄປ, ສິນຄ້າ, ອໍເດີ ແລະ ເບິ່ງລາຍງານ",
    usersCount: 5,
    permissions: ["ຈັດການສິນຄ້າ", "ຈັດການອໍເດີ", "ເບິ່ງລາຍງານ", "ຈັດການລູກຄ້າ"],
    status: "active",
  },
  {
    id: 3,
    name: "Manager",
    description: "ກວດສອບອໍເດີ, ຈັດການສະຕັອກສິນຄ້າ ແລະ ເບິ່ງສະຖິຕິການຂາຍ",
    usersCount: 4,
    permissions: ["ຈັດການອໍເດີ", "ຈັດການສະຕັອກ", "ເບິ່ງລາຍງານ"],
    status: "active",
  },
  {
    id: 4,
    name: "Staff / Cashier",
    description: "ສ້າງອໍເດີ, ຮັບຊຳລະເງິນ ແລະ ກວດສອບສິນຄ້າໜ້າຮ້ານ",
    usersCount: 8,
    permissions: ["ສ້າງອໍເດີ", "ເບິ່ງສິນຄ້າ"],
    status: "active",
  },
  {
    id: 5,
    name: "Viewer",
    description: "ເບິ່ງຂໍ້ມູນ ແລະ ລາຍງານເທົ່ານັ້ນ ບໍ່ສາມາດແກ້ໄຂໄດ້",
    usersCount: 1,
    permissions: ["ເບິ່ງຂໍ້ມູນ", "ເບິ່ງລາຍງານ"],
    status: "inactive",
  },
];
