import { useState } from "react";
import { format } from "date-fns";
import { CreateUserStoryDTO, UserStory } from "@/types/stories";

export const useStoryForm = () => {
  const [formData, setFormData] = useState<CreateUserStoryDTO>({
    coupleName: "",
    story: "",
    marriageDate: "",
    image: "",
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

  const resetForm = () => {
    setFormData({
      coupleName: "",
      story: "",
      marriageDate: "",
      image: "",
    });
  };

  const populateForm = (story: UserStory) => {
    setFormData({
      coupleName: story.coupleName,
      story: story.story,
      marriageDate: story.marriageDate,
      image: story.image,
    });
  };

  return {
    formData,
    handleInputChange,
    handleDateSelect,
    resetForm,
    populateForm,
  };
}; 