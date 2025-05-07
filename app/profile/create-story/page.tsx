"use client";

import { useStoryStore } from "@/state/stories";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Edit2, Trash2 } from "lucide-react";
import { useState } from "react";
import { StoryType } from "@/types/stories";

// Replace with your actual user ID logic
const currentUserId = 123;

const initialForm = {
  partner_name: "",
  marriage_date: "",
  content: "",
  images: [""]
};

const CreateSuccessStory = () => {
  const {
    stories,
    isLoading,
    error,
    addStory,
    updateStory,
    deleteStory,
  } = useStoryStore();

  const [form, setForm] = useState(initialForm);
  const [editingId, setEditingId] = useState<string | null>(null);

  // Prefill form for editing
  const handleEdit = (story: StoryType) => {
    setForm({
      partner_name: story.partner_name || "",
      marriage_date: story.marriage_date ? format(new Date(story.marriage_date), "yyyy-MM-dd") : "",
      content: story.content || "",
      images: story.images && story.images.length > 0 ? [story.images[0]] : [""]
    });
    setEditingId(story.story_id);
  };

  // Reset form
  const resetForm = () => {
    setForm(initialForm);
    setEditingId(null);
  };

  // Handle form field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle date select
  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      setForm((prev) => ({
        ...prev,
        marriage_date: format(date, "yyyy-MM-dd"),
      }));
    }
  };

  // Handle image change
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      images: [e.target.value],
    }));
  };

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.partner_name || !form.marriage_date || !form.content) return;
    if (editingId) {
      updateStory(editingId, {
        ...form,
        user_id: currentUserId,
        images: form.images,
        marriage_date: new Date(form.marriage_date)
      });
    } else {
      addStory({
        story_id: crypto.randomUUID(),
        user_id: currentUserId,
        partner_name: form.partner_name,
        content: form.content,
        images: form.images,
        marriage_date: new Date(form.marriage_date),
        created_at: new Date(),
        updated_at: new Date(),
        likes: 0,
        comments: 0,
        shares: 0,
      });
    }
    resetForm();
  };

  // Handle delete
  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this story?")) {
      deleteStory(id);
      if (editingId === id) resetForm();
    }
  };

  // Only show current user's stories
  const myStories = stories.filter(story => story.user_id === currentUserId);

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Share Your Success Story</h1>
      <Card className="p-6 mb-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Partner Name</label>
            <Input
              name="partner_name"
              value={form.partner_name}
              onChange={handleChange}
              placeholder="Enter your partner's name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Marriage Date</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {form.marriage_date
                    ? format(new Date(form.marriage_date), "PPP")
                    : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={form.marriage_date ? new Date(form.marriage_date) : undefined}
                  onSelect={handleDateSelect}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Your Story</label>
            <Textarea
              name="content"
              value={form.content}
              onChange={handleChange}
              placeholder="Share your beautiful story..."
              required
              className="min-h-[120px]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Image URL</label>
            <Input
              name="image"
              value={form.images[0]}
              onChange={handleImageChange}
              placeholder="Enter image URL"
            />
          </div>
          <div className="flex gap-2">
            <Button type="submit" className="bg-accent text-white">
              {editingId ? "Update Story" : "Share Story"}
            </Button>
            {editingId && (
              <Button type="button" variant="outline" onClick={resetForm}>
                Cancel
              </Button>
            )}
          </div>
        </form>
      </Card>

      {/* List of user's stories */}
      {myStories.length > 0 && (
        <div className="space-y-6">
          <h2 className="text-xl font-semibold mb-2">Your Shared Stories</h2>
          {myStories.map((story) => (
            <Card key={story.story_id} className="flex flex-col md:flex-row items-center gap-4 p-4">
              <img
                src={story.images?.[0] || "/placeholder.jpg"}
                alt={story.partner_name}
                className="w-32 h-32 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="text-lg font-bold">{story.partner_name}</h3>
                <p className="text-gray-600 mb-1">
                  Married in {format(new Date(story.marriage_date), "MMMM yyyy")}
                </p>
                <p className="text-gray-700 line-clamp-2">{story.content}</p>
                <div className="flex gap-2 mt-2">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-primary"
                    onClick={() => handleEdit(story)}
                  >
                    <Edit2 className="h-4 w-4 mr-1" /> Edit
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => handleDelete(story.story_id)}
                  >
                    <Trash2 className="h-4 w-4" /> Delete
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Loading State */}
      {isLoading && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg">Loading...</div>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="fixed bottom-4 right-4 bg-red-500 text-white p-4 rounded-lg">
          {error}
        </div>
      )}
    </div>
  );
};

export default CreateSuccessStory; 