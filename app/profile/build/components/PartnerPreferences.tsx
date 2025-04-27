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
import { UserProfileType } from "@/types/user";

interface PartnerPreferencesProps {
  partnerPreferences: UserProfileType;
  setPartnerPreferences: (partnerPreferences: UserProfileType) => void;
}

export function PartnerPreferences({
  partnerPreferences,
  setPartnerPreferences
}: PartnerPreferencesProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Partner Preferences</h2>
      <p className="text-gray-500">Tell us about your ideal partner</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="ageRangeMin">Minimum Age</Label>
          <Input 
            id="ageRangeMin" 
            type="number" 
            min="18"
            max="100"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="ageRangeMax">Maximum Age</Label>
          <Input 
            id="ageRangeMax" 
            type="number" 
            min="18"
            max="100"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="heightRangeMin">Minimum Height</Label>
          <Select 
          >
            <SelectTrigger>
              <SelectValue placeholder="Select minimum height" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="4-10">4&apos;10&quot;</SelectItem>
              <SelectItem value="4-11">4&apos;11&quot;</SelectItem>
              <SelectItem value="5-0">5&apos;0&quot;</SelectItem>
              <SelectItem value="5-1">5&apos;1&quot;</SelectItem>
              <SelectItem value="5-2">5&apos;2&quot;</SelectItem>
              <SelectItem value="5-3">5&apos;3&quot;</SelectItem>
              <SelectItem value="5-4">5&apos;4&quot;</SelectItem>
              <SelectItem value="5-5">5&apos;5&quot;</SelectItem>
              <SelectItem value="5-6">5&apos;6&quot;</SelectItem>
              <SelectItem value="5-7">5&apos;7&quot;</SelectItem>
              <SelectItem value="5-8">5&apos;8&quot;</SelectItem>
              <SelectItem value="5-9">5&apos;9&quot;</SelectItem>
              <SelectItem value="5-10">5&apos;10&quot;</SelectItem>
              <SelectItem value="5-11">5&apos;11&quot;</SelectItem>
              <SelectItem value="6-0">6&apos;0&quot;</SelectItem>
              <SelectItem value="6-1">6&apos;1&quot;</SelectItem>
              <SelectItem value="6-2">6&apos;2&quot;</SelectItem>
              <SelectItem value="6-3">6&apos;3&quot;</SelectItem>
              <SelectItem value="6-4">6&apos;4&quot;</SelectItem>
              <SelectItem value="6-5">6&apos;5&quot;</SelectItem>
              <SelectItem value="6-6">6&apos;6&quot;</SelectItem>
              <SelectItem value="6-7">6&apos;7&quot;</SelectItem>
              <SelectItem value="6-8">6&apos;8&quot;</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="heightRangeMax">Maximum Height</Label>
          <Select 
          >
            <SelectTrigger>
              <SelectValue placeholder="Select maximum height" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="4-10">4&apos;10&quot;</SelectItem>
              <SelectItem value="4-11">4&apos;11&quot;</SelectItem>
              <SelectItem value="5-0">5&apos;0&quot;</SelectItem>
              <SelectItem value="5-1">5&apos;1&quot;</SelectItem>
              <SelectItem value="5-2">5&apos;2&quot;</SelectItem>
              <SelectItem value="5-3">5&apos;3&quot;</SelectItem>
              <SelectItem value="5-4">5&apos;4&quot;</SelectItem>
              <SelectItem value="5-5">5&apos;5&quot;</SelectItem>
              <SelectItem value="5-6">5&apos;6&quot;</SelectItem>
              <SelectItem value="5-7">5&apos;7&quot;</SelectItem>
              <SelectItem value="5-8">5&apos;8&quot;</SelectItem>
              <SelectItem value="5-9">5&apos;9&quot;</SelectItem>
              <SelectItem value="5-10">5&apos;10&quot;</SelectItem>
              <SelectItem value="5-11">5&apos;11&quot;</SelectItem>
              <SelectItem value="6-0">6&apos;0&quot;</SelectItem>
              <SelectItem value="6-1">6&apos;1&quot;</SelectItem>
              <SelectItem value="6-2">6&apos;2&quot;</SelectItem>
              <SelectItem value="6-3">6&apos;3&quot;</SelectItem>
              <SelectItem value="6-4">6&apos;4&quot;</SelectItem>
              <SelectItem value="6-5">6&apos;5&quot;</SelectItem>
              <SelectItem value="6-6">6&apos;6&quot;</SelectItem>
              <SelectItem value="6-7">6&apos;7&quot;</SelectItem>
              <SelectItem value="6-8">6&apos;8&quot;</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="maritalStatus">Marital Status</Label>
          <Input 
            id="maritalStatus" 
            placeholder="Enter marital status (comma separated)"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="religion">Religion</Label>
          <Input 
            id="religion" 
            placeholder="Enter religion (comma separated)"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="caste">Caste</Label>
          <Input 
            id="caste" 
            placeholder="Enter caste (comma separated)"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="community">Community</Label>
          <Input 
            id="community" 
            placeholder="Enter community (comma separated)"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="motherTongue">Mother Tongue</Label>
          <Input 
            id="motherTongue" 
            placeholder="Enter mother tongue (comma separated)"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="education">Education</Label>
          <Input 
            id="education" 
            placeholder="Enter education (comma separated)"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="occupation">Occupation</Label>
          <Input 
            id="occupation" 
            placeholder="Enter occupation (comma separated)"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="income">Income</Label>
          <Input 
            id="income" 
            placeholder="Enter income (comma separated)"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input 
            id="location" 
            placeholder="Enter location (comma separated)"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="diet">Diet</Label>
          <Input 
            id="diet" 
            placeholder="Enter diet (comma separated)"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="smoking">Smoking</Label>
          <Input 
            id="smoking" 
            placeholder="Enter smoking (comma separated)"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="drinking">Drinking</Label>
          <Input 
            id="drinking" 
            placeholder="Enter drinking (comma separated)"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="exercise">Exercise</Label>
          <Select 
          >
            <SelectTrigger>
              <SelectValue placeholder="Select exercise" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="never">Never</SelectItem>
              <SelectItem value="occasionally">Occasionally</SelectItem>
              <SelectItem value="regular">Regular</SelectItem>
              <SelectItem value="veryActive">Very Active</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="sleepSchedule">Sleep Schedule</Label>
          <Select 
          >
            <SelectTrigger>
              <SelectValue placeholder="Select sleep schedule" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="earlyBird">Early Bird</SelectItem>
              <SelectItem value="nightOwl">Night Owl</SelectItem>
              <SelectItem value="regular">Regular</SelectItem>
              <SelectItem value="irregular">Irregular</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="socialLife">Social Life</Label>
          <Select 
          >
            <SelectTrigger>
              <SelectValue placeholder="Select social life" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="verySocial">Very Social</SelectItem>
              <SelectItem value="moderatelySocial">Moderately Social</SelectItem>
              <SelectItem value="introvert">Introvert</SelectItem>
              <SelectItem value="balanced">Balanced</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="wantChildren">Want Children ?</Label>
          <Select 
          >
            <SelectTrigger>
              <SelectValue placeholder="Select want children" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="yes">Yes</SelectItem>
              <SelectItem value="no">No</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="otherPreferences">Other Preferences</Label>
          <Textarea 
            id="otherPreferences" 
            placeholder="Tell us about any other partner preferences"
            className="min-h-[100px]"
          />
        </div>
      </div>
    </div>
  );
} 