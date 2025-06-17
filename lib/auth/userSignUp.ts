import { Gender } from "@/types/enums";
import { supabase } from "../supabase";

export type UserSignUpPayload = {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    gender: Gender;
    dateOfBirth: Date
}

const userSignUp = async (payload: UserSignUpPayload) => {
    try {
        const { firstName, lastName, gender, dateOfBirth, email, password, phoneNumber } = payload;
        console.log("Ran server function!");
        await supabase.auth.signUp({
            email,
            password,
            phone: phoneNumber,
            options: {
                emailRedirectTo: "http://localhost:3000/profile/build",
                data: { // Extra meta data you might need with the user
                    gender,
                    firstName,
                    lastName,
                    phoneNumber,
                    dateOfBirth,
                    email
                }
            }
        });
    } catch (err: any) {
        throw new Error("LIB::AUTH::SIGNUP -> \n", err);
    }
};

export { userSignUp };