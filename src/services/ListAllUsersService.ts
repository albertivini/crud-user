import User from "../schemas/User";


export class ListAllUsersService {

    async execute() {

        const data = await User.find().lean()        
        
        return data
    }
}