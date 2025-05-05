import { supabase } from '../supabase';

export const uploadImage = async (filePath: string, base64Image: string) => {
  const { data, error } = await supabase.storage
    .from('user-images')
    .upload(filePath, Buffer.from(base64Image, 'base64'), {
      contentType: 'image/jpeg',
      upsert: true,
    });

  if (error) throw error;

  const { data: publicUrlData } = supabase.storage
    .from('user-images')
    .getPublicUrl(filePath);

  return publicUrlData.publicUrl;
};