import { supabase } from "../supabase";

export type UserLogInPayload = {
  email: string;
  password: string;
};

const userLogIn = async ({ email, password }: UserLogInPayload) => {
  const { error, data } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message || "Login failed.");
  }

  return data;
};

export { userLogIn };