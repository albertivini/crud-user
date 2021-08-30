import { hash } from "bcryptjs"
import User from "../schemas/User";

interface IRequest {
    name: string
    username: string
    password: string
}

export class CreateUserService {

    async execute({name, username, password}: IRequest) {

        if (!name) {
            throw new Error("Some field is empty.")
        }

        if (!username) {
            throw new Error("Some field is empty.")
        }

        if (!password) {
            throw new Error("Some field is empty.")
        }

        const findUsername = await User.find({
            username
        })

        if (findUsername.length !== 0) {
            throw new Error("Username already exists.")
        }

        const passwordHash = await hash(password, 10)

        await User.create({
            name: name,
            username: username,
            password: passwordHash,
            lastAccess: new Date()
        })

        return

    }
}