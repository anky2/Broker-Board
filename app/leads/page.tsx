// import { prisma } from "@/lib/db";
// import { getServerSession } from "next-auth";
// import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Home, UserCircle } from "lucide-react";
// import { Lead } from "@prisma/client";

// Manually define the Lead type
type Lead = {
    id: string;
    name: string;
    phone: string;
    budget: number;
    preferences: string;
    status: "NEW" | "CONTACTED" | "VISIT" | "CLOSED";
    createdAt: Date;
    updatedAt: Date;
    agencyId: string;
    contact: {
        email: string;
        phone: string;
    };
    history: { event: string; date: string }[];
}

const sampleLeads: Lead[] = [
    {
        id: "lead1",
        name: "Anjali Singh",
        phone: "8765432109",
        budget: 80000,
        preferences: "3BHK, good ventilation, near metro",
        status: "NEW",
        agencyId: "clv2b24ap00001099qx9m5x4z",
        createdAt: new Date(),
        updatedAt: new Date(),
        contact: {
            email: "anjali@example.com",
            phone: "8765432109",
        },
        history: [
            { event: "Initial Contact", date: "01/10/2023" },
            { event: "Follow-up Call", date: "05/10/2023" },
            { event: "Meeting Scheduled", date: "10/10/2023" },
        ],
    },
    {
        id: "lead2",
        name: "Vikram Patel",
        phone: "7654321098",
        budget: 60000,
        preferences: "2BHK, furnished, allows pets",
        status: "CONTACTED",
        agencyId: "clv2b24ap00001099qx9m5x4z",
        createdAt: new Date(),
        updatedAt: new Date(),
        contact: {
            email: "vikram@example.com",
            phone: "7654321098",
        },
        history: [
            { event: "Initial Contact", date: "02/10/2023" },
            { event: "Email Follow-up", date: "06/10/2023" },
            { event: "Property Viewing", date: "12/10/2023" },
        ],
    },
    {
        id: "lead3",
        name: "Priya Kumar",
        phone: "6543210987",
        budget: 200000,
        preferences: "Villa or independent house",
        status: "VISIT",
        agencyId: "clv2b24ap00001099qx9m5x4z",
        createdAt: new Date(),
        updatedAt: new Date(),
        contact: {
            email: "priya@example.com",
            phone: "6543210987",
        },
        history: [
            { event: "Initial Contact", date: "03/10/2023" },
            { event: "Follow-up Email", date: "07/10/2023" },
            { event: "Negotiation Meeting", date: "15/10/2023" },
        ],
    },
];

export default function LeadsDashboardPage() {
    // const session = await getServerSession(authOptions);

    // if (!session || !session.user?.agencyId) {
    //     redirect("/login");
    // }
    const agencyId = "clv2b24ap00001099qx9m5x4z"

    const leads = sampleLeads;

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
                            <Link href="/leads" className="px-3 py-2 rounded-md text-sm font-medium bg-purple-700">Leads Dashboard</Link>
                            <Link href="/follow-ups" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-700">Follow-ups Tracker</Link>
                            <Link href="/settings" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-700">Settings</Link>
                        </nav>
                    </div>
                </div>
            </header>

            <div className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Sidebar */}
                    <aside className="w-full lg:w-1/4">
                        <div className="bg-gray-200 p-6 rounded-2xl shadow-lg mb-8">
                            <h2 className="text-xl font-bold mb-4">Add New Lead</h2>
                            <form className="space-y-4">
                                <Input type="text" placeholder="Name" className="bg-white rounded-lg" />
                                <Input type="text" placeholder="Contact" className="bg-white rounded-lg" />
                                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-lg">
                                    Add Lead
                                </Button>
                            </form>
                        </div>
                        <div className="bg-gray-200 p-6 rounded-2xl shadow-lg">
                            <h2 className="text-xl font-bold mb-4">Categorize by Source</h2>
                            <div className="space-y-2">
                                <label className="flex items-center">
                                    <input type="radio" name="source" className="form-radio h-4 w-4 text-purple-600" />
                                    <span className="ml-2 text-gray-700">Online</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="radio" name="source" className="form-radio h-4 w-4 text-purple-600" />
                                    <span className="ml-2 text-gray-700">Referral</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="radio" name="source" className="form-radio h-4 w-4 text-purple-600" />
                                    <span className="ml-2 text-gray-700">Event</span>
                                </label>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="w-full lg:w-3/4">
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                            {leads.map((lead, index) => (
                                <div key={index} className="bg-purple-100 p-6 rounded-2xl shadow-lg">
                                    <div className="flex items-center mb-4">
                                        <UserCircle className="h-8 w-8 text-purple-800 mr-3" />
                                        <h3 className="text-xl font-bold text-purple-900">{lead.name}</h3>
                                    </div>
                                    <div className="space-y-1 text-sm text-gray-700 mb-4">
                                        <p><span className="font-semibold">Contact:</span> {lead.contact.email}</p>
                                        <p><span className="font-semibold">Phone:</span> {lead.contact.phone}</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-purple-900 mb-2">Interaction History</h4>
                                        <div className="space-y-1 text-sm text-gray-700">
                                            {lead.history.map((item, i) => (
                                                <p key={i}>{item.event}: {item.date}</p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </main>
                </div>
            </div>
            
            <footer className="bg-gray-200 mt-auto">
                <div className="container mx-auto py-6 px-4 sm:px-6 lg:p-8 text-center text-gray-800">
                    <h2 className="text-xl font-bold mb-2">Follow-up Recommendations</h2>
                    <p className="text-gray-600">Reach out to Jessica Smith with a new property listing.</p>
                    <p className="text-gray-600">Schedule a meeting with Michael Johnson to discuss financing options.</p>
                    <p className="text-gray-600">Send Emily Davis a personalized thank you note for her time.</p>
                </div>
            </footer>
        </div>
    );
} 