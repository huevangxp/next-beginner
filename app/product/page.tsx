import React from "react";
import { ShoppingBag, Plus, Filter, Search } from "lucide-react";

const ProductPage = () => {
  const products = [
    {
      id: 1,
      name: "ຫູຟັງໄຮ້ສາຍ",
      price: 59.99,
      category: "ເຄື່ອງເອເລັກໂຕຣນິກ",
      stock: 12,
    },
    {
      id: 2,
      name: "ໂມງອັດສະລິຍະ",
      price: 129.99,
      category: "ອຸປະກອນສວມໃສ່",
      stock: 8,
    },
    {
      id: 3,
      name: "ລຳໂພງບລູທູດ",
      price: 39.99,
      category: "ເຄື່ອງເອເລັກໂຕຣນິກ",
      stock: 25,
    },
    {
      id: 4,
      name: "ເມົາສ໌ເກມມິ່ງ",
      price: 24.99,
      category: "ອຸປະກອນເສີມ",
      stock: 15,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">ສິນຄ້າ</h1>
          <p className="text-gray-500 text-sm mt-1">
            ຈັດການສາງສິນຄ້າ ແລະ ລາຍການສິນຄ້າຂອງທ່ານ
          </p>
        </div>
        <button className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-xl font-semibold transition-all shadow-lg shadow-teal-100">
          <Plus className="w-5 h-5" />
          <span>ເພີ່ມສິນຄ້າ</span>
        </button>
      </div>

      {/* Filters & Search */}
      <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="ຄົ້ນຫາສິນຄ້າ..."
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
          />
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all">
            <Filter className="w-4 h-4" />
            <span>ກັ່ນຕອງ</span>
          </button>
          <select className="flex-1 md:flex-none px-4 py-2 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 focus:outline-none transition-all">
            <option>ທຸກໝວດໝູ່</option>
            <option>ເຄື່ອງເອເລັກໂຕຣນິກ</option>
            <option>ອຸປະກອນສວມໃສ່</option>
            <option>ອຸປະກອນເສີມ</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-all group"
          >
            <div className="aspect-square bg-gray-50 rounded-xl mb-4 flex items-center justify-center group-hover:bg-teal-50 transition-colors">
              <ShoppingBag className="w-12 h-12 text-gray-300 group-hover:text-teal-200 transition-colors" />
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-teal-600 uppercase tracking-wider bg-teal-50 px-2 py-0.5 rounded-full">
                {product.category}
              </span>
              <h3 className="font-bold text-gray-800 text-lg">
                {product.name}
              </h3>
              <div className="flex items-center justify-between mt-4">
                <span className="text-xl font-bold text-gray-900">
                  ${product.price}
                </span>
                <span
                  className={`text-xs font-medium ${
                    product.stock < 10 ? "text-orange-500" : "text-gray-400"
                  }`}
                >
                  ມີໃນສາງ {product.stock} ລາຍການ
                </span>
              </div>
            </div>
            <button className="w-full mt-6 py-2.5 bg-gray-50 text-gray-600 font-semibold rounded-xl hover:bg-teal-600 hover:text-white transition-all">
              ແກ້ໄຂສິນຄ້າ
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
