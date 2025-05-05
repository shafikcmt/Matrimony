import { Card, CardContent } from "@/components/ui/card";
import { Edit2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { useState } from "react";
import { PartnerPreferences } from "../build/components/PartnerPreferences";
import { PartnerPreferencesTypes } from "@/types/user";
import { Button } from "@/components/ui/button";

export default function ProfilePartnerPreferencesCard({ partnerPreferences, setPartnerPreferences }: { partnerPreferences: PartnerPreferencesTypes, setPartnerPreferences: (info: PartnerPreferencesTypes) => void }) {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState(partnerPreferences);

  return (
    <Card>
      <CardContent>
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-semibold">Partner Preferences</h2>
          <button onClick={() => { setDraft(partnerPreferences); setOpen(true); }}>
            <Edit2 className="w-4 h-4" />
          </button>
        </div>
        <div className="text-sm text-gray-700">
          <div>Age Range: {partnerPreferences.partnerAgeRangeMin} - {partnerPreferences.partnerAgeRangeMax}</div>
          <div>Height Range: {partnerPreferences.partnerHeightRangeMin} - {partnerPreferences.partnerHeightRangeMax}</div>
          <div>Marital Status: {partnerPreferences.partnerMaritalStatus}</div>
          <div>Religion: {partnerPreferences.partnerReligion}</div>
          <div>Caste: {partnerPreferences.partnerCaste}</div>
          <div>Community: {partnerPreferences.partnerCommunity}</div>
          <div>Mother Tongue: {partnerPreferences.partnerMotherTongue}</div>
          <div>Education: {partnerPreferences.partnerEducation}</div>
          <div>Occupation: {partnerPreferences.partnerOccupation}</div>
          <div>Income: {partnerPreferences.partnerIncome}</div>
          <div>Location: {partnerPreferences.partnerLocation}</div>
          <div>Diet: {partnerPreferences.partnerDiet}</div>
          <div>Smoking: {partnerPreferences.partnerSmoking}</div>
          <div>Drinking: {partnerPreferences.partnerDrinking}</div>
          <div>Exercise: {partnerPreferences.partnerExercise}</div>
          <div>Sleep Schedule: {partnerPreferences.partnerSleepSchedule}</div>
          <div>Social Life: {partnerPreferences.partnerSocialLife}</div>
          <div>Want Children: {partnerPreferences.partnerWantChildren}</div>
          <div>Other Preferences: {partnerPreferences.partnerOtherPreferences}</div>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Partner Preferences</DialogTitle>
            </DialogHeader>
            <PartnerPreferences partnerPreferences={draft} setPartnerPreferences={setDraft} />
            <DialogFooter>
              <Button onClick={() => { setPartnerPreferences(draft); setOpen(false); }}>Save</Button>
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
