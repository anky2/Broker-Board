"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function AuthStatus() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div className="h-9 w-24 rounded-md bg-gray-200 animate-pulse" />;
  }

  if (session) {
    return (
      <div className="flex items-center gap-4">
        <p className="text-sm">Signed in as {session.user?.name}</p>
        <Button variant="outline" onClick={() => signOut()}>
          Sign out
        </Button>
      </div>
    );
  }

  return (
    <Button asChild>
      <Link href="/login">Sign in</Link>
    </Button>
  );
} 