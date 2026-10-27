import z from "zod";

export const userSchema = z.object({
    username: z.string().nonempty("le pseudo est requis")
                        .min(2, "minimum 2 character")
                        .max(10, "maximum 10 charactere"),
    age: z.number().min(18, "l'age doit etre superieure a 18")
});

export type userSchemaType = z.infer<typeof userSchema>