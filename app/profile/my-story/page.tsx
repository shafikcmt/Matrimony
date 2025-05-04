"use client";

import { useStoryStore } from "@/state/stories";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Plus, Edit2, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { UserStory } from "@/types/stories";

const MyStory = () => {
  const {
    stories,
    isLoading,
    error,
    formData,
    isCreateDialogOpen,
    isEditDialogOpen,
    currentStory,
    setFormData,
    resetForm,
    openCreateDialog,
    closeCreateDialog,
    openEditDialog,
    closeEditDialog,
    addStory,
    updateStory,
    deleteStory,
  } = useStoryStore();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ [name]: value });
  };

  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      setFormData({
        marriageDate: format(date, "yyyy-MM-dd"),
      });
    }
  };

  const handleCreateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newStory: UserStory = {
        id: crypto.randomUUID(),
        ...formData,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      addStory(newStory);
      closeCreateDialog();
      resetForm();
    } catch (error) {
      console.error("Failed to create story:", error);
    }
  };

  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStory) {
      try {
        updateStory(currentStory.id, {
          ...formData,
          updatedAt: new Date(),
        });
        closeEditDialog();
      } catch (error) {
        console.error("Failed to update story:", error);
      }
    }
  };

  const handleEdit = (story: UserStory) => {
    openEditDialog(story);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this story?")) {
      try {
        deleteStory(id);
      } catch (error) {
        console.error("Failed to delete story:", error);
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">My Success Stories</h1>
        <Dialog open={isCreateDialogOpen} onOpenChange={(open) => {
          if (open) {
            openCreateDialog();
          } else {
            closeCreateDialog();
          }
        }}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Share Your Story
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Share Your Success Story</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleCreateSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Couple Name</label>
                <Input
                  name="coupleName"
                  value={formData.coupleName}
                  onChange={handleInputChange}
                  placeholder="Enter couple's name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Your Story</label>
                <Textarea
                  name="story"
                  value={formData.story}
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
                        !formData.marriageDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.marriageDate ? (
                        format(new Date(formData.marriageDate), "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={formData.marriageDate ? new Date(formData.marriageDate) : undefined}
                      onSelect={handleDateSelect}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Image URL</label>
                <Input
                  name="image"
                  value={formData.image}
                  onChange={handleInputChange}
                  placeholder="Enter image URL"
                />
              </div>

              <Button type="submit" className="w-full">
                Share Story
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stories List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((story) => (
          <Card key={story.id} className="p-4">
            <div className="aspect-video relative mb-4">
              <img
                src={story.image}
                alt={story.coupleName}
                className="object-cover rounded-lg w-full h-full"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{story.coupleName}</h3>
            <p className="text-gray-600 mb-2">
              Married on: {format(new Date(story.marriageDate), "PPP")}
            </p>
            <div className="relative">
              <p className="text-gray-700 mb-4 line-clamp-3">{story.story}</p>
              {story.story.length > 150 && (
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent" />
              )}
            </div>
            <div className="flex justify-between items-center mt-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-primary hover:text-primary/80"
                onClick={() => handleEdit(story)}
              >
                <Edit2 className="h-4 w-4 mr-1" />
                Edit
              </Button>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    // Show full story in a dialog
                    openEditDialog(story);
                  }}
                >
                  Read More
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => handleDelete(story.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Edit Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={closeEditDialog}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Edit Your Story</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleEditSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Couple Name</label>
              <Input
                name="coupleName"
                value={formData.coupleName}
                onChange={handleInputChange}
                placeholder="Enter couple's name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Your Story</label>
              <Textarea
                name="story"
                value={formData.story}
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
                      !formData.marriageDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {formData.marriageDate ? (
                      format(new Date(formData.marriageDate), "PPP")
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={formData.marriageDate ? new Date(formData.marriageDate) : undefined}
                    onSelect={handleDateSelect}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Image URL</label>
              <Input
                name="image"
                value={formData.image}
                onChange={handleInputChange}
                placeholder="Enter image URL"
              />
            </div>

            <Button type="submit" className="w-full">
              Update Story
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Empty State */}
      {stories.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No stories yet</h3>
          <p className="text-gray-500">Share your success story to inspire others!</p>
        </div>
      )}

      {/* Loading State */}
      {isLoading && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
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

export default MyStory; 