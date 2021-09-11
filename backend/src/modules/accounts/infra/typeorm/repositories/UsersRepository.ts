import {ICreateUserDTO} from "../../../dtos/ICreateUserDTO";
import {User} from "../entities/User";
import {IUsersRepository} from "../../../repositories/IUsersRepository";
import {EntityManager, Repository} from "typeorm";

export class UsersRepository implements IUsersRepository{
    private ormRepository: Repository<User>;

    constructor(manager: EntityManager) {
        this.ormRepository = manager.getRepository(User);
    }

    public async create({name, email, password}: ICreateUserDTO): Promise<User> {
        const user = this.ormRepository.create({
            name,
            email,
            password,
            redefinition_password: true
        })
        return await this.ormRepository.save(user);
    }

    public async findByEmail(email: string): Promise<User> {
        return this.ormRepository.findOne({email});
    }

    public async save(user: User): Promise<User> {
        return await this.ormRepository.save(user);
    }

}