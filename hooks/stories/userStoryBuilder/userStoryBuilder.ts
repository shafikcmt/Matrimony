import { useState, useCallback } from 'react';

interface UserStory {
  id: string;
  coupleName: string;
  story: string;
  marriageDate: string;
  image: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface UserStoryBuilderState {
  stories: UserStory[];
  currentStory: UserStory | null;
  isLoading: boolean;
  error: string | null;
}

interface UserStoryBuilderActions {
  createStory: (story: Omit<UserStory, 'id' | 'createdAt' | 'updatedAt'>) => Promise<void>;
  updateStory: (id: string, story: Partial<UserStory>) => Promise<void>;
  deleteStory: (id: string) => Promise<void>;
  setCurrentStory: (story: UserStory | null) => void;
  clearError: () => void;
}

export const useUserStoryBuilder = (): [UserStoryBuilderState, UserStoryBuilderActions] => {
  const [state, setState] = useState<UserStoryBuilderState>({
    stories: [],
    currentStory: null,
    isLoading: false,
    error: null,
  });

  const createStory = useCallback(async (storyData: Omit<UserStory, 'id' | 'createdAt' | 'updatedAt'>) => {
    try {
      setState(prev => ({ ...prev, isLoading: true, error: null }));
      
      // TODO: Replace with actual API call
      const newStory: UserStory = {
        ...storyData,
        id: crypto.randomUUID(),
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      setState(prev => ({
        ...prev,
        stories: [...prev.stories, newStory],
        currentStory: newStory,
        isLoading: false,
      }));
    } catch (error) {
      setState(prev => ({
        ...prev,
        error: error instanceof Error ? error.message : 'Failed to create story',
        isLoading: false,
      }));
    }
  }, []);

  const updateStory = useCallback(async (id: string, storyData: Partial<UserStory>) => {
    try {
      setState(prev => ({ ...prev, isLoading: true, error: null }));
      
      // TODO: Replace with actual API call
      const updatedStory: UserStory = {
        ...state.stories.find(story => story.id === id)!,
        ...storyData,
        updatedAt: new Date(),
      };

      setState(prev => ({
        ...prev,
        stories: prev.stories.map(story => 
          story.id === id ? updatedStory : story
        ),
        currentStory: prev.currentStory?.id === id ? updatedStory : prev.currentStory,
        isLoading: false,
      }));
    } catch (error) {
      setState(prev => ({
        ...prev,
        error: error instanceof Error ? error.message : 'Failed to update story',
        isLoading: false,
      }));
    }
  }, [state.stories]);

  const deleteStory = useCallback(async (id: string) => {
    try {
      setState(prev => ({ ...prev, isLoading: true, error: null }));
      
      // TODO: Replace with actual API call
      setState(prev => ({
        ...prev,
        stories: prev.stories.filter(story => story.id !== id),
        currentStory: prev.currentStory?.id === id ? null : prev.currentStory,
        isLoading: false,
      }));
    } catch (error) {
      setState(prev => ({
        ...prev,
        error: error instanceof Error ? error.message : 'Failed to delete story',
        isLoading: false,
      }));
    }
  }, []);

  const setCurrentStory = useCallback((story: UserStory | null) => {
    setState(prev => ({ ...prev, currentStory: story }));
  }, []);

  const clearError = useCallback(() => {
    setState(prev => ({ ...prev, error: null }));
  }, []);

  return [
    state,
    {
      createStory,
      updateStory,
      deleteStory,
      setCurrentStory,
      clearError,
    },
  ];
};
