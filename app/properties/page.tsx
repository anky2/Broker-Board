// import { prisma } from "@/lib/db";
// import { getServerSession } from "next-auth";
// import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Home, Search, Filter, Facebook, Twitter, Linkedin } from "lucide-react";
import Image from "next/image";
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

const listings = [
  {
    id: "1",
    title: "2 Bedroom Apartment",
    location: "Downtown",
    price: "$450,000",
    size: "1,200 sqft",
    imageUrl: "/placeholder-apartment.svg",
  },
  {
    id: "2",
    title: "4 Bedroom House",
    location: "Suburbs",
    price: "$750,000",
    size: "2,500 sqft",
    imageUrl: "/placeholder-house.svg",
  },
  {
    id: "3",
    title: "Luxury Condo",
    location: "Uptown",
    price: "$1,200,000",
    size: "1,800 sqft",
    imageUrl: "/placeholder-condo.svg",
  },
];

export default function PropertiesPage() {
    // const session = await getServerSession(authOptions);

    // if (!session || !session.user?.agencyId) {
    //     // This should be handled by middleware, but as a safeguard:
    //     redirect("/login");
    // }
    const agencyId = "clv2b24ap00001099qx9m5x4z"

    const properties = sampleProperties;

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
                            <Link href="/properties" className="px-3 py-2 rounded-md text-sm font-medium bg-purple-700">Listings Management</Link>
                            <Link href="/leads" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-700">Leads Dashboard</Link>
                            <Link href="/follow-ups" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-700">Follow-ups Tracker</Link>
                            <Link href="/settings" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-700">Settings</Link>
                        </nav>
                    </div>
                </div>
            </header>

            <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
                <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
                    <div className="flex items-center gap-2">
                        <Input type="search" placeholder="Search listings..." className="w-64" />
                        <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                            <Filter className="mr-2 h-4 w-4" /> Filter by Category
                        </Button>
                    </div>
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                        Add New Listing
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {listings.map((listing) => (
                        <div key={listing.id} className="bg-gray-200 rounded-2xl shadow-lg overflow-hidden flex flex-col">
                            <div className="relative h-48 w-full">
                                <Image 
                                    src={listing.imageUrl}
                                    alt={listing.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-t-2xl"
                                />
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <h2 className="text-2xl font-bold text-gray-800">{listing.title}</h2>
                                <p className="text-gray-600 mt-2">Location: {listing.location}</p>
                                <p className="text-gray-600">Price: {listing.price}</p>
                                <p className="text-gray-600">Size: {listing.size}</p>
                                <div className="mt-auto pt-4">
                                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-lg">
                                        Edit Listing
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            
            <footer className="bg-gray-200 mt-auto">
                <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-gray-600">
                    <p>Contact: info@brokerboard.com | Phone: (123) 456-7890</p>
                    <div className="flex justify-center space-x-4 mt-2">
                        <Link href="#" className="text-gray-600 hover:text-purple-600"><Facebook size={20} /></Link>
                        <Link href="#" className="text-gray-600 hover:text-purple-600"><Twitter size={20} /></Link>
                        <Link href="#" className="text-gray-600 hover:text-purple-600"><Linkedin size={20} /></Link>
                    </div>
                    <p className="text-sm mt-4">&copy; 2023 BrokerBoard. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
} 