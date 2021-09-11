import {CreateUserUseCase} from "./createUserUseCase";
import {UsersRepository} from "../../infra/typeorm/repositories/UsersRepository";
import {BCryptHashProvider} from "../../providers/HashProvider/implementations/BCryptHashProvider";
import {Test} from "@nestjs/testing";

describe('CreateUserUseCase', () => {
    let createUserUseCase: CreateUserUseCase;
    let usersRepository: UsersRepository;
    let hashProvider: BCryptHashProvider;

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            providers: [
                UsersRepository,
                BCryptHashProvider,
                CreateUserUseCase
            ]
        }).compile();

        usersRepository = moduleRef.get<UsersRepository>(UsersRepository);
        hashProvider = moduleRef.get<BCryptHashProvider>(BCryptHashProvider);
        createUserUseCase = moduleRef.get<CreateUserUseCase>(CreateUserUseCase);
    });

    it('should be able create a new user', async () => {
        await jest.spyOn(usersRepository, 'create').mockImplementation();

        await expect(await createUserUseCase.execute({
            name: 'John Due',
            email: 'john@gmail.com'
        })).toHaveProperty('id');
    })
})