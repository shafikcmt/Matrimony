import { Card, CardContent } from "@/components/ui/card";
import { Edit2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { useState } from "react";
import { PersonalDetails } from "../build/components/PersonalDetails";
import { PersonalDetailsTypes, UserProfileType } from "@/types/user";
import { Button } from "@/components/ui/button";
import { useProfileStore } from "@/state/profile";
import { useToast } from "@/hooks/use-toast";

function getChangedFields(original: any, updated: any) {
  const changed: any = {};
  for (const key in updated) {
    if (updated[key] !== original[key]) {
      changed[key] = updated[key];
    }
  }
  return changed;
}

export default function ProfilePersonalDetailsCard() {
    const [open, setOpen] = useState(false);
    const { toast } = useToast();
    
    // Get data from store
    const personalDetails = useProfileStore((state) => state.personalDetails);
    const setPersonalDetails = useProfileStore((state) => state.setPersonalDetails);
    const saveProfile = useProfileStore((state) => state.saveProfile);
    const isLoading = useProfileStore((state) => state.isLoading);

    const [formData, setFormData] = useState<PersonalDetailsTypes>(personalDetails);

    const handleSave = async () => {
      try {
        // Get only changed fields
        const changedFields = getChangedFields(personalDetails, formData);

        // If nothing changed, do nothing
        if (Object.keys(changedFields).length === 0) {
          setOpen(false);
          toast({
            title: "No changes",
            description: "No fields were updated.",
          });
          return;
        }

        // Update only changed fields in the store
        setPersonalDetails(changedFields);

        // Save to backend (your store will now have the updated fields)
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
                    <h2 className="font-semibold">Personal Details</h2>
                </div>

                <div className="text-sm flex flex-col gap-2">
                    <div><span className="font-medium">Height:</span> {personalDetails.height}</div>
                    <div><span className="font-medium">Marital Status:</span> {personalDetails.maritalStatus}</div>
                    <div><span className="font-medium">Religion:</span> {personalDetails.religion}</div>
                    <div><span className="font-medium">Caste:</span> {personalDetails.caste}</div>
                    <div><span className="font-medium">Community:</span> {personalDetails.community}</div>
                    <div><span className="font-medium">Mother Tongue:</span> {personalDetails.motherTongue}</div>
                    <div><span className="font-medium">Want Children:</span> {personalDetails.wantChildren}</div>
                    <div><span className="font-medium">Address:</span> {personalDetails.address}</div>
                </div>

                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Edit Personal Details</DialogTitle>
                        </DialogHeader>
                        <PersonalDetails
                            personalDetails={formData}
                            setPersonalDetails={setFormData}
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
