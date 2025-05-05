import { Card, CardContent } from "@/components/ui/card";
import { Edit2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { useState } from "react";
import { PhotosGallery } from "../build/components/PhotosGallery";
import { PhotosGalleryTypes } from "@/types/user";
import { Button } from "@/components/ui/button";

export default function ProfilePhotosCard({ photosGallery, setPhotosGallery }: { photosGallery: PhotosGalleryTypes, setPhotosGallery: (info: PhotosGalleryTypes) => void }) {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState(photosGallery);

  return (
    <Card>
      <CardContent>
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-semibold">Photos & Gallery</h2>
          <button onClick={() => { setDraft(photosGallery); setOpen(true); }}>
            <Edit2 className="w-4 h-4" />
          </button>
        </div>
        <div className="text-sm text-gray-700">
          <div>Profile Picture: <img src={photosGallery.profilePicture} alt="Profile" className="w-12 h-12 rounded-full inline-block" /></div>
          <div>Gallery Images: {photosGallery.galleryImages && photosGallery.galleryImages.length > 0 ? photosGallery.galleryImages.length : 0}</div>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Photos & Gallery</DialogTitle>
            </DialogHeader>
            <PhotosGallery photosGallery={draft} setPhotosGallery={setDraft} />
            <DialogFooter>
              <Button onClick={() => { setPhotosGallery(draft); setOpen(false); }}>Save</Button>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
}
