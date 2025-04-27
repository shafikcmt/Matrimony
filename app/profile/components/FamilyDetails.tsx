import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

interface FamilyDetailsProps {
  fatherName: string;
  fatherOccupation: string;
  motherName: string;
  motherOccupation: string;
  siblings: string;
  familyType: string;
  familyValues: string;
  familyStatus: string;
  familyLocation: string;
  familyBackground: string;
  familyPreferences: string;
  onFatherNameChange: (value: string) => void;
  onFatherOccupationChange: (value: string) => void;
  onMotherNameChange: (value: string) => void;
  onMotherOccupationChange: (value: string) => void;
  onSiblingsChange: (value: string) => void;
  onFamilyTypeChange: (value: string) => void;
  onFamilyValuesChange: (value: string) => void;
  onFamilyStatusChange: (value: string) => void;
  onFamilyLocationChange: (value: string) => void;
  onFamilyBackgroundChange: (value: string) => void;
  onFamilyPreferencesChange: (value: string) => void;
  isReadOnly?: boolean;
}




export function FamilyDetails({
  fatherName,
  fatherOccupation,
  motherName,
  motherOccupation,
  siblings,
  familyType,
  familyValues,
  familyStatus,
  familyLocation,
  familyBackground,
  familyPreferences,
  onFatherNameChange,
  onFatherOccupationChange,
  onMotherNameChange,
  onMotherOccupationChange,
  onSiblingsChange,
  onFamilyTypeChange,
  onFamilyValuesChange,
  onFamilyStatusChange,
  onFamilyLocationChange,
  onFamilyBackgroundChange,
  onFamilyPreferencesChange,
  isReadOnly = false
}: FamilyDetailsProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Family Details</h2>
      <p className="text-gray-500">Tell us about your family</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="fatherName">Father&apos;s Name</Label>
          <Input 
            id="fatherName" 
            placeholder="Enter father's name"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="fatherOccupation">Father&apos;s Occupation</Label>
          <Input 
            id="fatherOccupation" 
            placeholder="Enter father's occupation"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="motherName">Mother&apos;s Name</Label>
          <Input 
            id="motherName" 
            placeholder="Enter mother's name"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="motherOccupation">Mother&apos;s Occupation</Label>
          <Input 
            id="motherOccupation" 
            placeholder="Enter mother's occupation"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="siblings">Number of Siblings</Label>
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <Label htmlFor="brothers" className="text-sm">Brothers</Label>
              <Input 
                type="number" 
                id="brothers" 
                placeholder="Number of brothers"
                min={0}
              />
            </div>
            <div className="flex-1">
              <Label htmlFor="sisters" className="text-sm">Sisters</Label>
              <Input 
                type="number" 
                id="sisters" 
                placeholder="Number of sisters"
                min={0}
              />
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="familyType">Family Type</Label>
          <Select 
          >
            <SelectTrigger>
              <SelectValue placeholder="Select family type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="nuclear">Nuclear</SelectItem>
              <SelectItem value="joint">Joint</SelectItem>
              <SelectItem value="extended">Extended</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="familyValues">Family Values</Label>
          <Select 
          >
            <SelectTrigger>
              <SelectValue placeholder="Select family values" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="traditional">Traditional</SelectItem>
              <SelectItem value="modern">Modern</SelectItem>
              <SelectItem value="moderate">Moderate</SelectItem>
              <SelectItem value="liberal">Liberal</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="familyStatus">Family Status</Label>
          <Select 
          >
            <SelectTrigger>
              <SelectValue placeholder="Select family status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="middleClass">Middle Class</SelectItem>
              <SelectItem value="upperMiddleClass">Upper Middle Class</SelectItem>
              <SelectItem value="upperClass">Upper Class</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="familyLocation">Family Location</Label>
          <Input 
            id="familyLocation" 
            placeholder="Enter family location"
          />
        </div>
        
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="familyBackground">Family Background</Label>
          <Textarea 
            id="familyBackground" 
            placeholder="Tell us about your family background"
            className="min-h-[100px]"
          />
        </div>
        
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="familyPreferences">Family Preferences</Label>
          <Textarea 
            id="familyPreferences" 
            placeholder="Tell us about your family preferences"
            className="min-h-[100px]"
          />
        </div>
      </div>
    </div>
  );
} 