"use client";

import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";

const tasks = [
  {
    id: 1,
    title: "Follow-up Call",
    description: "Scheduled with client John Smith for tomorrow at 3 PM.",
  },
  {
    id: 2,
    title: "Email Follow-up",
    description: "Send proposal to client Sarah Brown by Friday.",
  },
  {
    id: 3,
    title: "Meeting Preparation",
    description: "Prepare documents for Monday's meeting with client Alex Green.",
  },
];

export default function FollowUpsTrackerPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
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
              <Link href="/follow-ups" className="px-3 py-2 rounded-md text-sm font-medium bg-purple-700">Follow-ups Tracker</Link>
              <Link href="/settings" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-700">Settings</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="flex flex-grow">
        {/* Left Sidebar */}
        <aside className="w-1/4 bg-purple-50 p-6">
          <h2 className="text-2xl font-bold mb-6">Filters & Settings</h2>
          <div className="space-y-6">
            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-lg">
              Create Task
            </Button>
            <div>
              <label className="text-gray-700 font-semibold">Task Status</label>
              <div className="mt-2 bg-white p-3 rounded-lg text-gray-500">
                Completed
              </div>
            </div>
            <div className="flex items-center justify-between">
              <label className="text-gray-700 font-semibold">Reminders</label>
              <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                <input type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer checked:right-0 checked:border-purple-600" checked readOnly/>
                <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="w-3/4 p-8">
          <h1 className="text-3xl font-bold mb-6">Upcoming Tasks</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tasks.map((task) => (
              <div key={task.id} className="bg-gray-100 p-6 rounded-2xl shadow-lg flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{task.title}</h3>
                  <p className="text-gray-600 mt-2">{task.description}</p>
                </div>
                <Button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg">
                  Mark as Completed
                </Button>
              </div>
            ))}
          </div>
        </main>
      </div>

      <footer className="bg-gray-100">
        <div className="container mx-auto py-4 px-8">
            <nav className="flex justify-center space-x-6">
              <Link href="/dashboard" className="text-gray-600 hover:text-purple-600">Home</Link>
              <Link href="/properties" className="text-gray-600 hover:text-purple-600">Listings Management</Link>
              <Link href="/leads" className="text-gray-600 hover:text-purple-600">Leads Dashboard</Link>
              <Link href="/follow-ups" className="text-gray-600 hover:text-purple-600">Follow-ups Tracker</Link>
              <Link href="/settings" className="text-gray-600 hover:text-purple-600">Settings</Link>
            </nav>
        </div>
      </footer>
      <style jsx>{`
        .toggle-checkbox:checked {
          right: 0;
          border-color: #7C3AED; /* purple-600 */
        }
        .toggle-checkbox:checked + .toggle-label {
          background-color: #7C3AED; /* purple-600 */
        }
      `}</style>
    </div>
  );
} 