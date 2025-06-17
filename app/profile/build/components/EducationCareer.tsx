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
import { Education, Industry } from "@/types/enums";
import { EducationCareerTypes } from "@/types/user";

interface EducationCareerProps {
  educationCareer: EducationCareerTypes;
  setEducationCareer: (educationCareer: EducationCareerTypes) => void;
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
            value={educationCareer.highestQualification}
            onValueChange={(value) => setEducationCareer({ ...educationCareer, highestQualification: value as Education })}
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
            value={educationCareer.fieldOfStudy}
            onChange={(e) => setEducationCareer({ ...educationCareer, fieldOfStudy: e.target.value })}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="university">University/Institution</Label>
          <Input 
            id="university" 
            placeholder="Enter university/institution name"
            value={educationCareer.university}
            onChange={(e) => setEducationCareer({ ...educationCareer, university: e.target.value })}
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
            value={educationCareer.yearOfPassing}
            onChange={(e) => setEducationCareer({ ...educationCareer, yearOfPassing: e.target.value })}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="grade">Grade/Percentage</Label>
          <Input 
            id="grade" 
            placeholder="Enter grade/percentage"
            value={educationCareer.grade}
            onChange={(e) => setEducationCareer({ ...educationCareer, grade: e.target.value })}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="occupation">Occupation</Label>
          <Input 
            id="occupation" 
            placeholder="Enter your occupation"
            value={educationCareer.occupation}
            onChange={(e) => setEducationCareer({ ...educationCareer, occupation: e.target.value })}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="industry">Industry</Label>
          <Select 
            value={educationCareer.industry}
            onValueChange={(value) => setEducationCareer({ ...educationCareer, industry: value as Industry })}
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
            value={educationCareer.company}
            onChange={(e) => setEducationCareer({ ...educationCareer, company: e.target.value })}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="experience">Years of Experience</Label>
          <Input 
            type="number" 
            id="experience" 
            placeholder="Enter years of experience"
            min={0}
            value={educationCareer.experience}
            onChange={(e) => setEducationCareer({ ...educationCareer, experience: e.target.value })}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="income">Annual Income</Label>
          <Select 
            value={educationCareer.income}
            onValueChange={(value) => setEducationCareer({ ...educationCareer, income: value })}
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
            value={educationCareer.workLocation}
            onChange={(e) => setEducationCareer({ ...educationCareer, workLocation: e.target.value })}
          />
        </div>
        
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="achievements">Achievements</Label>
          <Textarea 
            id="achievements" 
            placeholder="Tell us about your achievements"
            className="min-h-[100px]"
            value={educationCareer.achievements}
            onChange={(e) => setEducationCareer({ ...educationCareer, achievements: e.target.value })}
          />
        </div>
        
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="futurePlans">Future Plans</Label>
          <Textarea 
            id="futurePlans" 
            placeholder="Tell us about your future plans"
            className="min-h-[100px]"
            value={educationCareer.futurePlans}
            onChange={(e) => setEducationCareer({ ...educationCareer, futurePlans: e.target.value })}
            />
        </div>
      </div>
    </div>
  );
} 