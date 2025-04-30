import { useState } from "react";
import { UserStory } from "@/types/stories";

export const useStoryDialog = () => {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editingStory, setEditingStory] = useState<UserStory | null>(null);

  const openCreateDialog = () => setIsCreateDialogOpen(true);
  const closeCreateDialog = () => setIsCreateDialogOpen(false);

  const openEditDialog = (story: UserStory) => {
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