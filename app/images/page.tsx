"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Trash2, ImageIcon } from "lucide-react";
import Image from "next/image";

const Gallery = () => {
    const images = [
        "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1521575107034-e0fa0b594529?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1524255684952-d7185b509571?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=400&h=300&fit=crop"
    ];

    return (
        <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <Card className="bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-xl hover:scale-105 transition-transform duration-300">
                    <CardContent className="p-8 flex flex-col items-center justify-center">
                        <ImageIcon size={50} className="mb-4" />
                        <h2 className="text-3xl font-bold">775</h2>
                        <p className="text-lg">Remaining Gallery Image Upload</p>
                    </CardContent>
                </Card>

                <Card className="flex items-center justify-center border border-gray-300 shadow-md hover:scale-105 transition-transform duration-300">
                    <CardContent className="p-8 text-center">
                        <div className="flex items-center justify-center gap-4">
                            <div className="bg-green-600 p-4 rounded-full shadow-lg hover:bg-green-700 transition-colors duration-300">
                                <Plus className="text-white" size={30} />
                            </div>
                            <p className="text-pink-500 text-lg font-semibold">Add New Image</p>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {images.map((src, index) => (
                    <div key={index} className="relative group">
                        <Card className="overflow-hidden shadow-lg rounded-lg">
                            <Image
                                src={src}
                                alt={`Gallery ${index}`}
                                width={400}
                                height={300}
                                className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </Card>

                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <button
                                className="bg-white rounded-full p-4 shadow-lg cursor-pointer hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                                <Trash2 className="text-red-500" size={24} />
                            </button>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
