import { PhotosGalleryTypes } from "@/types/user";
import { useState } from "react";

const initialPhotosGalleryState: PhotosGalleryTypes = {
  profilePicture: '',
  galleryImages: []
}

export const usePhotosGalleryBuilder = () => {
  const [photosGallery, setPhotosGallery] = useState<PhotosGalleryTypes>(initialPhotosGalleryState);
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  const updatePhotosGallery = (data: Partial<PhotosGalleryTypes>) => {
    setPhotosGallery((prev) => ({
      ...prev,
      ...data,
    }));
  };

 
  return {
    photosGallery,
    setPhotosGallery,
  };
}; 