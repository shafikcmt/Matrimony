"use client";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload } from "lucide-react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { useUser } from "@/hooks/useUser";
import { useRecoilValue } from "recoil";
import { userLoadingState, userErrorState } from "@/store/atoms/userAtom";

const profileSchema = z.object({
  introduction: z.string().min(10, "Introduction must be at least 10 characters"),
  email: z.string().email("Invalid email address"),
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  phone: z.string().min(10, "Invalid phone number"),
  dateOfBirth: z.string(),
  gender: z.string(),
  maritalStatus: z.string(),
  annualSalary: z.string(),
  onBehalfOf: z.string(),
  religion: z.string(),
  caste: z.string(),
  community: z.string(),
  diet: z.string(),
  smoking: z.string(),
  drinking: z.string(),
  country: z.string(),
  state: z.string(),
  city: z.string(),
  postalCode: z.string(),
  preferredAge: z.string(),
  preferredHeight: z.string(),
  preferredReligion: z.string(),
  preferredCaste: z.string(),
});

type ProfileFormData = z.infer<typeof profileSchema>;

const ProfileSettings = () => {
  const { user, updateUserProfile } = useUser();
  const isLoading = useRecoilValue(userLoadingState);
  const error = useRecoilValue(userErrorState);
  const [uploadProgress, setUploadProgress] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: user || undefined
  });

  useEffect(() => {
    if (user) {
      reset(user);
    }
  }, [user, reset]);

  const onSubmit = async (data: ProfileFormData) => {
    try {
      await updateUserProfile(data);
      toast.success("Profile updated successfully");
    } catch (error) {
      toast.error("Failed to update profile");
    }
  };

  const handlePhotoUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      // Add your photo upload logic here
      // Simulate upload progress
      for (let i = 0; i <= 100; i += 10) {
        setUploadProgress(i);
        await new Promise(resolve => setTimeout(resolve, 100));
      }
      toast.success("Photo uploaded successfully");
    } catch (error) {
      toast.error("Failed to upload photo");
    } finally {
      setUploadProgress(0);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-accent"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-100 py-12"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-7xl mx-auto space-y-10">
        <h1 className="text-2xl font-semibold text-center text-accent">
          Manage Your Profile
        </h1>

        <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
          <Card>
            <CardHeader>
              <CardTitle>Introduction</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6">
              <Textarea 
                {...register("introduction")}
                rows={4} 
                placeholder="Write about yourself..."
                className={errors.introduction ? "border-red-500" : ""}
              />
              {errors.introduction && (
                <p className="text-red-500 text-sm">{errors.introduction.message}</p>
              )}
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
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="hidden"
                  id="photo-upload"
                />
                <label htmlFor="photo-upload">
                  <Button
                    type="button"
                    variant="destructive"
                    className="flex items-center gap-2"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Upload className="w-4 h-4" />
                    )}
                    Browse
                  </Button>
                </label>
                {uploadProgress > 0 && (
                  <div className="w-full max-w-xs">
                    <div className="h-2 bg-gray-200 rounded">
                      <div
                        className="h-2 bg-accent rounded transition-all duration-300"
                        style={{ width: `${uploadProgress}%` }}
                      />
                    </div>
                  </div>
                )}
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

        <div className="flex justify-end">
          <Button
            type="submit"
            className="bg-accent text-white"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Saving...
              </>
            ) : (
              "Save All Changes"
            )}
          </Button>
        </div>
      </form>
    </motion.main>
  );
};

export default ProfileSettings;
