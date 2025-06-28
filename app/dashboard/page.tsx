import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"
import { prisma } from "@/lib/db"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"

type ReminderWithLead = {
  id: string;
  note: string;
  reminderDate: Date;
  lead: {
    id: string;
    name: string | null;
  };
};

export default async function DashboardPage() {
  // const session = await getServerSession(authOptions)
  // if (!session || !session.user?.agencyId) {
  //   redirect("/login")
  // }

  const agencyId = "clv2b24ap00001099qx9m5x4z" //
  // const { agencyId } = session.user

  const propertyCount = 5;
  const leadCount = 12;
  const reminderCount = 3;

  const todaysReminders: ReminderWithLead[] = [
    {
      id: "rem1",
      note: "Follow up with Anjali about Indiranagar property.",
      reminderDate: new Date(),
      lead: { id: "lead1", name: "Anjali Singh" },
    },
    {
      id: "rem2",
      note: "Schedule visit for Vikram to see Koramangala flat.",
      reminderDate: new Date(),
      lead: { id: "lead2", name: "Vikram Patel" },
    },
    {
      id: "rem3",
      note: "Send new villa pictures to Priya.",
      reminderDate: new Date(),
      lead: { id: "lead3", name: "Priya Kumar" },
    }
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      
      <div className="grid gap-4 md:grid-cols-3 mb-6">
        <div className="p-4 border rounded-lg">
          <h3 className="text-lg font-semibold">Active Properties</h3>
          <p className="text-3xl font-bold">{propertyCount}</p>
        </div>
        <div className="p-4 border rounded-lg">
          <h3 className="text-lg font-semibold">Active Leads</h3>
          <p className="text-3xl font-bold">{leadCount}</p>
        </div>
        <div className="p-4 border rounded-lg">
          <h3 className="text-lg font-semibold">Today's Reminders</h3>
          <p className="text-3xl font-bold">{reminderCount}</p>
        </div>
      </div>

      <div className="flex gap-4 mb-6">
        <Button asChild>
            <Link href="/properties/new">
                <PlusCircle className="mr-2 h-4 w-4" /> Add Property
            </Link>
        </Button>
        <Button asChild>
            <Link href="/leads/new">
                <PlusCircle className="mr-2 h-4 w-4" /> Add Lead
            </Link>
        </Button>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3">Today's Tasks</h2>
        {todaysReminders.length > 0 ? (
          <div className="space-y-3">
            {(todaysReminders as ReminderWithLead[]).map((reminder) => (
              <Link href={`/leads/${reminder.lead.id}`} key={reminder.id} className="block p-3 border rounded-lg bg-gray-50 hover:bg-gray-100">
                <p className="font-semibold">{reminder.lead.name}</p>
                <p className="my-1">{reminder.note}</p>
                <p className="text-xs text-muted-foreground">
                  {new Date(reminder.reminderDate).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}
                </p>
              </Link>
            ))}
          </div>
        ) : (
          <p>No tasks for today. Enjoy your day!</p>
        )}
      </div>
    </div>
  )
} 