import {CreateUserUseCase} from "./createUserUseCase";
import {FakeUsersRepository} from "../../repositories/fakes/FakeUsersRepository";
import {FakeHashProvider} from "../../providers/HashProvider/fakes/FakeHashProvider";

let createUserUseCase: CreateUserUseCase;
let usersRepository: FakeUsersRepository;
let hashProvider: FakeHashProvider;

describe('CreateUserUseCase', () => {
    beforeEach(async () => {
        usersRepository = new FakeUsersRepository();
        hashProvider = new FakeHashProvider();
        createUserUseCase = new CreateUserUseCase(
            usersRepository,
            hashProvider
        );
    });

    it('should be able create a new user', async () => {
        const response = await createUserUseCase.execute({
            name: 'John Due',
            email: 'john@gmail.com'
        })
        await expect(response.data).toHaveProperty('id');
        await expect(response.data.email).toEqual('john@gmail.com');
        await expect(response.cod).toEqual(201);
    });

    it('should not be able create a new user, because email already exists', async () => {
        await usersRepository.create({
            name: 'John Due',
            email: 'john@gmail.com',
            password: '123456'
        });
        const response = await createUserUseCase.execute({
            name: 'John Due',
            email: 'john@gmail.com'
        });
        await expect(response.cod).toEqual(400);
        await expect(response.message).toEqual('Usuário já existe com esse email');
    });
})