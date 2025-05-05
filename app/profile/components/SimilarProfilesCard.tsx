import { Card, CardContent } from "@/components/ui/card";

export default function SimilarProfilesCard() {
  return (
    <Card>
      <CardContent className="pt-6">
        <h2 className="text-lg font-semibold mb-4">Similar Profiles</h2>
        <div className="space-y-4">
          {/* This will be populated with actual similar profiles data */}
          <div className="text-sm text-gray-500">No similar profiles found yet.</div>
        </div>
      </CardContent>
    </Card>
  );
} 