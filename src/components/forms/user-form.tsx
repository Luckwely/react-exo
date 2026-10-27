import { useForm, type SubmitHandler } from "react-hook-form";
import { userSchema, type userSchemaType } from "../../schema/user.schema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function UserForm() {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<userSchemaType>({
        resolver: zodResolver(userSchema),
        defaultValues: {
            username: '',
            age: 0
        }
    });

    const submit: SubmitHandler<userSchemaType> = (data) => {
        console.log(data);
    }

    return <div className="bg-white p-2">
        <h2>New user</h2>
        <form onSubmit={handleSubmit(submit)}>
            <input 
                {... register("username")}
                type="text" 
                className="input"
                placeholder="username"/>
            {errors.username && <p role="alert" className="text-red-500">{errors.username.message}</p>}
             <input 
                {... register("age")}
                type="number" 
                className="input"
                placeholder="age"/>
            {errors.age && <p role="alert" className="text-red-500">{errors.age.message}</p>}
            <button type="submit">Submit</button>
        </form>
    </div>
}