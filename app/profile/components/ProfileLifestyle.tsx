import { Card, CardContent } from "@/components/ui/card";
import { Edit2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { useState } from "react";
import { Lifestyle } from "../build/components/Lifestyle";
import { LifestylePreferencesTypes } from "@/types/user";
import { Button } from "@/components/ui/button";

export default function ProfileLifestyleCard({ lifestyle, setLifestyle }: { lifestyle: LifestylePreferencesTypes, setLifestyle: (info: LifestylePreferencesTypes) => void }) {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState(lifestyle);

  return (
    <Card>
      <CardContent>
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-semibold">Lifestyle Preferences</h2>
          <button onClick={() => { setDraft(lifestyle); setOpen(true); }}>
            <Edit2 className="w-4 h-4" />
          </button>
        </div>
        <div className="text-sm text-gray-700">
          <div>Diet: {lifestyle.diet}</div>
          <div>Smoking: {lifestyle.smoking}</div>
          <div>Drinking: {lifestyle.drinking}</div>
          <div>Exercise: {lifestyle.exercise}</div>
          <div>Sleep Schedule: {lifestyle.sleepSchedule}</div>
          <div>Social Life: {lifestyle.socialLife}</div>
          <div>Hobbies: {lifestyle.hobbies}</div>
          <div>Languages: {lifestyle.languages}</div>
          <div>Travel: {lifestyle.travel}</div>
          <div>Pets: {lifestyle.pets}</div>
          <div>Other Preferences: {lifestyle.otherPreferences}</div>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Lifestyle Preferences</DialogTitle>
            </DialogHeader>
            <Lifestyle lifestyle={draft} setLifestyle={setDraft} />
            <DialogFooter>
              <Button onClick={() => { setLifestyle(draft); setOpen(false); }}>Save</Button>
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
