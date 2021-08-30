import { Request, Response } from "express";
import { ListAllUsersService } from "../services/ListAllUsersService";



export class ListAllUsersController {

    async handle (req: Request, res: Response) {

        const listAllUsersService = new ListAllUsersService()

        const users = await listAllUsersService.execute()

        return res.status(200).json({users})
    }
}