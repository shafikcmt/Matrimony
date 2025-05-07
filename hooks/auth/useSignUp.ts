import { useEffect, useState } from "react";
import { userSignUp } from "@/lib/auth/userSignUp";
import { UserSignUpPayload } from "@/lib/auth/userSignUp";
import { Gender } from "@/types/enums";

const useSignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [gender, setGender] = useState<Gender>(Gender.MALE);
    const [dateOfBirth, setDateOfBirth] = useState<Date | null>(null);

    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        validateInputs();
    }, [
        email,
        password,
        lastName,
        firstName,
        phoneNumber,
        dateOfBirth
    ])

    const validateInputs = () => {
        if (!email || !password || !firstName || !lastName || !phoneNumber || !dateOfBirth) {
            setError("All fields are required.");
            return false;
        }
        if (password.length < 6) {
            setError("Password must be at least 6 characters long.");
            return false;
        }
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            setError("Invalid email address.");
            return false;
        }
        if (((new Date()).getFullYear() - dateOfBirth.getFullYear()) < 18) {
            setError("Platform only allows users over 18!");
            return false;
        }
        setError("");
        return true;
    };

    const handleSubmit = async () => {
        setError(null);
        setSuccess(false);

        if (!validateInputs()) return;

        try {
            setIsLoading(true);
            const payload: UserSignUpPayload = {
                email,
                password,
                firstName,
                lastName,
                phoneNumber,
                gender,
                dateOfBirth: dateOfBirth!,
            };
            await userSignUp(payload);
            setSuccess(true);
        } catch (err: any) {
            console.error(err);
            setError(err.message || "Something went wrong during signup.");
        } finally {
            setIsLoading(false);
        }
    };

    return {
        email,
        setEmail,
        password,
        setPassword,
        firstName,
        setFirstName,
        lastName,
        setLastName,
        phoneNumber,
        setPhoneNumber,
        gender,
        setGender,
        dateOfBirth,
        setDateOfBirth,
        error,
        isLoading,
        success,
        handleSubmit,
    };
};

export { useSignUp };