import {IUsersRepository} from "../IUsersRepository";
import {ICreateUserDTO} from "../../dtos/ICreateUserDTO";
import {User} from "../../infra/typeorm/entities/User";

export class FakeUsersRepository implements IUsersRepository {
    private users: User[] = [];

    public async create({name, email, password}: ICreateUserDTO): Promise<User> {
        const user = new User();

        Object.assign(user, {
            name,
            email,
            password,
            redefinition_password: true
        })

        this.users.push(user);

        return user;
    }

    public async findByEmail(email: string): Promise<User> {
        return this.users.find(user => user.email === email);
    }

    public async save(data: User): Promise<User> {
        const user_index = this.users.findIndex(user => user.id === data.id);
        this.users[user_index] = data;
        return data;
    }

}