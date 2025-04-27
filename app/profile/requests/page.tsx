"use client";

import { Trash2, Undo2 } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const RequestsPage = () => {
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

  const requestSent = [
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

  const requestReceived = [
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
      className="bg-gray-100 min-h-screen py-8 px-8"
    >
        {/* <h1 className="text-2xl font-semibold text-center text-accent mb-8">
          Requests
        </h1> */}

        <Tabs defaultValue="requestSent" className="w-full border-2 border-gray-200 rounded-lg">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="requestSent" className="text-sm md:text-base">Request Sent</TabsTrigger>
            <TabsTrigger value="requestReceived" className="text-sm md:text-base">Request Received</TabsTrigger>
            <TabsTrigger value="ignored" className="text-sm md:text-base">Ignored Users</TabsTrigger>
          </TabsList>

          <TabsContent value="requestSent" className="mt-4">
            <div>
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
                  {requestSent.map((item, index) => (
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
                      <td className="py-4 px-4">
                        <span
                          className={`px-3 py-1 text-sm rounded-full text-white font-semibold ${
                            item.status === "Pending"
                              ? "bg-blue-500"
                              : "bg-green-500"
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>
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
          </TabsContent>

          <TabsContent value="requestReceived" className="mt-4">
            <div>
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
                  {requestReceived.map((item, index) => (
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
                      <td className="py-4 px-4">
                        <span
                          className={`px-3 py-1 text-sm rounded-full text-white font-semibold ${
                            item.status === "Pending"
                              ? "bg-blue-500"
                              : "bg-green-500"
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>
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
          </TabsContent>

          <TabsContent value="ignored" className="mt-4">
            <div>
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
          </TabsContent>
        </Tabs>
    </motion.main>
  );
};

export default RequestsPage;


