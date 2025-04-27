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

interface EducationCareerProps {
  educationCareer: UserProfileType;
  setEducationCareer: (educationCareer: UserProfileType) => void;
}


export function EducationCareer({
  educationCareer,
  setEducationCareer
}: EducationCareerProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Education & Career</h2>
      <p className="text-gray-500">Tell us about your education and career</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="highestQualification">Highest Qualification</Label>
          <Select 
          >
            <SelectTrigger>
              <SelectValue placeholder="Select highest qualification" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="highSchool">High School</SelectItem>
              <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
              <SelectItem value="masters">Master's Degree</SelectItem>
              <SelectItem value="phd">PhD</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="fieldOfStudy">Field of Study</Label>
          <Input 
            id="fieldOfStudy" 
            placeholder="Enter field of study"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="university">University/Institution</Label>
          <Input 
            id="university" 
            placeholder="Enter university/institution name"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="yearOfPassing">Year of Passing</Label>
          <Input 
            type="number" 
            id="yearOfPassing" 
            placeholder="Enter year of passing"
            min={1950}
            max={new Date().getFullYear()}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="grade">Grade/Percentage</Label>
          <Input 
            id="grade" 
            placeholder="Enter grade/percentage"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="occupation">Occupation</Label>
          <Input 
            id="occupation" 
            placeholder="Enter your occupation"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="industry">Industry</Label>
          <Select 
          >
            <SelectTrigger>
              <SelectValue placeholder="Select industry" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="technology">Technology</SelectItem>
              <SelectItem value="finance">Finance</SelectItem>
              <SelectItem value="healthcare">Healthcare</SelectItem>
              <SelectItem value="education">Education</SelectItem>
              <SelectItem value="manufacturing">Manufacturing</SelectItem>
              <SelectItem value="retail">Retail</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="company">Company</Label>
          <Input 
            id="company" 
            placeholder="Enter company name"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="experience">Years of Experience</Label>
          <Input 
            type="number" 
            id="experience" 
            placeholder="Enter years of experience"
            min={0}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="income">Annual Income</Label>
          <Select 
          >
            <SelectTrigger>
              <SelectValue placeholder="Select income range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-300000">Below 3 LPA</SelectItem>
              <SelectItem value="300000-600000">3-6 LPA</SelectItem>
              <SelectItem value="600000-900000">6-9 LPA</SelectItem>
              <SelectItem value="900000-1200000">9-12 LPA</SelectItem>
              <SelectItem value="1200000-1500000">12-15 LPA</SelectItem>
              <SelectItem value="1500000+">Above 15 LPA</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="workLocation">Work Location</Label>
          <Input 
            id="workLocation" 
            placeholder="Enter work location"
          />
        </div>
        
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="achievements">Achievements</Label>
          <Textarea 
            id="achievements" 
            placeholder="Tell us about your achievements"
            className="min-h-[100px]"
          />
        </div>
        
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="futurePlans">Future Plans</Label>
          <Textarea 
            id="futurePlans" 
            placeholder="Tell us about your future plans"
            className="min-h-[100px]"
          />
        </div>
      </div>
    </div>
  );
} 