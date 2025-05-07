import { Card, CardContent } from "@/components/ui/card";
import { Edit2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { useState } from "react";
import { FamilyDetails } from "../build/components/FamilyDetails";
import { FamilyDetailsTypes, UserProfileType } from "@/types/user";
import { Button } from "@/components/ui/button";
import { useProfileStore } from "@/state/profile";
import setUserProfile from "@/lib/user/setUserProfile";
import useAuthStore from "@/state/authState";
export default function ProfileFamilyCard() {
    const [open, setOpen] = useState(false);
    
    // Get data from store
    const familyDetails = useProfileStore((state) => state.familyDetails);
    const isLoading = useProfileStore((state) => state.isLoading);
    const authId = useAuthStore((state) => state.authId);

    const [formData, setFormData] = useState<FamilyDetailsTypes>(familyDetails);

    return (
        <Card>
            <CardContent className="relative">
                <div className="absolute top-1 right-3">
                    <button onClick={() => { setOpen(true); }}>
                        <Edit2 className="w-4 h-4" />
                    </button>
                </div>
                <div className="flex justify-between items-center mb-2 mt-2">
                    <h2 className="font-semibold">Family Details</h2>
                </div>

                <div className="text-sm flex flex-col gap-2">
                    <div><span className="font-medium">Father's Name:</span> {familyDetails.fatherName}</div>
                    <div><span className="font-medium">Father's Occupation:</span> {familyDetails.fatherOccupation}</div>
                    <div><span className="font-medium">Mother's Name:</span> {familyDetails.motherName}</div>
                    <div><span className="font-medium">Mother's Occupation:</span> {familyDetails.motherOccupation}</div>
                    <div><span className="font-medium">Brothers:</span> {familyDetails.brothers}</div>
                    <div><span className="font-medium">Sisters:</span> {familyDetails.sisters}</div>
                    <div><span className="font-medium">Family Type:</span> {familyDetails.familyType}</div>
                    <div><span className="font-medium">Family Values:</span> {familyDetails.familyValues}</div>
                    <div><span className="font-medium">Family Status:</span> {familyDetails.familyStatus}</div>
                    <div><span className="font-medium">Family Location:</span> {familyDetails.familyLocation}</div>
                    <div><span className="font-medium">Family Background:</span> {familyDetails.familyBackground}</div>
                    <div><span className="font-medium">Family Preferences:</span> {familyDetails.familyPreferences}</div>
                    <div><span className="font-medium">About Family:</span> {familyDetails.aboutFamily}</div>
                </div>

                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Edit Family Details</DialogTitle>
                        </DialogHeader>
                        <FamilyDetails
                            familyDetails={formData}
                            setFamilyDetails={setFormData}
                        />
                        <DialogFooter>
                            <Button
                                onClick={() => setUserProfile(formData as UserProfileType, authId)}
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
