"use client";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, MessageCircle, Share2, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useUserStoryBuilder } from "@/hooks/stories/userStoryBuilder/userStoryBuilder";
import { format } from "date-fns";
import Link from "next/link";
import { StoryType } from "@/types/stories";

export default function StoriesPage() {
  const [state] = useUserStoryBuilder();
  const [sortBy, setSortBy] = useState<"marriageDate" | "createdAt">("marriageDate");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [page, setPage] = useState(1);
  const storiesPerPage = 2;

  // Sort and paginate stories
  const filteredStories = state.stories
    .sort((a, b) => {
      const dateA = new Date(a[sortBy === "marriageDate" ? "marriage_date" : "created_at"] || new Date()).getTime();
      const dateB = new Date(b[sortBy === "marriageDate" ? "marriage_date" : "created_at"] || new Date()).getTime();
      return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
    });

  const totalPages = Math.ceil(filteredStories.length / storiesPerPage);
  const paginatedStories = filteredStories.slice((page - 1) * storiesPerPage, page * storiesPerPage);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto px-4 py-16"
    >
      {/* Heading and Description */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Success Stories</h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Real stories from real couples who found their perfect match on our platform. Let their journeys inspire your own love story.
        </p>
        <Link href="/profile/create-story">
          <Button className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-3 rounded-full text-lg flex items-center gap-2 mx-auto">
            <Heart className="w-5 h-5" /> Share Your Story
          </Button>
        </Link>
      </div>

      {/* Stories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {paginatedStories.map((story) => (
          <Card key={story.story_id} className="overflow-hidden flex flex-col">
            <div className="relative group">
              <img
                src={story.images?.[0] || "/placeholder.jpg"}
                alt={story.partner_name}
                className="w-full h-64 object-cover transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-2xl font-bold">{story.partner_name}</h3>
                <p className="text-sm opacity-90">
                  Married in {format(new Date(story.marriage_date), "MMMM yyyy")}
                </p>
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <p className="text-gray-700 mb-4 line-clamp-4">{story.content}</p>
              <div className="flex items-center gap-8 text-gray-500 text-sm mb-2">
                <span className="flex items-center gap-1"><Heart className="w-4 h-4" /> {story.likes ?? 245}</span>
                <span className="flex items-center gap-1"><MessageCircle className="w-4 h-4" /> {story.comments ?? 28}</span>
                <span className="flex items-center gap-1"><Share2 className="w-4 h-4" /> {story.shares ?? 15}</span>
              </div>
              <div className="flex justify-end">
                <Link href={`/stories/${story.story_id}`}>
                  <Button variant="ghost" className="text-pink-500 hover:bg-pink-50 font-semibold">
                    Read More
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-10">
          <Button
            variant="ghost"
            size="icon"
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="rounded-full"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          {[...Array(totalPages)].map((_, idx) => (
            <Button
              key={idx}
              variant={page === idx + 1 ? "default" : "ghost"}
              className={`rounded-full w-10 h-10 ${page === idx + 1 ? "bg-pink-500 text-white" : ""}`}
              onClick={() => setPage(idx + 1)}
            >
              {idx + 1}
            </Button>
          ))}
          <Button
            variant="ghost"
            size="icon"
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
            className="rounded-full"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      )}

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
