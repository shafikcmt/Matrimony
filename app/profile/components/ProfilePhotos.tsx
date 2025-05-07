import { Card, CardContent } from "@/components/ui/card";
import { Edit2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { useState } from "react";
import { PhotosGallery } from "../build/components/PhotosGallery";
import { PhotosGalleryTypes, UserProfileType } from "@/types/user";
import { Button } from "@/components/ui/button";
import { useProfileStore } from "@/state/profile";
import useAuthStore from "@/state/authState";
import setUserProfile from "@/lib/user/setUserProfile";

export default function ProfilePhotosCard() {
    const [open, setOpen] = useState(false);
    
    // Get data from store
    const photosGallery = useProfileStore((state) => state.photosGallery);
    const isLoading = useProfileStore((state) => state.isLoading);
    const authId = useAuthStore((state) => state.authId);


    const [formData, setFormData] = useState<PhotosGalleryTypes>(photosGallery);

    return (
        <Card>
            <CardContent className="relative">
                <div className="absolute top-1 right-3">
                    <button onClick={() => { setOpen(true); }}>
                        <Edit2 className="w-4 h-4" />
                    </button>
                </div>
                <div className="flex justify-between items-center mb-2 mt-2">
                    <h2 className="font-semibold">Photos</h2>
                </div>

                <div className="grid grid-cols-3 gap-4">
                    {photosGallery.galleryImages.map((image, index) => (
                        <div key={index} className="relative aspect-square">
                            <img
                                src={image}
                                alt={`Gallery image ${index + 1}`}
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                    ))}
                </div>

                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Edit Photos</DialogTitle>
                        </DialogHeader>
                        <PhotosGallery
                            photosGallery={formData}
                            setPhotosGallery={setFormData}
                        />
                        <DialogFooter>
                            <Button
                                onClick={() => setUserProfile(formData as UserProfileType, authId)}
                                disabled={isLoading}
                            >
                                {isLoading ? "Saving..." : "Save"}
                            </Button>
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
