"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Trash2, ImageIcon } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-8"
    >
      <h1 className="text-2xl font-semibold text-center text-accent">
        Your Images Gallery
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-xl">
            <CardContent className="p-8 flex flex-col items-center justify-center">
              <ImageIcon size={50} className="mb-4" />
              <h2 className="text-3xl font-bold">775</h2>
              <p className="text-lg">Remaining Gallery Image Upload</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="flex items-center justify-center border border-gray-300 shadow-md">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                  className="bg-green-600 p-4 rounded-full shadow-lg hover:bg-green-700 transition-colors duration-300"
                >
                  <Plus className="text-white" size={30} />
                </motion.div>
                <p className="text-pink-500 text-lg font-semibold">Add New Image</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="relative group"
          >
            <Card className="overflow-hidden shadow-lg rounded-lg">
              <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                <Image
                  src={src}
                  alt={`Gallery ${index}`}
                  width={400}
                  height={300}
                  className="w-full h-[300px] object-cover transition-transform duration-500"
                />
              </motion.div>
            </Card>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100 rounded-lg"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-full p-4 shadow-lg cursor-pointer flex items-center justify-center"
              >
                <Trash2 className="text-red-500" size={24} />
              </motion.button>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Gallery;
