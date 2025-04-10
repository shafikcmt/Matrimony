"use client";

import { Undo2 } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const IgnoredUsers = () => {
  const ignored = [
    {
      id: 1,
      name: "David Smith",
      age: 30,
      img: "https://randomuser.me/api/portraits/men/6.jpg",
    },
    {
      id: 2,
      name: "Ethan Clark",
      age: 29,
      img: "https://randomuser.me/api/portraits/men/8.jpg",
    },
    {
      id: 3,
      name: "James Wilson",
      age: 32,
      img: "https://randomuser.me/api/portraits/men/9.jpg",
    },
    {
      id: 4,
      name: "Ryan Lee",
      age: 27,
      img: "https://randomuser.me/api/portraits/men/10.jpg",
    },
  ];

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-100"
    >
      <div className="mx-auto md:p-8 p-2 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-semibold text-center text-accent">
          Ignored Users
        </h1>

        <div className="flex justify-end items-center mb-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-accent text-white font-bold rounded-md shadow-md"
          >
            Restore All
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
              {ignored.map((user, index) => (
                <motion.tr
                  key={user.id}
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                  className="border-b hover:bg-gray-100"
                >
                  <td className="py-4 px-4">{index + 1}</td>
                  <td className="py-4 px-4">
                    <Image
                      src={user.img}
                      alt={user.name}
                      width={50}
                      height={50}
                      className="rounded-full border border-gray-300"
                    />
                  </td>
                  <td className="py-4 px-4 font-medium">{user.name}</td>
                  <td className="py-4 px-4">{user.age}</td>
                  <td className="py-4 px-4">
                    <span className="px-3 py-1 text-sm rounded-full text-white font-semibold bg-gray-500">
                      Ignored
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition"
                    >
                      <Undo2 className="text-accent" size={18} />
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

export default IgnoredUsers;
