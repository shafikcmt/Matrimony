import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { UserProfileType } from "@/types/user";

interface LifestyleProps {
  lifestyle: UserProfileType;
  setLifestyle: (lifestyle: UserProfileType) => void;
}

export function Lifestyle({
  lifestyle,
  setLifestyle
}: LifestyleProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Lifestyle</h2>
      <p className="text-gray-500">Tell us about your lifestyle and preferences</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="diet">Diet Preference</Label>
          <Select 
          >
            <SelectTrigger>
              <SelectValue placeholder="Select diet preference" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="veg">Vegetarian</SelectItem>
              <SelectItem value="nonVeg">Non-Vegetarian</SelectItem>
              <SelectItem value="eggetarian">Eggetarian</SelectItem>
              <SelectItem value="vegan">Vegan</SelectItem>
              <SelectItem value="jain">Jain</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="smoking">Smoking</Label>
          <Select 
          >
            <SelectTrigger>
              <SelectValue placeholder="Select smoking habit" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="never">Never</SelectItem>
              <SelectItem value="occasionally">Occasionally</SelectItem>
              <SelectItem value="regular">Regular</SelectItem>
              <SelectItem value="tryingToQuit">Trying to Quit</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="drinking">Drinking</Label>
          <Select 
          >
            <SelectTrigger>
              <SelectValue placeholder="Select drinking habit" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="never">Never</SelectItem>
              <SelectItem value="socially">Socially</SelectItem>
              <SelectItem value="regular">Regular</SelectItem>
              <SelectItem value="tryingToQuit">Trying to Quit</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="exercise">Exercise</Label>
          <Select 
          >
            <SelectTrigger>
              <SelectValue placeholder="Select exercise habit" />
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
              <SelectItem value="earlyBird">Early Bird (Before 10 PM)</SelectItem>
              <SelectItem value="nightOwl">Night Owl (After 12 AM)</SelectItem>
              <SelectItem value="regular">Regular (10 PM - 12 AM)</SelectItem>
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
              <SelectItem value="introvert">Introvert</SelectItem>
              <SelectItem value="extrovert">Extrovert</SelectItem>
              <SelectItem value="ambivert">Ambivert</SelectItem>
              <SelectItem value="selective">Selective</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="hobbies">Hobbies & Interests</Label>
          <Input 
            id="hobbies" 
            placeholder="Enter hobbies (comma separated)"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="languages">Languages Known</Label>
          <Input 
            id="languages" 
            placeholder="Enter languages (comma separated)"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="travel">Travel</Label>
          <Select 
          >
            <SelectTrigger>
              <SelectValue placeholder="Select travel preference" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="love">Love Traveling</SelectItem>
              <SelectItem value="like">Like Traveling</SelectItem>
              <SelectItem value="occasionally">Occasionally</SelectItem>
              <SelectItem value="rarely">Rarely</SelectItem>
              <SelectItem value="never">Never</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="pets">Pets</Label>
          <Select 
          >
            <SelectTrigger>
              <SelectValue placeholder="Select pets preference" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="love">Love Pets</SelectItem>
              <SelectItem value="like">Like Pets</SelectItem>
              <SelectItem value="neutral">Neutral</SelectItem>
              <SelectItem value="dislike">Dislike Pets</SelectItem>
              <SelectItem value="allergic">Allergic to Pets</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="otherPreferences">Other Preferences</Label>
          <Textarea 
            id="otherPreferences" 
            placeholder="Tell us about any other lifestyle preferences"
            className="min-h-[100px]"
          />
        </div>
      </div>
    </div>
  );
} 