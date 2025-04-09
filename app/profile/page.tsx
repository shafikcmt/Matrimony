"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload } from "lucide-react";
import { motion } from "framer-motion";

const ProfileSettings = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-100 py-12"
    >
      <div className="max-w-7xl mx-auto space-y-10">

        <h1 className="text-2xl font-semibold text-center text-accent">
          Manage Your Profile
        </h1>

        <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
          <Card>
            <CardHeader>
              <CardTitle>Introduction</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6">
              <Textarea rows={4} placeholder="Write about yourself..." />
              <div className="flex justify-end">
                <Button className="bg-accent text-white">Update</Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
          <Card>
            <CardHeader>
              <CardTitle>Change Your Email</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid md:grid-cols-5 gap-4 items-center">
                <Label>Your Email</Label>
                <div className="flex md:col-span-4 gap-2">
                  <Input placeholder="user@example.com" className="w-full" />
                  <Button variant="outline" className="text-accent">Verify</Button>
                </div>
              </div>
              <div className="flex justify-end">
                <Button className="bg-accent text-white">Update</Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="First Name" />
                <Input placeholder="Last Name" />
                <Input placeholder="Phone Number" />
                <Input placeholder="Date of Birth" />
                <Input placeholder="Gender" />
                <Input placeholder="Marital Status" />
                <Input placeholder="Annual Salary" />
                <Input placeholder="On Behalf Of" />
              </div>
              <div className="flex justify-end">
                <Button className="bg-accent text-white">Update</Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
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
        </motion.div>

        <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
          <Card>
            <CardHeader>
              <CardTitle>Present Address</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Select>
                  <SelectTrigger><SelectValue placeholder="Country" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="India">India</SelectItem>
                    <SelectItem value="USA">USA</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger><SelectValue placeholder="State" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Haryana">Haryana</SelectItem>
                    <SelectItem value="Delhi">Delhi</SelectItem>
                  </SelectContent>
                </Select>

                <Input placeholder="City" />
                <Input placeholder="Postal Code" />
              </div>
              <div className="flex justify-end">
                <Button className="bg-accent text-white">Update</Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
          <Card>
            <CardHeader>
              <CardTitle>Religious Information</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6">
              <Input placeholder="Religion" />
              <Input placeholder="Caste" />
              <Input placeholder="Community" />
              <div className="flex justify-end">
                <Button className="bg-accent text-white">Update</Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
          <Card>
            <CardHeader>
              <CardTitle>Lifestyle Preferences</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6">
              <Select><SelectTrigger><SelectValue placeholder="Diet" /></SelectTrigger></Select>
              <Select><SelectTrigger><SelectValue placeholder="Smoking" /></SelectTrigger></Select>
              <Select><SelectTrigger><SelectValue placeholder="Drinking" /></SelectTrigger></Select>
              <div className="flex justify-end">
                <Button className="bg-accent text-white">Update</Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
          <Card>
            <CardHeader>
              <CardTitle>Partner Preferences</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6">
              <Input placeholder="Preferred Age" />
              <Input placeholder="Preferred Height" />
              <Input placeholder="Preferred Religion" />
              <Input placeholder="Preferred Caste" />
              <div className="flex justify-end">
                <Button className="bg-accent text-white">Update</Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.main>
  );
};

export default ProfileSettings;
