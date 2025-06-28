"use server";

// import { prisma } from "@/lib/db";
// import { authOptions } from "@/app/api/auth/[...nextauth]/route";
// import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import * as z from "zod";

const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  bhk: z.coerce.number().int().min(1, "BHK must be at least 1"),
  price: z.coerce.number().min(0, "Price must be positive"),
  area: z.coerce.number().min(0, "Area must be positive"),
  location: z.string().min(1, "Location is required"),
  ownerInfo: z.string().min(1, "Owner info is required"),
});

export async function createProperty(values: z.infer<typeof formSchema>) {
  const validatedFields = formSchema.safeParse(values);
  
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Property.",
    };
  }

  // Since there's no database, we'll just log the data.
  console.log("New Property Data:", validatedFields.data);

  revalidatePath("/properties");
  redirect("/properties");
} 