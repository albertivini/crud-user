import { Request, Response } from "express";
import { DeleteUserService } from "../services/DeleteUserService";



export class DeleteUserController {

    async handle (req: Request, res: Response) {

        try {
            const { id } = req.params

            const deleteUserService = new DeleteUserService()
    
            await deleteUserService.execute(id)
    
            return res.status(200).json({
                success: true,
                message: "Usuário deletado com sucesso."
            })
        } catch (err) {
            return res.status(404).json({
                success: false,
                message: err.message
            })
        }
    }
}