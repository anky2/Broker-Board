// import { prisma } from "@/lib/db";
// import { getServerSession } from "next-auth";
// import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
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
    },
];

export default async function LeadsPage() {
    // const session = await getServerSession(authOptions);

    // if (!session || !session.user?.agencyId) {
    //     redirect("/login");
    // }
    const agencyId = "clv2b24ap00001099qx9m5x4z"

    const leads = sampleLeads;

    return (
        <div className="p-4">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Leads</h1>
                <Button asChild>
                    <Link href="/leads/new">
                        <PlusCircle className="mr-2 h-4 w-4" /> Add Lead
                    </Link>
                </Button>
            </div>
            
            {leads.length === 0 ? (
                <p>No leads found. Add your first one!</p>
            ) : (
                <div className="grid gap-4">
                    {leads.map((lead: Lead) => (
                        <Link href={`/leads/${lead.id}`} key={lead.id} className="block p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                            <h2 className="font-bold">{lead.name}</h2>
                            <p>Budget: ₹{lead.budget}</p>
                            <p className="text-sm text-muted-foreground">{lead.preferences}</p>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
} 