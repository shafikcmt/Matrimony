import { Story } from "@/types/stories";
import { useState } from "react";

export const useStoryDialog = () => {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editingStory, setEditingStory] = useState<Story | null>(null);

  const openCreateDialog = () => setIsCreateDialogOpen(true);
  const closeCreateDialog = () => setIsCreateDialogOpen(false);

  const openEditDialog = (story: Story) => {
    setEditingStory(story);
    setIsEditDialogOpen(true);
  };

  const closeEditDialog = () => {
    setIsEditDialogOpen(false);
    setEditingStory(null);
  };

  return {
    isCreateDialogOpen,
    isEditDialogOpen,
    editingStory,
    openCreateDialog,
    closeCreateDialog,
    openEditDialog,
    closeEditDialog,
  };
}; 