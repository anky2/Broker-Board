"use server";

// import { prisma } from "@/lib/db";
// import { authOptions } from "@/app/api/auth/[...nextauth]/route";
// import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(1, "Phone is required"),
  budget: z.coerce.number().min(0, "Budget must be positive"),
  preferences: z.string().min(1, "Preferences are required"),
});

export async function createLead(values: z.infer<typeof formSchema>) {
  const validatedFields = formSchema.safeParse(values);
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Lead.",
    };
  }

  // Since there's no database, we'll just log the data.
  console.log("New Lead Data:", validatedFields.data);

  revalidatePath("/leads");
  redirect("/leads");
}

const reminderSchema = z.object({
  note: z.string().min(1, "Note is required"),
  reminderDate: z.coerce.date({
    required_error: "Reminder date is required",
  }),
  leadId: z.string(),
});

export async function createReminder(values: z.infer<typeof reminderSchema>) {
  const validatedFields = reminderSchema.safeParse(values);
  if (!validatedFields.success) {
    throw new Error("Invalid form data.");
  }

  // Since there's no database, we'll just log the data.
  console.log("New Reminder Data:", validatedFields.data);

  revalidatePath(`/leads/${validatedFields.data.leadId}`);
} 