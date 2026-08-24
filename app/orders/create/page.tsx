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
} from "lucide-react";
import Link from "next/link";
import {
  CREATE_ORDER_CUSTOMERS,
  CREATE_ORDER_PRODUCTS,
} from "../../constants";

const CreateOrderPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  const customers = CREATE_ORDER_CUSTOMERS;
  const products = CREATE_ORDER_PRODUCTS;

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
    setTimeout(() => {
      setIsLoading(false);
      router.push("/orders");
    }, 1000);
  };

  if (!mounted) return null;

  return (
    <div className="space-y-6 animate-in fade-in duration-500 pb-8">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Link
          href="/orders"
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all text-gray-500 hover:text-gray-900 dark:hover:text-white"
        >
          <ArrowLeft className="w-4 h-4" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
            ສ້າງລາຍການສັ່ງຊື້ໃໝ່
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-0.5">
            ເລືອກລູກຄ້າ ແລະ ເພີ່ມສິນຄ້າເພື່ອສ້າງລາຍການສັ່ງຊື້
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Customer & Product Selection */}
        <div className="lg:col-span-2 space-y-4">
          {/* Customer Selection */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="flex items-center gap-2.5 mb-3.5">
              <div className="w-8 h-8 rounded-xl bg-teal-50 dark:bg-teal-900/20 flex items-center justify-center text-teal-600">
                <User className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white text-sm">
                ຂໍ້ມູນລູກຄ້າ
              </h3>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                ເລືອກລູກຄ້າ
              </label>
              <select
                value={selectedCustomer}
                onChange={(e) => setSelectedCustomer(e.target.value)}
                className="w-full px-3.5 py-2 bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 outline-none transition-all dark:text-white appearance-none cursor-pointer"
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
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="flex items-center gap-2.5 mb-3.5">
              <div className="w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600">
                <Package className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white text-sm">
                ເລືອກສິນຄ້າ
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {products.map((product) => (
                <button
                  key={product.id}
                  type="button"
                  onClick={() => addProductToOrder(product.id)}
                  className="flex items-center justify-between p-3.5 bg-gray-50/60 dark:bg-gray-800/40 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-teal-500/40 hover:bg-teal-50/30 dark:hover:bg-teal-950/20 transition-all group text-left cursor-pointer"
                >
                  <div>
                    <p className="font-bold text-xs sm:text-sm text-gray-900 dark:text-white group-hover:text-teal-600 transition-colors">
                      {product.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                      {product.price.toLocaleString()} ກີບ
                    </p>
                    <p className="text-[11px] font-semibold text-teal-600 dark:text-teal-400 mt-0.5">
                      ຄົງເຫຼືອ: {product.stock}
                    </p>
                  </div>
                  <div className="w-7 h-7 rounded-lg bg-white dark:bg-gray-700 flex items-center justify-center text-teal-600 shadow-sm group-hover:bg-teal-600 group-hover:text-white transition-all">
                    <Plus className="w-3.5 h-3.5" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-gray-800 sticky top-20">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-xl bg-amber-50 dark:bg-amber-950/40 flex items-center justify-center text-amber-600">
                <ShoppingCart className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white text-sm">
                ສະຫຼຸບການສັ່ງຊື້
              </h3>
            </div>

            <div className="space-y-2.5 mb-4 max-h-72 overflow-y-auto pr-1">
              {orderItems.length === 0 ? (
                <div className="text-center py-8">
                  <div className="w-10 h-10 bg-gray-50 dark:bg-gray-800 rounded-xl flex items-center justify-center mx-auto mb-2 text-gray-400">
                    <ShoppingCart className="w-5 h-5" />
                  </div>
                  <p className="text-xs text-gray-400">ຍັງບໍ່ມີສິນຄ້າໃນລາຍການ</p>
                </div>
              ) : (
                orderItems.map((item) => {
                  const product = products.find(
                    (p) => p.id === item.productId
                  );
                  return (
                    <div
                      key={item.productId}
                      className="flex items-center justify-between gap-2 p-2.5 bg-gray-50/70 dark:bg-gray-800/40 rounded-xl border border-gray-100 dark:border-gray-800 text-xs"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-gray-900 dark:text-white truncate">
                          {product?.name}
                        </p>
                        <p className="text-gray-500 dark:text-gray-400 text-[11px]">
                          {(item.price * item.quantity).toLocaleString()} ກີບ
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.productId, -1)}
                          className="w-5 h-5 rounded-md bg-white dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-red-500 shadow-xs cursor-pointer"
                        >
                          -
                        </button>
                        <span className="font-bold w-4 text-center dark:text-white">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.productId, 1)}
                          className="w-5 h-5 rounded-md bg-white dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-teal-600 shadow-xs cursor-pointer"
                        >
                          +
                        </button>
                        <button
                          type="button"
                          onClick={() => removeItem(item.productId)}
                          className="p-1 text-gray-400 hover:text-rose-600 cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            <div className="pt-3 border-t border-gray-100 dark:border-gray-800 space-y-3">
              <div className="flex justify-between items-center text-xs sm:text-sm">
                <span className="text-gray-500 dark:text-gray-400">
                  ຍອດລວມທັງໝົດ
                </span>
                <span className="font-bold text-teal-600 dark:text-teal-400 text-base">
                  {calculateTotal().toLocaleString()} ກີບ
                </span>
              </div>

              <button
                onClick={handleSubmit}
                disabled={
                  isLoading || !selectedCustomer || orderItems.length === 0
                }
                className="w-full py-2.5 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white rounded-xl font-semibold text-xs sm:text-sm shadow-md shadow-teal-600/20 transition-all active:scale-[0.98] flex items-center justify-center gap-1.5 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {isLoading ? (
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    <span>ຢືນຢັນການສັ່ງຊື້</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateOrderPage;
