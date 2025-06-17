import { useState } from "react";
import { userLogIn, UserLogInPayload } from "@/lib/auth/userLogIn";
import { useRouter } from "next/navigation";
import useAuthStore from "@/state/authState";
import { Gender } from "@/types/enums";

const useLogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const setAuthStore = useAuthStore(store => store.setAuthState);

  const router = useRouter();

  const handleSubmit = async () => {
    setError(null);
    setSuccess(false);

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      setIsLoading(true);
      const payload: UserLogInPayload = { email, password };
      const res = await userLogIn(payload);
      setAuthStore({
        authId: res?.session?.user?.id || "",
        role: res?.session?.user?.aud || "",
        dateOfBirth: res?.session?.user?.user_metadata?.dateOfBirth || "",
        email: res?.session?.user?.user_metadata?.email || "",
        firstName: res?.session?.user?.user_metadata?.firstName || "",
        lastName: res?.session?.user?.user_metadata?.lastName || "",
        gender: res?.session?.user?.user_metadata?.gender || "male" as Gender,
        phoneNumber: res?.session?.user?.user_metadata?.phoneNumber || "",
        autoAuthRefresh: {
          token: res?.session?.access_token || "",
          refreshToken: res?.session?.refresh_token || ""
        }
      })
      router.push("/");
      setSuccess(true);
    } catch (err: any) {
      setError(err.message || "Login failed.");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    error,
    isLoading,
    success,
    handleSubmit,
  };
};

export { useLogIn };