"use client";
import { Trash2 } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Interests = () => {
    const data = [
        {
            id: 1,
            name: "Liam Noah",
            age: 34,
            status: "Pending",
            img: "https://randomuser.me/api/portraits/men/1.jpg",
        },
        {
            id: 2,
            name: "Mitchell Johnson",
            age: 34,
            status: "Approved",
            img: "https://randomuser.me/api/portraits/men/2.jpg",
        },
        {
            id: 3,
            name: "Mitchell Johnson",
            age: 34,
            status: "Approved",
            img: "https://randomuser.me/api/portraits/men/3.jpg",
        },
        {
            id: 4,
            name: "Mitchell Johnson",
            age: 34,
            status: "Pending",
            img: "https://randomuser.me/api/portraits/men/4.jpg",
        },
        {
            id: 5,
            name: "Mitchell Johnson",
            age: 34,
            status: "Approved",
            img: "https://randomuser.me/api/portraits/men/5.jpg",
        },

        {
            id: 6,
            name: "Mitchell Johnson",
            age: 34,
            status: "Pending",
            img: "https://randomuser.me/api/portraits/men/7.jpg",
        },
    ];

    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-100 "
        >
            <div className="mx-auto md:p-8 p-2 bg-white shadow-lg rounded-lg">
                <h1 className="text-2xl font-semibold text-center text-accent">
                    Your Interests
                </h1>
                <div className="flex justify-end items-center mb-6">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-2 bg-accent text-white font-bold rounded-md shadow-md"
                    >
                        Interest Requests
                    </motion.button>
                </div>

                <div className="overflow-x-auto md:overflow-x-hidden max-h-[80vh] scrollbar-new">

                    <motion.table
                        className="w-full border-collapse"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="py-3 px-4 text-left font-medium">#</th>
                                <th className="py-3 px-4 text-left font-medium">Image</th>
                                <th className="py-3 px-4 text-left font-medium">Name</th>
                                <th className="py-3 px-4 text-left font-medium">Age</th>
                                <th className="py-3 px-4 text-left font-medium">Status</th>
                                <th className="py-3 px-4 text-left font-medium">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {data.map((item, index) => (
                                <motion.tr
                                    key={item.id}
                                    whileHover={{ scale: 1.01 }}
                                    transition={{ duration: 0.3 }}
                                    className="border-b hover:bg-gray-100"
                                >
                                    <td className="py-4 px-4">{index + 1}</td>

                                    <td className="py-4 px-4">
                                        <Image
                                            src={item.img}
                                            alt={item.name}
                                            width={50}
                                            height={50}
                                            className="rounded-full border border-gray-300"
                                        />
                                    </td>

                                    <td className="py-4 px-4 font-medium">{item.name}</td>
                                    <td className="py-4 px-4">{item.age}</td>

                                    {/* Status */}
                                    <td className="py-4 px-4">
                                        <span
                                            className={`px-3 py-1 text-sm rounded-full text-white font-semibold ${item.status === "Pending"
                                                ? "bg-blue-500"
                                                : "bg-green-500"
                                                }`}
                                        >
                                            {item.status}
                                        </span>
                                    </td>

                                    {/* Delete Button */}
                                    <td className="py-4 px-4">
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="bg-red-100 p-2 rounded-full hover:bg-red-200 transition"
                                        >
                                            <Trash2 className="text-red-500" size={18} />
                                        </motion.button>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </motion.table>
                </div>
            </div>
        </motion.main>
    );
};

export default Interests;
