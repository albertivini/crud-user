import { Request, Response } from "express";
import { UpdateUserService } from "../services/UpdateUserService";



export class UpdateUserController {

    async handle (req: Request, res: Response) {
        try {
            const { name, username, password } = req.body

            const { id } = req.params
    
            const updateUserService = new UpdateUserService()
    
            await updateUserService.execute({ id, name, username, password })
    
            return res.status(200).json({
                success: true,
                message: "Usuário atualizado com sucesso."
            })
        } catch (err) {
            return res.status(400).json({
                success: false,
                message: err.message
            })
        }
    }
}