import { prisma } from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { notFound } from "next/navigation";
import { Reminder } from "@prisma/client";
import { ReminderForm } from "../_components/reminder-form";

export default async function LeadDetailPage({ params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.agencyId) {
    redirect("/login");
  }

  const lead = await prisma.lead.findUnique({
    where: {
      id: params.id,
      agencyId: session.user.agencyId, // Ensure user can only see leads from their agency
    },
    include: {
      reminders: {
        orderBy: {
          reminderDate: 'asc'
        },
        include: {
            user: {
                select: { name: true }
            }
        }
      }
    }
  });

  if (!lead) {
    notFound();
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-2">{lead.name}</h1>
      <p className="text-lg text-muted-foreground mb-4">{lead.phone}</p>
      
      <div className="mb-6 space-y-2">
        <p><strong>Budget:</strong> ₹{lead.budget.toLocaleString('en-IN')}</p>
        <p><strong>Preferences:</strong> {lead.preferences}</p>
        <p><strong>Status:</strong> <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">{lead.status}</span></p>
      </div>

      <div className="mb-6">
          <h2 className="text-xl font-bold mb-3">Add Reminder</h2>
          <ReminderForm leadId={lead.id} />
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3">Reminders</h2>
        {lead.reminders.length > 0 ? (
          <div className="space-y-3">
            {lead.reminders.map((reminder: Reminder & { user: { name: string | null }}) => (
              <div key={reminder.id} className="p-3 border rounded-lg bg-gray-50">
                <p className="font-semibold">{new Date(reminder.reminderDate).toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                <p className="my-1">{reminder.note}</p>
                <p className="text-xs text-muted-foreground">Set by: {reminder.user.name}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No reminders set for this lead.</p>
        )}
      </div>
    </div>
  );
} 