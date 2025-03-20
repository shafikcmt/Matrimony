"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md md:max-w-lg lg:max-w-2xl p-8 md:p-12">
        
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-accent text-center mb-2">
          Create Your Account
        </h2>
        <p className="text-sm text-gray-500 text-center mb-8">
          Fill out the form to get started.
        </p>

        <form className="space-y-6">
          
          {/* On Behalf */}
          <div>
            <Label htmlFor="behalf">On Behalf</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="friend">Friend</SelectItem>
                <SelectItem value="family">Family</SelectItem>
                <SelectItem value="self">Self</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* First & Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="first-name">First Name</Label>
              <Input id="first-name" placeholder="First Name" />
            </div>
            
            <div>
              <Label htmlFor="last-name">Last Name</Label>
              <Input id="last-name" placeholder="Last Name" />
            </div>
          </div>

          {/* Gender & Date of Birth */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="gender">Gender</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="dob">Date of Birth</Label>
              <Input id="dob" type="date" />
            </div>
          </div>

          {/* Email/Phone */}
          <div>
            <Label htmlFor="phone">Email / Phone</Label>
            <div className="flex">
              <span className="bg-gray-100 px-4 py-2 border border-r-0 rounded-l-md text-gray-700">
                +91
              </span>
              <Input id="phone" placeholder="81234 56789" className="rounded-l-none" />
            </div>
          </div>

          {/* Password & Confirm Password */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="********" />
              <p className="text-xs text-gray-500 mt-1">Minimum 8 characters</p>
            </div>

            <div>
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input id="confirm-password" type="password" placeholder="********" />
              <p className="text-xs text-gray-500 mt-1">Minimum 8 characters</p>
            </div>
          </div>

          {/* Referral Code */}
          <div>
            <Label htmlFor="referral">Referral Code</Label>
            <Input id="referral" placeholder="Referral Code" />
          </div>

          {/* Terms & Conditions */}
          <div className="flex items-center gap-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms" className="text-sm">
              By signing up you agree to our{" "}
              <Link href="#" className="text-accent hover:underline">
                terms and conditions
              </Link>.
            </Label>
          </div>

          {/* Submit Button */}
          <Button className="w-full bg-accent hover:bg-pink-600 text-white">
            Create Account
          </Button>
        </form>

        {/* Social Login */}
        <div className="mt-8">
          <div className="relative flex justify-center items-center">
            <span className="px-4 bg-white text-gray-500">Or Join With</span>
          </div>

          <div className="flex justify-center gap-4 mt-4">
            <Link href="#" className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href="#" className="p-3 rounded-full bg-red-500 text-white hover:bg-red-600">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="#" className="p-3 rounded-full bg-gray-600 text-white hover:bg-gray-700">
              <Mail className="w-5 h-5" />
            </Link>
            <Link href="#" className="p-3 rounded-full bg-blue-400 text-white hover:bg-blue-500">
              <Twitter className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Login Link */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="text-accent hover:underline">
              Login to your Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
