"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Building2, Users, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: Home },
  { href: "/properties", label: "Properties", icon: Building2 },
  { href: "/leads", label: "Leads", icon: Users },
  { href: "/settings", label: "More", icon: MoreHorizontal },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-16 bg-background border-t">
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto">
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
            >
              <item.icon
                className={cn(
                  "w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary dark:group-hover:text-primary",
                  isActive && "text-primary"
                )}
              />
              <span
                className={cn(
                  "text-sm text-gray-500 dark:text-gray-400 group-hover:text-primary dark:group-hover:text-primary",
                  isActive && "text-primary"
                )}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
} 