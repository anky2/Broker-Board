"use server";

import { prisma } from "@/lib/db";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createAgency(formData: FormData) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    throw new Error("Not authenticated");
  }

  const agencyName = formData.get("agencyName") as string;
  if (!agencyName) {
    throw new Error("Agency name is required");
  }

  const agency = await prisma.agency.create({
    data: {
      name: agencyName,
      users: {
        connect: { id: session.user.id },
      },
    },
  });

  if (agency) {
    revalidatePath("/dashboard");
    redirect("/dashboard");
  }
} 