"use client";

import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Upload, X, Loader2 } from "lucide-react";
import { PhotosGalleryTypes } from "@/types/user";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface PhotosGalleryProps {
  photosGallery: PhotosGalleryTypes;
  setPhotosGallery: (photosGallery: PhotosGalleryTypes) => void;
}

export function PhotosGallery({
  photosGallery,
  setPhotosGallery,
}: PhotosGalleryProps) {
  const profileInputRef = useRef<HTMLInputElement>(null);
  const galleryInputRef = useRef<HTMLInputElement>(null);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [isProfileUploading, setIsProfileUploading] = useState(false);
  const [isGalleryUploading, setIsGalleryUploading] = useState(false);

  // Initialize preview URLs from stored base64 data
  useEffect(() => {
    const urls: string[] = [];
    photosGallery.galleryImages.forEach(image => {
      if (image.startsWith('data:')) {
        const url = URL.createObjectURL(dataURLtoFile(image, 'image.jpg'));
        urls.push(url);
      }
    });
    setPreviewUrls(urls);

    return () => {
      urls.forEach(url => URL.revokeObjectURL(url));
    };
  }, []);

  // Cleanup object URLs when component unmounts
  useEffect(() => {
    return () => {
      previewUrls.forEach(url => URL.revokeObjectURL(url));
    };
  }, [previewUrls]);

  const handleProfilePictureUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsProfileUploading(true);
      try {
        // Create a compressed version of the image
        const compressedImage = await compressImage(file);
        const base64 = await fileToBase64(compressedImage);
        const objectUrl = URL.createObjectURL(compressedImage);
        
        setPhotosGallery({
          ...photosGallery,
          profilePicture: base64
        });
      } catch (error) {
        console.error('Error processing image:', error);
      } finally {
        setIsProfileUploading(false);
      }
    }
  };

  const handleGalleryUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length > 0) {
      setIsGalleryUploading(true);
      try {
        const compressedFiles = await Promise.all(
          files.map(file => compressImage(file))
        );
        
        const base64Promises = compressedFiles.map(file => fileToBase64(file));
        const base64Results = await Promise.all(base64Promises);
        
        const newObjectUrls = compressedFiles.map(file => URL.createObjectURL(file));
        
        setPhotosGallery({
          ...photosGallery,
          galleryImages: [...photosGallery.galleryImages, ...base64Results]
        });
        setPreviewUrls(prev => [...prev, ...newObjectUrls]);
      } catch (error) {
        console.error('Error processing images:', error);
      } finally {
        setIsGalleryUploading(false);
      }
    }
  };

  const removeGalleryImage = (index: number) => {
    const newGalleryImages = [...photosGallery.galleryImages];
    newGalleryImages.splice(index, 1);
    
    setPhotosGallery({
      ...photosGallery,
      galleryImages: newGalleryImages
    });
  };

  // Helper function to compress images
  const compressImage = async (file: File): Promise<File> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target?.result as string;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          
          // Calculate new dimensions while maintaining aspect ratio
          let width = img.width;
          let height = img.height;
          const maxDimension = 1200; // Max width or height
          
          if (width > height && width > maxDimension) {
            height = (height * maxDimension) / width;
            width = maxDimension;
          } else if (height > maxDimension) {
            width = (width * maxDimension) / height;
            height = maxDimension;
          }
          
          canvas.width = width;
          canvas.height = height;
          
          ctx?.drawImage(img, 0, 0, width, height);
          
          // Convert to blob with reduced quality
          canvas.toBlob(
            (blob) => {
              if (blob) {
                resolve(new File([blob], file.name, {
                  type: 'image/jpeg',
                  lastModified: Date.now()
                }));
              } else {
                reject(new Error('Failed to compress image'));
              }
            },
            'image/jpeg',
            0.7 // Reduced quality for better performance
          );
        };
        img.onerror = reject;
      };
      reader.onerror = reject;
    });
  };

  // Helper function to convert File to base64
  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
    });
  };

  // Helper function to convert base64 to File
  const dataURLtoFile = (dataurl: string, filename: string): File => {
    const arr = dataurl.split(',');
    const mime = arr[0].match(/:(.*?);/)?.[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Photos & Gallery</h2>
      <p className="text-gray-500">Upload your photos to make your profile stand out</p>
      
      <div className="space-y-6">
        <div className="flex flex-col items-center space-y-4">
          <div className="relative">
            <Avatar className="w-32 h-32">
              <AvatarImage src={photosGallery.profilePicture || "https://via.placeholder.com/150"} />
              <AvatarFallback>Profile</AvatarFallback>
            </Avatar>
            {isProfileUploading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full">
                <Loader2 className="w-8 h-8 text-white animate-spin" />
              </div>
            )}
            <input
              type="file"
              ref={profileInputRef}
              className="hidden"
              accept="image/*"
              onChange={handleProfilePictureUpload}
              disabled={isProfileUploading}
            />
            <Button
              variant="secondary"
              size="icon"
              className="absolute bottom-0 right-0 rounded-full"
              onClick={() => profileInputRef.current?.click()}
              disabled={isProfileUploading}
            >
              <Upload className="w-4 h-4" />
            </Button>
          </div>
          <div>
            <Label htmlFor="profilePicture">Profile Picture</Label>
            <p className="text-sm text-gray-500">Upload a clear, recent photo of yourself</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <Label>Gallery Photos</Label>
          <p className="text-sm text-gray-500">Upload up to 5 photos to showcase your personality</p>
          
          <input
            type="file"
            ref={galleryInputRef}
            className="hidden"
            accept="image/*"
            multiple
            onChange={handleGalleryUpload}
            disabled={isGalleryUploading}
          />
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {photosGallery.galleryImages.map((image, index) => (
              <div key={index} className="relative aspect-square">
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                  loading="lazy"
                />
                <Button
                  variant="destructive"
                  size="icon"
                  className="absolute top-2 right-2 rounded-full"
                  onClick={() => removeGalleryImage(index)}
                  disabled={isGalleryUploading}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            ))}
            {photosGallery.galleryImages.length < 5 && (
              <div
                className={`aspect-square bg-gray-100 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors relative ${
                  isGalleryUploading ? 'opacity-50' : ''
                }`}
                onClick={() => galleryInputRef.current?.click()}
              >
                {isGalleryUploading ? (
                  <Loader2 className="w-8 h-8 text-gray-400 animate-spin" />
                ) : (
                  <Upload className="w-8 h-8 text-gray-400" />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 