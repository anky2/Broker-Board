"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Home } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function SettingsPage() {
  const [isOfflineMode, setIsOfflineMode] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-purple-800 text-white shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Home className="h-6 w-6 mr-2" />
              <h1 className="text-xl font-bold">BrokerBoard</h1>
            </div>
            <nav className="hidden md:flex space-x-4">
              <Link href="/dashboard" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-700">Home</Link>
              <Link href="/properties" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-700">Listings Management</Link>
              <Link href="/leads" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-700">Leads Dashboard</Link>
              <Link href="/follow-ups" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-700">Follow-ups Tracker</Link>
              <Link href="/settings" className="px-3 py-2 rounded-md text-sm font-medium bg-purple-700">Settings</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
        <div className="space-y-12">
          {/* Account Details */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Account Details</h2>
            <div className="bg-gray-200 p-6 rounded-2xl shadow-lg space-y-4">
              <div className="flex items-center">
                <label className="w-1/4 font-semibold text-gray-700">Username</label>
                <Input type="text" placeholder="" className="w-3/4 bg-white rounded-full" />
              </div>
              <div className="flex items-center">
                <label className="w-1/4 font-semibold text-gray-700">Email</label>
                <Input type="email" placeholder="" className="w-3/4 bg-white rounded-full" />
              </div>
            </div>
          </section>

          {/* Notification Preferences */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Notification Preferences</h2>
            <div className="bg-purple-600 text-white p-6 rounded-2xl shadow-lg space-y-3">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox h-5 w-5 bg-white text-purple-600 rounded" />
                <span className="ml-3 font-medium">Email Notifications</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox h-5 w-5 bg-white text-purple-600 rounded" />
                <span className="ml-3 font-medium">SMS Notifications</span>
              </label>
            </div>
          </section>

          {/* Offline Settings */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Offline Settings</h2>
            <div className="bg-purple-100 p-6 rounded-2xl shadow-lg flex items-center justify-between">
              <span className="font-semibold text-gray-700">Enable Offline Mode</span>
              <div className="relative inline-block w-14 align-middle select-none">
                <input 
                  type="checkbox" 
                  name="offlineToggle" 
                  id="offlineToggle" 
                  className="toggle-checkbox absolute block w-7 h-7 rounded-full bg-white border-4 appearance-none cursor-pointer"
                  checked={isOfflineMode}
                  onChange={() => setIsOfflineMode(!isOfflineMode)}
                />
                <label htmlFor="offlineToggle" className="toggle-label block overflow-hidden h-7 rounded-full bg-gray-300 cursor-pointer"></label>
              </div>
            </div>
          </section>

          {/* Performance Optimization */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Performance Optimization</h2>
            <div className="bg-gray-200 p-6 rounded-2xl shadow-lg flex items-center justify-between">
              <span className="font-semibold text-gray-700">Save Preferences</span>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-8 rounded-full">
                Save
              </Button>
            </div>
          </section>
        </div>
      </main>
      <style jsx>{`
        .toggle-checkbox:checked {
          right: 0;
          border-color: #9333ea; /* purple-600 */
        }
        .toggle-checkbox:checked + .toggle-label {
          background-color: #9333ea; /* purple-600 */
        }
      `}</style>
    </div>
  );
} 