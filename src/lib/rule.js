import { z } from "zod";

export const RegisterFormSchema = z.object({
    email: z.string().email({message: "Please enter a valid email"}).trim(),

    password: z.string()
                .min(1, {message: "Not be empty"})
                .min(5, { message: "Be at least 5 characters long" })
                .trim(),
    confirmPassword: z.string().trim(),

}).superRefine((val, ctx) => {

    if (val.password !== val.confirmPassword){
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Password fields do not match.",
            path: ["confirmPassword"],
        })
    }
});