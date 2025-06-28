// import { prisma } from "@/lib/db";
// import { getServerSession } from "next-auth";
// import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
// import { Property } from "@prisma/client";

// Manually define the Property type since we're not using Prisma
type Property = {
  id: string;
  title: string;
  bhk: number;
  price: number;
  area: number;
  location: string;
  status: "AVAILABLE" | "RENTED" | "SOLD";
  ownerInfo: string;
  createdAt: Date;
  updatedAt: Date;
  agencyId: string;
}

const sampleProperties: Property[] = [
  {
    id: "prop1",
    title: "Spacious 3BHK in Indiranagar",
    bhk: 3,
    price: 75000,
    area: 1800,
    location: "Indiranagar, Bangalore",
    ownerInfo: "Mr. Sharma - 9876543210",
    status: "AVAILABLE",
    agencyId: "clv2b24ap00001099qx9m5x4z",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "prop2",
    title: "Modern 2BHK with City View",
    bhk: 2,
    price: 55000,
    area: 1200,
    location: "Koramangala, Bangalore",
    ownerInfo: "Ms. Gupta - 9988776655",
    status: "AVAILABLE",
    agencyId: "clv2b24ap00001099qx9m5x4z",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "prop3",
    title: "Luxury Villa with Private Pool",
    bhk: 5,
    price: 250000,
    area: 4000,
    location: "Whitefield, Bangalore",
    ownerInfo: "Mr. Reddy - 9123456789",
    status: "RENTED",
    agencyId: "clv2b24ap00001099qx9m5x4z",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export default async function PropertiesPage() {
    // const session = await getServerSession(authOptions);

    // if (!session || !session.user?.agencyId) {
    //     // This should be handled by middleware, but as a safeguard:
    //     redirect("/login");
    // }
    const agencyId = "clv2b24ap00001099qx9m5x4z"

    const properties = sampleProperties;

    return (
        <div className="p-4">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Properties</h1>
                <Button asChild>
                    <Link href="/properties/new">
                        <PlusCircle className="mr-2 h-4 w-4" /> Add Property
                    </Link>
                </Button>
            </div>
            
            {properties.length === 0 ? (
                <p>No properties found. Add your first one!</p>
            ) : (
                <div className="grid gap-4">
                    {properties.map((property: Property) => (
                        <div key={property.id} className="p-4 border rounded-lg">
                            <h2 className="font-bold">{property.title}</h2>
                            <p>{property.bhk} BHK - {property.area} sqft</p>
                            <p className="text-sm text-muted-foreground">Price: ₹{property.price}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
} 