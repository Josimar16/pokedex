import {ICreateUserDTO} from "../dtos/ICreateUserDTO";
import {User} from "../infra/typeorm/entities/User";

export interface IUsersRepository {
    create({name, email, password}: ICreateUserDTO): Promise<User>;
    findByEmail(email: string): Promise<User>;
    save(user: User): Promise<User>;
}