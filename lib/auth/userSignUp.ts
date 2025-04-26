import GenderEnum from "@/constants/genderEnum";
import { supabase } from "../supabase";
import { UserMetaDataType } from "@/types/user";

export type UserSignUpPayload = {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    gender: GenderEnum;
    dob: Date
}

const userSignUp = async (payload: UserSignUpPayload) => {
    try {
        const { firstName, lastName, gender, dob, email, password, phoneNumber } = payload;

        const authRes = await supabase.auth.signUp({
            email,
            password,
            phone: phoneNumber,
            options: {
                emailRedirectTo: "/",
                data: { // Extra meta data you might need with the user
                    gender,
                    firstName,
                    lastName,
                    phoneNumber,
                    dob,
                    email
                }
            }
        });
        
        if (!authRes || !authRes?.data?.user?.id) {
            throw new Error("LIB::AUTH::SIGNUP");
        }

        const userProfileData: UserMetaDataType = {
            id: authRes.data?.user.id,
            gender,
            firstName,
            lastName,
            email,
            dob,
            password
        }
        
        // Attempt at saving profile data as well
        // If something goes wrong it can be saved later as well
        await supabase
            .from('user_profiles')
            .insert([
                { 
                    auth_id: userProfileData.id,
                    gender: userProfileData.gender,
                    first_name: userProfileData.firstName,
                    last_name: userProfileData.lastName,
                    email: userProfileData.email,
                    dob: userProfileData.dob,
                    password: userProfileData.password
                }
            ]);
    } catch (err: any) {
        throw new Error("LIB::AUTH::SIGNUP -> \n", err);
    }
};

export { userSignUp };