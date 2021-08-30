import { Request, Response  } from "express";
import { CreateUserService } from "../services/CreateUserService";


export class CreateUserController {

    async handle (req: Request, res: Response) {
        try {
            const { name, username, password } = req.body

            const createUserService = new CreateUserService()
    
            await createUserService.execute({ name, username, password })
    
            return res.status(201).json({
                success: true,
                message: "User Created."
            })
        } catch (err) {
            return res.status(400).json({
                success: false,
                message: err.message
            })
        }
    }
}