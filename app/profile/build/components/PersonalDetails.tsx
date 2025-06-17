import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { MaritalStatus, Religion } from "@/types/enums";
import { PersonalDetailsTypes } from "@/types/user";

interface PersonalDetailsProps {
  personalDetails: PersonalDetailsTypes;
  setPersonalDetails: (personalDetails: PersonalDetailsTypes) => void;
}

export function PersonalDetails({
  personalDetails,
  setPersonalDetails
}: PersonalDetailsProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Personal Details</h2>
      <p className="text-gray-500">Tell us more about yourself</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="height">Height</Label>
          <Select 
            value={personalDetails.height}
            onValueChange={(value) => setPersonalDetails({ ...personalDetails, height: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select your height" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="4-10">4&apos;10&quot; (147 cm)</SelectItem>
              <SelectItem value="4-11">4&apos;11&quot; (150 cm)</SelectItem>
              <SelectItem value="5-0">5&apos;0&quot; (152 cm)</SelectItem>
              <SelectItem value="5-1">5&apos;1&quot; (155 cm)</SelectItem>
              <SelectItem value="5-2">5&apos;2&quot; (157 cm)</SelectItem>
              <SelectItem value="5-3">5&apos;3&quot; (160 cm)</SelectItem>
              <SelectItem value="5-4">5&apos;4&quot; (163 cm)</SelectItem>
              <SelectItem value="5-5">5&apos;5&quot; (165 cm)</SelectItem>
              <SelectItem value="5-6">5&apos;6&quot; (168 cm)</SelectItem>
              <SelectItem value="5-7">5&apos;7&quot; (170 cm)</SelectItem>
              <SelectItem value="5-8">5&apos;8&quot; (173 cm)</SelectItem>
              <SelectItem value="5-9">5&apos;9&quot; (175 cm)</SelectItem>
              <SelectItem value="5-10">5&apos;10&quot; (178 cm)</SelectItem>
              <SelectItem value="5-11">5&apos;11&quot; (180 cm)</SelectItem>
              <SelectItem value="6-0">6&apos;0&quot; (183 cm)</SelectItem>
              <SelectItem value="6-1">6&apos;1&quot; (185 cm)</SelectItem>
              <SelectItem value="6-2">6&apos;2&quot; (188 cm)</SelectItem>
              <SelectItem value="6-3">6&apos;3&quot; (191 cm)</SelectItem>
              <SelectItem value="6-4">6&apos;4&quot; (193 cm)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="maritalStatus">Marital Status</Label>
          <Select 
            value={personalDetails.maritalStatus}
            onValueChange={(value) => setPersonalDetails({ ...personalDetails, maritalStatus: value as MaritalStatus })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select your marital status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="never_married">Never Married</SelectItem>
              <SelectItem value="divorced">Divorced</SelectItem>
              <SelectItem value="widowed">Widowed</SelectItem>
              <SelectItem value="awaiting_divorce">Awaiting Divorce</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="religion">Religion</Label>
          <Select 
            value={personalDetails.religion}
            onValueChange={(value) => setPersonalDetails({ ...personalDetails, religion: value as Religion })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select your religion" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="hinduism">Hinduism</SelectItem>
              <SelectItem value="islam">Islam</SelectItem>
              <SelectItem value="christianity">Christianity</SelectItem>
              <SelectItem value="sikhism">Sikhism</SelectItem>
              <SelectItem value="buddhism">Buddhism</SelectItem>
              <SelectItem value="jainism">Jainism</SelectItem>
              <SelectItem value="parsi">Parsi</SelectItem>
              <SelectItem value="jewish">Jewish</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="caste">Caste</Label>
          <Input 
            id="caste" 
            placeholder="Enter your caste"
            value={personalDetails.caste}
            onChange={(e) => setPersonalDetails({ ...personalDetails, caste: e.target.value })}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="community">Community</Label>
          <Input 
            id="community" 
            placeholder="Enter your community"
            value={personalDetails.community}
            onChange={(e) => setPersonalDetails({ ...personalDetails, community: e.target.value })}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="motherTongue">Mother Tongue</Label>
          <Select 
            value={personalDetails.motherTongue}
            onValueChange={(value) => setPersonalDetails({ ...personalDetails, motherTongue: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select your mother tongue" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="hindi">Hindi</SelectItem>
              <SelectItem value="english">English</SelectItem>
              <SelectItem value="bengali">Bengali</SelectItem>
              <SelectItem value="telugu">Telugu</SelectItem>
              <SelectItem value="tamil">Tamil</SelectItem>
              <SelectItem value="kannada">Kannada</SelectItem>
              <SelectItem value="malayalam">Malayalam</SelectItem>
              <SelectItem value="gujarati">Gujarati</SelectItem>
              <SelectItem value="marathi">Marathi</SelectItem>
              <SelectItem value="punjabi">Punjabi</SelectItem>
              <SelectItem value="urdu">Urdu</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="wantChildren">Want Children ?</Label>
          <Select 
            value={personalDetails.wantChildren}
            onValueChange={(value) => setPersonalDetails({ ...personalDetails, wantChildren: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select your want children" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="yes">Yes</SelectItem>
              <SelectItem value="no">No</SelectItem>
            </SelectContent>
          </Select> 
        </div>

        <div className="space-y-2">
          <Label htmlFor="address">Address</Label>
          <Input 
            id="address" 
            placeholder="Enter your address"
            value={personalDetails.address}
            onChange={(e) => setPersonalDetails({ ...personalDetails, address: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
} 