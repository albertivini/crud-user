import { Request, Response } from "express";
import { SearchUserService } from "../services/SearchUserService";


export class SearchUserController {

    async handle (req: Request, res: Response) {
        try {
            const { id } = req.params

            const searchUserService = new SearchUserService()
    
            const user = await searchUserService.execute(id)
    
            return res.status(200).json({
                success: true,
                message: "Usuário encontrado.",
                user
            })
        } catch (err) {
            return res.status(404).json({
                success: false,
                message: err.message
            })
        }


    }
}