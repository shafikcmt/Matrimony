import { Card, CardContent } from "@/components/ui/card";

export default function SimilarProfilesCard() {
    return (
        <Card>
            <CardContent className="relative">
                <div className="flex justify-between items-center mb-2 mt-2">
                    <h2 className="font-semibold">Similar Profiles</h2>
                </div>
                <div className="text-sm flex flex-col gap-2">
                    <div>No similar profiles found yet.</div>
                </div>
            </CardContent>
        </Card>
    );
} 