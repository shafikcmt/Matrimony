import { Card, CardContent } from "@/components/ui/card";
import { Edit2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { useState } from "react";
import { BasicInfo } from "../build/components/BasicInfo";
import { BasicInfoTypes, FamilyDetailsTypes } from "@/types/user";
import { Button } from "@/components/ui/button";
import { FamilyDetails } from "../build/components/FamilyDetails";
import { useProfileStore } from "@/state/profile";
import { useToast } from "@/hooks/use-toast";

export default function ProfileBasicInfoCard() {
    const [open, setOpen] = useState(false);
    const { toast } = useToast();
    
    // Get data from store
    const basicInfo = useProfileStore((state) => state.basicInfo);
    const familyInfo = useProfileStore((state) => state.familyDetails);
    const setBasicInfo = useProfileStore((state) => state.setBasicInfo);
    const setFamilyDetails = useProfileStore((state) => state.setFamilyDetails);
    const saveProfile = useProfileStore((state) => state.saveProfile);
    const isLoading = useProfileStore((state) => state.isLoading);

    const [aboutMe, setAboutMe] = useState(basicInfo.aboutme);
    const [aboutFamily, setAboutFamily] = useState(familyInfo.aboutfamily);

    const handleSave = async () => {
        try {
            // Update store
            setBasicInfo({ ...basicInfo, aboutme: aboutMe });
            setFamilyDetails({ ...familyInfo, aboutfamily: aboutFamily });
            
            // Save to backend
            await saveProfile();
            
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
                    <h2 className="font-semibold">About Me</h2>
                </div>

                <div className="text-sm flex flex-col gap-2">
                    <div>{basicInfo.aboutme}</div>
                    <div>{familyInfo.aboutfamily}</div>
                </div>

                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Edit About Sections</DialogTitle>
                        </DialogHeader>
                        <div className="mb-4">
                            <label className="block font-medium mb-1">About Me</label>
                            <textarea
                                className="w-full border rounded p-2"
                                value={aboutMe}
                                onChange={e => setAboutMe(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block font-medium mb-1">About Family</label>
                            <textarea
                                className="w-full border rounded p-2"
                                value={aboutFamily}
                                onChange={e => setAboutFamily(e.target.value)}
                            />
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
