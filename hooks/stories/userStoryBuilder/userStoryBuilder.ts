import { StoryType } from '@/types/stories';
import { useState, useCallback } from 'react';

interface UserStoryBuilderState {
  stories: StoryType[];
  currentStory: StoryType | null;
  isLoading: boolean;
  error: string | null;
}

interface UserStoryBuilderActions {
  createStory: (story: Omit<StoryType, 'id' | 'createdAt' | 'updatedAt'>) => Promise<void>;
  updateStory: (id: string, story: Partial<StoryType>) => Promise<void>;
  deleteStory: (id: string) => Promise<void>;
  setCurrentStory: (story: StoryType | null) => void;
  clearError: () => void;
}

export const useUserStoryBuilder = (): [UserStoryBuilderState, UserStoryBuilderActions] => {
  const [state, setState] = useState<UserStoryBuilderState>({
    stories: [],
    currentStory: null,
    isLoading: false,
    error: null,
  });

  const createStory = useCallback(async (storyData: Omit<StoryType, 'id' | 'createdAt' | 'updatedAt'>) => {
    try {
      setState(prev => ({ ...prev, isLoading: true, error: null }));
      
      // TODO: Replace with actual API call
      const newStory: StoryType = {
        ...storyData,
        story_id: crypto.randomUUID(),
        created_at: new Date(),
        updated_at: new Date(),
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

  const updateStory = useCallback(async (id: string, storyData: Partial<StoryType>) => {
    try {
      setState(prev => ({ ...prev, isLoading: true, error: null }));
      
      // TODO: Replace with actual API call
      const updatedStory: StoryType = {
        ...state.stories.find(story => story.story_id === id)!,
        ...storyData,
        updated_at: new Date(),
      };

      setState(prev => ({
        ...prev,
        stories: prev.stories.map(story => 
          story.story_id === id ? updatedStory : story
        ),
        currentStory: prev.currentStory?.story_id === id ? updatedStory : prev.currentStory,
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
        stories: prev.stories.filter(story => story?.story_id !== id),
        currentStory: prev.currentStory?.story_id === id ? null : prev.currentStory,
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

  const setCurrentStory = useCallback((story: StoryType | null) => {
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
