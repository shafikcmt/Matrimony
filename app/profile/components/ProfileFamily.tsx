import { Card, CardContent } from "@/components/ui/card";
import { Edit2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { useState } from "react";
import { FamilyDetails } from "../build/components/FamilyDetails";
import { FamilyDetailsTypes } from "@/types/user";
import { Button } from "@/components/ui/button";

export default function ProfileFamilyCard({ familyDetails, setFamilyDetails }: { familyDetails: FamilyDetailsTypes, setFamilyDetails: (info: FamilyDetailsTypes) => void }) {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState(familyDetails);

  return (
    <Card>
      <CardContent>
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-semibold">Family Details</h2>
          <button onClick={() => { setDraft(familyDetails); setOpen(true); }}>
            <Edit2 className="w-4 h-4" />
          </button>
        </div>
        <div className="text-sm text-gray-700">
          <div>Father: {familyDetails.fatherName} ({familyDetails.fatherOccupation})</div>
          <div>Mother: {familyDetails.motherName} ({familyDetails.motherOccupation})</div>
          <div>Brothers: {familyDetails.brothers}</div>
          <div>Sisters: {familyDetails.sisters}</div>
          <div>Family Type: {familyDetails.familyType}</div>
          <div>Family Values: {familyDetails.familyValues}</div>
          <div>Family Status: {familyDetails.familyStatus}</div>
          <div>Location: {familyDetails.familyLocation}</div>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Family Details</DialogTitle>
            </DialogHeader>
            <FamilyDetails familyDetails={draft} setFamilyDetails={setDraft} />
            <DialogFooter>
              <Button onClick={() => { setFamilyDetails(draft); setOpen(false); }}>Save</Button>
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
