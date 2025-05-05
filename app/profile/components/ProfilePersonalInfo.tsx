import { Card, CardContent } from "@/components/ui/card";
import { Edit2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { useState } from "react";
import { PersonalDetails } from "../build/components/PersonalDetails";
import { PersonalDetailsTypes } from "@/types/user";
import { Button } from "@/components/ui/button";

export default function ProfilePersonalDetailsCard({ personalDetails, setPersonalDetails }: { personalDetails: PersonalDetailsTypes, setPersonalDetails: (info: PersonalDetailsTypes) => void }) {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState(personalDetails);

  return (
    <Card>
      <CardContent>
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-semibold">Personal Details</h2>
          <button onClick={() => { setDraft(personalDetails); setOpen(true); }}>
            <Edit2 className="w-4 h-4" />
          </button>
        </div>
        <div className="text-sm text-gray-700">
          <div>Height: {personalDetails.height}</div>
          <div>Marital Status: {personalDetails.maritalStatus}</div>
          <div>Religion: {personalDetails.religion}</div>
          <div>Caste: {personalDetails.caste}</div>
          <div>Community: {personalDetails.community}</div>
          <div>Mother Tongue: {personalDetails.motherTongue}</div>
          <div>Want Children: {personalDetails.wantChildren}</div>
          <div>Address: {personalDetails.address}</div>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Personal Details</DialogTitle>
            </DialogHeader>
            <PersonalDetails personalDetails={draft} setPersonalDetails={setDraft} />
            <DialogFooter>
              <Button onClick={() => { setPersonalDetails(draft); setOpen(false); }}>Save</Button>
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
