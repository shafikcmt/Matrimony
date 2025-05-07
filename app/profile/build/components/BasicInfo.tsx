import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { ChangeEvent } from "react";
import { BasicInfoTypes } from "@/types/user";
import { Textarea } from "@/components/ui/textarea";
import { Gender } from "@/types/enums";

interface BasicInfoProps {
  basicInfo: BasicInfoTypes;
  setBasicInfo: (basicInfo: BasicInfoTypes) => void;
}

export function BasicInfo({
  basicInfo,
  setBasicInfo
}: BasicInfoProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Basic Information</h2>
      <p className="text-gray-500">Let's start with your basic details</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input 
            id="firstName" 
            placeholder="Enter your first name"
            value={basicInfo.firstName}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setBasicInfo({ ...basicInfo, firstName: e.target.value })}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input 
            id="lastName" 
            placeholder="Enter your last name"
            value={basicInfo.lastName}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setBasicInfo({ ...basicInfo, lastName: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input 
            id="email" 
            type="email"
            placeholder="Enter your email"
            value={basicInfo.email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setBasicInfo({ ...basicInfo, email: e.target.value })}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phoneNumber">Phone Number</Label>
          <Input 
            id="phoneNumber" 
            placeholder="Enter your phone number"
            value={basicInfo.phoneNumber}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setBasicInfo({ ...basicInfo, phoneNumber: e.target.value })}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="gender">Gender</Label>
          <Select 
            value={basicInfo.gender}
            onValueChange={(value) => setBasicInfo({ ...basicInfo, gender: value as Gender })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select your gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="dateOfBirth">Date of Birth</Label>
          <Input 
            id="dateOfBirth" 
            type="date"
            value={basicInfo.dateOfBirth}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setBasicInfo({ ...basicInfo, dateOfBirth: e.target.value })}
          />
        </div>

      </div>
        <div className="space-y-2">
          <Label htmlFor="aboutMe">About Me</Label>
          <Textarea 
            id="aboutMe" 
            placeholder="Enter your about me"
            value={basicInfo.aboutMe}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setBasicInfo({ ...basicInfo, aboutMe: e.target.value })}
          />
        </div>
    </div>
  );
} 