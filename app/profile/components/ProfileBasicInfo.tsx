import { Card, CardContent } from "@/components/ui/card";
import { Edit2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { useState } from "react";
import { BasicInfo } from "../build/components/BasicInfo";
import { BasicInfoTypes, FamilyDetailsTypes } from "@/types/user";
import { Button } from "@/components/ui/button";
import { FamilyDetails } from "../build/components/FamilyDetails";

export default function ProfileBasicInfoCard({ basicInfo, setBasicInfo, familyInfo, setFamilyInfo }: { basicInfo: BasicInfoTypes, setBasicInfo: (info: BasicInfoTypes) => void, familyInfo: FamilyDetailsTypes, setFamilyInfo: (info: FamilyDetailsTypes) => void    }) {
    const [open, setOpen] = useState(false);
    const [draft, setDraft] = useState(basicInfo);

    return (
        <Card>
            <CardContent className="relative">
                <div className="absolute top-1 right-3">
                <button onClick={() => { setDraft(basicInfo); setOpen(true); }}>
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
                            <DialogTitle>Edit Basic Info</DialogTitle>
                        </DialogHeader>
                        <BasicInfo basicInfo={draft} setBasicInfo={setDraft} />
                        <h2 className="font-semibold">Family Background</h2>    
                        <FamilyDetails familyDetails={familyInfo} setFamilyDetails={setFamilyInfo} />
                        <DialogFooter>
                            <Button onClick={() => { setBasicInfo(draft); setFamilyInfo(familyInfo); setOpen(false); }}>Save</Button>
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
