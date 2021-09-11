import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "./infra/typeorm/entities/User";
import {CreateUserUseCase} from "./useCases/createUser/createUserUseCase";
import {UsersRepository} from "./infra/typeorm/repositories/UsersRepository";
import {BCryptHashProvider} from "./providers/HashProvider/implementations/BCryptHashProvider";
import {UsersRoutes} from "./infra/http/routes/users.routes";
import {CreateUserController} from "./useCases/createUser/createUserController";

@Module({
    imports: [
        TypeOrmModule.forFeature([User])
    ],
    controllers: [UsersRoutes],
    providers: [
        CreateUserUseCase,
        CreateUserController,
        {
            provide: 'UsersRepository',
            inject: [UsersRepository],
            useClass: UsersRepository
        },
        {
            provide: 'HashProvider',
            inject: [BCryptHashProvider],
            useClass: BCryptHashProvider
        }
    ],
    exports: []
})
export class AccountsModule {
    
}