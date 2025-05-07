import { Card, CardContent } from "@/components/ui/card";
import { Edit2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { useState } from "react";
import { EducationCareer } from "../build/components/EducationCareer";
import { EducationCareerTypes, UserProfileType } from "@/types/user";
import { Button } from "@/components/ui/button";
import { useProfileStore } from "@/state/profile";
import setUserProfile from "@/lib/user/setUserProfile";
import useAuthStore from "@/state/authState";
import { toast } from "sonner";

export default function ProfileEducationCard() {
    const [open, setOpen] = useState(false);
    
    // Get data from store
    const educationCareer = useProfileStore((state) => state.educationCareer);
    const isLoading = useProfileStore((state) => state.isLoading);
    const authId = useAuthStore((state) => state.authId);
    const saveProfile = useProfileStore((state) => state.saveProfile);


    const [formData, setFormData] = useState<EducationCareerTypes>(educationCareer);
    
    const handleSave = async () => {
        try {

            const eduicationData = {
                ...educationCareer,
            };
            const result = await setUserProfile(eduicationData as UserProfileType, authId);

            if (result.success) {
                toast.success("Profile updated successfully");
            } else {
                toast.error("Failed to update data at database");
            }

            await saveProfile();

            setOpen(false);
        } catch (error) {
            toast.error("Failed to update profile");
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
                    <h2 className="font-semibold">Education & Career</h2>
                </div>

                <div className="text-sm flex flex-col gap-2">
                    <div><span className="font-medium">Highest Qualification:</span> {educationCareer.highestQualification}</div>
                    <div><span className="font-medium">Field of Study:</span> {educationCareer.fieldOfStudy}</div>
                    <div><span className="font-medium">University:</span> {educationCareer.university}</div>
                    <div><span className="font-medium">Year of Passing:</span> {educationCareer.yearOfPassing}</div>
                    <div><span className="font-medium">Grade:</span> {educationCareer.grade}</div>
                    <div><span className="font-medium">Occupation:</span> {educationCareer.occupation}</div>
                    <div><span className="font-medium">Industry:</span> {educationCareer.industry}</div>
                    <div><span className="font-medium">Company:</span> {educationCareer.company}</div>
                    <div><span className="font-medium">Experience:</span> {educationCareer.experience}</div>
                    <div><span className="font-medium">Income:</span> {educationCareer.income}</div>
                    <div><span className="font-medium">Work Location:</span> {educationCareer.workLocation}</div>
                    <div><span className="font-medium">Achievements:</span> {educationCareer.achievements}</div>
                    <div><span className="font-medium">Future Plans:</span> {educationCareer.futurePlans}</div>
                </div>

                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Edit Education & Career</DialogTitle>
                        </DialogHeader>
                        <EducationCareer
                            educationCareer={formData}
                            setEducationCareer={setFormData}
                        />
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
