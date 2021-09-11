import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "./infra/typeorm/entities/User";
import {CreateUserUseCase} from "./useCases/createUser/createUserUseCase";
import {UsersRepository} from "./infra/typeorm/repositories/UsersRepository";
import {BCryptHashProvider} from "./providers/HashProvider/implementations/BCryptHashProvider";

@Module({
    imports: [
        TypeOrmModule.forFeature([User])
    ],
    providers: [
        CreateUserUseCase,
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