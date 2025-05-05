import { Card, CardContent } from "@/components/ui/card";
import { Edit2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { useState } from "react";
import { EducationCareer } from "../build/components/EducationCareer";
import { EducationCareerTypes } from "@/types/user";
import { Button } from "@/components/ui/button";

export default function ProfileEducationCard({ educationCareer, setEducationCareer }: { educationCareer: EducationCareerTypes, setEducationCareer: (info: EducationCareerTypes) => void }) {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState(educationCareer);

  return (
    <Card>
      <CardContent>
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-semibold">Education & Career</h2>
          <button onClick={() => { setDraft(educationCareer); setOpen(true); }}>
            <Edit2 className="w-4 h-4" />
          </button>
        </div>
        <div className="text-sm text-gray-700">
          <div>Highest Qualification: {educationCareer.highestQualification}</div>
          <div>Field of Study: {educationCareer.fieldOfStudy}</div>
          <div>University: {educationCareer.university}</div>
          <div>Year of Passing: {educationCareer.yearOfPassing}</div>
          <div>Grade: {educationCareer.grade}</div>
          <div>Occupation: {educationCareer.occupation}</div>
          <div>Industry: {educationCareer.industry}</div>
          <div>Company: {educationCareer.company}</div>
          <div>Experience: {educationCareer.experience}</div>
          <div>Income: {educationCareer.income}</div>
          <div>Work Location: {educationCareer.workLocation}</div>
          <div>Achievements: {educationCareer.achievements}</div>
          <div>Future Plans: {educationCareer.futurePlans}</div>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Education & Career</DialogTitle>
            </DialogHeader>
            <EducationCareer educationCareer={draft} setEducationCareer={setDraft} />
            <DialogFooter>
              <Button onClick={() => { setEducationCareer(draft); setOpen(false); }}>Save</Button>
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
