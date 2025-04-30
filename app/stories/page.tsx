"use client";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, Search, Calendar, ArrowUpDown } from "lucide-react";
import { motion } from "framer-motion";
import { useUserStoryBuilder } from "@/hooks/stories/userStoryBuilder/userStoryBuilder";
import { format } from "date-fns";
import { UserStory } from "@/types/stories";

export default function StoriesPage() {
  const [state, actions] = useUserStoryBuilder();
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"marriageDate" | "createdAt">("marriageDate");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const filteredStories = state.stories
    .filter((story) =>
      story.coupleName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.story.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      const dateA = new Date(a[sortBy] || a.createdAt || new Date()).getTime();
      const dateB = new Date(b[sortBy] || b.createdAt || new Date()).getTime();
      return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
    });

  const handleReadMore = (story: UserStory) => {
    // TODO: Implement story detail view
    console.log("Reading story:", story.id);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto px-4 py-16"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-accent">Happy Stories</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Real stories from couples who found their perfect match on our platform. Your love story could be next!
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search stories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="flex gap-4">
          <Select value={sortBy} onValueChange={(value: "marriageDate" | "createdAt") => setSortBy(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="marriageDate">Marriage Date</SelectItem>
              <SelectItem value="createdAt">Created Date</SelectItem>
            </SelectContent>
          </Select>

          <Button
            variant="outline"
            onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
            className="flex items-center gap-2"
          >
            <ArrowUpDown className="h-4 w-4" />
            {sortOrder === "asc" ? "Oldest First" : "Newest First"}
          </Button>
        </div>
      </div>

      {/* Stories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredStories.map((story) => (
          <motion.div
            key={story.id}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative group">
                <motion.img
                  src={story.image}
                  alt={story.coupleName}
                  className="w-full h-64 object-cover transition-transform duration-500"
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-semibold">{story.coupleName}</h3>
                  <p className="text-sm opacity-90">
                    Married on {format(new Date(story.marriageDate), "MMMM yyyy")}
                  </p>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-4 line-clamp-3">{story.story}</p>

                <div className="flex items-center justify-between mt-4 pt-4 border-t">
                  <div className="flex items-center text-accent">
                    <Heart className="w-4 h-4 mr-2 fill-current" />
                    <span>Success Story</span>
                  </div>
                  
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Button
                      variant="outline"
                      className="text-accent border-accent hover:bg-accent hover:text-white"
                      onClick={() => handleReadMore(story)}
                    >
                      Read More
                    </Button>
                  </motion.div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {filteredStories.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No stories found</h3>
          <p className="text-gray-500">Try adjusting your search or filters</p>
        </div>
      )}

      {/* Loading State */}
      {state.isLoading && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg">Loading stories...</div>
        </div>
      )}

      {/* Error State */}
      {state.error && (
        <div className="fixed bottom-4 right-4 bg-red-500 text-white p-4 rounded-lg">
          {state.error}
        </div>
      )}
    </motion.div>
  );
}
