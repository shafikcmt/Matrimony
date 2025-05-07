"use client";

import { useState } from "react";
import { useUserStoryBuilder } from "@/hooks/stories/userStoryBuilder/userStoryBuilder";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Plus, Edit2, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { StoryType } from "@/types/stories";

type StoryFormData = Pick<StoryType, 'partner_name' | 'content' | 'marriage_date' | 'images'>;

const MyStory = () => {
  const [state, actions] = useUserStoryBuilder();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<StoryFormData>({
    partner_name: "",
    marriage_date: new Date(),
    content: "",
    images: [""]
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      setFormData((prev) => ({
        ...prev,
        marriageDate: format(date, "yyyy-MM-dd"),
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isEditing && state.currentStory) {
      await actions.updateStory(state.currentStory.story_id, formData);
    } else {
      await actions.createStory({
        ...formData,
        user_id: 1, // TODO: Get actual user ID
        story_id: crypto.randomUUID(),
        created_at: new Date(),
        updated_at: new Date(),
        likes: 0,
        comments: 0,
        shares: 0
      });
    }
    setIsEditing(false);
    setFormData({
      partner_name: "",
      content: "",
      marriage_date: new Date(),
      images: [""],
    });
  };

  const handleEdit = (story: StoryType) => {
    setFormData({
      partner_name: story.partner_name ,
      content: story.content,
      marriage_date: story.marriage_date,
      images: story.images,
    });
    setIsEditing(true);
    actions.setCurrentStory(story);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this story?")) {
      await actions.deleteStory(id);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Success Story</h1>

      {/* Story Form */}
      <Card className="p-6 mb-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Couple Name</label>
            <Input
              name="partner_name"
              value={formData.partner_name}
              onChange={handleInputChange}
              placeholder="Enter couple's name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Your Story</label>
            <Textarea
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              placeholder="Share your beautiful story..."
              required
              className="min-h-[150px]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Marriage Date</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !formData.marriage_date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {formData.marriage_date ? (
                    format(new Date(formData.marriage_date), "PPP")
                  ) : (
                    <span>Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={formData.marriage_date ? new Date(formData.marriage_date) : undefined}
                  onSelect={handleDateSelect}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Image URL</label>
            <Input
              name="images"
              value={formData.images}
              onChange={handleInputChange}
              placeholder="Enter image URL"
              required
            />
          </div>

          <Button type="submit" className="w-full">
            {isEditing ? "Update Story" : "Share Story"}
          </Button>
        </form>
      </Card>

      {/* Stories List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {state.stories.map((story) => (
          <Card key={story.story_id} className="p-4">
            <div className="aspect-video relative mb-4">
              <img
                src={story.images[0]}
                alt={story.partner_name}
                className="object-cover rounded-lg w-full h-full"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{story.partner_name}</h3>
            <p className="text-gray-600 mb-2">
              Married on: {format(new Date(story.marriage_date), "PPP")}
            </p>
            <p className="text-gray-700 mb-4 line-clamp-3">{story.content}</p>
            <div className="flex justify-end space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleEdit(story)}
              >
                <Edit2 className="h-4 w-4 mr-1" />
                Edit
              </Button>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => handleDelete(story.story_id)}
              >
                <Trash2 className="h-4 w-4 mr-1" />
                Delete
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Loading State */}
      {state.isLoading && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg">Loading...</div>
        </div>
      )}

      {/* Error State */}
      {state.error && (
        <div className="fixed bottom-4 right-4 bg-red-500 text-white p-4 rounded-lg">
          {state.error}
        </div>
      )}
    </div>
  );
};

export default MyStory; 