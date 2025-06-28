import AuthStatus from "@/components/auth-status";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="absolute top-4 right-4">
        <AuthStatus />
      </div>
      <h1 className="text-4xl font-bold">BrokerBoard</h1>
      <p className="mt-4 text-lg">Coming soon...</p>
    </main>
  );
} 