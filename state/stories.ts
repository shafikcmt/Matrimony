import { Story } from "@/types/stories";
import { create } from "zustand";

type StoryFormData = Pick<Story, 'partner_name' | 'content' | 'marriage_date' | 'images'>;

interface StoryState {
  stories: Story[];
  currentStory: Story | null;
  isLoading: boolean;
  error: string | null;
  // Actions
  setStories: (stories: Story[]) => void;
  addStory: (story: Story) => void;
  updateStory: (id: string, story: Partial<Story>) => void;
  deleteStory: (id: string) => void;
  setCurrentStory: (story: Story | null) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
  // Form state
  formData: StoryFormData;
  setFormData: (data: Partial<StoryFormData>) => void;
  resetForm: () => void;
  // Dialog state
  isCreateDialogOpen: boolean;
  isEditDialogOpen: boolean;
  openCreateDialog: () => void;
  closeCreateDialog: () => void;
  openEditDialog: (story: Story) => void;
  closeEditDialog: () => void;
}

const initialFormData: StoryFormData = {
  partner_name: "",
  content: "",
  marriage_date: new Date(),
  images: [""],
};

export const useStoryStore = create<StoryState>((set) => ({
  // Initial state
  stories: [],
  currentStory: null,
  isLoading: false,
  error: null,
  formData: initialFormData,
  isCreateDialogOpen: false,
  isEditDialogOpen: false,

  // Story actions
  setStories: (stories) => set({ stories }),
  addStory: (story) => set((state) => ({ stories: [...state.stories, story] })),
  updateStory: (id, updatedStory) =>
    set((state) => ({
      stories: state.stories.map((story) =>
        story.story_id === id ? { ...story, ...updatedStory } : story
      ),
    })),
  deleteStory: (id) =>
    set((state) => ({
      stories: state.stories.filter((story) => story.story_id !== id),
    })),
  setCurrentStory: (story) => set({ currentStory: story }),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),

  // Form actions
  setFormData: (data) =>
    set((state) => ({
      formData: { ...state.formData, ...data },
    })),
  resetForm: () => set({ formData: initialFormData }),

  // Dialog actions
  openCreateDialog: () => set({ isCreateDialogOpen: true }),
  closeCreateDialog: () => set({ isCreateDialogOpen: false }),
  openEditDialog: (story) =>
    set({
      isEditDialogOpen: true,
      currentStory: story,
      formData: {
        partner_name: story.partner_name,
        content: story.content,
        marriage_date: story.marriage_date,
        images: story.images,
      },
    }),
  closeEditDialog: () =>
    set({
      isEditDialogOpen: false,
      currentStory: null,
      formData: initialFormData,
    }),
})); 