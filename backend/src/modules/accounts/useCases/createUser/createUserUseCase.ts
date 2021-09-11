import {ICreateUserDTO} from "../../dtos/ICreateUserDTO";
import {IUsersRepository} from "../../repositories/IUsersRepository";
import {AppResponse} from "../../../../shared/responses/AppResponse";
import {IHashProvider} from "../../providers/HashProvider/models/IHashProvider";

export class CreateUserUseCase {
    constructor(
        private readonly usersRepository: IUsersRepository,
        private readonly hashProvider: IHashProvider
    ) {}

    public async execute({ name, email }: ICreateUserDTO): Promise<AppResponse> {
        const user_already_exists = await this.usersRepository.findByEmail(email);

        if(user_already_exists)
            return new AppResponse(400, 'Usuário já existe com esse email', null);

        const password_random = Math.random().toString(36).substring(6);

        const password = await this.hashProvider.generateHash(password_random);

        const user = await this.usersRepository.create({
            name,
            email,
            password
        });

        return new AppResponse(201, 'Usuário criado com sucesso', user);
    }
}