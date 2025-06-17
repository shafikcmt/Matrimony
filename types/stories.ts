export type StoryType = Story;

export interface Story {
  story_id: string;            
  user_id: number;               
  partner_name?: string;        
  content: string;
  images: string[];
  marriage_date: Date;
  created_at: Date; 
  updated_at: Date;
  likes: number;
  comments: number;
  shares: number;
}
