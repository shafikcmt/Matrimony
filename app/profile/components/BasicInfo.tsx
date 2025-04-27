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

interface BasicInfoProps {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  gender: string;
  dateOfBirth: string;
  onFirstNameChange: (value: string) => void;
  onLastNameChange: (value: string) => void;
  onEmailChange: (value: string) => void;
  onPhoneNumberChange: (value: string) => void;
  onGenderChange: (value: string) => void;
  onDateOfBirthChange: (value: string) => void;
  isReadOnly?: boolean;
}

export function BasicInfo({
  firstName,
  lastName,
  email,
  phoneNumber,
  gender,
  dateOfBirth,
  onFirstNameChange,
  onLastNameChange,
  onEmailChange,
  onPhoneNumberChange,
  onGenderChange,
  onDateOfBirthChange,
  isReadOnly = false
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
            value={firstName}
            onChange={(e: ChangeEvent<HTMLInputElement>) => onFirstNameChange(e.target.value)}
            readOnly={isReadOnly}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input 
            id="lastName" 
            placeholder="Enter your last name"
            value={lastName}
            onChange={(e: ChangeEvent<HTMLInputElement>) => onLastNameChange(e.target.value)}
            readOnly={isReadOnly}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input 
            id="email" 
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => onEmailChange(e.target.value)}
            readOnly={isReadOnly}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phoneNumber">Phone Number</Label>
          <Input 
            id="phoneNumber" 
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChange={(e: ChangeEvent<HTMLInputElement>) => onPhoneNumberChange(e.target.value)}
            readOnly={isReadOnly}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="gender">Gender</Label>
          <Select 
            value={gender}
            onValueChange={onGenderChange}
            disabled={isReadOnly}
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
            value={dateOfBirth}
            onChange={(e: ChangeEvent<HTMLInputElement>) => onDateOfBirthChange(e.target.value)}
            readOnly={isReadOnly}
          />
        </div>
      </div>
    </div>
  );
} 