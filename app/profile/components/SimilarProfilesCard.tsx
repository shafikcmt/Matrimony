import { Card, CardContent } from "@/components/ui/card";
import { Edit2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useProfileStore } from "@/state/profile";
import { useToast } from "@/hooks/use-toast";

export default function SimilarProfilesCard() {
    const [open, setOpen] = useState(false);
    const { toast } = useToast();
    
    // Get data from store
    const basicInfo = useProfileStore((state) => state.basicInfo);
    const personalDetails = useProfileStore((state) => state.personalDetails);
    const partnerPreferences = useProfileStore((state) => state.partnerPreferences);
    const isLoading = useProfileStore((state) => state.isLoading);

    const handleSave = async () => {
        try {
            // Save to backend
            await useProfileStore.getState().saveProfile();
            
            setOpen(false);
            toast({
                title: "Success",
                description: "Profile updated successfully",
            });
        } catch (error) {
            toast({
                title: "Error",
                description: "Failed to update profile",
                variant: "destructive",
            });
        }
    };

    return (
        <Card>
            <CardContent className="relative">
                <div className="absolute top-1 right-3">
                    <button onClick={() => { setOpen(true); }}>
                        <Edit2 className="w-4 h-4" />
                    </button>
                </div>
                <div className="flex justify-between items-center mb-2 mt-2">
                    <h2 className="font-semibold">Similar Profiles</h2>
                </div>

                <div className="text-sm flex flex-col gap-2">
                    <div>No similar profiles found yet.</div>
                </div>

                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Edit Similar Profiles</DialogTitle>
                        </DialogHeader>
                        <div className="text-sm">
                            <p>Similar profiles will be shown here based on your preferences and profile details.</p>
                        </div>
                        <DialogFooter>
                            <Button
                                onClick={handleSave}
                                disabled={isLoading}
                            >
                                {isLoading ? "Saving..." : "Save"}
                            </Button>
                            <DialogClose asChild>
                                <Button variant="outline">Cancel</Button>
                            </DialogClose>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </CardContent>
        </Card>
    );
} 