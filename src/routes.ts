import { Router } from "express"
import { CreateUserController } from "./controllers/CreateUserController"
import { DeleteUserController } from "./controllers/DeleteUserController"
import { ListAllUsersController } from "./controllers/ListAllUsersController"
import { SearchUserController } from "./controllers/SearchUserController"
import { UpdateUserController } from "./controllers/UpdateUserController"

const routes = Router()

const createUserController = new CreateUserController()
const searchUserController = new SearchUserController()
const updateUserController = new UpdateUserController()
const deleteUserController = new DeleteUserController()
const listAllUsersController = new ListAllUsersController()

routes.post("/user", createUserController.handle)
routes.get("/user/:id", searchUserController.handle)
routes.put("/user/:id", updateUserController.handle)
routes.delete("/user/:id", deleteUserController.handle)
routes.get("/users", listAllUsersController.handle)


export { routes }