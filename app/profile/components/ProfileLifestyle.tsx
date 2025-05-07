import { Card, CardContent } from "@/components/ui/card";
import { Edit2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { useState } from "react";
import { Lifestyle } from "../build/components/Lifestyle";
import { LifestylePreferencesTypes, UserProfileType } from "@/types/user";
import { Button } from "@/components/ui/button";
import { useProfileStore } from "@/state/profile";
import setUserProfile from "@/lib/user/setUserProfile";
import useAuthStore from "@/state/authState";

export default function ProfileLifestyleCard() {
    const [open, setOpen] = useState(false);
    
    // Get data from store
    const lifestyle = useProfileStore((state) => state.lifestylePreferences);
    const isLoading = useProfileStore((state) => state.isLoading);
    const authId = useAuthStore((state) => state.authId);

    const [formData, setFormData] = useState<LifestylePreferencesTypes>(lifestyle);

    return (
        <Card>
            <CardContent className="relative">
                <div className="absolute top-1 right-3">
                    <button onClick={() => { setOpen(true); }}>
                        <Edit2 className="w-4 h-4" />
                    </button>
                </div>
                <div className="flex justify-between items-center mb-2 mt-2">
                    <h2 className="font-semibold">Lifestyle</h2>
                </div>

                <div className="text-sm flex flex-col gap-2">
                    <div><span className="font-medium">Diet:</span> {lifestyle.diet}</div>
                    <div><span className="font-medium">Smoking:</span> {lifestyle.smoking}</div>
                    <div><span className="font-medium">Drinking:</span> {lifestyle.drinking}</div>
                    <div><span className="font-medium">Exercise:</span> {lifestyle.exercise}</div>
                    <div><span className="font-medium">Sleep Schedule:</span> {lifestyle.sleepSchedule}</div>
                    <div><span className="font-medium">Social Life:</span> {lifestyle.socialLife}</div>
                    <div><span className="font-medium">Hobbies:</span> {lifestyle.hobbies}</div>
                    <div><span className="font-medium">Languages:</span> {lifestyle.languages}</div>
                    <div><span className="font-medium">Travel:</span> {lifestyle.travel}</div>
                    <div><span className="font-medium">Pets:</span> {lifestyle.pets}</div>
                    <div><span className="font-medium">Other Preferences:</span> {lifestyle.otherPreferences}</div>
                </div>

                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Edit Lifestyle</DialogTitle>
                        </DialogHeader>
                        <Lifestyle
                            lifestyle={formData}
                            setLifestyle={setFormData}
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
