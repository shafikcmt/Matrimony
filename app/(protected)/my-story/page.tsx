"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Upload } from "lucide-react";

const SuccessStory = () => {
  const [story, setStory] = useState("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="p-8"
  >
          <h1 className="text-2xl font-semibold text-center text-accent">
            Share Your Success Story
          </h1>

    <motion.div whileHover={{ scale:1.01 }} transition={{ duration: 0.2 }} className="overflow-hidden h-full">
      <Card className="overflow-hidden h-full m-5">
        <CardHeader className="text-center">
          <p className="text-sm text-muted-foreground mt-1">
            Inspire others by telling your journey.
          </p>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Image Section */}
          <div className="flex flex-col items-center gap-4">
            {imagePreview ? (
              <Image
                src={imagePreview}
                alt="Success Image"
                width={400}
                height={300}
                className="rounded-xl object-cover shadow-lg w-full max-w-md h-64"
              />
            ) : (
              <p></p>
            )}

            <label className="inline-flex items-center gap-2 text-sm cursor-pointer text-white bg-destructive px-4 py-2 rounded-md hover:bg-destructive/90 transition">
              <Upload className="w-4 h-4" />
              Upload Image
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          </div>

          {/* Story Text */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Your Story</label>
            <Textarea
              rows={10}
              placeholder="Write your beautiful story here..."
              value={story}
              onChange={(e) => setStory(e.target.value)}
            />
          </div>

          <div className="flex justify-end">
            <Button className="bg-accent text-white">Edit</Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
    </motion.div>
  );
};

export default SuccessStory;
