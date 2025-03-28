"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const ProfileSettings = () => {

  return (
    <main className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto space-y-10">

        <Card>
          <CardHeader>
            <CardTitle>Introduction</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="">
              <Textarea
                className="w-full border rounded-lg p-4 focus:ring-2 focus:ring-accent scrollbar-new"
                rows={3}
                placeholder="Write about yourself..."
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </Textarea>
            </div>
            <div className="flex justify-end">
              <Button className="bg-accent text-white">Update</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Change Your Email</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="grid md:grid-cols-5 gap-4 items-center">
              <Label className="font-semibold">Your Email</Label>
              <div className="flex md:col-span-4 gap-2">
                <Input placeholder="user17@example.com" className="w-full" />
                <Button variant={"outline"} className="text-accent">Verify</Button>
              </div>
            </div>
            <div className="flex justify-end">
              <Button className="bg-accent text-white">Update</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
      <CardHeader>
        <CardTitle>Basic Information</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <div>
            <Label htmlFor="first-name">First Name</Label>
            <Input id="first-name" placeholder="First Name" value="Donna" />
          </div>

          <div>
            <Label htmlFor="last-name">Last Name</Label>
            <Input id="last-name" placeholder="Last Name" value="J. Perryman" />
          </div>

          <div>
            <Label htmlFor="phone-number">Phone Number</Label>
            <Input id="phone-number" placeholder="Phone Number" value="239-663-7517" />
          </div>

          <div>
            <Label htmlFor="dob">Date of Birth</Label>
            <Input id="dob" placeholder="Date of Birth" value="1992-09-23" />
          </div>

          <div>
            <Label htmlFor="gender">Gender</Label>
            <Input id="gender" placeholder="Gender" value="Female" />
          </div>

          <div>
            <Label htmlFor="on-behalf">On Behalf</Label>
            <Input id="on-behalf" placeholder="On Behalf" value="Self" />
          </div>

          <div>
            <Label htmlFor="marital-status">Marital Status</Label>
            <Input id="marital-status" placeholder="Marital Status" value="Never Married" />
          </div>

          <div>
            <Label htmlFor="annual-salary">Annual Salary</Label>
            <Input id="annual-salary" placeholder="Annual Salary" value="Nothing Selected" />
          </div>

        </div>

        <div className="flex justify-end">
          <Button className="bg-accent text-white">Update</Button>
        </div>
      </CardContent>
    </Card>

        <Card>
          <CardHeader>
            <CardTitle>Photo Upload</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="flex gap-4 items-center">
              <Button variant="destructive" className="flex items-center gap-2 ">
                <Upload className="w-4 h-4" />
                Browse
              </Button>
              <span>1 File Selected</span>
            </div>
            <div className="flex justify-end">
              <Button className="bg-accent text-white">Update</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Present Address</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <div>
                <Label className="block text-gray-700 mb-2">Country</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="India">India</SelectItem>
                    <SelectItem value="USA">USA</SelectItem>
                    <SelectItem value="UK">UK</SelectItem>
                    <SelectItem value="Canada">Canada</SelectItem>
                    <SelectItem value="Australia">Australia</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="block text-gray-700 mb-2">State</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select State" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Haryana">Haryana</SelectItem>
                    <SelectItem value="Delhi">Delhi</SelectItem>
                    <SelectItem value="Punjab">Punjab</SelectItem>
                    <SelectItem value="UP">UP</SelectItem>
                    <SelectItem value="Maharashtra">Maharashtra</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="block text-gray-700 mb-2">City</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select City" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Panipat">Panipat</SelectItem>
                    <SelectItem value="Shamli">Shamli</SelectItem>
                    <SelectItem value="Karnal">Karnal</SelectItem>
                    <SelectItem value="Delhi">Delhi</SelectItem>
                    <SelectItem value="Mumbai">Mumbai</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="block text-gray-700 mb-2">Postal Code</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Postal Code" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="110001">110001</SelectItem>
                    <SelectItem value="2280">2280</SelectItem>
                    <SelectItem value="141001">141001</SelectItem>
                    <SelectItem value="400001">400001</SelectItem>
                    <SelectItem value="700001">700001</SelectItem>
                  </SelectContent>
                </Select>
              </div>

            </div>

            <div className="flex justify-end">
              <Button className="bg-accent text-white">Update</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default ProfileSettings;
