"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Save,
  ShoppingCart,
  User,
  Package,
  Plus,
  Trash2,
  Search,
  CheckCircle2,
  XCircle,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

const CreateOrderPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Mock data for selection
  const customers = [
    { id: 1, name: "ສົມພອນ ໄຊຍະວົງ", phone: "020 5555 6666" },
    { id: 2, name: "ແກ້ວມະນີ ຈັນທະວົງ", phone: "020 7777 8888" },
    { id: 3, name: "ບຸນມີ ພົມມະຈັນ", phone: "020 9999 0000" },
  ];

  const products = [
    { id: 1, name: "iPhone 15 Pro", price: 15000000, stock: 10 },
    { id: 2, name: "MacBook Air M2", price: 22000000, stock: 5 },
    { id: 3, name: "AirPods Pro 2", price: 2500000, stock: 20 },
  ];

  const [selectedCustomer, setSelectedCustomer] = useState("");
  const [orderItems, setOrderItems] = useState<
    { productId: number; quantity: number; price: number }[]
  >([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const addProductToOrder = (productId: number) => {
    const product = products.find((p) => p.id === productId);
    if (!product) return;

    const existingItem = orderItems.find(
      (item) => item.productId === productId
    );
    if (existingItem) {
      setOrderItems(
        orderItems.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setOrderItems([
        ...orderItems,
        { productId, quantity: 1, price: product.price },
      ]);
    }
  };

  const removeItem = (productId: number) => {
    setOrderItems(orderItems.filter((item) => item.productId !== productId));
  };

  const updateQuantity = (productId: number, delta: number) => {
    setOrderItems(
      orderItems.map((item) => {
        if (item.productId === productId) {
          const newQty = Math.max(1, item.quantity + delta);
          return { ...item, quantity: newQty };
        }
        return item;
      })
    );
  };

  const calculateTotal = () => {
    return orderItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCustomer || orderItems.length === 0) return;

    setIsLoading(true);
    // Mock saving process
    setTimeout(() => {
      setIsLoading(false);
      router.push("/orders");
    }, 1500);
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-gray-950 p-4 md:p-8 animate-in fade-in duration-500">
      <div className="mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-start gap-4 mb-8">
          <Link
            href="/orders"
            className="mt-1 p-2 hover:bg-white dark:hover:bg-gray-800 rounded-full transition-all text-gray-400 hover:text-gray-600 shadow-sm"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-[#0f172a] dark:text-white">
              ສ້າງລາຍການສັ່ງຊື້ໃໝ່
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              ເລືອກລູກຄ້າ ແລະ ເພີ່ມສິນຄ້າເພື່ອສ້າງລາຍການສັ່ງຊື້.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Form & Product Selection */}
          <div className="lg:col-span-2 space-y-8">
            {/* Customer Selection */}
            <div className="bg-white dark:bg-gray-900 rounded-[32px] p-8 shadow-sm border border-gray-100 dark:border-gray-800">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-900/20 flex items-center justify-center text-teal-600">
                  <User className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-gray-800 dark:text-white text-lg">
                  ຂໍ້ມູນລູກຄ້າ
                </h3>
              </div>

              <div className="space-y-4">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300">
                  ເລືອກລູກຄ້າ
                </label>
                <select
                  value={selectedCustomer}
                  onChange={(e) => setSelectedCustomer(e.target.value)}
                  className="w-full px-5 py-4 bg-[#f8fafc] dark:bg-gray-800 border-none rounded-2xl focus:ring-2 focus:ring-teal-500/20 outline-none transition-all dark:text-white appearance-none cursor-pointer"
                >
                  <option value="">-- ເລືອກລູກຄ້າ --</option>
                  {customers.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name} ({c.phone})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Product Selection */}
            <div className="bg-white dark:bg-gray-900 rounded-[32px] p-8 shadow-sm border border-gray-100 dark:border-gray-800">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600">
                  <Package className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-gray-800 dark:text-white text-lg">
                  ເລືອກສິນຄ້າ
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {products.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => addProductToOrder(product.id)}
                    className="flex items-center justify-between p-4 bg-[#f8fafc] dark:bg-gray-800/50 rounded-2xl border border-transparent hover:border-teal-500/50 hover:bg-white dark:hover:bg-gray-800 transition-all group text-left"
                  >
                    <div>
                      <p className="font-bold text-gray-800 dark:text-white group-hover:text-teal-600 transition-colors">
                        {product.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        ລາຄາ: {product.price.toLocaleString()} ກີບ
                      </p>
                      <p className="text-xs text-teal-600 dark:text-teal-400 mt-1">
                        ຄົງເຫຼືອ: {product.stock}
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center text-teal-600 shadow-sm group-hover:bg-teal-600 group-hover:text-white transition-all">
                      <Plus className="w-4 h-4" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-900 rounded-[32px] p-8 shadow-sm border border-gray-100 dark:border-gray-800 sticky top-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center text-orange-600">
                  <ShoppingCart className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-gray-800 dark:text-white text-lg">
                  ສະຫຼຸບການສັ່ງຊື້
                </h3>
              </div>

              <div className="space-y-4 mb-8 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                {orderItems.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-gray-50 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                      <ShoppingCart className="w-8 h-8 text-gray-300" />
                    </div>
                    <p className="text-sm text-gray-400">
                      ຍັງບໍ່ມີສິນຄ້າໃນລາຍການ
                    </p>
                  </div>
                ) : (
                  orderItems.map((item) => {
                    const product = products.find(
                      (p) => p.id === item.productId
                    );
                    return (
                      <div
                        key={item.productId}
                        className="flex items-center justify-between gap-4 p-3 bg-[#f8fafc] dark:bg-gray-800/50 rounded-2xl"
                      >
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-sm text-gray-800 dark:text-white truncate">
                            {product?.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {(item.price * item.quantity).toLocaleString()} ກີບ
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.productId, -1)}
                            className="w-6 h-6 rounded-lg bg-white dark:bg-gray-700 flex items-center justify-center text-gray-500 hover:text-red-500 transition-colors shadow-sm"
                          >
                            -
                          </button>
                          <span className="text-sm font-bold w-6 text-center dark:text-white">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.productId, 1)}
                            className="w-6 h-6 rounded-lg bg-white dark:bg-gray-700 flex items-center justify-center text-gray-500 hover:text-teal-500 transition-colors shadow-sm"
                          >
                            +
                          </button>
                          <button
                            onClick={() => removeItem(item.productId)}
                            className="ml-2 p-1.5 text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>

              <div className="pt-6 border-t border-gray-100 dark:border-gray-800 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 dark:text-gray-400">
                    ຍອດລວມທັງໝົດ
                  </span>
                  <span className="text-xl font-bold text-teal-600 dark:text-teal-400">
                    {calculateTotal().toLocaleString()} ກີບ
                  </span>
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={
                    isLoading || !selectedCustomer || orderItems.length === 0
                  }
                  className="w-full py-4 bg-teal-600 hover:bg-teal-700 text-white rounded-2xl font-bold text-lg shadow-lg shadow-teal-100 dark:shadow-none transition-all active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <Save className="w-5 h-5" />
                      <span>ຢືນຢັນການສັ່ງຊື້</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateOrderPage;
