import User from "../schemas/User"
import { hash } from "bcryptjs"
interface IRequest {
    id: string
    name: string,
    username: string,
    password: string
}

export class UpdateUserService {

    async execute({ id, name, username, password }: IRequest) {

        if (!name) {
            throw new Error("Some field is empty.")
        }

        if (!username) {
            throw new Error("Some field is empty.")
        }

        if (!password) {
            throw new Error("Some field is empty.")
        }

        const passwordHash = await hash(password, 10)

        const user = await User.findById(id)

        if (username === user.username) {

            await User.updateOne({_id: id}, {
                name: name,
                password: passwordHash,
                lastAccess: new Date()
            })

            return 

        } else {

            const findUsername = await User.find({
                username
            })
    
            if (findUsername.length !== 0) {
                throw new Error("Username already exists.")
            }

            await User.updateOne({_id: id}, {
                name: name,
                username: username,
                password: passwordHash,
                lastAccess: new Date()
            })

            return
        }
    }
}