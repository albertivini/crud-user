import User from "../schemas/User";

export class DeleteUserService {

    async execute(id: string) {

        const user = await User.findById(id)

        if (!user) {
            throw new Error("User not found.")
        }

        await User.deleteOne({_id: id})

        return 
    }
}