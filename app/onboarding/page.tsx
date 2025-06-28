import { createAgency } from "./actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function OnboardingPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <h1 className="text-center text-2xl font-bold mb-2">Welcome to BrokerBoard</h1>
        <p className="text-center text-muted-foreground mb-6">Let's set up your agency.</p>
        <form action={createAgency}>
          <div className="grid gap-2">
            <div>
              <Label htmlFor="agencyName">Agency Name</Label>
              <Input id="agencyName" name="agencyName" type="text" required />
            </div>
            <Button type="submit">Create Agency</Button>
          </div>
        </form>
      </div>
    </div>
  );
} 