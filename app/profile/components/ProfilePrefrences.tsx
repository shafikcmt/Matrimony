import { Card, CardContent } from "@/components/ui/card";
import { Edit2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { useState } from "react";
import { PartnerPreferences } from "../build/components/PartnerPreferences";
import { PartnerPreferencesTypes, UserProfileType } from "@/types/user";
import { Button } from "@/components/ui/button";
import { useProfileStore } from "@/state/profile";
import useAuthStore from "@/state/authState";
import setUserProfile from "@/lib/user/setUserProfile";

export default function ProfilePartnerPreferencesCard() {
    const [open, setOpen] = useState(false);
    
    
    // Get data from store
    const partnerPreferences = useProfileStore((state) => state.partnerPreferences);
    const isLoading = useProfileStore((state) => state.isLoading);
    const authId = useAuthStore((state) => state.authId);

    const [formData, setFormData] = useState<PartnerPreferencesTypes>(partnerPreferences);

    return (
        <Card>
            <CardContent className="relative">
                <div className="absolute top-1 right-3">
                    <button onClick={() => { setOpen(true); }}>
                        <Edit2 className="w-4 h-4" />
                    </button>
                </div>
                <div className="flex justify-between items-center mb-2 mt-2">
                    <h2 className="font-semibold">Partner Preferences</h2>
                </div>

                <div className="text-sm flex flex-col gap-2">
                    <div><span className="font-medium">Age Range:</span> {partnerPreferences.partnerAgeRangeMin} - {partnerPreferences.partnerAgeRangeMax}</div>
                    <div><span className="font-medium">Height Range:</span> {partnerPreferences.partnerHeightRangeMin} - {partnerPreferences.partnerHeightRangeMax}</div>
                    <div><span className="font-medium">Marital Status:</span> {partnerPreferences.partnerMaritalStatus}</div>
                    <div><span className="font-medium">Religion:</span> {partnerPreferences.partnerReligion}</div>
                    <div><span className="font-medium">Caste:</span> {partnerPreferences.partnerCaste}</div>
                    <div><span className="font-medium">Community:</span> {partnerPreferences.partnerCommunity}</div>
                    <div><span className="font-medium">Mother Tongue:</span> {partnerPreferences.partnerMotherTongue}</div>
                    <div><span className="font-medium">Education:</span> {partnerPreferences.partnerEducation}</div>
                    <div><span className="font-medium">Occupation:</span> {partnerPreferences.partnerOccupation}</div>
                    <div><span className="font-medium">Income:</span> {partnerPreferences.partnerIncome}</div>
                    <div><span className="font-medium">Location:</span> {partnerPreferences.partnerLocation}</div>
                    <div><span className="font-medium">Diet:</span> {partnerPreferences.partnerDiet}</div>
                    <div><span className="font-medium">Smoking:</span> {partnerPreferences.partnerSmoking}</div>
                    <div><span className="font-medium">Drinking:</span> {partnerPreferences.partnerDrinking}</div>
                    <div><span className="font-medium">Exercise:</span> {partnerPreferences.partnerExercise}</div>
                    <div><span className="font-medium">Sleep Schedule:</span> {partnerPreferences.partnerSleepSchedule}</div>
                    <div><span className="font-medium">Social Life:</span> {partnerPreferences.partnerSocialLife}</div>
                    <div><span className="font-medium">Want Children:</span> {partnerPreferences.partnerWantChildren}</div>
                    <div><span className="font-medium">Other Preferences:</span> {partnerPreferences.partnerOtherPreferences}</div>
                </div>

                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Edit Partner Preferences</DialogTitle>
                        </DialogHeader>
                        <PartnerPreferences
                            partnerPreferences={formData}
                            setPartnerPreferences={setFormData}
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
