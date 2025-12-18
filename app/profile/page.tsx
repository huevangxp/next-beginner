"use client";

import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Camera,
  Shield,
  Bell,
  Globe,
  Save,
  Lock,
} from "lucide-react";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("personal");

  const tabs = [
    { id: "personal", name: "Personal Info", icon: User },
    { id: "security", name: "Security", icon: Shield },
    { id: "notifications", name: "Notifications", icon: Bell },
  ];

  return (
    <div className="max-w-10xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Profile</h1>
        <p className="text-gray-500 mt-1">
          Manage your profile information and security preferences.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Tabs */}
        <div className="lg:col-span-1 space-y-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-teal-600 text-white shadow-lg shadow-teal-100"
                    : "text-gray-600 hover:bg-white hover:shadow-sm"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* Main Content Area */}
        <div className="lg:col-span-3 space-y-6">
          {activeTab === "personal" && (
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden animate-in fade-in slide-in-from-right-4 duration-300">
              {/* Profile Cover & Avatar */}
              <div className="h-32 bg-gradient-to-r from-teal-500 to-teal-700 relative">
                <div className="absolute -bottom-12 left-8">
                  <div className="relative group">
                    <div className="w-24 h-24 rounded-2xl bg-white p-1 shadow-xl">
                      <div className="w-full h-full rounded-xl bg-gray-100 flex items-center justify-center overflow-hidden border border-gray-100">
                        <User className="w-12 h-12 text-gray-400" />
                      </div>
                    </div>
                    <button className="absolute bottom-0 right-0 bg-white p-2 rounded-lg shadow-lg border border-gray-100 text-teal-600 hover:scale-110 transition-transform">
                      <Camera className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="pt-16 p-8 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        defaultValue="Admin User"
                        className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="email"
                        defaultValue="admin@example.com"
                        className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="tel"
                        defaultValue="+1 (555) 000-0000"
                        className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">
                      Location
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        defaultValue="San Francisco, CA"
                        className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">
                    Bio
                  </label>
                  <textarea
                    rows={4}
                    defaultValue="Passionate about building modern web applications with Next.js and Tailwind CSS."
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all resize-none"
                  />
                </div>

                <div className="flex justify-end pt-4">
                  <button className="flex items-center gap-2 bg-teal-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-teal-700 transition-all shadow-lg shadow-teal-100">
                    <Save className="w-5 h-5" />
                    <span>Save Changes</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "security" && (
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  Password & Security
                </h3>
                <p className="text-gray-500 text-sm">
                  Update your password and secure your account.
                </p>
              </div>

              <div className="space-y-6 max-w-md">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">
                    Current Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">
                    New Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">
                    Confirm New Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all"
                    />
                  </div>
                </div>
                <button className="w-full py-3 bg-gray-900 text-white rounded-xl font-bold hover:bg-black transition-all">
                  Update Password
                </button>
              </div>

              <div className="pt-8 border-t border-gray-50">
                <div className="flex items-center justify-between p-4 bg-red-50 rounded-2xl border border-red-100">
                  <div>
                    <h4 className="font-bold text-red-800">Delete Account</h4>
                    <p className="text-red-600 text-sm">
                      Once you delete your account, there is no going back.
                    </p>
                  </div>
                  <button className="px-4 py-2 bg-red-600 text-white rounded-xl text-sm font-bold hover:bg-red-700 transition-all">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "notifications" && (
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 animate-in fade-in slide-in-from-right-4 duration-300">
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                Notification Preferences
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Email Notifications",
                    desc: "Receive weekly reports and updates via email.",
                  },
                  {
                    title: "Push Notifications",
                    desc: "Get instant alerts on your desktop or mobile.",
                  },
                  {
                    title: "Product Updates",
                    desc: "News about new features and improvements.",
                  },
                  {
                    title: "Security Alerts",
                    desc: "Important notifications about your account security.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-2xl transition-colors group"
                  >
                    <div>
                      <h4 className="font-bold text-gray-700">{item.title}</h4>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        defaultChecked={i % 2 === 0}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
