import { create } from "zustand";
import { UserStory, CreateUserStoryDTO } from "@/types/stories";

interface StoryState {
  stories: UserStory[];
  currentStory: UserStory | null;
  isLoading: boolean;
  error: string | null;
  // Actions
  setStories: (stories: UserStory[]) => void;
  addStory: (story: UserStory) => void;
  updateStory: (id: string, story: Partial<UserStory>) => void;
  deleteStory: (id: string) => void;
  setCurrentStory: (story: UserStory | null) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
  // Form state
  formData: CreateUserStoryDTO;
  setFormData: (data: Partial<CreateUserStoryDTO>) => void;
  resetForm: () => void;
  // Dialog state
  isCreateDialogOpen: boolean;
  isEditDialogOpen: boolean;
  openCreateDialog: () => void;
  closeCreateDialog: () => void;
  openEditDialog: (story: UserStory) => void;
  closeEditDialog: () => void;
}

const initialFormData: CreateUserStoryDTO = {
  coupleName: "",
  story: "",
  marriageDate: "",
  image: "",
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
        story.id === id ? { ...story, ...updatedStory } : story
      ),
    })),
  deleteStory: (id) =>
    set((state) => ({
      stories: state.stories.filter((story) => story.id !== id),
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
        coupleName: story.coupleName,
        story: story.story,
        marriageDate: story.marriageDate,
        image: story.image,
      },
    }),
  closeEditDialog: () =>
    set({
      isEditDialogOpen: false,
      currentStory: null,
      formData: initialFormData,
    }),
})); 