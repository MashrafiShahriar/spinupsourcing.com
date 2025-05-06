// app/page.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Construction } from "lucide-react";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4">
      <Card className="w-full max-w-md text-center p-6 shadow-xl border-none rounded-2xl bg-white dark:bg-gray-800">
        <CardContent className="flex flex-col items-center gap-6">
          <Construction className="w-16 h-16 text-yellow-500" />
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">We're Under Construction</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Our website is currently being worked on. We'll be back soon with something amazing!
          </p>
          {/* //Website details */}
          <p className="text-gray-600 dark:text-gray-300">
          spinupsourcing.com
            </p>
          <Button variant="outline" className="mt-4" disabled>
            Stay Tuned
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
