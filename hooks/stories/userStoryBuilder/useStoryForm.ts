import { useState } from "react";
import { format } from "date-fns";
import { Story } from "@/types/stories";

type StoryFormData = Pick<Story, 'partner_name' | 'content' | 'marriage_date' | 'images'>;

export const useStoryForm = () => {
  const [formData, setFormData] = useState<StoryFormData>({
    partner_name: "",
    content: "",
    marriage_date: new Date(),
    images: [""],
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
        marriage_date: date,
      }));
    }
  };

  const resetForm = () => {
    setFormData({
      partner_name: "",
      content: "",
      marriage_date: new Date(),
      images: [""],
    });
  };

  const populateForm = (story: Story) => {
    setFormData({
      partner_name: story.partner_name,
      content: story.content,
      marriage_date: story.marriage_date,
      images: story.images,
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