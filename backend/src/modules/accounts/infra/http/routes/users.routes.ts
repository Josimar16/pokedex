import {Controller, Post, Req} from "@nestjs/common";
import {AppResponse} from "../../../../../shared/responses/AppResponse";
import {CreateUserController} from "../../../useCases/createUser/createUserController";

@Controller('users')
export class UsersRoutes {
    constructor(
       private readonly createUserController: CreateUserController
    ) {}

    @Post()
    public async create(@Req() request): Promise<AppResponse> {
        return this.createUserController.handle(request);
    }
}