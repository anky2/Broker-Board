import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Home, BarChart, PieChart, LineChart } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-purple-800 text-white shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Home className="h-6 w-6 mr-2" />
              <h1 className="text-xl font-bold">BrokerBoard</h1>
            </div>
            <nav className="hidden md:flex space-x-4">
              <Link href="/dashboard" className="px-3 py-2 rounded-md text-sm font-medium bg-purple-700">Home</Link>
              <Link href="/properties" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-700">Listings Management</Link>
              <Link href="/leads" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-700">Leads Dashboard</Link>
              <Link href="/follow-ups" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-700">Follow-ups Tracker</Link>
              <Link href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-700">Settings</Link>
            </nav>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Total Listings Card */}
          <div className="bg-gray-200 p-6 rounded-2xl shadow">
            <h2 className="text-lg font-semibold text-gray-700">Total Listings</h2>
            <p className="text-4xl font-bold mt-2">120</p>
            <div className="mt-4 h-24 flex items-end">
              {/* Bar chart placeholder */}
              <div className="w-full h-full flex items-end justify-between">
                <div className="bg-purple-500 w-1/5 h-1/3 rounded-t-sm"></div>
                <div className="bg-purple-500 w-1/5 h-3/4 rounded-t-sm"></div>
                <div className="bg-purple-500 w-1/5 h-1/2 rounded-t-sm"></div>
                <div className="bg-purple-500 w-1/5 h-5/6 rounded-t-sm"></div>
                <div className="bg-purple-500 w-1/5 h-2/3 rounded-t-sm"></div>
              </div>
            </div>
          </div>

          {/* Active Leads Card */}
          <div className="bg-purple-600 text-white p-6 rounded-2xl shadow">
            <h2 className="text-lg font-semibold">Active Leads</h2>
            <p className="text-4xl font-bold mt-2">45</p>
            <div className="mt-4 h-24 flex items-center justify-center">
              {/* Pie chart placeholder */}
              <div className="w-24 h-24 rounded-full border-8 border-purple-400 border-t-purple-200 animate-spin"></div>
            </div>
          </div>

          {/* Follow-ups Card */}
          <div className="bg-purple-100 p-6 rounded-2xl shadow">
            <h2 className="text-lg font-semibold text-gray-700">Follow-ups</h2>
            <p className="text-4xl font-bold mt-2">30</p>
            <div className="mt-4 h-24 flex items-end">
              {/* Line chart placeholder */}
              <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 200 60" preserveAspectRatio="none">
                <path strokeWidth="2" className="text-purple-500" d="M 0 45 L 20 40 L 40 50 L 60 30 L 80 45 L 100 35 L 120 42 L 140 55 L 160 58 L 180 55 L 200 60" />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <div className="flex gap-4">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg">
              New Listing
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg">
              New Lead
            </Button>
          </div>
          <div className="flex-grow flex items-center mt-4 sm:mt-0">
            <Input type="search" placeholder="Search for listings or leads" className="flex-grow rounded-r-none"/>
            <Button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-l-none rounded-r-lg">
              Search
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
} 